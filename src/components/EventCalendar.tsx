import {Badge, Calendar} from "antd";
import {FC} from "react";
import {EventType} from "../store/reducers/event/actions";
import {Dayjs} from "dayjs";

type EventCalendarPropsType = {
    events: EventType[]
}

export const EventCalendar: FC<EventCalendarPropsType> = ({events}) => {

    function dateCellRender (value: Dayjs) {
        const currentDayEvents = events.filter(e => e.date === value.date().toString())
        return (
            <ul className='events'>
                {currentDayEvents.map((e, index) => (
                    <li key={index + e.description + e.guest}>
                        <Badge text={e.description}/>
                    </li>
                    ))}
            </ul>
        )
    }

    return (
        <Calendar dateCellRender={dateCellRender}/>
    )
}