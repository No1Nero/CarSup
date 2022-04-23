import axios from "axios";
import authActions from "./auth-actions";

const register = credentials => async dispatch => {
    try{
        await axios.post('https://carsup.herokuapp.com/cars/auth/register', credentials);
        dispatch(authActions.registerSuccess());
        dispatch(authActions.registerMessage('Регистрация успешна. Авторизуйтесь для входа в профиль'));
    } catch(error) {
        dispatch(authActions.registerError('Данный пользователь уже зарегистрирован'));
    }
};

const login = credentials => async dispatch => {
    try{
        const response = await axios.post('https://carsup.herokuapp.com/cars/auth/login', credentials);
        dispatch(authActions.loginSuccess(response.data));
    } catch(error) {
        dispatch(authActions.loginError('Неверный логин или пароль'));
    }
};

const logout = () => async dispatch => {
    dispatch(authActions.logoutSuccess());
};

const getCurrentUser = () => (dispatch, getState) => {
    const {user: {user: persistedUser}} = getState();

    if(!persistedUser.token) {
        return;
    }
    console.log(persistedUser);
    dispatch(authActions.getCurrentUserSuccess(persistedUser));
};

const authOperations = {
    register,
    login,
    logout,
    getCurrentUser,
};

export default authOperations;