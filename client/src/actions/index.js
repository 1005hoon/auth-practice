import axios from "axios";
import * as types from "./types";

export const signIn = (signInDto, cb) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:5000/signin", {
      ...signInDto,
    });
    const token = response.data.token;

    dispatch({ type: types.AUTH_USER, payload: token });
    localStorage.setItem("token", token);
    cb();
  } catch (error) {
    dispatch({
      type: types.AUTH_ERROR,
      payload: "로그인 정보를 확인해주세요",
    });
  }
};

export const signUp = (signUpDto, cb) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:5000/signup", {
      ...signUpDto,
    });
    const token = response.data.token;
    dispatch({ type: types.AUTH_USER, payload: token });
    localStorage.setItem("token", token);
    cb();
  } catch (error) {
    dispatch({
      type: types.AUTH_ERROR,
      payload: "이미 사용중인 이메일입니다",
    });
  }
};

export const signOut = () => {
  localStorage.removeItem("token");

  return {
    type: types.SIGN_OUT,
    payload: "",
  };
};
