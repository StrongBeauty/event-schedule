import {ActionsType, UserType} from "./actions";

type InitialStateType = typeof initialState;

const initialState = {
    isAuth: false,
    user: {} as UserType,
    isLoading: false,
    error: '',
}

export default function authReducer (state = initialState, action: ActionsType): InitialStateType {
 switch (action.type) {
     case 'SET_AUTH':
         return {...state, isAuth: action.payload}
     case "SET_USER":
         return {...state, user: action.payload}
     case "SET_IS_LOADING":
         return {...state, isLoading: action.payload}
     case "SET_ERROR":
         return {...state, error: action.payload, isLoading: false}
     default:
         return state;
 }
}
