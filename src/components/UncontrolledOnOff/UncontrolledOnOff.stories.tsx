import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import UncontrolledOnOff from "./UncontrolledOnOff";



export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
};

const callback = action('on or off clicked')

export const OnMode = () => <UncontrolledOnOff defaultOn={true}/>
export const OffMode = () => <UncontrolledOnOff defaultOff={false}/>
export const BugMode = () => <div>Unsync when change defaultValue when already rendered</div>
