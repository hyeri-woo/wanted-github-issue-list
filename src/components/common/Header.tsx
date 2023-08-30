import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

interface Props {
  organization: string;
  repository: string;
}

export default function Header({ organization, repository }: Props) {
  return (
    <StyledHeader>
      <Link to='/'>
        <h1>
          <span>{organization}</span> / <span>{repository}</span>
        </h1>
      </Link>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  background: var(--color-white70);
  padding: 10px;
  h1 {
    text-align: center;
    span:nth-child(1) {
      color: var(--color-green);
    }
    span:nth-child(2) {
      color: var(--color-skyblue);
    }
  }
`;
