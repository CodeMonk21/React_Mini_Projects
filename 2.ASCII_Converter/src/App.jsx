import React, { useState } from 'react'

function App (){
  const [asciiConvert, setAsciiConvert] = useState("")

  const handleKey = (e) =>{
    setAsciiConvert(e.key.charCodeAt(0))
  }

  return (
    <div className='min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center py-20 gap-20' onKeyDown={handleKey} tabIndex={0}>
      <h1 className='text-5xl'>ASCII Converter</h1>
      <h1 className='text-8xl text-blue-600'>Meta:- {asciiConvert}</h1>
    </div>
  )
}

export default App