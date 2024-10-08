module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.vue'],
      },
    },
    'import/core-modules': ['vite', '@vitejs/plugin-vue'],
  },
  rules: {
    // 關閉檢查換行
    'linebreak-style': ['off', 'windows'],
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
  },
};
