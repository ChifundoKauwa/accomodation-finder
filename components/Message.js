'use client'
import {useState,useEffect,useRef} from 'react'
import {io} from 'socket.io-client'
import {ioSend} from 'react-icons'
function Message({roomId,userId}){
    const [message,setMessage] = useState('')
    const [messages,setMessages]=useState([])
    const sockeRef=useRef()
    const messageInputRef=useRef()

    useEffect(()=>{
      socketRef.current=io();
      socketRef.current.emit('room',roomId)
      socketRef.current.on('get message',(newMessage)=>{
        setMessages((prevMessages)=>[...prevMessages,newMessage])
      })
      return()=>{
        socketRef.current.emit('leave inbox',roomId)
        socket.current.disconnect();
      }
    },[roomId])

    const handleSendText=()=>{
      if(message.trim()){
        const newMessage ={text:message, sender:'you',roomId}
        socketRef.current.emit('send text',newMessage)
        setMessages((prevMessages)=>[...prevMessages,newMessage])
        setMessage('')
        messageInputRef.current.focus();
      }
    }
    return(
      <div className='p-4 max-w-md bg-white rounded-lg shadow-md'>
        <h2 className='text-xl font-semiblod mb-2'>chat with {userId}</h2>
        <div className='h-96 overflow-y-auto p-4 bg-gray-400 rounded-lg'>
          {messages.map((sms,index)=>{
            <div key={index} className='mb-3'>
              <p className='text-sm font-medium'>{sms.sender}:</p>
              <p className='text-gray-400 font-medium'>{sms.text}:</p>
            </div>
          })}
          <div className='flex sppace-x-2'>
            <input
            ref={messageInputRef}
            type='text' className='flex-1 p-2 border rounded-lg' placeholder='type message' value={message}
            onChange={(e)=>setMessage(e.target.value)}/>
            <button className='bg-blue-400 p-2 rounded-lg' onClick={handleSendText}><ioSend size={40}/></button>

          </div>

        </div>
      </div>
    )
}
export default Message;