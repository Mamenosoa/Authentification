import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
     <div className='w-full h-full bg-slate-500 flex items-center justify-center'>
      <div className="w-1/4 h-96 bg-slate-100 rounded-2xl px-5 ">
        <h1 className='text-center text-4xl font-extralight mt-3'>LOGIN</h1>
      <div className="mt-8">
          <label htmlFor="username" className='text-xl '>Username</label><br />
          <input type="text" className='px-2 outline-none text-lg mt-1 mb-3 rounded-md' /><br />
          <label htmlFor="password" className='text-xl mb-3'>Password</label><br />
          <input type="password" name="" id="" className='px-2 outline-none text-lg mt-1 rounded-md' />
      </div>
      <div className="w-full flex justify-center"><button  className='p-1 px-16 mt-7  rounded-full block w-9/12 border-2 border-black-500'>LOGIN</button></div>
      </div>
     </div>
    </>
  )
}

export default App
