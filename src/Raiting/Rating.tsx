import React from "react";
import s from './Raiting.module.css'

export type RaitingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RaitingPropsType ={
    value: RaitingValueType
    onClick: (value: RaitingValueType) => void
}

export function Raiting(props: RaitingPropsType) {

        return (
            <div className={s.wrapper}>
                <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
                <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
                <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
                <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
                <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
            </div>
        )
    }

type StarPropsType = {
    value: RaitingValueType
    selected: boolean
    onClick:  (value: RaitingValueType) => void
}

function Star(props: StarPropsType) {

    return <span

        className={!props.selected ? s.star : s.starBold}
        onClick={() => {
            props.onClick(props.value)} }
    />
}