import { LOGIN } from '../actions/login';

const initialState = {
  token: ''
};

export default (state = initialState, action) => {
  const { type, token } = action;

  switch (type) {
    case LOGIN:
      return Object.assign({}, state, { token });
    default:
      return state;
  }
};
