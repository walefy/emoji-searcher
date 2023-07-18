import { AnyAction } from 'redux';

import { REQUEST_ERROR, REQUEST_SEND, REQUEST_SUCCESS, RootState } from '../../types';

const INITIAL_STATE: RootState = {
  isFetching: false,
  error: false,
  emojis: [],
};

export const emojiReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
  case REQUEST_SEND: {
    return {
      ...state,
      isFetching: true,
      error: false,
    };
  }

  case REQUEST_SUCCESS: {
    return {
      ...state,
      isFetching: false,
      error: false,
      emojis: action.payload.emojis,
    };
  }

  case REQUEST_ERROR: {
    return {
      ...state,
      isFetching: false,
      error: true,
      messageError: action.payload.errorMessage,
    };
  }

  default: {
    return state;
  }
  }
};
