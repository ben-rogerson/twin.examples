import tw, { styled, theme } from 'twin.macro'

const Button = styled.button({
  // Add classes with the tw import and spread syntax
  ...tw`px-8 py-2 rounded transform duration-75 outline-none focus:outline-none`,

  // Use the variant grouping feature to add variants to multiple classes
  ...tw`hocus:(scale-105 text-yellow-300)`, // hocus = hover + focus

  // The theme import grabs values from your tailwind.config.js
  color: theme`colors.white`,

  // Use variants/compoundVariants to conditionally style your components
  // https://stitches.dev/docs/variants
  variants: {
    // Style based on props, eg: <div variant="primary" />
    variant: {
      primary: tw`
        bg-black text-white border-black
        focus:(ring-2 ring-yellow-400)
      `,
      secondary: tw`
        border-2 border-yellow-500
        focus:(ring-2 ring-purple-400)

        // Use short css to combine tailwind classes with regular css
        box-shadow[0 0.1em 0 0 rgba(0, 0, 0, 0.25)]
      `,
    },
    // Boolean props can be styled too, eg: <div isSmall /> / <div isSmall={false} />
    isSmall: { true: tw`text-sm`, false: tw`text-lg` },
  },
})

export default Button
