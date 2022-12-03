import tw, { styled } from 'twin.macro'

const StyledImportComponent = styled.h1(() => [tw`block`])
const TwImportComponent = tw.div``
const TwPropComponent = () => <div tw="block bg-black">Test</div>

export default function About() {
  return (
    <>
      <StyledImportComponent />
      <TwImportComponent />
      <TwPropComponent />
    </>
  )
}
