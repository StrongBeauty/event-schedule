type InitialStateType = typeof initialState;

type SetAuthAction = {
    type: 'SET_AUTH',
    payload: boolean,
}

const initialState = {
    isAuth: false
}

export default function authReducer (state = initialState, action: SetAuthAction): InitialStateType {
 switch (action.type) {
     case 'SET_AUTH':
         return {...state, isAuth: action.payload}
     default:
         return initialState;
 }
}
