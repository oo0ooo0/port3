import React, { useEffect, useCallback, useRef, useState } from 'react';
import './Sec2_iphone.css';
import './IPhone.css';
import IPhone from './IPhone';


function Sec2_iphone() {
   console.log('render Sec2_iphone');
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
      //        <!--  section2_mobileAnimation ------------------------------------  -->

    <section id="section2" >
    <h2 className="ir_su"> section2_mobile-animation</h2>
    <div className="container">
        <div className="row">
            <div className="sec2">
                <div className="phone-wrap">
                <IPhone/>
                <IPhone/>
                <IPhone/>
                  
                            

                </div>{/* phone-wrap */}
            </div>{/* sec2 */}
        </div>{/* row */}
    </div> {/* container */}
</section>
  );
}

export default Sec2_iphone;
