import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";

export default {
  title: 'Example/input'
}

export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState("")

  return <><input onChange={(e) => {
    const actualValue = e.currentTarget.value
    setValue(actualValue)
  }}/> - {value}   </>
}
export const GetValueOfUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const save = () => {
    const el = inputRef.current as HTMLInputElement
    setValue(el.value)}

  return <><input ref={inputRef}/>
    <button
        onClick={ save }>save</button> - actual value {value}

      {/*//арушение принципов реакта, обращение к документу через getElementById*/}
      {/*// onClick={() => {*/}
      {/*//   const el = document.getElementById("input") as HTMLInputElement*/}
      {/*//   setValue(el.value)}}>save</button> - actual value {value}*/}

  </>
}

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState("")
  // debugger
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    // debugger
    setParentValue(e.currentTarget.value)
  }
  return <input value={parentValue} onChange={ onChangeValue } />
}

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(true)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked)
  }
  return <input type="checkbox" checked={parentValue} onChange={ onChange } />
}

export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState < string | undefined>("2")
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value)
  }
  return <select value={parentValue} onChange={onChange}>
    <option>none</option>
    <option value={1}>Minsk</option>
    <option value={2}>Moscow</option>
    <option value={3}>Kiev</option>
  </select>
}