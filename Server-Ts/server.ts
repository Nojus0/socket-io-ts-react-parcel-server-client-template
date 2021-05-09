import { Server } from "socket.io"
const PORT = Number(process.env.PORT) || 3000;

const SERVER = new Server(PORT, {
    cors: {
        credentials: true,
        origin: "*"
    }
})

SERVER.on("connection", socket => {
    console.log(`User connected from ${socket.handshake.address} ${Math.random()}`);

    socket.on("AddPlayer", (e: IAddPlayer) => {
        console.log(`
        Added Player
        ${JSON.stringify(e, null, 2)}
        `)
    })
})

interface IAddPlayer {
    nickname: string,
    avatar: "KING" | "QUEAN"
}

console.log(`Listening on port ${PORT}`)