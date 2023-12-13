import React from "react";
import {Outlet} from "react-router-dom";


function GenerateLayoutApp() {


    return (
        <div className='relative'>

            <Outlet />
        </div>
    )
}


export default GenerateLayoutApp;
