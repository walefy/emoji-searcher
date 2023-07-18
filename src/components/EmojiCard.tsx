import { FC, useCallback, useState } from 'react';

import { styled } from 'styled-components';

import { EmojiType } from '../types';

type EmojiCardProps = {
  emoji: EmojiType;
};

export const EmojiCard: FC<EmojiCardProps> = ({ emoji }) => {
  const [copied, setIsCopied] = useState(false);
  
  const handleClickCopy = useCallback(() => {
    navigator.clipboard.writeText(emoji.character);

    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }, []);

  return (
    <EmojiCardContainer>
      <p>{ emoji.character }</p>
      <CopyButton onClick={ handleClickCopy }>Copy</CopyButton>
      { copied && <span>Copied!</span> }
    </EmojiCardContainer>
  );
};

const EmojiCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: whitesmoke;
  padding: 10px;
  gap: 10px;
  border-radius: 8px;
  box-shadow: 2px 2px #d2d2d2;
  /* color: #d2d2d2 */
`;

const CopyButton = styled.button`
  width: 70%;
  height: 20px;
  outline: none;
  border: none;
  background-color: green;
  border: 1px solid black;
  border-radius: 4px;
  color: white;
  cursor: pointer;

  &:hover {
    filter: brightness(110%);
    transform: scale(1.02);
  }
`;
