// .eslintrc.cjs
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime', // If you are using the new JSX transform (default in Vite React)
    'plugin:react-hooks/recommended',
    'eslint-config-prettier' // Add this line. It disables ESLint rules that would conflict with Prettier.
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } }, // Adjust if your React version differs
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prop-types': 'off', // Optional: Disable if you're using TypeScript or prefer not to use prop-types with JavaScript
    // You can add other custom rules here if needed
  },
};