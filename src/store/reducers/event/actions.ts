import {UserType} from "../auth/actions";
import {EventType} from "@testing-library/react";
import {AppDispatch} from "../../index";
import axios from "axios";

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
    setGuests: (guests: UserType[]): SetGuestsType => ({type: 'SET_GUESTS', payload: guests}),
    setEvents: (events: EventType[]): SetEventsType => ({type: 'SET_EVENTS', payload: events}),
    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            const response = await axios.get<UserType[]>('./mock/users.json')
            dispatch(EventActionCreators.setGuests(response.data))
        } catch (err) {
            console.log(err)
        }
    }
}