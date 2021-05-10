import React, {useState} from "react";

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    onChange: () => void
    collapsed: boolean
    // /**
    //  * optional color header text
    //  */
    // color?: string
    items: ItemType[]
    onClick: (value: any) => void

}

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            // color={props.color}

                            onClick={props.onChange}/>
            {!props.collapsed && <AccordionBody
                onClick={props.onClick}
                items={props.items}/>}
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

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    return (
        <ul>
            { props.items.map((i,index) =>
                <li onClick={() => {props.onClick(i.value)}}
                    key={index}>{i.title}</li>)}
        </ul>
    )
}
