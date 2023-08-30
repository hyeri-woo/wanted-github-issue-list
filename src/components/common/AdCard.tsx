import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function AdCard() {
  return (
    <StyledCard>
      <Link to='https://www.wanted.co.kr/jobsfeed'>
        <img
          src='https://github.com/hyeri-woo/wanted-pre-onboarding-frontend/assets/107099724/d5be6d63-52a6-4260-8e19-660ea350f05c'
          alt='광고 배너'
        />
      </Link>
    </StyledCard>
  );
}

const StyledCard = styled.article`
  background: var(--color-white70);
  border-radius: 30px;
  border: 1px solid var(--color-white70);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  height: 150px;
  overflow: hidden;
  position: relative;
  img {
    position: absolute;
    width: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-58%, -50%);
    object-fit: cover;
  }
`;
