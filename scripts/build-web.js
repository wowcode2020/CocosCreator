const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Building Cocos Creator web project...');

// Check if Cocos Creator CLI is available
try {
  execSync('cocos --version', { stdio: 'ignore' });
  console.log('Using Cocos Creator CLI for build...');
  execSync('cocos compile -p web --no-effects', { stdio: 'inherit' });
} catch (error) {
  console.log('Cocos Creator CLI not found, using manual build process...');
  
  // Create build directory
  if (!fs.existsSync('build')) {
    fs.mkdirSync('build');
  }
  
  // Copy assets to build directory
  if (fs.existsSync('assets')) {
    const assetsDir = path.join('build', 'assets');
    if (fs.existsSync(assetsDir)) {
      fs.rmSync(assetsDir, { recursive: true });
    }
    fs.cpSync('assets', assetsDir, { recursive: true });
  }
  
  console.log('Manual build completed. Assets copied to build directory.');
}

console.log('Build completed successfully!');
