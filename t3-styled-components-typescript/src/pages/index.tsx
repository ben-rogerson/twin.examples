import React from "react";
import tw from "twin.macro";
import { Button, Logo } from "~/components";

// MY NOTES
// mention vscode tw settings https://github.com/ben-rogerson/twin.macro/discussions/227?
// how to use the babel-plugin-twin dependency? Might not be possible?
// rm babel-twin package inc. from config if not working
// don't seem to need import 'twin.macro' e.g. in Logo.tsx
// set-up doesn't work with latest styled-components version (6^). Needs to be 5^.
// option for babel-plugin-styled-components should be false by default? Matters?
// better way to no-check withTwin.js? Should be using .cjs as in t3-emotion-typescript?

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
};

const IndexPage = () => (
  <div css={styles.container({ hasBackground: true })}>
    <div tw="flex flex-col justify-center h-full gap-y-5">
      <Button variant="primary">Submit</Button>
      <Button variant="secondary">Cancel</Button>
      <Button isSmall>Close</Button>
    </div>
    <Logo />
  </div>
);

export default IndexPage;
