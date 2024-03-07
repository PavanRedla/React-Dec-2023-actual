import React, { useCallback, useMemo, useState } from 'react'
import UseCallBackChild1 from './UseCallBackChild1'
import UseCallBackChild2 from './UseCallBackChild2'

export default function UseCallbackExample() {
    console.log('Parent rendered')
    const [a, setA] = useState(10);
    const [b, setB] = useState(20);
    let arr = useMemo(() => {
        return [10, 20, 30]
    }, [])

    /* const f1 = function () {
        console.log('I am f1...')
    } */
    const f1 = useCallback(() => {
        return function () {
            console.log('I am f1...')
        }
    }, [])

    return <>
        <h1>A - {a} , B - {b}</h1>
        <button onClick={() => setA(a + 1)} className='m-1'>update -a </button>
        <button onClick={() => setB(b + 1)}>update -b </button>

        <UseCallBackChild1 a={a} f1={f1} />
        <UseCallBackChild2 b={b} arr={arr} />
    </>
}
