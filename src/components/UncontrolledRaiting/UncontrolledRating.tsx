import React, {useState} from "react";
import s from './UncontrolledRaiting.module.css'

type RaitingValueType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}
type RaitingPropsType ={
}

export function UncontrolledRaiting(props: RaitingPropsType) {
    const [value, setValue] = useState(0)

        return (
            <div className={s.wrapper}>
                <Star selected={value > 0} setValue={() => setValue(1)}/>
                <Star selected={value > 1} setValue={() => setValue(2)}/>
                <Star selected={value > 2} setValue={() => setValue(3)}/>
                <Star selected={value > 3} setValue={() => setValue(4)}/>
                <Star selected={value > 4} setValue={() => setValue(5)}/>
            </div>
        )
    }

type StarPropsType = {
    setValue: () => void
    selected: boolean
}

function Star(props: StarPropsType) {
    return <span
        className={!props.selected ? s.star : s.starBold}
        onClick={() => props.setValue()}
    />
}