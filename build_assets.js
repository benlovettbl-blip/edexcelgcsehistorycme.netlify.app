const fs = require('fs');
const path = require('path');

const srcDir = __dirname;
const destDir = path.join(__dirname, 'dist');

// Files to copy
const filesToCopy = [
  'index.html',
  'style.css',
  'app.js',
  'questions.js'
];

// Folders to copy
const foldersToCopy = [
  'assets'
];

// Helper to recursively copy directories
function copyDirSync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  let entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    let srcPath = path.join(src, entry.name);
    let destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function build() {
  console.log('Cleaning existing dist/ folder...');
  if (fs.existsSync(destDir)) {
    fs.rmSync(destDir, { recursive: true, force: true });
  }

  console.log('Creating dist/ folder...');
  fs.mkdirSync(destDir, { recursive: true });

  console.log('Copying static assets...');
  for (const file of filesToCopy) {
    const srcFile = path.join(srcDir, file);
    const destFile = path.join(destDir, file);
    if (fs.existsSync(srcFile)) {
      console.log(`Copying ${file} -> dist/${file}`);
      fs.copyFileSync(srcFile, destFile);
    } else {
      console.error(`Error: Required file ${file} does not exist! Run compilation first.`);
      process.exit(1);
    }
  }

  for (const folder of foldersToCopy) {
    const srcFolder = path.join(srcDir, folder);
    const destFolder = path.join(destDir, folder);
    if (fs.existsSync(srcFolder)) {
      console.log(`Copying folder ${folder} -> dist/${folder}`);
      copyDirSync(srcFolder, destFolder);
    } else {
      console.warn(`Warning: Folder ${folder} does not exist, skipping.`);
    }
  }

  console.log('Build completed successfully. Production assets are in dist/');
}

build();
