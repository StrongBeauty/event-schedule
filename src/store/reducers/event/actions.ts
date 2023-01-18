import {UserType} from "../auth/actions";
import {AppDispatch} from "../../index";
import axios from "axios";

export type EventType = {
    author: string;
    guest: string;
    date: string;
    description: string;
}

type SetGuestsType = {
    type: 'SET_GUESTS',
    payload: UserType[]
}

type SetEventsType = {
    type: 'SET_EVENTS',
    payload: EventType[]
}

export type ActionsType =
    SetGuestsType |
    SetEventsType

export const EventActionCreators = {
    setGuests: (payload: UserType[]): SetGuestsType => ({type: 'SET_GUESTS', payload}),
    setEvents: (payload: EventType[]): SetEventsType => ({type: 'SET_EVENTS', payload}),
    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            const response = await axios.get<UserType[]>('./mock/users.json')
            dispatch(EventActionCreators.setGuests(response.data))
        } catch (err) {
        }
    },
    createEvent: (payload: EventType) => async (dispatch: AppDispatch)=> {
        try {
            const events = localStorage.getItem('events') || '[]'
            const json = JSON.parse(events) as EventType[]
            json.push(payload)
            dispatch(EventActionCreators.setEvents(json))
            localStorage.setItem('events', JSON.stringify(json))
        } catch (err) {
        }
    },
    fetchEvents: (name: string) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem('events') || '[]'
            const json = JSON.parse(events) as EventType[]
            const currentUserEvents = json.filter(e => e.guest === name || e.author === name)
            dispatch(EventActionCreators.setEvents(currentUserEvents))
        } catch (err) {
        }
    },
}