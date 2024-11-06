'use client'
import Image from 'next/image';
import {useState,useEffect} from 'react';
import io from 'socket.io-client';
import { IoSend } from 'react-icons/io5'
const socket =io.connect('http://localhost:3001')

function message(){
    
    const[message,setMessage]=useState('')
    const [receviedMessage,setReceivedMessage]=useState('')
  
    const SendMessage=()=>{
        socket.emit('send text',{message})
        console.log(message);
    }
    useEffect(()=>{
        socket.on('text_received',(data)=>{
            setReceivedMessage(data.message)
            console.log(data.message)
        })
    },[socket])
    return(
        <section className=' flex flex-col h-16 border rounded-lg bg-white-900 opacity-2 rounded text-2xl sm:text-3xl md:text-4xl flex-col'>

            <div className='flex flex-row'>
                <Image src="/componets/photos/gee.jpej" width={400} height={100} alt='no photo' className=' rounded-full'/>

            </div>
           

            <div className='flex-1 gap-2 overflow-y-auto'>
                hhhf

            </div>
            
        
            
            <div>
                <input type='text' className='text-black font-semiblod' placeholder='type message...'/>
        
            <button onClick={SendMessage} className='p-2'><IoSend size={30}/></button>
            {receviedMessage}
            
            </div>

        </section>
    )
}
export default message;