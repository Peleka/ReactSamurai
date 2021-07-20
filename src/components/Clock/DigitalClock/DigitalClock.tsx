import React from "react";
import {ClockViewPropsType} from "../Clock";

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    const get2digitsString = (number: number) => number < 10
        ? "0" + number
        : number
    return <>
        <span>{get2digitsString(date.getHours())}</span>
        :
        <span>{get2digitsString(date.getMinutes())}</span>
        :
        <span>{get2digitsString(date.getSeconds())}</span>
    </>
}
