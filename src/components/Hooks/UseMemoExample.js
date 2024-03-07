import React, { useMemo } from 'react'
import { useState } from 'react';

export default function UseMemoExample() {
    let [counter, updateCounter] = useState(0);

    let increment = () => {
        updateCounter(counter + 1);
    }
    const f1 = () => {
        for (let i = 1; i <= 1000; i++) {
            console.log('hello ', i)
        }
    }
    const f2 = () => {
        for (let i = 1; i <= 1000; i++) {
            console.log('hiiiii ', i)
        }
    }
    f1(); // How many times f1 will be called, on page load + every state change
    useMemo(() => f2(), []); // only on page load

    return <>
        <p>Current value - {counter} </p>
        <button onClick={increment}>Increment</button>
    </>
}
