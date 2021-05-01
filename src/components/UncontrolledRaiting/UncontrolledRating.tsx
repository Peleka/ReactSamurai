import React, {useState} from "react";
import s from './UncontrolledRaiting.module.css'

export type RatingPropsType = {
    defaultValue?: 0 | 1 | 2 | 3 | 4 | 5
    onChange: (value: 0 | 1 | 2 | 3 | 4 | 5) => void
}

export function UncontrolledRating(props: RatingPropsType) {
    const [value, setValue] = useState(props.defaultValue ? props.defaultValue : 0)

        return (
            <div className={s.wrapper}>
                <Star selected={value > 0} setValue={() => {
                    setValue(1);
                    props.onChange(1)
                }}/>
                <Star selected={value > 1} setValue={() => {
                    setValue(2);
                    props.onChange(2)
                }}/>
                <Star selected={value > 2} setValue={() => {
                    setValue(3);
                    props.onChange(3)
                }}/>
                <Star selected={value > 3} setValue={() => {
                    setValue(4);
                    props.onChange(4)
                }}/>
                <Star selected={value > 4} setValue={() => {
                    setValue(5);
                    props.onChange(5)
                }}/>
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