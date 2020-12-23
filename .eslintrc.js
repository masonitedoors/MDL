// Consider updating @masonite/eslint-config with these rules for TS.
const tsRules = {
  indent: 1,
  'react/prop-types': 0,
  'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }],
  'import/extensions': 0,
  'react/no-unescaped-entities': 0,
  'max-len': 1,
}

module.exports = {
  extends: '@masonite',
  parser: '@typescript-eslint/parser',
  rules: {
    'import/prefer-default-export': 0,
    'react/no-danger': 0,
    'react/no-did-update-set-state': 0,
    'no-console': 0,
    'react/destructuring-assignment': ['error', 'always', { ignoreClassFields: true }],
    'react/jsx-one-expression-per-line': ['on', { allow: 'literal' }],
    'implicit-arrow-linebreak': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelComponents: ['label', 'Label'],
        controlComponents: ['input', 'textarea', 'Input'],
        depth: 3,
      },
    ],
    ...tsRules,
  },
}
