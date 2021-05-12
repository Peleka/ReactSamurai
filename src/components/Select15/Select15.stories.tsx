import React, {useState} from 'react';
import {Select15} from "./Select15";
import {action} from "@storybook/addon-actions";


export default { //экспортируем название какую компоненту тестируем
    title: 'Select15 ',
    component: Select15,
};
//экспортируем отдельные истории
export const BaseExample = () => {
    const [value, setValue] = useState('1')

    return <>
        <Select15
            onChange={setValue}
            value={value}
            item={[
                {value: "1", title: "Minsk"},
                {value: "2", title: "Grodno"},
                {value: "3", title: "Slonim"}
            ]}
        />
    </>
}


