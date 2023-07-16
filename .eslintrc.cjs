module.exports = {
  root: true,
  extends: [
    '@nuxtjs/eslint-config-typescript',
    '@antfu',
  ],
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/multi-word-component-names': 'off',
  },
}
