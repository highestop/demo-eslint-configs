module.exports = {
    plugins: ['react-hooks', 'react', 'jsx-a11y'],
    extends: ['plugin:react-hooks/recommended', 'plugin:jsx-a11y/recommended'],
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error'
    }
};
