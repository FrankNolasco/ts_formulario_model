import { useEffect, useState } from 'react'
// import { Calendar , CalendarProps } from 'primereact/calendar';
const dateFormat = "dd/mm/yy";

interface FormCalendarProps {
    // interface FormCalendarProps extends CalendarProps{
    defaultValue? : any
}

const FormCalendar = (props: FormCalendarProps) => {
    const [value, setValue] = useState(new Date())
    useEffect(() => {
        props.defaultValue && setValue(props.defaultValue)
        return () => {}
    }, [props.defaultValue])
    return (<div></div>
        // <Calendar
        //     value={value}
        //     dateFormat={dateFormat}
        //     className="calendar-control"
        //     onChange={(e : any) => {
        //         setValue(e.value)
        //         props.onChange && props.onChange(e)
        //     }}
        //     {...props}
        //   />
    )
}

export default FormCalendar
