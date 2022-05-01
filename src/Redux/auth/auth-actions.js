import {createAction} from '@reduxjs/toolkit';

const registerSuccess = createAction('auth/registerSuccess');
const registerError = createAction('auth/registerError');

const loginSuccess = createAction('auth/loginSuccess');
const loginError = createAction('auth/loginError');

const logoutSuccess = createAction('auth/logoutSuccess');

const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');

const resetError = createAction('auth/resetError');
const registerMessage = createAction('auth/registerMessage');

const selectPage = createAction('page/selectPage');

const authActions = {
    registerSuccess,
    registerError,
    loginSuccess,
    loginError,
    logoutSuccess,
    getCurrentUserSuccess,
    resetError,
    registerMessage,
    selectPage,
};

export default authActions;