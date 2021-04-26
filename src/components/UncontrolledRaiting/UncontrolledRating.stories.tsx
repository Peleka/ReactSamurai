import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {UncontrolledRaiting} from "./UncontrolledRating";



export default {
    title: 'UncontrolledRaiting',
    component: UncontrolledRaiting,
};

const callback = action('accordion mode change event fired')

export const CollapsedMode = () => <UncontrolledRaiting/>

// export const ModeChanging = () => {
//     const[value, setValue] = useState<boolean>(false)
//     return <UncontrolledAccordion titleValue={'title'}/>
// }