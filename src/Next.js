import React from 'react'
import "./App.css"
import { useNavigate } from 'react-router-dom'

function Next() {
  let navigate=useNavigate()
    const clickhandle=()=>{
      navigate("/help")
    }
  return (
    <div className='image'>
      <button id='nextt' onClick={clickhandle}>next</button> 
    </div>
  )
}

export default Next
