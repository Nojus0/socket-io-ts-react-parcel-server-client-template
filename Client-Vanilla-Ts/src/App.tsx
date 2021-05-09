import React, { useContext } from 'react'
import { WSContext } from "./WSContext"

function App() {
    const { IsConnected: [conn] } = useContext(WSContext);
    return (
        <div>
            <h1>You are {conn ? "connected" : "disconnected"}</h1>
        </div>
    )
}

export default App
