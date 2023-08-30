import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <StyledError>
      <h1>404 찾을 수 없는 페이지입니다.</h1>
      <button onClick={() => navigate('/')}>홈페이지로 가기</button>
    </StyledError>
  );
}

const StyledError = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;
  background: var(--color-white20);
  border-radius: 30px;
  border: 1px solid var(--color-white70);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  button {
    width: 200px;
    padding: 10px;
    border-radius: 15px;
    background: var(--color-white30);
    &:hover {
      background: var(--color-white70);
      color: var(--color-skyblue);
    }
  }
`;
