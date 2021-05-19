module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'parser': 'babel-eslint',
  'extends': [
    'eslint:recommended',
    'plugin:vue/vue3-recommended'
  ],
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'vue'
  ],
  'rules': {
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'vue/require-default-prop': 'off', // 不需要prop设置默认值
    // 'vue/script-indent': [
    //   // vue缩进2个空格
    //   'error',
    //   2
    // ]
  }
}
