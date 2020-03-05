import React from 'react';
import './Sec1_title.css';

function Sec1_title() {
  return (
    // in js remove class show
    <section id="section1" class ="show">
    <h2 class="ir_su">section1_title</h2>
    <div class="container">
        <div class="row">
            <div class="sec1">
                <div class="text-wrap">
                    <div class="top-menu">
                        <ul>
                            <li><a href="https://oo0ooo0.tistory.com/" target="_blank">Blog</a></li>
                            <li><a href="mailto:kkjjajja@gmail.com" target="_blank">Email</a></li>
                        </ul>
                    </div>
                    <h1 class="line">
                        <svg class="svgWrap" viewBox="0 0 1000 550" xmlns='http://www.w3.org/2000/svg' version='1.1'>
                            <text class="aniText" font-size='210px' x="50%" y="50%" dy=".35em"
                                text-anchor="middle">portfolio</text>
                        </svg>
                        <span class="mail">KWON JAMIN || <a href="mailto:kkjjajja@gmail.com"
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
