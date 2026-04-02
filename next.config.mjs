import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // Ensures Next.js roots correctly in nested/workspace environments (Vercel warning fix)
    root: __dirname,
  },

  // No custom webpack tailwind alias to avoid module resolution conflicts.
  // Next.js + Tailwind v4 works with standard resolution and postcss plugin.
};

export default nextConfig;
