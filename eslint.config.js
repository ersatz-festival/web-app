import globals from 'globals';
import tseslint from 'typescript-eslint';
import vue from 'eslint-plugin-vue';
import prettier from 'eslint-plugin-prettier';
import parserVue from 'vue-eslint-parser';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    {
        ignores: ['dist', 'node_modules', '.output', '.nuxt'],
    },
    {
        files: ['**/*.{js,ts,vue}'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: 2022,
                sourceType: 'module',
                project: './tsconfig.json',
            },
            globals: globals.browser,
        },
    },
    ...tseslint.configs.recommended,
    {
        files: ['**/*.vue'],
        languageOptions: {
            parser: parserVue,
            parserOptions: {
                parser: tseslint.parser,
                ecmaVersion: 2022,
                sourceType: 'module',
                extraFileExtensions: ['.vue'],
            },
        },
        plugins: {
            vue,
            prettier,
        },
        rules: {
            ...vue.configs['flat/recommended'].rules,
            'vue/multi-word-component-names': 'off',
            'prettier/prettier': 'error',
        },
    },
]);
