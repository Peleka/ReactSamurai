import React, {ChangeEvent, useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Select, SelectPropsType} from "./Select";
import {Story} from "@storybook/react";



export default {
    title: 'Select',
    component: Select
};

const callback = action('select mode change event fired')
const onClickCallback = action('some item was clicked')

export const CollapsedMode = () => <Select value={'Wish'}
                                           onClick={onClickCallback}
                                           collapsed={false}
                                           onChange={callback}
                                           item={[{title: "Ann", value: 1}, {title: "Dima", value: 2}, {title: "Elen", value: 3}]}
/>

export const ModeChanging: Story<SelectPropsType> = (args) => {
    const [value, setValue] = useState<string>('Select')
    const [collapse, setCollapse] = useState<boolean>(true)

    const onClickItem = (item: string) => {
        setValue(item)
        setCollapse(!collapse)
    }

    return <Select value={value}
                   onClick={onClickItem}
                   collapsed={collapse}
                   onChange={() => setCollapse(!collapse)}
                   item={[{title: "Ann", value: 1}, {title: "Dima", value: 2}, {title: "Elen", value: 3}]}
    />
}