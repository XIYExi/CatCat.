import React, {useEffect, useRef} from "react";
import more from '../../assets/more.png';
import {useTranslation} from "react-i18next";

function MoreGetScreenApp() {

    const containerRef = useRef(null);
    const imageRef = useRef(null);


    useEffect(() => {
        const curH = containerRef.current.clientHeight;
        const curWidth = containerRef.current.clientWidth;
        const curOffset = curWidth / 2;

        const imageWidth = imageRef.current.clientWidth;
        const imageOffset = imageWidth / 2;

        const leftOffset = curOffset - imageOffset;


        imageRef.current.style.bottom = `-${curH / 2.9}px`;
        imageRef.current.style.left = `${leftOffset}px`;
    }, [])


    useEffect(() => {
        window.addEventListener('resize', () => {
            const curH = containerRef.current.clientHeight;
            const curWidth = containerRef.current.clientWidth;
            const curOffset = curWidth / 2;

            const imageWidth = imageRef.current.clientWidth;
            const imageOffset = imageWidth / 2;

            const leftOffset = curOffset - imageOffset;


            imageRef.current.style.bottom = `-${curH / 2.9}px`;
            imageRef.current.style.left = `${leftOffset}px`;
        })

    }, [containerRef, imageRef])

    const {t} = useTranslation();


    return(
        <div className='w-full h-screen relative pt-5' style={{backgroundColor: '#F9DA4A'}} ref={containerRef}>
            <img src={more} alt='/' className='absolute w-full h-full md:w-full w-96'
                 ref={imageRef}
                 style={{
                     width: '1000px',
                     zIndex: 999,
                 }}/>

            <div className='mx-auto container w-full'>
                <div className='flex justify-center items-center text-center mx-auto' style={{maxWidth: '500px'}}>
                    <div>
                        <h3 className='mt-12 font-bold text-4xl'>{t('app.2d.title')}</h3>
                        <h2 className='mt-6 font-bold text-3xl'>{t('app.2d.desc')}</h2>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default MoreGetScreenApp;
