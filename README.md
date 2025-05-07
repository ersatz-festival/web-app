# Ersatz Festival - Web App

Web App of Ersatz Festival to display general information about the festival.

## Architecture

We use the Nuxt Framework to develop a full static application hosted on Github Pages. For now, we don't need any backend as we only display general, static information and Github Pages is free.

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

If we need some backend later, we can easily develop it using Nuxt (server side). We'll have to host the web application ourselves as a Node server is then required.

Based on the backend complexity, it may also be a good idea to develop it with Django and it also provides an administration app.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Lint and format

You must use the following commands to clean your code:

```bash
# Lint and try to fix some errors automatically
npm run lintfix

# Format your code
npm run format
```

Note that you won't be able to merge your code if the linter does not pass.

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Deployment

The deployment is automatically managed by Github Actions when a pull request is merged into the `main` branch. The Github Action will update the static web application in Github Pages.

### Domain

The domain `ersatzfestival.ch` is managed by Infomaniak and its DNS configuration redirects to Github Pages.
