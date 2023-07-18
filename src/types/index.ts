import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export const REQUEST_SEND = 'REQUEST_SEND';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_ERROR = 'REQUEST_ERROR';

export type EmojiType = {
  slug: string;
  character: string;
  unicodeName: string;
  codePoint: string;
  group: string;
  subGroup: string;
};

export type RootState = {
  isFetching: boolean;
  error: boolean;
  messageError?: string;
  emojis: EmojiType[] | null;
};

export type Dispatch = ThunkDispatch<RootState, null, AnyAction>;

