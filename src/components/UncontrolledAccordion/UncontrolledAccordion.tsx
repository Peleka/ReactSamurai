import React, {useReducer, useState} from "react";
import {action} from "@storybook/addon-actions";

type AccordionPropsType = {
    titleValue: string
}
type ActionType ={
    type: string
}
const reducer = (state: boolean, action: ActionType) => {
    if(action.type === "TOGGLE-COLLAPSED") {
        return !state
    }


    return state
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    // const [collapsed, setCollapsed] = useState(false)
    const [collapsed, dispatch] = useReducer(reducer, false)


    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>*/}
            <AccordionTitle title={props.titleValue} onClick={() => dispatch({type: "TOGGLE-COLLAPSED"})}/>
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