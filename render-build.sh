#!/bin/bash

# Exit on error
set -e

# Install dependencies
npm ci

# Build the Next.js app with static export
npm run build

# 404 page handling for static hosts
cp out/404.html out/404/index.html

# Create a .nojekyll file to bypass GitHub Pages Jekyll processing
touch out/.nojekyll

echo "Build complete!" 