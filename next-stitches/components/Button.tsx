import tw, { theme } from 'twin.macro'
import { styled } from '../stitches.config'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  isSmall?: boolean
}

const themeColor = { color: theme(`colors.white`) }

const Button = styled('button', {
  // The common button styles added with the tw import
  ...tw`px-8 py-2 rounded focus:outline-none transform duration-75`,

  // Use the variant grouping feature to add variants to multiple classes
  ...tw`hocus:(scale-105 text-yellow-400)`,

  // The theme import can supply values from your tailwind.config.js
  ...themeColor,

  variants: {
    variant: {
      primary: tw`bg-black text-white border-black`,
      // Combine tailwind classes with regular css
      secondary: tw`border-2 border-yellow-600 box-shadow[0 0.1em 0 0 rgba(0, 0, 0, 0.25)]`,
    },
    isSmall: {
      true: tw`text-sm`,
      false: tw`text-lg`,
    },
  },
})

export default Button
