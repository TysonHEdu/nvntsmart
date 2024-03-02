"use client";
import React, { useState } from 'react';

function profitforecaster() {
    const [numbers, setNumbers] = useState('10-(5+3+2+7)');
    const [result, setResult] = useState('');

    const solveEquation = () => {
        const answer = eval(numbers);
        setResult(answer);
    };

    const screenColor = result < 0 ? 'red' : 'lightblue';

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh', background: screenColor }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <input type="text" value={numbers} onChange={(e) => setNumbers(e.target.value)} style={{ color: 'black' }} />
                <button onClick={solveEquation}>Solve</button>
                <h2>Result: {result}</h2>
            </div>
        </div>
    );
}

export default profitforecaster;
