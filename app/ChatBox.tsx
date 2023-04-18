'use client'
import openai from "@/utils/chatgpt"
import { useState } from "react"
import { InputWithButton } from "./InputWithButton";


function ChatBox() {
   

     
     const [prompt, setPrompt] =useState("");

     const generateResponse = async ( ) => {
        const data = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 1,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      
      }).then(res => res.data);
     }
  return (
    <div>
       <div className=" center flex w-full max-w-sm items-center space-x-2">

{prompt ? (
            <h2>Your Prompt was {prompt}</h2>
       
       ):(<h2>Please Enter the Prompt</h2>)}

       <form>

      <input
        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-slate-900 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
        type="text"
        value={prompt}
        placeholder="Type your message here..."
        onChange={(e) => setPrompt(e.target.value)}
        />
      <button type="submit" className="active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-1 bg-indigo-600 focus:ring-indigo-400 focus:ring-offset-1 dark:hover:bg-indigo-700 dark:hover:text-gray-100 disabled:opacity-50 dark:focus:ring-indigo-400 disabled:pointer-events-none dark:focus:ring-offset-gray-900 dark:bg-indigo-600 text-white hover:bg-indigo-700 h-10 py-2 px-4">
        Submit
      </button>
    </form>
    </div>
    </div>
  )
}

export default ChatBox