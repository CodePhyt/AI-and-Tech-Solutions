#!/usr/bin/env node

/**
 * DESIGN.md Constitution: Scroll Image Sequence Test Asset Generator
 * 
 * This script generates placeholder frames for testing ScrollImageSequence
 * before the actual 3D rendered frames are available.
 * 
 * Generates 100 test frames showing a dental implant "exploding" with:
 * - Frame 1-30: Intact implant
 * - Frame 31-60: Parts separating
 * - Frame 61-100: Fully exploded view
 */

/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

// Create output directory
const outputDir = path.join(process.cwd(), 'public', 'sequence', 'implant');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
  console.log(`✅ Created directory: ${outputDir}`);
}

// Generate SVG placeholder frames
const totalFrames = 100;

for (let i = 0; i < totalFrames; i++) {
  const frameNumber = String(i + 1).padStart(3, '0');
  const progress = i / (totalFrames - 1);

  // Calculate positions for "explosion" effect
  const crownY = 540 - (progress * 300); // Moves up
  const abutmentY = 540; // Stays center
  const screwY = 540 + (progress * 400); // Moves down

  const rotation = progress * 360;
  const opacity = Math.max(0.3, 1 - progress * 0.3);

  // Create SVG content
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
  <!-- DESIGN.md: Midnight Slate Background -->
  <rect width="1920" height="1080" fill="#020617"/>
  
  <!-- Dotted Grid (Tech-System Aesthetic) -->
  <defs>
    <pattern id="grid" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
      <circle cx="15" cy="15" r="1" fill="rgba(248, 250, 252, 0.05)"/>
    </pattern>
  </defs>
  <rect width="1920" height="1080" fill="url(#grid)"/>
  
  <!-- Connection Lines (visible during explosion) -->
  ${progress > 0.2 ? `
    <line x1="960" y1="${crownY + 60}" x2="960" y2="${abutmentY - 60}" 
          stroke="#00B8D4" stroke-width="2" opacity="${progress * 0.5}" stroke-dasharray="5,5"/>
    <line x1="960" y1="${abutmentY + 60}" x2="960" y2="${screwY - 60}" 
          stroke="#00B8D4" stroke-width="2" opacity="${progress * 0.5}" stroke-dasharray="5,5"/>
  ` : ''}
  
  <!-- Crown (Top Part) - Antalya Turquoise -->
  <g transform="translate(960, ${crownY}) rotate(${rotation * 0.5})">
    <ellipse cx="0" cy="-30" rx="100" ry="60" fill="#00B8D4" opacity="${opacity}"/>
    <rect x="-80" y="-30" width="160" height="60" fill="#00B8D4" opacity="${opacity}"/>
    <text x="0" y="0" text-anchor="middle" fill="#F8FAFC" font-size="20" font-weight="bold">CROWN</text>
  </g>
  
  <!-- Abutment (Middle Part) - Sand Gold -->
  <g transform="translate(960, ${abutmentY}) rotate(${rotation})">
    <rect x="-60" y="-40" width="120" height="80" fill="#FFD54F" opacity="${opacity}"/>
    <text x="0" y="5" text-anchor="middle" fill="#020617" font-size="18" font-weight="bold">ABUTMENT</text>
  </g>
  
  <!-- Titanium Screw (Bottom Part) - Glass White -->
  <g transform="translate(960, ${screwY}) rotate(${rotation * 1.5})">
    <polygon points="0,-80 30,-20 30,80 -30,80 -30,-20" fill="#F8FAFC" opacity="${opacity}"/>
    <circle cx="0" cy="-70" r="8" fill="#0277BD"/>
    <text x="0" y="20" text-anchor="middle" fill="#020617" font-size="16" font-weight="bold">TITANIUM</text>
    <text x="0" y="40" text-anchor="middle" fill="#020617" font-size="16" font-weight="bold">SCREW</text>
  </g>
  
  <!-- Frame Number Label -->
  <text x="100" y="100" fill="rgba(248, 250, 252, 0.3)" font-size="48" font-family="monospace">
    Frame ${frameNumber}/100
  </text>
  
  <!-- Progress Indicator -->
  <rect x="100" y="120" width="400" height="10" fill="rgba(255, 255, 255, 0.1)" rx="5"/>
  <rect x="100" y="120" width="${progress * 400}" height="10" fill="#00B8D4" rx="5"/>
</svg>`;

  // Save as SVG (can be converted to JPG later with ImageMagick or similar)
  const filename = path.join(outputDir, `${frameNumber}.svg`);
  fs.writeFileSync(filename, svg);

  if ((i + 1) % 20 === 0) {
    console.log(`Generated ${i + 1}/${totalFrames} frames...`);
  }
}

console.log(`\n✅ Successfully generated ${totalFrames} placeholder frames!`);
console.log(`📁 Location: ${outputDir}`);
console.log(`\n⚠️  NOTE: These are SVG placeholders. For production:`);
console.log(`   1. Render the 3D implant animation in Blender/Cinema 4D`);
console.log(`   2. Export as 100 JPG frames (1920x1080)`);
console.log(`   3. Replace SVG files with JPGs in the same directory`);
console.log(`   4. Update frameFormat prop to '.jpg' in ScrollImageSequence`);
