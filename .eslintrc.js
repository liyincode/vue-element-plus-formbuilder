module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/vue3-recommended',
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    'semi': [2, 'always'], // 语句末尾有分号
    'semi-spacing': [2, { // 分号后有空格
      'before': false,
      'after': true
    }],
    'quotes': [2, 'single', { // 单引号
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }]
  }
};
