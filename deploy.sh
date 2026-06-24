#!/bin/bash

# Abort on errors
set -e

echo "Building the application..."
npm run build

echo "Copying index.html to 404.html for GitHub Pages routing..."
cp dist/index.html dist/404.html

echo "Replacing docs folder with new build..."
rm -rf docs
cp -r dist docs 

echo "Staging files..."
git add .

echo "Committing changes..."
# Commit changes (don't fail if there's nothing to commit)
git commit -m "deploy: build application to docs for GitHub Pages" || true

echo "Configuring remote..."
# Check if the 'wdd' remote already exists. If not, add it.
if ! git remote | grep -q "^wdd$"; then
  git remote add wdd https://github.com/Ferdelolmo/wdd
fi

# Show remotes to confirm
git remote -v

echo "Pulling latest changes from remote to prevent conflicts..."
git pull wdd main --rebase

echo "Pushing to main on remote 'wdd'..."
git push wdd main

echo "Deployed to main!"
