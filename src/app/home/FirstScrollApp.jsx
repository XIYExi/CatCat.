import React, {forwardRef, useCallback, useEffect, useRef} from 'react';
import './index.css';
import cat from '../../assets/cat.png';
import {useTranslation} from "react-i18next";

function FirstScrollApp(props) {

    const white = useRef(null);
    const red = useRef(null);

    const scrollFunc = useCallback(e => {

        const total = document.documentElement.scrollTop;
        const firstScreen = document.documentElement.clientHeight;

        if (total > firstScreen && total < 3 * firstScreen) {
            let noStickyOffset = document.documentElement.clientHeight * 2; // 当前html可视窗口位置大小 * 2

            let currentDocumentTop = total - firstScreen;
            let scrolled = currentDocumentTop / noStickyOffset;
            // console.log('打印监听： -> ', scrolled);

            white.current.style.clipPath = `inset(${((0.5 - scrolled) / 0.5) * 100}% 0px 0px 0px)`;
            red.current.style.clipPath = `inset(${((1 - scrolled) / 0.5) * 100}% 0px 0px 0px)`;
        }
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', scrollFunc)

        return () => window.removeEventListener('scroll', scrollFunc)
    }, [white.current, red.current])

    const {t} = useTranslation();


    return (
        <React.Fragment>
            <div className='top-0 w-full h-screen overflow-hidden sticky-container'>
                <ScrollContainer
                    backgroundColor='rgba(128, 0, 128, .15)'
                    text={(
                        <React.Fragment>{t("app.scroll.firstSentence")}.<br />&nbsp;</React.Fragment>
                    )}
                    z={10}
                    ref={null}
                    imageUrl={cat}
                />

                <ScrollContainer
                    backgroundColor='#fff'
                    text={(
                        <React.Fragment>
                            {t("app.scroll.firstSentence")}.<br />
                            <span>{t("app.scroll.secondSentence")}</span>
                        </React.Fragment>
                    )}
                    z={20}
                    ref={white}
                    clipPath='inset(100% 0px 0px 0px)'
                    imageUrl={cat}
                />

                <ScrollContainer
                    backgroundColor='rgba(128, 0, 128, .6)'
                    text={(
                        <React.Fragment>
                            {t("app.scroll.firstSentence")}.<br />
                            <span>{t("app.scroll.secondSentence")}</span>. And <span>{t("app.scroll.thirdSentence")}.</span>
                        </React.Fragment>
                    )}
                    z={30}
                    ref={red}
                    clipPath='inset(100% 0px 0px 0px)'
                    lastButton
                    imageUrl={cat}
                />
            </div>
        </React.Fragment>
    )
}


export default FirstScrollApp;


const ScrollContainer = forwardRef((props, ref) => {

    const {
        backgroundColor,
        text,
        z,
        clipPath,
        lastButton,
        imageUrl,
    } = props;

    return (
        <React.Fragment>
             <div className={`${lastButton && 'lastBottom' || ''} phoneImage flex justify-center items-center w-full h-screen absolute top-0 left-0 flex-col`}
                    style={{
                        backgroundColor: backgroundColor,
                        zIndex: z,
                        clipPath: clipPath || '',
                    }}
                    ref={ref}
                >
                    <h3 style={{fontSize: '38px', width: '460px', color: '#f2f2f2', marginTop: '80px'}}>
                        {text}
                    </h3>

                    <img
                        className='block'
                        style={{
                            marginBottom: '-200px',
                            width: '530px',
                            shapeOutside: 'ellipse(50px 20px at 50% 50%)',
                        }}
                        src={imageUrl}
                        loading='lazy'

                    />
                </div>
        </React.Fragment>
    )
})
