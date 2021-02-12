import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  colors: {
    black: '#16161D',
  },
  fonts: {
    mono: `'Menlo', monospace`
  },
  breakpoints: createBreakpoints({
    sm: '40em',
    md: '52em',
    lg: '64em',
    xl: '80em',
  })
})

export default theme