import React from "react";
import s from './OnOff.module.css'

type onOffPropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

function OnOff(props: onOffPropsType) {

    let classNameOn;
    let classNameOff = s.basic
    let classNameIndicator = s.indicator
    props.on ? (classNameIndicator = classNameIndicator + ' ' + s.green) : (classNameIndicator = classNameIndicator + ' ' + s.red)
    props.on && (classNameOn = s.green)
    !props.on && (classNameOff = s.red)

    return (
        <div className={s.bnt}>
            <button className={classNameOn} onClick={() => {props.onChange(true)}}>ON</button>
            <button className={classNameOff} onClick={() => {props.onChange(false)}}>OFF</button>
            <div className={classNameIndicator}></div>
        </div>
    )
}

export default OnOff;