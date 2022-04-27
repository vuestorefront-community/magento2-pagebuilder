const { resolve } = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: resolve('./tsconfig.json'),
    extraFileExtensions: ['.vue'],
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:vue/base',
    'plugin:vue/essential',
    'plugin:vue/recommended',
    'plugin:vue/strongly-recommended',
  ],
  plugins: [
    'unicorn',
    'import',
    '@typescript-eslint',
    'vue',
  ],
  // add your custom rules here
  rules: {
    // region TYPESCRIPT RULES
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-redeclare': ['error'],
    '@typescript-eslint/indent': ['warn', 2],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {
      ignoreRestSiblings: true,
      argsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^ignore',
    }],
    '@typescript-eslint/restrict-template-expressions': 0,
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase', 'UPPER_CASE'],
      },
    ],
    '@typescript-eslint/no-unsafe-return': 0,
    '@typescript-eslint/no-unnecessary-type-assertion': 0,
    '@typescript-eslint/unbound-method': 0,
    // endregion
    // region IMPORT PLUGIN RULES
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-unresolved': 'off',
    'import/named': 'off',
    'import/export': 'off',
    'import/no-cycle': 'off',
    'import/prefer-default-export': 'off', // Allow single Named-export
    'import/extensions': 'off',
    // endregion
    // region ESLINT RULES
    'no-console': (process.env.NODE_ENV === 'production') ? 'error' : 'off',
    'no-debugger': (process.env.NODE_ENV === 'production') ? 'error' : 'off',
    'prefer-promise-reject-errors': 'off',
    'no-shadow': 'off',
    'no-redeclare': 'off',
    'no-unused-vars': 'off',
    'no-case-declarations': 0,
    quotes: ['warn', 'single'],
    'no-unused-expressions': ['warn', {
      allowShortCircuit: true,
      allowTernary: true,
    }],
    'max-len': ['error', {
      code: 150,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
    }],
    'class-methods-use-this': 'off',
    'no-new': 0,
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e', // for e.returnvalue
        'options', // for decorators
      ],
    }],
    // endregion
    // region UNICORN RULES
    'unicorn/no-null': 0,
    'unicorn/no-reduce': 0,
    'unicorn/no-array-for-each': 0,
    'unicorn/prevent-abbreviations': 0,
    'unicorn/no-object-as-default-parameter': 0,
    'unicorn/no-abusive-eslint-disable': 0,
    'unicorn/consistent-function-scoping': 0,
    'unicorn/consistent-destructuring': 0,
    'unicorn/filename-case': [
      0,
      {
        cases: {
          kebabCase: false,
          pascalCase: true,
          camelCase: true,
        },
        // ignore UPPER_CASE markdown filenames
        ignore: [/^[A-Z](([\dA-Z]+_)*[\dA-Z]+)?\.(mdx|d\.ts)?$/],
      },
    ],
    'unicorn/no-new-array': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/prefer-array-some': 'off',
    'unicorn/catch-error-name': [
      2,
      {
        name: 'error',
        ignore: ['^e(rr)?$'],
      },
    ],
    // endregion
  },
  settings: {
    'import/extensions': [
      '.js',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.mjs',
          '.ts',
          '.tsx',
          '.vue',
        ],
      },
      typescript: {},
    },
  },
  overrides: [
    {
      files: [
        '**/*.spec.js',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
