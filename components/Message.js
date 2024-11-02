'use client'
import {useState,useEffect} from 'react';
import io from 'socket.io-client';
const socket =io.connect('http://localhost:3001')

function message(){
    const [room,setRoom]=useState('')
    const[message,setMessage]=useState('')
    const [receviedMessage,setReceivedMessage]=useState('')
    const joinRoom=()=>{
        if(!room==""){
            socket.emit('user',room)
        }
    }
    const SendMessage=()=>{
        socket.emit('send text',{message,room})
    }
    useEffect(()=>{
        socket.on('text_received',(data)=>{
            setReceivedMessage(data.message)
        })
    },[socket])
    return(
        <section>
            <input placeholder='room number' className='boader-1.5 bg-blue-600'
            onChange={(e)=>{
                setRoom(e.target.value)
            }}/>
            <button onClick={SendMessage}>send</button>
            <h1>test</h1>
            {receviedMessage}
        </section>
    )
}
export default message;