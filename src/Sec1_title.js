import React, { useEffect, useCallback, useRef } from 'react';
import './Sec1_title.css';

function Sec1_title() {
    const ref = useRef(null);
    const start = useCallback(() => {
        if(ref.current) {
            
            ref.current.classList.add('show');
        }        
       }
    , []);
    useEffect(() => {
        setTimeout(start, 1000);
  
    }, []);
  return (
    // in js remove className show
    <section id="section1" ref={ref}>
    <h2 className="ir_su">section1_title</h2>
    <div className="container">
        <div className="row">
            <div className="sec1">
                <div className="text-wrap">
                    <div className="top-menu">
                        <ul>
                            <li><a href="https://oo0ooo0.tistory.com/" target="_blank">Blog</a></li>
                            <li><a href="mailto:kkjjajja@gmail.com" target="_blank">Email</a></li>
                        </ul>
                    </div>
                    <h1 className="line">
                        <svg className="svgWrap" viewBox="0 0 1000 550" xmlns='http://www.w3.org/2000/svg' version='1.1'>
                            <text className="aniText" fontSize='210px' x="50%" y="50%" dy=".35em"
                                textAnchor="middle">portfolio</text>
                        </svg>
                        <span className="mail">KWON JAMIN || <a href="mailto:kkjjajja@gmail.com"
                                target="blank">kkjjajja@gmail.com</a></span>
                    </h1>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}

export default Sec1_title;
