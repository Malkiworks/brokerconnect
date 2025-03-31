#!/bin/bash

# Exit on error
set -e

# Install dependencies
npm ci

# Build the Next.js app with static export
npm run build

# Make sure directory exists for the 404 page
mkdir -p out/404

# Create a custom 404.html in root
cat > out/404.html << 'EOL'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>404 - Page Not Found</title>
  <style>
    body {
      font-family: system-ui, -apple-system, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      background: #f5f7fa;
    }
    .container {
      text-align: center;
      padding: 2rem;
      max-width: 500px;
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: #333;
    }
    p {
      margin-bottom: 1.5rem;
      color: #666;
    }
    a {
      display: inline-block;
      background: #0070f3;
      color: white;
      text-decoration: none;
      padding: 0.75rem 1.5rem;
      border-radius: 0.25rem;
      font-weight: 500;
    }
    a:hover {
      background: #005ae0;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>404 - Page Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <a href="/">Return to Home</a>
  </div>
</body>
</html>
EOL

# Copy 404.html to 404/index.html for proper handling in some static hosts
cp out/404.html out/404/index.html

# Create a .nojekyll file to bypass GitHub Pages Jekyll processing
touch out/.nojekyll

echo "Build complete!" 