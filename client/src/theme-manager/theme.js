import classNames from 'classnames'

const themeConfig = 'light'

export const Theme = classNames({
  'light': themeConfig === 'light',
  'dark': themeConfig === 'dark'
})