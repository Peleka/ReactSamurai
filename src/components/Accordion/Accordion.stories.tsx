import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {Accordion} from "./Accordion";



export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action('accordion mode change event fired')

export const CollapsedMode = () => <Accordion titleValue={'Wish'} onChange={callback} collapsed={true}/>
export const UnCollapsedMode = () => <Accordion titleValue={'Users'} onChange={callback} collapsed={false}/>

export const ModeChanging = () => {
    const[value, setValue] = useState<boolean>(false)
    return <Accordion titleValue={'Users'} onChange={() => setValue(!value)} collapsed={value}/>
}