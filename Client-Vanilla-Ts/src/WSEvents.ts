import { Socket } from "socket.io-client";
import { IWSContext } from "./WSContext"

export function SocketHandler(context: IWSContext) {
    const [conn, setConn] = context.IsConnected
    context.Socket.on("connect", () => setConn(true));
}