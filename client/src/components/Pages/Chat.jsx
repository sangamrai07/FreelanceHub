import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/Chat.scss'
import myImg from '../../assets/clothes.png'


function Chat() {
  return (
    <div className="chat"><div className='container'>
      <span className="chatInfo">
        <Link to="/chat">Image</Link> 
      </span>
      <div className="texts">
        <div className="message">
          <img src={myImg} alt="PFP" />
          <p>Messages</p>
        </div>
          <div className="message sender">
          <img src={myImg} alt="PFP" />
          <p>Messages</p>
        </div>
      </div>
      <hr />
      <div className="chatInput">
        <textarea name="" placeholder='Message..' id="" cols="30" rows="10"></textarea>
        <button><img src="" alt="Send" /></button>
      </div>
    </div></div>
    
  )
}

export default Chat
