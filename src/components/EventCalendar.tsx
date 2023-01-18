import {Badge, Calendar} from "antd";
import {FC} from "react";
import {EventType} from "../store/reducers/event/actions";

type EventCalendarPropsType = {
    events: EventType[]
}

export const EventCalendar: FC<EventCalendarPropsType> = ({events}) => {

    function dateCellRender (val: any) {
        const value = `${val.date}.${val.month}.${val.year}`
        const currentDayEvents = events.filter(e => e.date === value)
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