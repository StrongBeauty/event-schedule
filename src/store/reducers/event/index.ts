import {UserType} from "../auth/actions";
import {ActionsType, EventType} from "./actions";


type InitialStateType = typeof initialState

const initialState = {
    events: [] as EventType[],
    guests: [] as UserType[],
}

export default function EventReducer(state: InitialStateType = initialState, action: ActionsType) {
    switch(action.type) {
        case 'SET_EVENTS': {
            return {...state, events: action.payload}
        }
        case 'SET_GUESTS': {
            return {...state, guests: action.payload}
        }
        default:
            return state
    }
}