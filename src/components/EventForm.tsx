import React, {FC, useState} from "react";
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {rules} from "../utils/rules";
import {UserType} from "../store/reducers/auth/actions";
import {EventType} from "../store/reducers/event/actions";

type EventFormPropsType = {
    guests: UserType[],
    submit: (event: EventType) => void,
}

export const EventForm: FC<EventFormPropsType> = ({guests, submit}) => {

    const [newEvent, setNewEvent] = useState<EventType>({
        author: '',
        date: '',
        description: '',
        guest: '',
    } as EventType)

    const selectDate = (date: any) => {

        setNewEvent({...newEvent, date: date})
    }

    return (
        <Form onFinish={(event: EventType) => submit(event)}>
            <Form.Item label='Event description'
                       name='description'
                       rules={[rules.required()]}
            >
                <Input value={newEvent.description}
                       onChange={e => setNewEvent({...newEvent, description: e.target.value})}
                />
            </Form.Item>
            <Form.Item label='Event date'
                       name='date'
                       rules={[rules.required()]}
            >
                <DatePicker
                    onChange={(date) => date ? selectDate(`${date.date}.${date.month}.${date.year}`) : null}
                />
            </Form.Item>
            <Form.Item label='Choose a guest'
                       name='guest'
                       rules={[rules.required()]}>
                <Select onChange={(guest: string) => setNewEvent({...newEvent, guest})}>
                    {guests
                        .map(guest =>
                            <Select.Option key={guest.login}>
                                {guest.login}
                            </Select.Option>)
                    }
                </Select>
            </Form.Item>
            <Row justify='end'>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>
                        Create
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    )
}