import React from 'react';

const initialState = {
  user: null,
};

const userAuth = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

const loginAction = user => ({
  type: 'LOGIN',
  payload: user,
});

const registerAction = user => ({
  type: 'REGISTER',
  payload: user,
});

const logoutAction = () => ({
  type: 'LOGOUT',
});

export {userAuth, loginAction, registerAction, logoutAction};
