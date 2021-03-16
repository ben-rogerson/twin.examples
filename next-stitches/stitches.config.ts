import { createStyled } from '@stitches/react'

export const { styled, css } = createStyled({
  prefix: '',
  tokens: {},
  breakpoints: {},
  utils: {
    // API change in @stitches/react@0.0.3-canary.1
    // https://github.com/hauptrolle/stitches-utils/issues/8#issue-698920362
    // mx: (value, config) => ({})
  },
})
