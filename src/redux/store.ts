import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';

import { emojiReducer } from './reducers';

export const store = createStore(emojiReducer, composeWithDevTools(applyMiddleware(thunk)));
