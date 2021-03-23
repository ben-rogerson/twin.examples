import tw, { theme } from 'twin.macro'
import { styled } from '../stitches.config'

const Button = styled('button', {
  // The common button styles added with the tw import
  ...tw`px-8 py-2 rounded transform duration-75 (outline-none focus:outline-none)`,

  // Use the variant grouping feature to add variants to multiple classes
  ...tw`hocus:(scale-105 text-yellow-300)`,

  // The theme import can supply values from your tailwind.config.js
  color: String(theme`colors.white`),

  variants: {
    variant: {
      // Use variants from stitches to conditionally style your components
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
