import { createCss, StitchesCss } from "@stitches/react";
export type { StitchesVariants } from "@stitches/react";

export const stitches = createCss({
  prefix: '',
  theme: {},
  themeMap: {},
  utils: {},
})

export type CSS = StitchesCss<typeof stitches>;

export const { css, styled, global, theme, keyframes, getCssString } = stitches