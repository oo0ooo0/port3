import React, { useEffect, useCallback, useRef } from 'react';
import './Sec3_blog.css';

function Sec3_blog() {
  const ref = useRef(null);
  const start = useCallback(() => {
    if (ref.current) {
      ref.current.classList.add('show');
    }
  }, []);
  useEffect(() => {
    setTimeout(start, 1000);
  }, []);
  return (
    <section id='section3'>
      <h2 className='ir_su'> section3_blog</h2>
      <div className='container'>
        <div className='row'>
          <div className='sec3'>
            <div className='intro line'>
              <a href='https://oo0ooo0.tistory.com/' target='_blank'>
                Visit
                <br />
                blog
              </a>
              Every day we watch new technologies and changes in computer language.I always try new
              things to keep up with the change. experiencing technical skills || html css js jquery
              xd photoshop illustrator excel powerpoint
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec3_blog;
