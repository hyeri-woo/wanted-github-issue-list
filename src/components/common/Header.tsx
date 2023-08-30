import { styled } from 'styled-components';

interface Props {
  organization: string;
  repository: string;
}

export default function Header({ organization, repository }: Props) {
  return (
    <StyledHeader>
      {organization} / {repository}
    </StyledHeader>
  );
}

const StyledHeader = styled.header``;
