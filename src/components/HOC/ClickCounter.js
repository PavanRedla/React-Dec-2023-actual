import React, { useState } from 'react'
import CounterHOC from './CounterHOC'

function ClickCounter({ increment, count }) {
    /* const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    } */

    return <>
        <h2>In Click Counter Component - count is {count}</h2>
        <button onClick={increment}>Click</button>
    </>
}
export default CounterHOC(ClickCounter)
