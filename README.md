# Stockholm Orthodox Portal - Sveti Sava Church

A modern web portal for the Serbian Orthodox Church Sveti Sava in Stockholm, Sweden.

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd stockholm-orthodox-portal-domes

# Step 3: Install the necessary dependencies
npm install

# Step 4: Start the development server
npm run dev
```

## Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Editing the Code

You can edit this code using:

- **Your preferred IDE** - Clone the repo and work locally
- **GitHub** - Edit files directly in GitHub's web interface
- **GitHub Codespaces** - Use GitHub Codespaces for cloud-based development

## Technologies

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- React Query (TanStack Query)
- React Router

## Project Structure

```
src/
├── components/     # React components
├── pages/          # Page components
├── hooks/          # Custom React hooks
├── context/        # React context providers
├── services/       # API services
├── lib/            # Utility libraries
├── lang/           # Language translation files
└── data/           # Data utilities
```

## Deployment

Build the project for production:

```sh
npm run build
```

The built files will be in the `dist/` directory, ready to be deployed to your hosting provider.
