// vite.config.js
/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    // <-- This section configures Vitest
    globals: true, // Allows you to use describe, it, expect, etc., without importing them
    environment: 'jsdom', // Use jsdom to simulate browser environment
    setupFiles: './src/setupTests.js', // Optional: a file to run before each test file
    // To make jest-dom matchers like .toBeInTheDocument() work
    // you might need to import it in setupFiles or ensure your test files do
  },
});
