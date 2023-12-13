import React, {forwardRef, Fragment, useEffect, useRef} from "react";
import neko1 from '../../assets/1-removebg-preview.png';
import neko2 from '../../assets/2-removebg-preview.png';
import neko3 from '../../assets/3-removebg-preview.png';
import neko4 from '../../assets/4-removebg-preview.png';
import neko5 from '../../assets/5-removebg-preview.png';
import neko6 from '../../assets/6-removebg-preview.png';
import nekopara from '../../assets/7.png';
import './index.css';
import {useTranslation} from "react-i18next";


function WhatYouThinkApp() {

    const nekoRef = useRef(null);
    const satRef = useRef(null);
    const r18Ref = useRef(null);
    const containerRef = useRef(null);


    useEffect(() => {

        window.addEventListener('scroll' , e => {
            const total = document.documentElement.scrollTop;
            const prevScreen = document.documentElement.clientHeight * 9;

            const current = total - prevScreen - 100; // 原则上是当前高度 - 之前的高度，但是不知道哪里产生了偏移，减去100就差不多可以了

            if (current > document.documentElement.clientHeight && current < 4000){
                // 1005 ~ 4000之内，即2，3，4屏时触发滚动
                let noStickyOffset = document.documentElement.clientHeight * 2; // 当前html可视窗口位置大小 * 2
                let currentDocumentTop = current - document.documentElement.clientHeight;
                let scrolled = currentDocumentTop / noStickyOffset;

                // console.log('【二次元猫娘页面滚动打印监听】 -> ', scrolled)

                nekoRef.current.style.clipPath = `inset(${((0.334 - scrolled) / 0.334) * 100}% 0px 0px 0px)`;
                satRef.current.style.clipPath = `inset(${((0.667 - scrolled) / 0.334) * 100}% 0px 0px 0px)`;
                r18Ref.current.style.clipPath = `inset(${((1 - scrolled) / 0.334) * 100}% 0px 0px 0px)`;
            }
        })

    }, [nekoRef, satRef, r18Ref, containerRef])

    const {t} = useTranslation();


    return (
        <div className='sticky-think top-0 left-0 m-0' ref={containerRef}>

                <WrapperItem
                    text={
                        <Fragment>
                            <h1 className='text-center text-4xl font-normal font-bold' style={{fontFamily: 'Ubuntu', color: '#262626'}}>
                                {t('app.neko.title1')}
                            </h1>
                        </Fragment>
                    }
                    className=''
                    style={{}}
                />


                <WrapperItem
                    text={
                        <Fragment>
                            <h1 className='text-center text-4xl font-normal font-bold' style={{fontFamily: 'Ubuntu', color: '#262626'}}>{t('app.neko.title1')}</h1>
                            <h1 className='text-center text-4xl font-normal font-bold' style={{fontFamily: 'Ubuntu', color: '#262626'}}>{t('app.neko.title2')}</h1>
                        </Fragment>
                    }
                    ref={nekoRef}
                    className='z-10 '
                    clipPath='inset(100% 0px 0px 0px)'
                />


                <WrapperItem
                    text={
                        <Fragment>
                            <h1 className='text-center text-4xl font-normal font-bold' style={{fontFamily: 'Ubuntu', color: '#262626'}}>{t('app.neko.title1')}</h1>
                            <h1 className='text-center text-4xl font-normal font-bold' style={{fontFamily: 'Ubuntu', color: '#262626'}}>{t('app.neko.title2')}</h1>
                            <h1 className='text-center text-4xl font-normal font-bold' style={{fontFamily: 'Ubuntu', color: '#262626'}}>{t('app.neko.title3')}</h1>
                        </Fragment>
                    }
                    ref={satRef}
                    className='z-20'
                    clipPath='inset(100% 0px 0px 0px)'
                    style={{}}
                >
                    <div className='grid grid-cols-7'>
                        <div>
                            <img src={neko1} loading='lazy' className='mx-4' style={{width: '280px', height: '450px'}}/>
                        </div>
                        <div>
                            <img src={neko3} loading='lazy' className='mx-4' style={{width: '280px', height: '450px'}}/>
                        </div>
                        <div>
                            <img src={neko2} loading='lazy' className='mx-4' style={{width: '280px', height: '450px'}}/>
                        </div>
                        <div>
                        </div>
                        <div>
                            <img src={neko4} loading='lazy' className='mx-4' style={{width: '280px', height: '450px'}}/>
                        </div>
                        <div>
                            <img src={neko5} loading='lazy' className='mx-4' style={{width: '280px', height: '450px'}}/>
                        </div>
                        <div>
                            <img src={neko6} loading='lazy' className='mx-4' style={{width: '280px', height: '400px'}}/>
                        </div>
                    </div>
                </WrapperItem>

                <WrapperItem
                    text={
                        <Fragment>
                            <h1 className='text-center text-4xl font-normal font-bold' style={{fontFamily: 'Ubuntu', color: '#262626'}}>{t('app.neko.title1')}</h1>
                            <h1 className='text-center text-4xl font-normal font-bold' style={{fontFamily: 'Ubuntu', color: '#262626'}}>{t('app.neko.title2')}</h1>
                            <h1 className='text-center text-4xl font-normal font-bold' style={{fontFamily: 'Ubuntu', color: '#262626'}}>{t('app.neko.title3')}</h1>
                            <h1 className='text-center text-4xl font-normal font-bold' style={{fontFamily: 'Ubuntu', color: '#262626'}}>{t('app.neko.title4')}</h1>
                        </Fragment>
                    }
                    ref={r18Ref}
                    className='z-30'
                    clipPath='inset(100% 0px 0px 0px)'
                    style={{backgroundColor: 'white'}}
                >
                    <div className='grid grid-cols-7'>
                        <div>
                            <img src={neko1} loading='lazy' className='mx-4' style={{width: '280px', height: '450px'}}/>
                        </div>
                        <div>
                            <img src={neko3} loading='lazy' className='mx-4' style={{width: '280px', height: '450px'}}/>
                        </div>
                        <div>
                            <img src={neko2} loading='lazy' className='mx-4' style={{width: '280px', height: '450px'}}/>
                        </div>
                        <div>
                            <img src={nekopara} style={{width: '400px', height: '450px', marginTop: '-50px'}}/>
                        </div>
                        <div>
                            <img src={neko4} loading='lazy' className='mx-4' style={{width: '280px', height: '450px'}}/>
                        </div>
                        <div>
                            <img src={neko5} loading='lazy' className='mx-4' style={{width: '280px', height: '450px'}}/>
                        </div>
                        <div>
                            <img src={neko6} loading='lazy' className='mx-4' style={{width: '280px', height: '400px'}}/>
                        </div>
                    </div>
                </WrapperItem>
            </div>
    )
}


const WrapperItem = forwardRef((props,ref) => {

    const {text, className, clipPath, style, children} = props;

    return (
        <React.Fragment>
            <div className={`${className} w-full h-screen absolute left-0 top-0`}
                 style={{
                     clipPath: clipPath || '',
                     ...style,
                 }}
                 ref={ref}
            >
                {text}

                {
                    children &&
                    <div className='fixed bottom-0 w-full' style={{maxHeight: '300px', height: '450px'}}>
                        {children}
                    </div>
                }
            </div>
        </React.Fragment>
    )
})

export default WhatYouThinkApp;
