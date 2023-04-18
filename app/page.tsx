import React from 'react'
import openai from '@/utils/chatgpt';
import ChatBox from './ChatBox';

async function HomePage () {
  
  return (
    <div className='center' >
        <h1 className=" center text-4xl text-blue-500 items-center"> ChatGPT-Clone</h1>
     
        <ChatBox />
    </div>
  )
}

export default HomePage;