import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>

            { !collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    onClick: ()=>void
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <>
            <h3 onClick={() => {props.onClick()}}>{props.title}</h3>
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

export default UncontrolledAccordion;