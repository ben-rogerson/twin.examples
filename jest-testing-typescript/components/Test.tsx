import tw, { styled } from 'twin.macro'

const StyledImportComponent = styled.h1(() => [tw`bg-red-500`])
const TwImportComponent = tw.div`bg-green-500`
const TwPropComponent = () => <div tw="bg-blue-500">Test</div>

export default function About() {
  return (
    <>
      <StyledImportComponent />
      <TwImportComponent />
      <TwPropComponent />
    </>
  )
}
