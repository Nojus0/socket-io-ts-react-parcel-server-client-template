import React, { createContext, useState } from 'react'
import SocketClient, { Socket } from "socket.io-client"
import { SocketHandler } from "./WSEvents"

export interface IWSContext {
    IsConnected: [boolean, React.Dispatch<React.SetStateAction<boolean>>],
    Socket: Socket
}

export const WSContext = createContext<IWSContext>({
    IsConnected: [false, () => { }],
    Socket: null
});


export default function WSContextProvider({ children }) {

    const STATE: IWSContext = {
        IsConnected: useState<boolean>(false),
        Socket: SocketClient("http://localhost:3000")
    }

    SocketHandler(STATE);
    
    return (
        <WSContext.Provider value={STATE}>
            {children}
        </WSContext.Provider>

    )
}

