import { RotateLoader } from 'react-spinners';
import { styled } from 'styled-components';

const Background = styled.div`
  position: fixed;
  width: 100%;
  left: 50%;
  bottom: 50px;
`;

export default function Loading() {
  return (
    <Background>
      <RotateLoader color='white' loading={true} size={15} />
    </Background>
  );
}
