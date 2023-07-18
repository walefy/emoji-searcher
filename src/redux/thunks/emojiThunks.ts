import { Dispatch } from '../../types';
import { EmojiType } from '../../types';
import { sendRequest, requestSuccess, requestError } from '../actions';

const API_KEY = process.env.EMOJI_API_KEY;

export const fetchEmojis = (query: string) => (
  async (dispatch: Dispatch) => {
    try {
      dispatch(sendRequest());
      const response = await fetch(`https://emoji-api.com/emojis?search=${query}&access_key=${API_KEY}`);

      if (!response.ok) throw new Error('Request failed!');

      const responseJson: EmojiType[] = await response.json();
      dispatch(requestSuccess(responseJson));
    } catch (error) {
      let message = 'unknown error';
      if (error instanceof Error) message = error.message;
      dispatch(requestError(message));
    }
  }
);
