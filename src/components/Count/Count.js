import React, { useState } from 'react';

const Count = () => {
    const [number, setNumber] = useState(0);
    const num = 99;

    const handleIncrease = () => {
        const newNumber = number + 1;
        setNumber(newNumber);
    }

    const handelDecrease = () => {
        const newNumber = number - 1;
        setNumber(newNumber);
    }

    return (
        <div>
            <h1>{num + number}</h1>
            <h2>Updated Number: {number}</h2>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handelDecrease}>Decrease</button>
        </div>
    );
};

export default Count;