# QuestNexus

A Percy Jackson-inspired quest game built with React and Vite.

## Deployment to GitHub Pages

This project has been refactored to be deployable on GitHub Pages as a static site. The game data is stored in client-side files, and game progress is saved to localStorage.

### Deployment Steps

1. Push your code to a GitHub repository
2. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Set the source to "GitHub Actions"
3. The GitHub workflow will automatically build and deploy your site

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

- `/client` - React frontend application
  - `/client/src/data` - Game data (quests, scenes)
  - `/client/public` - Static assets
- `/shared` - Shared type definitions

### Note on Project Structure

This project was originally designed as a full-stack application with both client and server components. It has been refactored to be a static site for GitHub Pages deployment:

- The `/server` directory is no longer used and can be safely removed
- The `drizzle.config.ts` file (database configuration) is no longer needed
- The Vite configuration is set to use the `/client` directory as the root

If you want to simplify the structure further, you could move the contents of the `/client` directory to the project root and update the Vite configuration accordingly.

## Game Features

- Multiple quests with branching storylines
- Different scene types: story, battle, puzzle, decision
- Character progression and inventory system
- Game state persistence using localStorage