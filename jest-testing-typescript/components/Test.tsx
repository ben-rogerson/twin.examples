import tw, { styled } from 'twin.macro'

const StyledImportComponent = styled.h1(() => [tw`bg-red-500`])
const TwImportComponent = tw.div`bg-green-500`
const TwPropComponent = ({ text }: { text: string }) => (
  <div tw="bg-blue-500">{text}</div>
)

export default function Test({ text }: { text: string }) {
  return (
    <>
      <StyledImportComponent />
      <TwImportComponent />
      <TwPropComponent text={text} />
    </>
  )
}
