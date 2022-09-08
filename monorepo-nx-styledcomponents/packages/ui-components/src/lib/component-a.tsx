// import styled from 'styled-components';

// /* eslint-disable-next-line */
// export interface UiComponentsProps {}

// const StyledUiComponents = styled.div`
//   color: pink;
// `;

// export function UiComponents(props: UiComponentsProps) {
//   return (
//     <StyledUiComponents>
//       <h1>Welcome to UiComponents!</h1>
//     </StyledUiComponents>
//   );
// }

// export default UiComponents;

import styled from 'styled-components';
import tw from 'twin.macro';
import 'styled-components/macro';

/* eslint-disable-next-line */
export interface TextStyledcomponentsProps {}

const TextStyledcomponents = styled.div`
  ${tw`text-green-600`}
`;

export function ComponentAStyledcomponents(props: TextStyledcomponentsProps) {
  return (
    <TextStyledcomponents>
      <h1>Component A with green color</h1>
    </TextStyledcomponents>
  );
}
