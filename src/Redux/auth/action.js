import axios from "axios"
import { LOG_FAIL, LOG_RES, LOG_SUCC } from "./actiontypes"

export const getLog = (userdata) => (dispatch) => {
    dispatch({ type: LOG_RES });
  
    let login = axios
      .post("https://nykaa-irdl.onrender.com/api/login", userdata)
      .then((res) => {
        // console.log(res.data)
        const {token}=res.data;
        localStorage.setItem('token',token)
        // console.log(token)
        dispatch({ type: LOG_SUCC, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: LOG_FAIL, payload: err.message });
      });
  
    return login;
  };
  export const logout = () => (dispatch) => {
    // Remove the token from localStorage
    localStorage.removeItem('token');
  
    // Dispatch the LOGOUT action to update the state
    dispatch({ type: "LOGOUT" });
  };