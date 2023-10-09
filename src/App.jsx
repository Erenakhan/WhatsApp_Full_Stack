import React from 'react'
import Channels from './Components/Channels'
import Chat from './Components/Chat'

export default function App() {
  return (
    <div className='bg-[#0c1317] h-screen w-screen p-4'>
      <div className='bg-primary h-full grid grid-cols-[1fr,2fr] text-white'>
      <Channels />
      <Chat />
      </div>
    </div>
  )
}
