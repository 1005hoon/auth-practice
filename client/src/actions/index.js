import axios from "axios";
import * as types from "./types";

export const signUp =
  ({ email, password }) =>
  async (dispaych) => {
    const user = await axios.post("http://localhost:5000/signup", {
      email,
      password,
    });
  };
