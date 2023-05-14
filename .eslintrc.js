module.exports = {
    root: true,
    env: {
      node: true,
      browser: true
    },
    extends: [
      'plugin:vue/vue3-recommended',
      'eslint:recommended'
    ],
    parserOptions: {
      parser: '@babel/eslint-parser',
      ecmaVersion: 2018,
    },
    plugins: [
      'vue'
    ],
    rules: {
      'vue/max-attributes-per-line': 'off',
      'vue/multi-word-component-names': 'off'
    }
  }
  