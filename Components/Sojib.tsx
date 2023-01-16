/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { useState } from 'react';

import sojibcss from '../styles/sojib.module.css';
import Test from './Test';



const Sojib = () => {
    const [isDesktop, setIsDesktop] = useState(null);




    return (
        <div>
            {/* Hero section start */}
            <div className={`p-5 relative bg-gray-500 overflow-hidden lg:h-[100vh] h-[100%] ${sojibcss.banner} `} >
                <div>
                    <div className=' text-center  mt-[20%] lg:mt-[17%] text-3xl text-white '>
                        <span className='lg:text-5xl relative font-semibold  flex flex-col  text-3xl '>
                            Greetings , <br></br>
                            <span className='lg:my-5 sojib text-3xl '>I'm Sojib Das</span>
                        </span>
                        <p className=' lg:text-5xl text-3xl '>
                            I'm a full stack

                            web developer
                        </p>
                        <button className='mt-10'> I'M READY
                        </button>
                    </div>

                </div>

            </div>
            {/* <Lottie options={defaultOptions} height={800} width={800} />
             */}
            <div className={sojibcss.Welcome}>
                <div className='lg:my-20 lg:flex justify-evenly p-5'>
                    <div className=' mt-[10%]'> 
                <span className={`${sojibcss.gradient} 
                lg:text-5xl uppercase font-bold font-serif text-3xl text-center `} >
                    Welcome to my portfolio
                    </span> 

                    </div>
                    <Test></Test>
                </div>
            </div>

        </div>

    );
};

export default Sojib;