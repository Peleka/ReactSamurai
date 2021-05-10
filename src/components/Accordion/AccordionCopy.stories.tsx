import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from '@storybook/react';

export default {
    title: 'Accordion',
    component: Accordion
};

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

export const CollapsedMode = () => <Accordion titleValue={'Wish'}
                                              onChange={callback}
                                              collapsed={true} items={[]}
                                              onClick={callback}
/>
export const UnCollapsedMode = () => <Accordion onClick={onClickCallback}
                                                titleValue={'Users'}
                                                onChange={callback}
                                                collapsed={false}
                                                items={[{title: "Ann", value: 1}, {
                                                    title: "Dima",
                                                    value: 2
                                                }, {title: "Elen", value: 3}]}
/>

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(false)
    return <Accordion titleValue={'Users'}
                      onChange={() => setValue(!value)}
                      collapsed={value}
                      items={[{title: "Ann", value: 1}, {title: "Dima", value: 2}, {title: "Elen", value: 3}]}
                      onClick={onClickCallback}
    />
}