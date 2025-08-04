import React from "react";
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from "react";


function DateTime() {
    const [now, setNow] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setNow(new Date())
        }, 1000);

        return () => clearInterval(timer)
    }, [])

    return (
        <div>
            <h2>{now.toLocaleDateString()}</h2>
            <h4>{now.toLocaleTimeString()}</h4>
        </div>
    )
}

export default DateTime
