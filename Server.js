import {Server} from 'socket.io'
const io =new Server(3000);
io.on('connected',(socket)=>{
    console.log('connected successifuly');
    socket.on('join room',({roomId})=>{
        console.log('user connected:${roomId}')
        socket.join(roomId)
    })
    socket.on('sendText',({message,roomId})=>{
        io.to(romId).emit('message',message)
    })
    socket.on('disconnect',()=>{
        console.log('user disconnected')
    })
})