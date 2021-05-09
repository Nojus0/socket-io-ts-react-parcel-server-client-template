import React, { useEffect, useState } from 'react'
import { io } from "./SOCKETS"
function App() {
    const [conn, setConn] = useState(io.connected);

    useEffect(() => {
        io.on("connect", () => {
            setConn(true);
        })
    }, [])
    
    return (
        <div>
            <h1>You are {io.connected ? "connected" : "disconnected"}</h1>
        </div>
    )
}

export default App
