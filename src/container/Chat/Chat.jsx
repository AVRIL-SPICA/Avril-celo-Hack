import React from 'react';
import './Chat.css';
import borg from "../../assets/Frame3.png"
import {IoNotificationsSharp} from "react-icons/io5"
import {BsCircleFill} from "react-icons/bs"

const Chat = () => {
  return (
    <>
    <div className='sub'>
    <h3>Message</h3> 
       <div className="Mr">
        <IoNotificationsSharp color="#7909C3" size={29}/>
        <BsCircleFill color="#7909C3" size={29}/>
       </div>
      </div>
    <div className="chat">
    
      <aside>
        <div className="search-box">
          <input type="search" placeholder="Search" />
        </div>
        <div className="person-info">
          <img src={borg} alt="Person" className="person-image" />
          <div className="person-details">
            <h3>Community Manager</h3>
            <p>Hello, I'll love to work with...</p>
          </div>
        </div>
        {/* Other content for the left pane */}
      </aside>
      <div className="divider"></div>
      <section>
        <div className="received-message">
          <img src={borg} alt="Person" className="person-image" />
          <div className="message-content">
            <p>This is a received message</p>
            <span className="message-date">May 19, 2023</span>
            
          </div>
        </div>
        <div className="received-message">
          <img src={borg} alt="Person" className="person-image" />
          <div className="message-content">
            <p>This is a received message</p>
            <span className="message-date">May 19, 2023</span>
            
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Chat;
