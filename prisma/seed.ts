import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Clear existing data (order matters for foreign key constraints)
  await prisma.message.deleteMany();
  await prisma.chatSession.deleteMany();
  await prisma.lead.deleteMany();
  await prisma.blogPost.deleteMany();

  // Seed Blog Posts
  const blogPosts = await prisma.blogPost.createMany({
    data: [
      {
        slug: 'ai-automation-small-business',
        title: 'How AI Automation Can 10x Your Small Business',
        excerpt: 'Discover practical AI automation strategies that deliver measurable ROI for small and medium businesses.',
        content: '## The AI Revolution for SMBs\n\nArtificial Intelligence is no longer exclusive to tech giants...',
        category: 'ai-software',
        imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800'
      },
      {
        slug: 'smart-home-2024-guide',
        title: 'Complete Smart Home Setup Guide for 2024',
        excerpt: 'Everything you need to know about building an intelligent, interconnected home ecosystem.',
        content: '## Matter Changes Everything\n\nThe Matter protocol has unified smart home devices...',
        category: 'smart-home',
        imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800'
      },
      {
        slug: 'cross-border-ecommerce',
        title: 'Cross-Border E-Commerce: Technical Requirements',
        excerpt: 'Navigate the complexities of international trade with the right technology infrastructure.',
        content: '## Scaling Beyond Borders\n\nExpanding your e-commerce platform internationally requires...',
        category: 'global-trade',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800'
      },
      {
        slug: 'digital-transformation-roadmap',
        title: 'Building Your Digital Transformation Roadmap',
        excerpt: 'A strategic framework for modernizing legacy systems without disrupting operations.',
        content: '## Why Digital Transformation Fails\n\nMost digital transformation initiatives fail not from lack of technology...',
        category: 'consulting',
        imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800'
      },
      {
        slug: 'video-marketing-conversion',
        title: 'Video Marketing That Actually Converts',
        excerpt: 'Data-driven video production strategies that turn viewers into customers.',
        content: '## The First 3 Seconds\n\nYour video has 3 seconds to hook the viewer...',
        category: 'digital-media',
        imageUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800'
      },
      {
        slug: 'llm-rag-architecture',
        title: 'Building Production-Grade RAG Systems',
        excerpt: 'Deep dive into Retrieval-Augmented Generation architecture for enterprise LLM applications.',
        content: '## Beyond Basic Chatbots\n\nRetrieval-Augmented Generation (RAG) transforms LLMs...',
        category: 'ai-software',
        imageUrl: 'https://images.unsplash.com/photo-1676299081847-824916de030a?q=80&w=800'
      },
      {
        slug: 'iot-security-best-practices',
        title: 'IoT Security: Protecting Your Smart Home',
        excerpt: 'Essential security measures to safeguard your connected devices from cyber threats.',
        content: '## The IoT Attack Surface\n\nEvery connected device is a potential entry point...',
        category: 'smart-home',
        imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800'
      },
      {
        slug: 'supply-chain-optimization-ai',
        title: 'AI-Powered Supply Chain Optimization',
        excerpt: 'How machine learning is revolutionizing logistics and inventory management.',
        content: '## Predictive Inventory Management\n\nTraditional inventory systems react to demand...',
        category: 'global-trade',
        imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8a5b6?q=80&w=800'
      },
      {
        slug: 'podcast-production-workflow',
        title: 'Professional Podcast Production Workflow',
        excerpt: 'From recording to distribution: a complete technical guide to launching your podcast.',
        content: '## Audio Quality First\n\nYour content can be brilliant, but poor audio will lose listeners...',
        category: 'digital-media',
        imageUrl: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=800'
      }
    ]
  });

  console.log(`✅ Created ${blogPosts.count} blog posts`);

  // Seed sample leads
  const leads = await prisma.lead.createMany({
    data: [
      {
        name: 'Marcus Chen',
        email: 'marcus@example.com',
        service: 'ai-software',
        sentiment: 'HOT',
        source: 'contact_form',
        message: 'Looking for AI automation for our operations team.'
      },
      {
        name: 'Sarah Williams',
        email: 'sarah@example.com',
        service: 'smart-home',
        sentiment: 'HOT',
        source: 'assessment',
        message: 'Complete smart home setup for our new office.'
      }
    ]
  });

  console.log(`✅ Created ${leads.count} sample leads`);
  console.log('🎉 Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
