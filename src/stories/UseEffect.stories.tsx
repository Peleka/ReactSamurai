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

export const SetIntervalExample = () => {

    const [counter, setCounter] = useState(1)

    console.log("SimpleExample");

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("SetTimeout")
            setCounter(state => state + 1)
        }, 1000)

        return (() => {
            clearInterval(intervalId)
        })
    }, [])


    return <>
        Hello, counter: {counter}

    </>
}

export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1)

    console.log("Component rendered" + counter);

    useEffect(() => {
        console.log('Effect occurred ' + counter)

        return (() => {
            console.log('RESET EFFECT ' + counter)
        })
    }, [counter])

    const increase = () => {
        setCounter(counter + 1)
    }
    return <>
        Hello, counter: {counter}
        <button onClick={increase}>+</button>

    </>
}

export const KeyboardEventExample = () => {

    const [text, setText] = useState('')

    console.log("Component rendered" + text);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText((state) => state + e.key)
        }

        window.addEventListener('keypress', handler)

        return (() => {
            window.removeEventListener('keypress', handler)
            console.log('RESET EFFECT ' + text)
        })
    }, [])

    return <>
        Text: {text}

    </>
}