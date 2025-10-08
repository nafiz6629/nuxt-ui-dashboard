// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // ...Custom flat configs append after nuxt's configs
  {
    rules: {
      'vue/no-multiple-template-root': 'off',
      'vue/html-self-closing': 'off',
      'vue/first-attribute-linebreak': 'off'
    }
  }
)
// Override some rules in a specific config, based on their name
  .override('nuxt/typescript/rules', {
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off', // Or set to "warn"
      '@typescript-eslint/no-explicit-any': 'off' // For allowing more flexible typing
    }
  })
