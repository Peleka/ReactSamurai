import React, {MouseEventHandler, useState} from "react";
import s from './Reting.module.css'

type RaitingPropsType ={

}

export function UncontrolledRaiting(props: RaitingPropsType) {
    const [value, setValue] = useState(0)

        return (
            <div className={s.wrapper}>
                <Star selected={value > 0} setValue={setValue} value={1}/>
                <Star selected={value > 1} setValue={setValue} value={2}/>
                <Star selected={value > 2} setValue={setValue} value={3}/>
                <Star selected={value > 3} setValue={setValue} value={4}/>
                <Star selected={value > 4} setValue={setValue} value={5}/>
            </div>
        )
    }

type StarPropsType = {
    value: 1 | 2 | 3 | 4 | 5
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
    selected: boolean
}

function Star(props: StarPropsType) {
    return <span
        className={props.selected ? s.star : s.starBold}
        onClick={() => props.setValue(props.value)}
    />
}