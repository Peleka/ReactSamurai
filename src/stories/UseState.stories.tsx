import React, {useMemo, useState} from "react";

export default {
    title: 'useState demo'
}

function generateData () {
    //difficult counting
    console.log('getNumber')
    return 1;
}

export const Example1 = () => {
//@ts-ignore
//    let initialState =  useMemo(generateData, [])
    console.log('Example1')
    const [counter, setCounter] = useState(generateData)

    return <>

        <button onClick={
            //@ts-ignore
             () => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}