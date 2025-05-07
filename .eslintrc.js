module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
    },
    rules: {
        'vue/multi-word-component-names': 'off',
    },
};
