import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {


    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("SimpleExample");
    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every counter change ')
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setCounter(counter + 1)}>+</button>

    </>
}

export const SetTimeoutExample = () => {

    const [counter, setCounter] = useState(1)

    console.log("SimpleExample");

    useEffect(() => {
        setInterval(() => {
            console.log("SetTimeout")
            setCounter(state => state +1)
        }, 1000)
    }, [])


    return <>
        Hello, counter: {counter}

    </>
}