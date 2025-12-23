const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Brand colors
const colors = {
  primary: '#334948',      // Deep Teal
  accent: '#D4A574',       // Gold
  background: '#FEFEFE',   // Near white
  text: '#334948',         // Deep Teal
};

async function generateOGImage() {
  try {
    const logoPath = path.join(__dirname, '..', 'public', 'images', 'branding', 'website-logo.png');
    const outputPath = path.join(__dirname, '..', 'public', 'og.png');

    // Check if logo exists
    let logoBuffer = null;
    if (fs.existsSync(logoPath)) {
      logoBuffer = await sharp(logoPath)
        .resize(250, null, { fit: 'inside', withoutEnlargement: true })
        .toBuffer();
    }

    // Create SVG with text (using system fonts for reliability)
    const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .serif { font-family: 'Libre Baskerville', Georgia, 'Times New Roman', serif; }
      .sans { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
    </style>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="${colors.background}"/>

  <!-- Subtle decorative gradient -->
  <defs>
    <radialGradient id="grad" cx="85%" cy="50%">
      <stop offset="0%" style="stop-color:${colors.primary};stop-opacity:0.03" />
      <stop offset="100%" style="stop-color:${colors.primary};stop-opacity:0" />
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#grad)"/>

  <!-- Content container -->
  <g transform="translate(80, 100)">
    ${logoBuffer ? `<image href="data:image/png;base64,${logoBuffer.toString('base64')}" x="0" y="0" height="60" preserveAspectRatio="xMidYMid meet"/>` : ''}

    <!-- Practice Name -->
    <text x="0" y="${logoBuffer ? '120' : '80'}" class="serif" font-size="64" font-weight="700" fill="${colors.text}">
      Steady Path Counseling
    </text>

    <!-- Accent line -->
    <line x1="0" y1="${logoBuffer ? '150' : '110'}" x2="60" y2="${logoBuffer ? '150' : '110'}" stroke="${colors.accent}" stroke-width="4"/>

    <!-- Tagline -->
    <text x="0" y="${logoBuffer ? '200' : '160'}" class="sans" font-size="28" font-weight="400" fill="${colors.text}" opacity="0.85">
      Therapy &amp; Care Navigation
    </text>

    <!-- Location -->
    <text x="0" y="${logoBuffer ? '240' : '200'}" class="sans" font-size="24" font-weight="500" fill="${colors.text}">
      Bloomington, Indiana
    </text>

    <!-- Credentials with accent line above -->
    <line x1="0" y1="${logoBuffer ? '280' : '240'}" x2="80" y2="${logoBuffer ? '280' : '240'}" stroke="${colors.accent}" stroke-width="2"/>
    <text x="0" y="${logoBuffer ? '310' : '270'}" class="sans" font-size="20" font-weight="400" fill="${colors.accent}">
      MA, LSW
    </text>
  </g>
</svg>
`;

    // Convert SVG to PNG using sharp
    await sharp(Buffer.from(svg))
      .resize(1200, 630)
      .png()
      .toFile(outputPath);

    console.log('✅ OG image generated successfully at:', outputPath);
    console.log('   Dimensions: 1200x630px');
    console.log('   Format: PNG');
    console.log('   Logo: ' + (logoBuffer ? 'Included' : 'Placeholder used'));
  } catch (error) {
    console.error('❌ Error generating OG image:', error);
    process.exit(1);
  }
}

generateOGImage();

