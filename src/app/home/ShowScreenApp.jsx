import './index.css';
import {useEffect, useRef, useState} from "react";
import {useTranslation} from "react-i18next";

function ShowScreenApp() {

    const textRef = useRef(null);
    const logoWrapperRef = useRef(null);
    const logoRef = useRef(null);
    const containerRef = useRef(null);

    const {t} = useTranslation();

    useEffect(() => {

        window.addEventListener('scroll', e => {

            // console.log(document.documentElement.scrollTop, document.documentElement.scrollHeight)

            // scrolled = (?==0) / (3000 - 1005)
            let scrolled = (document.documentElement.scrollTop - 5 * document.documentElement.clientHeight) / (containerRef.current.scrollHeight - document.documentElement.clientHeight);

            logoWrapperRef.current.style.width = logoWrapperRef.current.style.height = document.documentElement.clientHeight * 20 * (scrolled * scrolled * scrolled) + 'px';

            if (scrolled <= .1) {
                textRef.current.style.opacity = (.1 - scrolled) / .1;
                textRef.current.style.marginTop = scrolled * 1000 * -1 + 'px';
            }
            else
                textRef.current.style.opacity = 0;

            /*由于存在偏移，最开始的时候可能为负，那就手动置为0，不置也没事*/
            if (scrolled <= .2)
                logoRef.current.style.opacity = (scrolled - .1 ) / .1 < 0 ? 0 : (scrolled - .1 ) /.1 < 0;
            else
                logoRef.current.style.opacity = 1;

            if (scrolled >= .5) {
                logoRef.current.style.opacity = ( 1- scrolled ) / .5;
                logoWrapperRef.current.classList.add('transparent');
            }
            else{
                logoWrapperRef.current.classList.remove('transparent');
            }

            if (scrolled >= .95)
                logoWrapperRef.current.style.opacity = (1 - scrolled) / .05;
            else
                logoWrapperRef.current.style.opacity = 1;
        })
    }, [])

    return (
        <div className='m-0 bg-black' style={{height: '3000px'}} ref={containerRef}>
            <section className='chip-section h-screen w-full top-0 overflow-hidden'>
                <video
                    src="https://www.apple.com/105/media/us/iphone-se/2020/90024c0f-285a-4bf5-af04-2c38de97b06e/anim/arcade-loop/large.mp4"
                    muted playsInline autoPlay loop></video>

                <h1 className='absolute top-0 left-0 text-white z-20 text-center w-full top-1/2 m-0'
                    style={{
                        fontSize: '64px',
                        letterSpace: '-1px',
                        transform: 'translate(0, -50%)',
                    }}
                    ref={textRef}
                >
                    {t('app.works.title')}.<br />
                    <span className='text-[30px]'>{t('app.works.desc')}.</span>
                </h1>

                <div className="the-chip absolute top-1/2 left-1/2 z-10 bg-black"
                     ref={logoWrapperRef}
                     style={{
                         transform: 'translate(-50%, -50%)',
                         width: '100px',
                         height: '100px',
                         boxShadow: '0px 0px 0px 100vw black, 0px 0px 0px 30px black inset',
                         minWidth: '100px',
                         minHeight: '100px',
                     }}>

                    <svg id="_图层_9" data-name="图层 9" xmlns="http://www.w3.org/2000/svg" width="1000" height="1000"
                         ref={logoRef}
                         className='absolute w-full h-full opacity-0'
                         viewBox="0 0 1000 1000">
                        <rect className="cls-2" x="436" y="436" width="128" height="128" rx="32.7" ry="32.7"/>
                        <path className="cls-1"
                              d="M544.61,492.74c-7.85-11.99-18.35-22.2-30.2-29.5-4.72,2.94-9.2,6.37-13.43,10.16,8.4,7.62,15.79,16.68,22.14,26.27,3.74,5.65,7.22,11.66,9.59,17.98,1.5-2.22,2.91-4.49,4.25-6.8,3.23-5.57,6.07-11.48,7.99-17.6-.11-.18-.23-.34-.34-.52Z"/>
                        <path className="cls-1"
                              d="M541.98,452.1s.03,.03,.05,.05c.09-.03,.17-.06,.26-.09-.1,.02-.21,.03-.31,.05Z"/>
                        <path className="cls-1"
                              d="M534.45,521.96c-.45-3.91-1.46-7.73-2.85-11.45-8.42,12.56-19.24,23.52-31.65,31.19,4.25,2.59,8.68,4.81,13.27,6.54,4.52-2.19,8.86-5.04,13-8.03,2.47-1.78,4.91-3.63,7.31-5.58,1.11-4.03,1.42-8.41,.93-12.67Z"/>
                        <path className="cls-1"
                              d="M508.83,465.31c-1.61-.16-4.23-.35-10,0-3.33,.2-7.75,.58-12.99,1.35,5.33,3.37,10.37,7.27,15.13,11.58,4.82-4.32,9.91-8.23,15.3-11.58-1.77-.47-4.32-1.04-7.43-1.35Z"/>
                        <path className="cls-1"
                              d="M487.71,463.21c-12.06,7.33-22.75,17.64-30.7,29.81-.07,.1-.14,.2-.2,.32,1.92,5.96,4.7,11.73,7.85,17.17,1.39,2.39,2.85,4.73,4.4,7.03,2.36-6.17,5.78-12.05,9.44-17.58,.56-.85,2.27-3.48,4.79-6.86,3.79-5.08,9.51-12.03,17.69-19.73-1.91-1.75-4.06-3.56-13.28-10.16Z"/>
                        <path className="cls-1"
                              d="M468.51,510.45c-1.47,3.84-2.53,7.8-3,11.85-.46,3.99-.22,8.08,.72,11.88,2.45,1.99,4.96,3.89,7.52,5.74,4.36,3.15,8.94,6.14,13.72,8.38,4.52-1.78,8.88-3.99,13.06-6.58-12.54-7.63-23.48-18.64-32.01-31.27Z"/>
                        <path className="cls-1"
                              d="M478.89,460.87c-5.79-3.68-10.35-7.65-13.84-11.17-3.09,5.39-7.34,14.43-8.78,26.34-.96,7.95-.37,14.77,.48,19.79,.06-.11,.13-.21,.2-.32,7.95-12.17,18.64-22.49,30.7-29.81-2.74-1.29-5.7-2.87-8.76-4.82Z"/>
                        <path className="cls-1"
                              d="M467.44,529.47c.47-4.05,1.54-8.01,3-11.85-1.55-2.3-3.01-4.64-4.4-7.03-3.15-5.44-5.93-11.21-7.85-17.17-5.37,8.26-9.62,17.56-10.86,27.17,6.12,7.74,13.23,14.61,20.83,20.76-.94-3.8-1.18-7.89-.72-11.88Z"/>
                        <path className="cls-1"
                              d="M468.48,451.74c.09,.03,.17,.07,.26,.09,.02-.02,.03-.04,.05-.05-.1-.02-.21-.04-.31-.05Z"/>
                        <g>
                            <path className="cls-1"
                                  d="M496.66,532.61s4.49,3.81,4.22,4.09c-.02,.02-.16,.08-.15,.09,0,0,.03,0,.15-.04,5.3-5.21,8.24-8,8.85-8.37h-17.82c1.95,1.83,3.6,3.25,4.75,4.23Z"/>
                            <path className="cls-1" d="M509.85,528.34s-.06,0-.12,.05h.12s0-.04,0-.05Z"/>
                        </g>
                        <path className="cls-1"
                              d="M542.78,493.43c-1.92,5.96-4.7,11.73-7.85,17.17-1.39,2.39-2.85,4.73-4.4,7.03,1.47,3.84,2.53,7.8,3,11.85,.46,3.99,.22,8.08-.72,11.88,7.61-6.14,14.71-13.01,20.83-20.76-1.25-9.61-5.49-18.91-10.86-27.17Z"/>
                        <path className="cls-1"
                              d="M513.07,502.02c-3.17,.84-6.66,3.69-6.58,6.68,.12,4.24,7.38,8.54,13.15,6.68,4.35-1.4,6.21-5.78,6.58-6.68-3.17-5.33-8.57-7.9-13.15-6.68Zm3.59,8.65c-.21,1.37-.69,2.69-1.4,3.87-.11,.18-.24,.37-.43,.44-.29,.1-.6-.08-.82-.3-.39-.39-.64-.9-.84-1.41-1.02-2.6-.87-5.64,.4-8.13,.14-.28,.3-.55,.53-.75,1.25-1.09,2.1,1.04,2.34,1.95,.37,1.41,.44,2.89,.22,4.33Z"/>
                        <path className="cls-1"
                              d="M488.76,501.92c3.17,.84,6.66,3.69,6.58,6.68-.12,4.24-7.38,8.54-13.15,6.68-4.35-1.4-6.21-5.78-6.58-6.68,3.17-5.33,8.57-7.9,13.15-6.68Zm-3.59,8.65c.21,1.37,.69,2.69,1.4,3.87,.11,.18,.24,.37,.43,.44,.29,.1,.6-.08,.82-.3,.39-.39,.64-.9,.84-1.41,1.02-2.6,.87-5.64-.4-8.13-.14-.28-.3-.55-.53-.75-1.25-1.09-2.1,1.04-2.34,1.95-.37,1.41-.44,2.89-.22,4.33Z"/>
                        <path className="cls-1"
                              d="M546.92,479.94c-1.43-11.91-5.69-20.95-8.78-26.34-3.48,3.52-8.05,7.49-13.84,11.17-3.07,1.95-6.02,3.53-8.76,4.82,12.06,7.33,22.75,17.64,30.7,29.81,.07,.1,.14,.2,.2,.32,.85-5.01,1.43-11.84,.48-19.79Z"/>
                    </svg>


                </div>

            </section>
        </div>
    )
}


export default ShowScreenApp;
