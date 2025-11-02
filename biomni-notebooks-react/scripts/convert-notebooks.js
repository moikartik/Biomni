#!/usr/bin/env node

/**
 * Convert .ipynb files to JSON format for React import
 * Usage: node scripts/convert-notebooks.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const notebooksDir = path.join(__dirname, '../notebooks');
const outputDir = path.join(__dirname, '../src/data');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to convert notebook files
function convertNotebooks() {
  console.log('Converting notebooks to JSON...\n');

  // Read all .ipynb files
  const files = fs.readdirSync(notebooksDir, { recursive: true });
  
  files.forEach(file => {
    if (file.endsWith('.ipynb')) {
      const inputPath = path.join(notebooksDir, file);
      const relativePath = file.replace('.ipynb', '');
      const outputFilename = relativePath.replace(/\//g, '_') + '.json';
      const outputPath = path.join(outputDir, outputFilename);

      try {
        // Read notebook file
        const notebookContent = fs.readFileSync(inputPath, 'utf8');
        const notebook = JSON.parse(notebookContent);

        // Write to output
        fs.writeFileSync(outputPath, JSON.stringify(notebook, null, 2));
        console.log(`? Converted: ${file} -> ${outputFilename}`);
      } catch (error) {
        console.error(`? Error converting ${file}:`, error.message);
      }
    }
  });

  console.log('\nConversion complete!');
  console.log(`Output directory: ${outputDir}`);
}

// Run conversion
convertNotebooks();
