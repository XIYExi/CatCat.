import React from "react";
import {motion} from "framer-motion";

const animal = {
    x:100,
    y:200,
    scale:0.9,
    rotate:10,
    opacity:0.9
}


/**
 * 位于左上角的色块
 * @returns {JSX.Element}
 * @constructor
 */
function FrameBlurColorBlock() {

    return(
        <motion.div
            animate={animal}
            transition={{
                delay: 0,
                duration: 10,
                repeat: 4,
                repeatType:"reverse", // 方向重复
            }}
            className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
            aria-hidden="true">
            <div
                className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
                style={{
                    clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
        </motion.div>
    )
}


export default FrameBlurColorBlock;
