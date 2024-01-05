import { DELETE_PRODUCT } from "./actionType"
import { EDIT_PRODUCT, GET_PRODUCT, PROD_POST_FAIL, PROD_POST_REQ, PROD_POST_SUCC } from "./actionType"

const initState={
    isLoading:false,
    isError:false,
    products:[]
}
export const reducer=(state=initState,{type,payload})=>{
switch(type){
    case PROD_POST_REQ:{
        return {...state,isLoading:true}
    }
    case PROD_POST_SUCC:{
        return {...state,isLoading:false,isError:false,products:payload}
    }
    case PROD_POST_FAIL:{
        return {...state,isLoading:false,isError:true}
    }
    case GET_PRODUCT:{
        return {...state,isLoading:false,isError:false,products:payload}
    }
    case EDIT_PRODUCT:{
        return {...state,isLoading:false,isError:false}
    }
    case DELETE_PRODUCT:{
        return {...state,isLoading:false,isError:false}
    }
    default:{
        return state
    }
}
}