import React, {useState} from "react";

export type AccordionPropsType = {
    titleValue: string
    onChange: () => void
    collapsed: boolean
    /**
     * optional color header text
     */
    color: string
}

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            color={props.color}

                            onClick={props.onChange}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    onClick: () => void
    title: string
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <>
            <h3
                style={{color: props.color ? props.color : "black"}}
                onClick={(e) => props.onClick()}>--{props.title}--</h3>
        </>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
