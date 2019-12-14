import Router from 'next/router';

export const LOGIN = 'LOGIN';

export const login = res => {
  return async dispatch => {
    console.log('actions =>', res);
    dispatch({
      type: LOGIN,
      token: res
    });
    Router.push('/login');
  };
};
