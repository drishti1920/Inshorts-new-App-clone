import React from 'react'
import logo from "../assessts/logo.png"
import "./NavigationInshorts.css"
import SwipeableTemporaryDrawer from "./HamburgerIcon.js"

const NavigationInshorts = () => {
  return (
    <div className='nav'>
        <div className='icon'>
           <SwipeableTemporaryDrawer/> 
        </div>
        <img src={logo} alt="inshorts" />
    </div>
  )
}

export default NavigationInshorts