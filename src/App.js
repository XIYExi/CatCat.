import React, { useEffect, useState } from "react";
import FirstScrollApp from "./app/home/FirstScrollApp";
import GetScreenApp from "./app/home/GetScreenApp";
import MoreGetScreenApp from "./app/home/MoreGetScreenApp";
import ShowScreenApp from "./app/home/ShowScreenApp";
import WhatYouThinkApp from "./app/home/WhatYouThinkApp";
import UserWordsApp from "./app/home/UserWordsApp";
import MoreFeaturesApp from "./app/home/MoreFeaturesApp";
import LearnWithOurBlogApp from "./app/home/LearnWithOurBlogApp";
import JoinUsApp from "./app/home/JoinUsApp";
import SendMessageApp from "./app/home/SendMessageApp";
import FooterApp from "./app/FooterApp";

import FrameBlurColorBlock from "./app/component/FrameBlurColorBlock";
import {useTranslation} from "react-i18next";


function App() {

  const [threeScreenHeight, setThreeScreenHeight] = useState(3000);

  useEffect(() => {
    const oneScreenHeight = document.documentElement.clientHeight;
    setThreeScreenHeight(3 * oneScreenHeight);
  }, [])

    const {t} = useTranslation();

  return (
    <div >

        {/* Hero Page */}
        <div className='w-full h-screen container flex mx-auto items-center justify-between'>

            {/*左上角色块*/}
            <FrameBlurColorBlock />


            <div style={{maxWidth: '700px'}}>
                <div className='font-bold' style={{fontSize: '46px'}}>{t('app.hero.title1')}？</div>
                <div style={{fontSize: '48px'}} className='font-bold'>{t('app.hero.title2')}&nbsp;
                    <span>CatCat.</span>
                    &nbsp;{t('app.hero.title3')}&nbsp;
                    <span className='mr-2' style={{color: 'rgba(128, 0, 128, .3)'}}>New</span>
                    &nbsp;{t('app.hero.title4')}
                </div>

                <div className='font-thin text-lg mt-6' style={{maxWidth: '520px'}}>{t('app.hero.desc')}！</div>

                <div className='mt-6'>
                  <button className='px-8 py-3 text-white' style={{backgroundColor: 'rgb(128, 0 , 128)', borderRadius: '8px'}}>{t('app.hero.generate')}</button>
                  <button className="px-8 py-3 border rounded ml-4" style={{borderRadius: '8px'}}>Github</button>
                </div>

            </div>

            <div style={{backgroundColor: 'rgba(128, 0, 128, 0.16)', minWidth: '500px', minHeight: '640px', borderRadius: '8px'}}
                className="ml-4"
            >

            </div>
        </div>

        {/*Application介绍*/}
        <div style={{margin: 0, background:'#fff', height: `${threeScreenHeight}px`}}>
            <FirstScrollApp />
        </div>

        {/* Get */}
        <GetScreenApp />

        {/* 作品展示 */}
        <ShowScreenApp />

        {/* 二次元猫猫 */}
        <MoreGetScreenApp />

        {/*neko*/}
        <div className='relative' style={{height: '4000px'}}>
            <WhatYouThinkApp />
        </div>

        <div className='w-full h-screen' />


        {/* 用户评价 */}
        <UserWordsApp />

        {/*再次介绍特性*/}
        <MoreFeaturesApp />

        {/*学到更多*/}
        <LearnWithOurBlogApp />

        <SendMessageApp />

        {/*加入我们*/}
        <JoinUsApp />

        <FooterApp />
    </div>
  );
}

export default App;
