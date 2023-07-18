import { EmojiType, REQUEST_ERROR, REQUEST_SEND, REQUEST_SUCCESS } from '../../types';

export const sendRequest = () => {
  return {
    type: REQUEST_SEND,
  };
};

export const requestSuccess = (emojis: EmojiType[]) => {
  return {
    type: REQUEST_SUCCESS,
    payload: { emojis },
  };
};

export const requestError = (errorMessage: string) => {
  return {
    type: REQUEST_ERROR,
    payload: {
      errorMessage,
    },
  };
};
