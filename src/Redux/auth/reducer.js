
import { LOG_FAIL, LOG_RES, LOG_SUCC } from './actiontypes'
const initState = {
    isAuth: false,
    isLoading: false,
    isError: false,
    errorMessage: "",
    token: "",
    name: "",
    avatar: ""
  };
  
  export const reducer = (state = initState, { type, payload }) => {
    // console.log(payload?.name)
    switch (type) {
      case LOG_RES:
        return { ...state, isLoading: true };
  
      case LOG_SUCC:
        return {
          ...state,
          isLoading: false,
          isAuth: true,
          token: payload?.token,
          name: payload?.name,
          avatar: payload?.avatar,
          isError: false,
          errorMessage: "",
        };
  
      case LOG_FAIL:
        return {
          ...state,
          isLoading: false,
          isError: true,
          errorMessage: payload
        };
        case "LOGOUT":
      return {
        ...state,
        isAuth: false,
        token: "",
        name: "",
        avatar: "",
      };
  
      default:
        return state;
    }
  };