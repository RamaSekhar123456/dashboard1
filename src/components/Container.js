import React from 'react'
import '../components/container.css'
import TopContainer from './TopContainer'
import MainContainer from './MainContainer'
function Container() {
  return (
    <div className='container'>
     <TopContainer/>
     <MainContainer/>
    </div>
  )
}

export default Container