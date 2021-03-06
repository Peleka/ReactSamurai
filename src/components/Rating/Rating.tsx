import React from "react";
import s from './Rating.module.css'

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType ={
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {

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
    value: RatingValueType
    selected: boolean
    onClick:  (value: RatingValueType) => void
}

function Star(props: StarPropsType) {

    return <span

        className={!props.selected ? s.star : s.starBold}
        onClick={() => {
            props.onClick(props.value)} }
    />
}