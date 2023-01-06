module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": ["eslint:recommended",
    'plugin:cypress/recommended',
    "plugin:mocha/recommended"],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
    },
    "plugins": [
      "mocha",
      "cypress"
  ]
}
