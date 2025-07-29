import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {languageOptions: {
    globals: { ...globals.browser, ...globals.es2021 },
    parser: tseslint.parser, //"@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
  }},
  {plugins: {
    react: pluginReact,
    tseslint: tseslint, //"@typescript-eslint"
  }},
  {settings: {
    react: {
      'version': 'detect',
    }
  }},
  {rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.tsx', '.ts'] }],
    //"@typescript-eslint/no-explicit-any": "off",
    //"@typescript-eslint/no-unused-vars": "off",
    //"react/react-in-jsx-scope": "off",
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ]
  }}
];