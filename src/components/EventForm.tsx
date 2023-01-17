import React, {FC} from "react";
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {rules} from "../utils/rules";
import {UserType} from "../store/reducers/auth/actions";

type EventFormPropsType = {
    guests: UserType[]
}

export const EventForm: FC<EventFormPropsType> = ({guests}) => {

    return (
        <Form>
            <Form.Item label='Event description'
                       name='description'
                       rules={[rules.required()]}
            >
                <Input
                />
            </Form.Item>
            <Form.Item label='Event date'
                       name='date'
                       rules={[rules.required()]}
            >
                <DatePicker/>
            </Form.Item>
            <Form.Item>
                <Select>
                    {guests
                        .map(guest => <Select.Option>{guest.login}</Select.Option>)
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