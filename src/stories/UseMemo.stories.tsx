import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const Example1 = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA = 1
    let resultB = 1

   resultA = useMemo(() => {
       let tempResultA = 1;
       for(let i = 1; i <= a; i++) {
           let fake = 0;
           while (fake < 100000000) {
               fake++;
               const fakeValue = Math.random()
           }
           tempResultA = tempResultA * i
       }
       return tempResultA

   },[a])


    for(let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>

    </>
}

export const UsersSecret = (props: {users: Array<string>}) => {
    console.log("USERS SECRET")
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const HelpsToRectMemo = () => {
    console.log("HelpsToRectMemo")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimuch', 'Ann', 'Mary'])

    const newArray = useMemo(()=> {
        return users.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [users])

    const addUser = () => {
        const newUser = [...users, 'Sveta ' + new Date().getTime()];
        setUsers(newUser)
    }

    return <>
    <button onClick={() => setCounter(counter + 1)}>+</button>
    <button onClick={() => addUser()}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}