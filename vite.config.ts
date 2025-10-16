import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    // Compute base for GitHub Pages:
    // - If VITE_BASE is provided (recommended), use it.
    // - Otherwise, if running in GH Actions, derive from GITHUB_REPOSITORY (owner/repo) to produce '/repo/'.
    const baseFromEnv = env.VITE_BASE || '';
    const githubRepo = process.env.GITHUB_REPOSITORY || '';
    const base = mode === 'production'
      ? (baseFromEnv || (githubRepo ? `/${githubRepo.split('/')[1]}/` : '/'))
      : '/';

    return {
      base,
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
