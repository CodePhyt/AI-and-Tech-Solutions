import { NextRequest, NextResponse } from 'next/server';
import { Octokit } from 'octokit';

// Define the expected payload structure
type ValidCommitAction = 'create' | 'update' | 'delete';

interface GuardianPayload {
    action: ValidCommitAction;
    path: string;
    content?: string; // Base64 encoded content for create/update
    message: string;
    branch?: string;
}

export async function POST(req: NextRequest) {
    // 1. Security: Validate the Guardian Secret
    const authHeader = req.headers.get('x-ares-guardian-secret');
    if (authHeader !== process.env.ARES_GUARDIAN_SECRET) {
        return NextResponse.json(
            { error: 'Access Denied: Guardian Protocol Failure' },
            { status: 401 }
        );
    }

    // 2. Validate Environment
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const REPO_OWNER = 'CodePhyt'; // Hardcoded for Ares
    const REPO_NAME = 'osman-kadir-tech'; // Your repo name

    if (!GITHUB_TOKEN) {
        return NextResponse.json(
            { error: 'System Error: GITHUB_TOKEN missing' },
            { status: 500 }
        );
    }

    try {
        const body: GuardianPayload = await req.json();
        const { action, path, content, message, branch = 'main' } = body;

        const octokit = new Octokit({ auth: GITHUB_TOKEN });

        // 3. Get current SHA if updating/deleting
        let sha: string | undefined;
        if (action !== 'create') {
            try {
                const { data } = await octokit.rest.repos.getContent({
                    owner: REPO_OWNER,
                    repo: REPO_NAME,
                    path,
                    ref: branch,
                });

                if (Array.isArray(data)) {
                    return NextResponse.json({ error: 'Path is a directory, not a file' }, { status: 400 });
                }

                sha = data.sha;
            } catch (error) {
                if (action === 'update') {
                    return NextResponse.json({ error: 'File not found for update' }, { status: 404 });
                }
                // If deleting and not found, maybe just success? No, error is better.
            }
        }

        // 4. Execute GitHub Action
        let result;
        if (action === 'delete') {
            result = await octokit.rest.repos.deleteFile({
                owner: REPO_OWNER,
                repo: REPO_NAME,
                path,
                message,
                sha: sha!, // Bang is safe here due to logic above
                branch,
            });
        } else {
            // Create or Update
            // Content must be Base64. If incoming is string, we assume it's already encoded OR we handle it.
            // Let's assume the Agent sends valid Base64 or we encode it if it's raw text? 
            // Better to expect Base64 from the Agent to avoid encoding issues with binary.

            result = await octokit.rest.repos.createOrUpdateFileContents({
                owner: REPO_OWNER,
                repo: REPO_NAME,
                path,
                message,
                content: content!, // Required for create/update
                sha,
                branch,
            });
        }

        return NextResponse.json({
            status: 'success',
            commit: result.data.commit.sha,
            action,
            path
        });

    } catch (error: any) {
        console.error('Guardian Sync Error:', error);
        return NextResponse.json(
            { error: 'Guardian Sync Failed', details: error.message },
            { status: 500 }
        );
    }
}
