import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import authActions from "./auth-actions";

const initialUserState = {
    username: null,
    email: null,
    token: null,
};

const user = createReducer(initialUserState, {
    [authActions.registerSuccess]: () => initialUserState,
    [authActions.loginSuccess]: (_, {payload}) => payload,
    [authActions.logoutSuccess]: () => initialUserState,
    [authActions.getCurrentUserSuccess]: (_, {payload}) => payload,
});

const error = createReducer(null, {
    [authActions.registerError]: (_, {payload}) => payload,
    [authActions.loginError]: (_, {payload}) => payload,
    [authActions.resetError]: () => null,
});

const message = createReducer(null, {
    [authActions.registerMessage]: (_, {payload}) => payload,
    [authActions.resetError]: () => null,
});

const page = createReducer(0, {
    [authActions.selectPage]: (_, {payload}) => payload,
})

const authReducer = combineReducers({
    user,
    error,
    message,
    page,
});

export default authReducer;