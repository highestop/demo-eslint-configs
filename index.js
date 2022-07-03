module.exports = createConfig = ({
  project = ['./tsconfig.json'],
  files = ['.ts', '.tsx']
}) => ({
  env: {
    browser: true,
    node: true,
    es6: true,
    es2020: true
  },
  parserOptions: {
    project,
    ecmaVersion: 2020,
    createDefaultProgram: true,
    sourceType: 'module',
    jsx: true
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    './typescript-import.js',
    './typescript-react.js',
    './typescript-requiring-type-checking.js',
    './typescript-rxjs.js',
    './typescript.js',
    './jest.js'
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': files
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project
      }
    }
  }
});
