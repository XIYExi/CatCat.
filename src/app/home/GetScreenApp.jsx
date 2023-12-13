import React from "react";
import getPNG from '../../assets/get.png';
import {useTranslation} from "react-i18next";


function GetScreenApp () {

    const {t} = useTranslation();

    return (
        <div className='h-screen w-full container mx-auto py-24'>
            <div className='flex justify-between align-start text-black' style={{zIndex: 10, backgroundColor: '#fff'}}>
                <h2 className='text-5xl font-bold'>{t('app.join.title')}</h2>

                <div style={{zIndex: 9999}}>
                    <h4 className='text-xl font-thin mb-10' style={{maxWidth: '500px'}}>{t('app.join.desc')}</h4>
                    <button className='px-8 py-3 text-white' style={{backgroundColor: 'rgb(128, 0 , 128)', borderRadius: '8px'}}>{t('app.join.experience')}</button>
                    <button className="px-8 py-3 border rounded ml-4" style={{borderRadius: '8px'}}>{t("app.join.login")}</button>
                </div>
            </div>

            <div className='flex justify-center items-center relative' style={{marginTop: '-20px', zIndex: -10}}>
                <img src={getPNG} style={{width: '90%'}} className='object-cover'/>
            </div>
        </div>
    )
}

export default GetScreenApp;
