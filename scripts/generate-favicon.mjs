import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const projectRoot = join(__dirname, '..');
const publicDir = join(projectRoot, 'public');
const appDir = join(projectRoot, 'src', 'app');

async function generateFavicons() {
  console.log('🎨 Generating favicons...');

  // Read the SVG
  const svgPath = join(publicDir, 'favicon.svg');
  const svgBuffer = readFileSync(svgPath);

  // Generate PNG sizes
  const sizes = [16, 32, 48, 64, 128, 256];

  console.log('📐 Generating PNG files...');
  for (const size of sizes) {
    const pngBuffer = await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toBuffer();

    const filename = `favicon-${size}x${size}.png`;
    writeFileSync(join(publicDir, filename), pngBuffer);
    console.log(`  ✓ ${filename}`);
  }

  // Generate the main favicon.ico (32x32)
  console.log('🖼️  Generating favicon.ico...');
  const icoBuffer = await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toBuffer();

  writeFileSync(join(appDir, 'favicon.ico'), icoBuffer);
  console.log('  ✓ favicon.ico (saved to src/app/)');

  // Generate Apple touch icon (180x180)
  console.log('🍎 Generating Apple touch icon...');
  const appleTouchIcon = await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toBuffer();

  writeFileSync(join(publicDir, 'apple-touch-icon.png'), appleTouchIcon);
  console.log('  ✓ apple-touch-icon.png');

  console.log('✨ Favicon generation complete!');
}

await generateFavicons();
