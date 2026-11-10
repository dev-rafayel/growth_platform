import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
});

const eslintConfig = [
  {
    ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts'],
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      'no-var': 'error',
      'prefer-const': 'warn',
      'no-unreachable': 'error',
      'no-duplicate-imports': 'error',
      'no-empty': ['error', 'always'],
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'indent': ['error', 2],
      'no-console': 'warn',
      'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1, 'maxBOF': 0 }],
    }
  }
];

export default eslintConfig;