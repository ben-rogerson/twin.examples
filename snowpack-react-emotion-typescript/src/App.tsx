import tw, { GlobalStyles } from 'twin.macro';
import { Button, Logo } from './components';

interface AppProps {}

const App = ({}: AppProps) => (
  <div>
    <GlobalStyles />
    <div
      css={[
        tw`flex flex-col items-center justify-center h-screen`,
        tw`bg-gradient-to-b from-electric to-ribbon`,
      ]}
    >
      <div tw="flex flex-col justify-center h-full space-y-5">
        <Button isPrimary>Submit</Button>
        <Button isSecondary>Cancel</Button>
        <Button isSmall>Close</Button>
      </div>
      <Logo />
    </div>
  </div>
);

export default App;
