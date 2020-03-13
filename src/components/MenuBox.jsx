import React, { useEffect, useCallback, useRef, useState } from 'react';


function MenuBox() {
  const [isShow, setShow] = useState(false);
  
  const handleShow = () => {
    setShow(!isShow);
    // console.log(isShow);
  };

  const w = window.innerWidth;
const p = document.querySelector('p');

const getPercentX = x => Math.round(x / w * 360);

 

const styleEl = document.documentElement.style;
const setStyle = styleEl.setProperty.bind(styleEl);

document.addEventListener('mousemove', e => {
  const percentX = getPercentX(e.clientX);

  const gradStart = `hsl(${percentX}, 100%, 41%)`;
  const gradEnd = `hsl(${(percentX + 120) % 360}, 100%, 85%)`;

  setStyle('--grad-start', gradStart);
  setStyle('--grad-end', gradEnd);
 }); 


  return (
    <div className="menuBox">

    {isShow ? (
      <div onClick={handleShow} role="button" className="closeTrigger">
        <i className="closeTriggerBar left"></i>
        <i className="closeTriggerBar right"></i>
      </div>
     )
     :( 
      <div onClick={handleShow} role="button" className="menuTrigger">
        <i className="menuTriggerBar top"></i>
        <i className="menuTriggerBar middle"></i>
        <i className="menuTriggerBar bottom"></i>
      </div>
     )
    }

    {
      !isShow && <span className="logo">
        <p className="logoInfo">click "trigger"</p>
    </span>
    }
    
    <div className="innerContainer">
        {isShow ? (
          <div className="menuContainer">
            <ul className="menu">
                <li><a href="#">Login</a></li>
                <li><a href="#">Create account</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">About</a></li>
            </ul>
          </div>
         )
        : null}
        
    </div>
</div>
  )
}
export default MenuBox;
