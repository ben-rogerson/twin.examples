import tw, { styled, theme } from 'twin.macro'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  isSmall?: boolean
}

const Button = styled.button(({ variant, isSmall }: ButtonProps) => ({
  // The common button styles
  ...tw`px-8 py-2 rounded transform duration-75`,

  // Use the variant grouping feature to add variants to multiple classes
  ...tw`hocus:(scale-105 text-yellow-400)`,

  // Use props to conditionally style your components
  ...(variant === 'primary' && tw`bg-black text-white border-black`),

  // Combine regular css with tailwind classes
  ...(variant === 'secondary' && {
    ...tw`border-2 border-yellow-600`,
    boxShadow: '0 0.1em 0 0 rgba(0, 0, 0, 0.25)',
  }),

  // Conditional props can be added
  ...(isSmall ? tw`text-sm` : tw`text-lg`),

  // The theme import can supply values from your tailwind.config.js
  ...{ color: theme`colors.white` },
}))

export default Button
