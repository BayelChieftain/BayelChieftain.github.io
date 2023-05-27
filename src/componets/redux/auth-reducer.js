import { authAPI, securityAPI } from "../../API/api";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  captchaUrl: null
}


 const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:  
        return  {
          ...state, 
          ...action.payload,  
        };
        default:
            return state;
    }
};

export const setAuthUserData = (id, login, email, isAuth) => ({type: SET_USER_DATA, payload: 
  {id, login, email, isAuth} });

export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
 });

export const getAuthUserData = () => async (dispatch) => {
  const response = await authAPI.me();
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      dispatch(setAuthUserData(id, login, email, true));
    };
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe); 
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else if (response.data.resultCode === 10) {
      dispatch(getCaptcha())
    }
};

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    };
};

export const getCaptcha = () => async (dispatch) => {
  const response = await securityAPI.getCaptcha();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl))
};

export default authReducer;  