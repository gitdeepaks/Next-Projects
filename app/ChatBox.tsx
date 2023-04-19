"use client"
import openai from "@/utils/chatgpt"
import { FormEvent, useState } from "react"



function ChatBox() {
   

     
     const [prompt, setPrompt] =useState("");
     const [answer, SetAnswer] = useState("")

     const generateResponse = async (e: FormEvent<HTMLFormElement> ) => {
      e.preventDefault();

      if (!prompt) {
        return
      }
        //generate post request to api/generate response passing the prompt in the body
        
        const response = await fetch("api/generateRes",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({prompt}),
        })

        const {answer} = await response.json();
        SetAnswer(answer);
     };
  return (




    
       <div className=" ">

{prompt ? (
            <h2>Your Prompt was {prompt}</h2>
       
       ):(<h2>Please Enter the Prompt</h2>)}

       <form onSubmit={generateResponse}>

      <textarea
        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-slate-900 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
      
        value={prompt}
        placeholder="Type your message here..."
        onChange={(e) => setPrompt(e.target.value)}
        />
      <button
      disabled= {!prompt}
      type="submit" className="active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-1 bg-indigo-600 focus:ring-indigo-400 focus:ring-offset-1 dark:hover:bg-indigo-700 dark:hover:text-gray-100 disabled:opacity-50 dark:focus:ring-indigo-400 disabled:pointer-events-none dark:focus:ring-offset-gray-300 dark:bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-slate-900 disabled:cursor-not-allowed h-10 py-2 px-4">
        Submit
      </button>
    </form>

    {answer && (
    <div>
      <h3>
      Your answer will be
      <p>{answer}</p>
      </h3>
    </div>

    )}
    </div>
  
  )
}

export default ChatBox