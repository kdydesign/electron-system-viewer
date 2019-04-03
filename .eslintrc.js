module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: ['plugin:vue/base', 'standard'],
  globals: {
    __static: true
  },
  plugins: [
    'html',
    'import',
    'standard',
  ],
  'rules': {
    'indent': 0,
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}