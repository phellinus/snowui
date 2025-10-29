// eslint.config.mjs
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import configPrettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';
import {defineFlatConfig} from 'eslint-define-config';
import * as parserTs from '@typescript-eslint/parser';
import pluginTs from '@typescript-eslint/eslint-plugin';

export default defineFlatConfig([
    {
        ignores: ['**/.*', 'build/*', 'node_modules/*', 'eslint.config.mjs'],
    },
    {
        files: ['src/**/*.{ts,tsx,js,jsx,json,scss,css}'],
        languageOptions: {
            parser: parserTs,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                tsconfigRootDir: process.cwd(),
                project: ['./tsconfig.json'],
            },
            globals: {
                ...globals.browser,
                ...globals.es2021,
                ...(globals.jest ?? {}),
            },
        },
        plugins: {
            '@typescript-eslint': pluginTs,
            prettier: pluginPrettier,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...pluginTs.configs.strict.rules,
            ...configPrettier.rules,
            'prettier/prettier': [
                'error',
                {},
                {
                    usePrettierrc: true,
                    fileInfoOptions: {withNodeModules: true},
                },
            ],
            '@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '^_', varsIgnorePattern: '^_'}],
            '@typescript-eslint/no-non-null-assertion': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],
            'no-unused-vars': 'off',
        },
    },
]);
