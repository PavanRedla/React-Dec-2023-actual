import React from 'react'
import { useState } from 'react';

export default function CounterHOC(InputComponent) {
    function UpdatedComponent() {
        const [count, setCount] = useState(0);
        const increment = () => {
            setCount(count + 1);
        }

        return <InputComponent count={count} increment={increment} />
    }
    return UpdatedComponent;
}
