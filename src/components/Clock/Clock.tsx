import React, {useEffect, useState} from "react";
import {AnalogClockView} from "./AnalogClock/AnalogClock";
import {DigitalClockView} from "./DigitalClock/DigitalClock";

type PropsType = {
    mode?: "analog" | "digital"
}


export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const intervalId = setInterval(() => {
            console.log("TICK")
            setDate(new Date())
        }, 1000);
        //вызовется когда компонента будет "умирать"
        return () => {
            clearInterval(intervalId)
        }

    }, [])

    //можно вынести в отдельный файл


    let view;

    switch (props.mode) {
        case "analog" :
            view = <AnalogClockView  date={date}/>
            break
        case "digital" :
        default:
            view = <DigitalClockView date={date}/>
    }

    return <div>
        {view}
    </div>
}
export type ClockViewPropsType = {
    date: Date
}


