import fs from 'fs';
import path from 'path';

console.log('=== Timber & Terra Static Site Build & Validation ===');

const requiredFiles = [
  'index.html',
  'home-2.html',
  'about.html',
  'services.html',
  'gallery.html',
  'pricing.html',
  'blog.html',
  'contact.html',
  'service-architectural-stairs-railings.html',
  'service-composite-decking.html',
  'service-custom-deck-building.html',
  'service-deck-maintenance.html',
  'service-deck-renovation-restoration.html',
  'service-details.html',
  'service-outdoor-living-spaces.html',
  'service-pergola-design-installation.html',
  'service-timber-decking.html',
  'blog-bioclimatic-pergola.html',
  'blog-coastal-wui-mandates.html',
  'blog-details.html',
  'blog-glass-balustrades.html',
  'blog-hillside-cantilevers.html',
  'blog-ipe-vs-cumaru.html',
  'blog-lidar-scanning.html',
  'blog-open-air-kitchen.html',
  'manifest.json',
  'vercel.json'
];

let errors = 0;
for (const file of requiredFiles) {
  if (fs.existsSync(file)) {
    const stats = fs.statSync(file);
    console.log(`  [OK] ${file} (${stats.size} bytes)`);
  } else {
    console.error(`  [MISSING] ${file}`);
    errors++;
  }
}

if (errors > 0) {
  console.error(`Build failed: ${errors} required files missing.`);
  process.exit(1);
} else {
  console.log(`Build successful: all ${requiredFiles.length} core files verified and ready for deployment.`);
}
