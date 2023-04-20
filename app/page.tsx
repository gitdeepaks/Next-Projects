import React from 'react'
import openai from '@/utils/chatgpt';
import ChatBox from './ChatBox';

async function HomePage () {
  
  return (
    <div className='center'>
        <h1 className=" center bg-slate-300  text-6xl text-blue-500"> ChatGPT-Clone</h1>
        <ChatBox />
    </div>
  )
}

export default HomePage;
