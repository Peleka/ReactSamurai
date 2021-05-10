import React from "react";

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    item: ItemType[]
}

export function Select(props: SelectPropsType) {

    return (
        <div>
            <div onClick={()=> {alert('click')}}>{props.item.find(i => i.title === props.value)}</div>
            {props.item.map(i => <div>{i.title}</div>)}
        </div>
    )
}