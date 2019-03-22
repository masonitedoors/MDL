module.exports = {
  extends: '@masonite',
  rules: {
    'import/prefer-default-export': 0,
    'react/no-danger': 0,
    'react/no-did-update-set-state': 0,
    'no-console': 0,
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
  },
}
