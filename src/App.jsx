import React, { useState,useEffect, useRef } from 'react'
import HomePage from './components/HomePage'
import Header from './components/Header'
import FileDisplay from './components/FileDisplay'
import Transcribing from './components/Transcribing'
import Information from './components/Information'

const App = () => {
  const[file,setFile]=useState(null)
  const[audiostream,setAudioStream]=useState(null)
  const isAudioAvailable = file||audiostream

  const[output,setOutput]=useState(false)
  const[loading,setLoading]=useState(false)

 

  function handleAudioReset(){
    setFile(null)
    setAudioStream(null)
  }

  useEffect(()=>{
    console.log(audiostream)
  },[audiostream])

  return (
    <div className='flex flex-col max-w-[1000px] mx-auto w-full'>
      <section className='min-h-screen flex flex-col'>
        <Header/>
        {output ? (
          <Information/>
        ) : loading ? (
          <Transcribing />
        ) : isAudioAvailable ? (
          <FileDisplay handleAudioReset={handleAudioReset} file={file} audioStream={audiostream} />
        ) : (
          <HomePage setFile={setFile} setAudioStream={setAudioStream} />
        )}
      </section>
      
    </div>
  )
}

export default App
