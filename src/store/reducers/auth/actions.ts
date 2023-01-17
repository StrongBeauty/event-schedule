import {AppDispatch} from "../../index";
import axios from "axios";

export type UserType = {
    login: string,
    password: string,
}

type SetAuthAction = {
    type: 'SET_AUTH',
    payload: boolean,
}

type SetUserAction = {
    type: 'SET_USER',
    payload: UserType
}

type SetIsLoadingAction = {
    type: 'SET_IS_LOADING',
    payload: boolean
}

type SetErrorAction = {
    type: 'SET_ERROR',
    payload: string
}

export type ActionsType =
    SetAuthAction |
    SetUserAction |
    SetIsLoadingAction |
    SetErrorAction

export const AuthActionsCreators = {
    setUser: (user: UserType): SetUserAction => ({type: "SET_USER", payload: user}),
    setIsAuth: (auth: boolean): SetAuthAction => ({type: "SET_AUTH", payload: auth}),
    setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({type: "SET_IS_LOADING", payload: isLoading}),
    setError: (error: string): SetErrorAction => ({type: "SET_ERROR", payload: error}),
    logIn: (login: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionsCreators.setIsLoading(true))
            setTimeout(async () => {
                const response = await axios.get<UserType[]>('./mock/users.json')
                const mockUser = response.data.find(u => u.login === login && u.password === password)
                if (mockUser) {
                    localStorage.setItem('auth', 'true');
                    localStorage.setItem('login', mockUser.login);
                    dispatch(AuthActionsCreators.setIsAuth(true));
                    dispatch(AuthActionsCreators.setUser(mockUser));
                } else {
                    dispatch(AuthActionsCreators.setError('Wrong login or password!'))
                }
                dispatch(AuthActionsCreators.setIsLoading(false))
            }, 1000)
        } catch (err) {
            dispatch(AuthActionsCreators.setError('Error!!'))
        }
    },
    logOut: () => async (dispatch: AppDispatch) => {
        dispatch(AuthActionsCreators.setIsLoading(true))
        localStorage.removeItem('auth');
        localStorage.removeItem('login');
        dispatch(AuthActionsCreators.setUser({} as UserType))
        dispatch(AuthActionsCreators.setIsAuth(false))
        dispatch(AuthActionsCreators.setIsLoading(false))
    },
}