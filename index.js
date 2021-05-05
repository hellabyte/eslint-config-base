module.exports = {
  root: true,

  env: {
    browser: true,
  },

  extends: [
    'eslint-config-airbnb-base/rules/best-practices',
    'eslint-config-airbnb-base/rules/errors',
    'eslint-config-airbnb-base/rules/node',
    'eslint-config-airbnb-base/rules/style',
    'eslint-config-airbnb-base/rules/variables',
    'eslint-config-airbnb-base/rules/es6',
    'plugin:prettier/recommended',
  ],

  plugins: ['prettier', 'import'],

  rules: {
    'prettier/prettier': 'error',
  },

  overrides: [
    {
      files: [
        '**/tests/**/*.js',
        '**/tests/**/*.jsx',
        '**/tests/**/*.ts',
        '**/tests/**/*.tsx',
        '**/*.test.ts',
        '**/*.spec.ts',
        '**/*.test.tsx',
        '**/*.spec.tsx',
      ],

      rules: {},
    },
  ],
};
