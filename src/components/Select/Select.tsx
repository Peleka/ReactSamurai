import React from "react";
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    item: ItemType[]
    collapsed: boolean
    onClick: (item: string) => void
}

export function Select(props: SelectPropsType) {

    return (
        <div>
            <div
                className={s.select}
                onClick={props.onChange}
            >
                {props.value}
            </div>
            {! props.collapsed && props.item.map(i => <div
                key={i.value}
                onClick={() => props.onClick(i.title)}

            >{i.title}</div>)}
        </div>
    )
}