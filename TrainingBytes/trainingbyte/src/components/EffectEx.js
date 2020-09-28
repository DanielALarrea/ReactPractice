import React from 'react';
import { useState, useEffect } from 'react';

const EffectEx = (props) => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("hi");

    useEffect(() => {
        console.log("Count was changed")
    }, [count]);

    useEffect(() => {
        console.log("Name was changed")
    }, [name]);

    useEffect(() => {
        console.log("Either was changed")
    }, [name, count]);

    useEffect(() => {
        console.log("on Mount")
    })

    return (
        <div>
            <p>You clicked {count} times</p>
            <p>Name: {name}</p>
            <button onClick={()=> setCount(count + 1)}>Click me!</button>
            <button onClick={()=> setName("bye")}>Set name to bye</button>
        </div>
    )
}

export default EffectEx;