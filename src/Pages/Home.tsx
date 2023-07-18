import { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { EmojiCard } from '../components/EmojiCard';
import { Loading } from '../components/Loading';
import { styled } from 'styled-components';

import { fetchEmojis } from '../redux/thunks';

import { Dispatch, RootState } from '../types';

export const Home = () => {
  const dispatch: Dispatch = useDispatch();
  const emojis = useSelector((state: RootState) => state.emojis);
  const isFetching = useSelector((state: RootState) => state.isFetching);
  const emojiInputRef = useRef<HTMLInputElement>(null); 

  const handleSubmit = useCallback((event: React.FormEvent) => {
    event.preventDefault();
    const emojiInput = emojiInputRef.current;

    if(!emojiInput) return;

    const emojiValue = emojiInput.value;
    dispatch(fetchEmojis(emojiValue));
  }, []);

  if (isFetching) return <Loading />;

  return (
    <HomeContainer>
      <StyledForm onSubmit={ handleSubmit }>
        <input type="text" ref={ emojiInputRef } />
        <button>Search</button>
      </StyledForm>

      <EmojiListContainer>
        {
          emojis?.map((emoji) => (
            <EmojiCard emoji={ emoji } key={ emoji.slug } />
          ))
        }
      </EmojiListContainer>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 20px;
  padding: 10px 0 0 0;
`;

const StyledForm = styled.form`
  display: flex;
  gap: 10px;

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    outline: none;
    border-radius: 4px;
  }

  button {
    padding: 8px 14px;
    background-color: #478939;
    color: white;
    border: none;
    outline: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      filter: brightness(110%);
      transform: scale(1.02);
    }
  }
`;

const EmojiListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  width: 80%;
  justify-content: center;
  overflow-y: auto;
`;
