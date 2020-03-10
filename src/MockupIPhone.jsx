import React, { useEffect, useCallback, useRef, useState } from 'react';
import './MockupIPhone.css';


function MockupIPhone(props) {
   const [currentTime, setTime] = useState('00:00')

   const computeCurrentTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const time = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
    setTime(time);
   }


   useEffect(() => {
       const timer = setInterval(computeCurrentTime, 1000);
       return () => {
           clearInterval(timer);
       }
   }, [])

  return (
    <div className="phone">
        <img src ="img/iphone.svg" alt="iphone_Image" />
            <div className="box">
                <div className="state-bar">
                    <div className="connection"> 
                        <i className="fas fa-circle"></i> 
                        <i className="fas fa-circle"></i> 
                        <i className="fas fa-circle"></i> 
                        <i className="far fa-circle"></i> 
                        <i className="far fa-circle"></i> 
                    </div>
                    <div className="wife">
                        <i className="fas fa-wifi wifi"></i>
                    </div>
                    <div className="clock-box">
                        <span id="clock1">{currentTime}</span>
                    </div>
                    <div className="lock">
                        <i className="fas fa-unlock"></i>
                    </div>
                    <div className="location">
                        <i className="fas fa-location-arrow"></i>
                        </div>
                    <div className="bluetooth">
                        <i className="fab fa-bluetooth-b"></i>
                    </div>
                    <div className="battery">
                        <i className="fas fa-battery-three-quarters"></i>
                    </div>
                </div>
                {props.children}
            </div>
    </div>
  );
}

export default MockupIPhone;
