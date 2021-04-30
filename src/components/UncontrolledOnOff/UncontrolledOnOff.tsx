import React, {useState} from "react";
import s from './UncontrolledOnOff.module.css'

type PropsType = {
    defaultOn?: boolean
    defaultOff?: boolean
}

function UncontrolledOnOff(props:PropsType ) {
    const [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

    let classNameOn;
    let classNameOff = s.basic
    let classNameIndicator = s.indicator
    on ? (classNameIndicator = classNameIndicator + ' ' + s.green) : (classNameIndicator = classNameIndicator + ' ' + s.red)
    on && (classNameOn = s.green)
    !on && (classNameOff = s.red)

    return (
        <div className={s.bnt}>
            <button className={classNameOn} onClick={() => {setOn(true)}}>ON</button>
            <button className={classNameOff} onClick={() => {setOn(false)}}>OFF</button>
            <div className={classNameIndicator}></div>
        </div>
    )
}

export default UncontrolledOnOff;