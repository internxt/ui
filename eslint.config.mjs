import eslintConfigInternxt from '@internxt/eslint-config-internxt';
import eslintPluginStorybook from 'eslint-plugin-storybook';
import typescriptParser from '@typescript-eslint/parser';

export default [
  ...eslintPluginStorybook.configs['flat/recommended'],
  ...eslintConfigInternxt,
  {
    languageOptions: {
      parser: typescriptParser
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      'react/react-in-jsx-scope': 'off',
    },
    ignores: ['dist', 'tmp', 'scripts', 'node_modules', '!.storybook'],
  }
];

