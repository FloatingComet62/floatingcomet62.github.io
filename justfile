# Dev server
[group('dev')]
dev:
  pnpm astro build
  pnpm wrangler dev

# Build the project 
[group('dev')]
build:
  pnpm astro build

# Check the project in wrangler's dev mode
[group('prod')]
check:
  pnpm wrangler dev

# Push to prod
[group('prod')]
deploy: build
  pnpm wrangler deploy
