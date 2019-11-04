module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['import'],
    rules: {
        'import/no-cycle': 'error',
    }
};
