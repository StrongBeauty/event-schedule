import {Calendar} from "antd";
import {FC} from "react";

type EventType = {
    author: string;
    guest: string;
    date: string;
    description: string;
}

export const EventCalendar: FC = () => {
    return (
        <Calendar/>
    )
}