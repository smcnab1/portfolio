import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier/flat';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    files: ['**/*.{js,jsx,ts,tsx}'],

    plugins: {
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
    },

    rules: {
      'no-console': 'warn',
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/no-unused-vars': 'off',

      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      'simple-import-sort/exports': 'warn',
      'simple-import-sort/imports': 'warn',
    },
  },

  prettier,

  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'coverage/**',
    'next-env.d.ts',
    'public/sitemap*.xml',
    'public/robots.txt',
  ]),

  {
  files: ['**/*.config.js'],
  rules: {
    '@typescript-eslint/no-require-imports': 'off',
  },
},
]);