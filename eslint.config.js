import eslint from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';
import prettierEslint from 'eslint-plugin-prettier/recommended';

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  prettierEslint,
  globalIgnores(['**/*.d.ts', '__tests__/__fixtures__/*']),
  {
    rules: {
      'prettier/prettier': 2,
    },
  },
);
