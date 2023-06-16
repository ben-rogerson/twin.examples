import tw, { styled } from "twin.macro";
import { Logo } from "~/components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;

  &:hover {
    color: blue;
  }
`;

const MyBox = tw.div`border hover:text-red-600 hover:border-red-600`;
const MyStyledComp = styled.div(() => [tw`text-blue-800`]);

const TestButton1 = tw.button`text-red-600 hover:(scale-105)`;

const MyPage = () => {
  return (
    <div>
      <Title>Hello</Title>
      <div
        tw="text-red-500 pl-2 mt-4 hover:text-blue-600"
        onMouseEnter={() => console.log("inline tw hovered")}
      >
        Hover to blue text
      </div>
      <MyBox>Hover to change to red</MyBox>
      <MyStyledComp>A styled component</MyStyledComp>
      <Logo />
      <TestButton1>Test Button 1</TestButton1>
    </div>
  );
};
export default MyPage;
