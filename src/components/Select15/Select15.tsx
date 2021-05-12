import React, {useEffect, useState, KeyboardEvent} from "react";
import s from './Select15.module.css'

type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    item: ItemType[]
}

export function Select15(props: SelectPropsType) {
    const [active, setActive] = useState(false)
    const [hoveredElement, setHoveredElement] = useState(props.value)

    const selectedItem = props.item.find(i => i.value === props.value)
    const hoveredItem = props.item.find(i => i.value === hoveredElement)

    useEffect(() => {
        setHoveredElement(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }


    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.item.length; i++) {
                if (props.item[i].value === hoveredElement) {
                    const pretendentElement = e.key === "ArrowDown"
                        ? props.item[i + 1]
                        : props.item[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.item[0].value)
            }
        }
        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }

    return (
        <>
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={s.items}>
                        {props.item.map(i =>
                            <div
                                onMouseEnter={() => setHoveredElement(i.value)}
                                className={s.item + " " + (hoveredItem === i ? s.selected : '')}
                                key={i.value}
                                onClick={() => onItemClick(i.value)}
                            >
                                {i.title}
                            </div>
                        )}
                    </div>
                }
            </div>
        </>
    )
}