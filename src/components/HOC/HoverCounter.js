import React, { useState } from 'react'
import CounterHOC from './CounterHOC'

function HoverCounter({increment,count}) {
    /* const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    } */

    return <>
        <h2>In Hover Counter Component - count is {count}</h2>
        <button onMouseOver={increment}>Click</button>
    </>
}
export default CounterHOC(HoverCounter)
