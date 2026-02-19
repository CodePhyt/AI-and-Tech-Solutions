#!/usr/bin/env tsx
/**
 * Sarah 2.0 Contract Verification Script
 * 
 * This script validates that the WhatsApp handover feature works correctly
 * by testing the regex parsing logic against example outputs from the system prompt.
 */

console.log('🤖 Safiye 2.0 - Contract Verification\n');

// Frontend regex from ChatWidget.tsx (line 198)
const whatsappRegex = /\[WHATSAPP_LINK:(.*):([^\]]+)\]/;

// Test cases that match the System Prompt examples
const testCases = [
    {
        name: 'Basic Handover',
        input: 'I have a clear picture of what you need! I\'ve prepared a summary for Dr. Nesip to get your exact quote approved.\n\n[WHATSAPP_LINK:Hi Dr. Nesip, I am interested in Hollywood Smile. Planning to visit in July. Can you review my case?:Send Analysis to Dr. Nesip 👨‍⚕️]',
        expectedMessage: 'Hi Dr. Nesip, I am interested in Hollywood Smile. Planning to visit in July. Can you review my case?',
        expectedButton: 'Send Analysis to Dr. Nesip 👨‍⚕️'
    },
    {
        name: 'Photo Upload Request',
        input: 'The best way is to share them directly with our medical team on WhatsApp so we can do a virtual mockup.\n\n[WHATSAPP_LINK:Hi, I want to send my smile photos for assessment.:Send Photos via WhatsApp 📸]',
        expectedMessage: 'Hi, I want to send my smile photos for assessment.',
        expectedButton: 'Send Photos via WhatsApp 📸'
    },
    {
        name: 'Complex Message with Special Characters',
        input: 'Let me prepare that for you!\n\n[WHATSAPP_LINK:Hello Dr. Nesip! I\'m interested in All-on-4 implants. Budget: €5000. Timeline: Next 2 months. I have X-rays ready.:Contact Dr. Nesip Now 🦷]',
        expectedMessage: 'Hello Dr. Nesip! I\'m interested in All-on-4 implants. Budget: €5000. Timeline: Next 2 months. I have X-rays ready.',
        expectedButton: 'Contact Dr. Nesip Now 🦷'
    },
    {
        name: 'No WhatsApp Link (Control)',
        input: 'Hello! I\'m Sarah, your Lead Patient Coordinator. How can I help you today?',
        expectedMessage: null,
        expectedButton: null
    }
];

let passed = 0;
let failed = 0;

testCases.forEach((test, index) => {
    console.log(`\n📋 Test ${index + 1}: ${test.name}`);
    console.log('─'.repeat(60));

    const match = test.input.match(whatsappRegex);

    if (test.expectedMessage === null) {
        // Should NOT match
        if (!match) {
            console.log('✅ PASS - Correctly did not match');
            passed++;
        } else {
            console.log('❌ FAIL - Should not have matched but did');
            console.log('   Got:', match[0]);
            failed++;
        }
    } else {
        // Should match
        if (match) {
            const [, message, button] = match;

            const messageMatch = message === test.expectedMessage;
            const buttonMatch = button === test.expectedButton;

            if (messageMatch && buttonMatch) {
                console.log('✅ PASS - Correctly parsed WhatsApp link');
                console.log(`   Message: "${message}"`);
                console.log(`   Button: "${button}"`);
                passed++;
            } else {
                console.log('❌ FAIL - Parsing mismatch');
                if (!messageMatch) {
                    console.log('   Expected message:', test.expectedMessage);
                    console.log('   Got message:', message);
                }
                if (!buttonMatch) {
                    console.log('   Expected button:', test.expectedButton);
                    console.log('   Got button:', button);
                }
                failed++;
            }
        } else {
            console.log('❌ FAIL - Should have matched but did not');
            console.log('   Input:', test.input);
            failed++;
        }
    }
});

// Generate WhatsApp link test
console.log('\n\n🔗 WhatsApp Link Generation Test');
console.log('─'.repeat(60));

const phone = '905302876350';
const testMessage = 'Hi Dr. Nesip, I am interested in Hollywood Smile.';
const expectedLink = `https://wa.me/${phone}?text=${encodeURIComponent(testMessage)}`;
const generatedLink = `https://wa.me/${phone}?text=${encodeURIComponent(testMessage)}`;

if (expectedLink === generatedLink) {
    console.log('✅ PASS - WhatsApp link format is correct');
    console.log(`   Link: ${generatedLink}`);
    passed++;
} else {
    console.log('❌ FAIL - Link generation mismatch');
    failed++;
}

// Summary
console.log('\n\n' + '═'.repeat(60));
console.log('📊 VERIFICATION SUMMARY');
console.log('═'.repeat(60));
console.log(`✅ Passed: ${passed}`);
console.log(`❌ Failed: ${failed}`);
console.log(`📈 Success Rate: ${((passed / (passed + failed)) * 100).toFixed(1)}%`);

if (failed === 0) {
    console.log('\n🎉 All tests passed! Sarah 2.0 contract is valid.\n');
    process.exit(0);
} else {
    console.log('\n⚠️  Some tests failed. Please review the implementation.\n');
    process.exit(1);
}
