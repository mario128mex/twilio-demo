module.exports = {
  "globals": {
    "__dirname": true,
    "process": true,
    "document": true,
    "console": true,
    "module": true,
    "require": true
  },
  "env": {
    "es6": true,
    "mocha": true
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2018
  },
  "extends": "eslint:recommended",
  "rules": {
    "semi": [2, "always"],
    "no-console": ["error", {allow: ["warn", "error"]}]
  },
  "plugins": []
};
