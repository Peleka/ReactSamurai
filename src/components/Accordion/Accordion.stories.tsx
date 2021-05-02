import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from '@storybook/react';

const CategoryObj = (categoryName: string) => ({
    table: {
        category: categoryName
    }
})

export default {
    title: 'components/Accordion',
    component: Accordion,
    argType: {
        color: {
            control: "color",
            ...CategoryObj('Color')
        },
        onChange: {
            ...CategoryObj('Events')
        }
    }
};

const callback = action('accordion mode change event fired')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;
const callbackProps = {
    onChange: callback
}

export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
    ...callbackProps,
    titleValue: 'Wish',
    /**
     * тут можно написать комментарий ctr+Q подсказка
     */
    collapsed: true
}

export const UnCollapsedMode = Template.bind({})
UnCollapsedMode.args = {
    ...callbackProps,
    titleValue: 'Users',
    collapsed: false
}
//
// export const CollapsedMode = () => <Accordion titleValue={'Wish'} onChange={callback} collapsed={true}/>
// export const UnCollapsedMode = () => <Accordion titleValue={'Users'} onChange={callback} collapsed={false}/>

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(false)
    // return <Accordion titleValue={'Users'} onChange={() => setValue(!value)} collapsed={value}/>
    return <Accordion {...args} onChange={ () => setValue(!value)} collapsed={value}/>
}
ModeChanging.args = {
    titleValue: 'Users'
}