import React, {FC, useEffect, useState} from "react";
import {EventCalendar} from "../components/EventCalendar";
import {Button, Layout, Modal, Row} from "antd";
import {EventForm} from "../components/EventForm";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {EventType} from "../store/reducers/event/actions";

export const Schedule: FC = () => {
    const {guests, events} = useTypedSelector(state => state.event)
    const {login} = useTypedSelector(state => state.auth.user)

    const [isModalOpen, setIsModalOpen] = useState(false)

    const {fetchGuests, createEvent, fetchEvents} = useActions()

    useEffect(() => {
        fetchGuests()
        fetchEvents(login)
    }, [])

    const addNewEvent = (event: EventType) => {
        setIsModalOpen(false)
        createEvent({...event, author: login})
    }

    return (
        <Layout>
            <EventCalendar
                events={events}/>
            <Row justify='center'>
                <Button onClick={() => setIsModalOpen(true)}>
                    Add event
                </Button>
            </Row>
            <Modal
                title='Add event'
                open={isModalOpen}
                footer={null}
                onCancel={() => setIsModalOpen(false)}
            >
                <EventForm guests={guests}
                           submit={(event) => addNewEvent(event)}
                />
            </Modal>
        </Layout>


    )
}