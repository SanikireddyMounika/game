import React from 'react'
import "./App.css"
import { useNavigate } from 'react-router-dom'

function Help() {
    let next=useNavigate()
    const clickHandler=()=>{
        next("/help")
    }
    const startHandler=()=>{
      next("/start")
  }
  return (
    <div className='image'>
      <div className='help'>
      <button className='btn btn-success' onClick={clickHandler}>Help</button>
      <button className='btn btn-danger'onClick={startHandler}>START</button>
    </div>
      </div>
      
  )
}

export default Help
