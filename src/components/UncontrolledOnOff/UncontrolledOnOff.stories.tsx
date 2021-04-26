import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import UncontrolledOnOff from "./UncontrolledOnOff";



export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
};

const callback = action('accordion mode change event fired')

export const CollapsedMode = () => <UncontrolledOnOff/>

// export const ModeChanging = () => {
//     const[value, setValue] = useState<boolean>(false)
//     return <UncontrolledAccordion titleValue={'title'}/>
// }