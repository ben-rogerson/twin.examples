import tw, { theme } from 'twin.macro'
import { styled } from '../stitches.config'

const themeColor = { color: theme(`colors.white`) }

const transform = {
  '--tw-translate-x': '0',
  '--tw-translate-y': '0',
  '--tw-rotate': '0',
  '--tw-skew-x': '0',
  '--tw-skew-y': '0',
  '--tw-scale-x': '1',
  '--tw-scale-y': '1',
  transform:
    'translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
}

const Button = styled('button', {
  // The common button styles added with the tw import
  ...tw`px-8 py-2 rounded duration-75 (outline-none focus:outline-none)`,
  ...transform,

  // Use the variant grouping feature to add variants to multiple classes
  // Short css should be used instead of tailwind transform classes until patched
  ...tw`hocus:(transform[scale(1.05)] text-yellow-400)`,

  // The theme import can supply values from your tailwind.config.js
  ...themeColor,

  variants: {
    variant: {
      primary: tw`bg-black text-white border-black`,
      secondary: tw`
        border-2 border-yellow-600
        // Use short css to combine tailwind classes with regular css
        box-shadow[0 0.1em 0 0 rgba(0, 0, 0, 0.25)]
      `,
    },
    isSmall: { true: tw`text-sm`, false: tw`text-lg` },
  },
})

export default Button
