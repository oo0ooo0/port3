import React, { useEffect, useCallback, useRef } from 'react';
import MockupIMac from './MockupIMac';
import './Sec5_portfolioList.css';

function Sec5_portfolioList() {
  return (
    <section id='section5'>
      <h2 className='ir_su'> section5_portfolioList</h2>
      <div className='container'>
        <div className='row'>
          <div className='sec5'>
            <div className='site-wrap'>
              <div className='site site1 line'>
                <div className='site-text'>
                  <span className='site-text-num'>01</span>
                  <h3 className='site-text-tit'>Webstandard</h3>
                  <p className='site-text-desc'>
                    웹 표준을 준수하여 만든 웹 표준 사이트 입니다. 슬릭 제이쿼리 플러그인을 이용하여
                    배너를 완성하였고, 웹 지침서를 바탕으로 스킵메뉴 및 이미지 최적화등 웹 표준을
                    준수하였습니다.
                    <a href='http://oo0ooo02.dothome.co.kr/web_s/index.html' target='_blank'>
                      사이트 보러가기
                    </a>
                  </p>
                </div>
                <div className='site-img'>
                  <MockupIMac />
                  <video controls>
                    <source src='img/video_web_s.mp4' type='video/mp4' />
                  </video>
                </div>
              </div>

              <div className='site site2 line'>
                <div className='site-text'>
                  <span className='site-text-num'>02</span>
                  <h3 className='site-text-tit'>Commercial Web copy</h3>
                  <p className='site-text-desc'>
                    이미지 슬라이더, 탭메뉴, 모달 등 다양한 스크립트 요소를 활용하여 반응형 작업을
                    진행했습니다. swiper플러그인을 사용한 배너, 차트, 탭, 스크립트와 CSS효과를
                    특징으로한 반응형 사이트 입니다.
                    <a href='http://oo0ooo02.dothome.co.kr/web_c/index.html' target='_blank'>
                      사이트 보러가기
                    </a>
                  </p>
                </div>
                <div className='site-img'>
                  <MockupIMac />
                  <video controls>
                    <source src='img/video_mega.mp4' type='video/mp4' />
                  </video>
                </div>
              </div>

              <div className='site site3 line'>
                <div className='site-text'>
                  <span className='site-text-num'>03</span>
                  <h3 className='site-text-tit'>remake BOOSTCAMP</h3>
                  <p className='site-text-desc'>
                    기존 웹 사이트를 참조하여 반응형 버전으로 재구성하었습니다. 미디어 쿼리를 이용한
                    반응형 작업을 진행한사이트입니다. <br />
                    <a href='http://oo0ooo02.dothome.co.kr/web_c/index.html' target='_blank'>
                      사이트 보러가기
                    </a>
                  </p>
                </div>
                <div className='site-img'>
                  <MockupIMac />
                  <video controls>
                    <source src='img/video_boost.mp4' type='video/mp4' />
                  </video>
                </div>
              </div>

              <div className='site site4 line'>
                <div className='site-text'>
                  <span className='site-text-num'>04</span>
                  <h3 className='site-text-tit'>remake AiHackathon</h3>
                  <p className='site-text-desc'>
                    기존 웹 사이트를 참조하여 반응형 버전으로 재구성하었습니다. 미디어 쿼리를 이용한
                    반응형 작업을 진행였고, slick을 이용하여 반응형 겔러리를 제작했습니다.
                    <a
                      href='https://jamin-kk.github.io/aihackathon2018_copy_responsive.ver/'
                      target='_blank'
                    >
                      사이트보러가기
                    </a>
                  </p>
                </div>
                <div className='site-img'>
                  <MockupIMac />
                  <video controls>
                    <source src='img/video_ai.mp4 ' type='video/mp4' />
                  </video>
                </div>
              </div>

              <div className='site site5 line'>
                <div className='site-text'>
                  <span className='site-text-num'>05</span>
                  <h3 className='site-text-tit'>responsive Web</h3>
                  <p className='site-text-desc'>
                    화면이 다양한 기기에 맞춰 조절이 되는 반응형 웹 사이트입니다. SNS로 공유하기 탭
                    등 다양한 스크립트를 특징으로한 반응형 웹 페이지 입니다. <br />
                    <a href='http://oo0ooo02.dothome.co.kr/web_r/index.html' target='_blank'>
                      사이트 보러가기
                    </a>
                  </p>
                </div>
                <div className='site-img'>
                  <MockupIMac />
                  <video controls>
                    <source src='img/video_web_r.mp4' type='video/mp4' />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec5_portfolioList;
