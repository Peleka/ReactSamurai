import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    onChange: () => void
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.onChange}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    onClick: () => void
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <>
            <h3 onClick={(e) => props.onClick()}>--{props.title}--</h3>
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
