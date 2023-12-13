import React from "react";
import authBg from '../../assets/authBg.png';
import {Outlet} from "react-router-dom";

function AuthLayoutApp() {


    return(
        <div className='relative h-screen w-full flex justify-between' style={{background: 'radial-gradient(181.38% 100.32% at 67.74% 67.73%, #B4B4B4 14.4%, rgba(204, 204, 204, 0.00) 100%)'}}>
            <div className='mx-auto justify-center flex items-center h-full' style={{zIndex: 20}}>
                <Outlet />
            </div>
            <div className='xl:block hidden'>
                <img src={authBg} alt='' width={806}  className='h-screen' style={{zIndex: 30}}/>
            </div>
        </div>
    )
}


export default AuthLayoutApp;
