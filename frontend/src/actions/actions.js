import axiosConfig from '../config/axios'
import { registerFail, registerReq, registerSuccess } from '../features/registerSlice';
import { loginFail, loginReq, loginSuccess } from '../features/slice'

export const register = (companyName, email, password) => async (dispatch) => {
  try {

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    dispatch(registerReq());

    const { data } = await axiosConfig.post(
      `/register`,
      {
        email,
        password,
        companyName
      },
      config
    );


    dispatch(registerSuccess(data));
    dispatch(loginSuccess(data));

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    const errorIs =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch(registerFail(errorIs));
  }
};

export const login = (email, password) => async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      dispatch(loginReq());
  
      const { data } = await axiosConfig.post(
        `/login`,
        {
          email,
          password,
        },
        config
      );
  
      dispatch(loginSuccess(data));
      localStorage.setItem("userInfo", JSON.stringify(data));
      
    } catch (error) {
      const errorIs =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch(loginFail(errorIs));
    }
  };