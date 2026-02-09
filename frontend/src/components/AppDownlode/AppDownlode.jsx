import React from 'react'
import './AppDownlode.css'
import {assets} from '../../assets/assets'
const AppDownlode = () => {
  return (
    <div className='app-download'id='app-downlod'>
      <p>for better Experience Downlod <br/>Tomato App</p>
      <div className="app-downlod-platforms">
        <img src={assets.play_store} alt=""/>
        <img src={assets.app_store} alt=""/>
      </div>
    </div>
  )
}

export default AppDownlode
