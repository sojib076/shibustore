import Image from 'next/image';
import React from 'react';



const Sojib = () => {
    return (
        <div className="relative bg-gradient-to-b from-green-50 to-green-100">

            <section className="overflow-hidden">
                <div className="flex flex-col lg:flex-row lg:items-stretch lg:max-h-[900px] lg:min-h-[900px]">
                    <div className="flex items-center justify-center w-full lg:order-2 lg:w-7/12">
                        <div className="h-full px-4 pt-24 pb-16 sm:px-6 lg:px-24 2xl:px-32 lg:pt-40 lg:pb-14">
                            <div className="flex flex-col justify-between flex-1 h-full">
                                <div>
                                    <h1 className="text-4xl font-bold text-black sm:text-6xl xl:text-7xl">Take control <br />on your daily Shoping</h1>
                                    <p className="mt-6 text-base text-black sm:text-xl">
                                        Order your daily needs from your home and get it delivered at your door step.
                                        Or
                                        Pick up your order from our store.
                                    </p>
                                    <a href="#" title="" className="inline-flex items-center px-6 py-5 text-base font-semibold text-black transition-all duration-200 bg-green-300 mt-9 hover:bg-green-400 focus:bg-green-400" role="button"> Get started for free </a>
                                </div>

                                <div className="mt-8 border-t-2 border-black lg:mt-auto sm:mt-14">
                                    <div className="pt-8 sm:flex sm:items-center sm:justify-between sm:pt-14">
                                        <p className="text-base font-semibold text-black">App available on</p>

                                        <div className="flex items-center mt-5 space-x-5 sm:mt-0">
                                            <a href="#" title="" className="block transition-all duration-200 hover:opacity-80 focus:opacity-80" role="button">
                                                <img className="w-auto rounded h-14 sm:h-16" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/app-store-button.png" alt="" />
                                                {/* hw ow to use next js iamge */}
                                                {/* <Image 
                                                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/app-store-button.png" alt=""
                                                
                                                 width={200}
                                                 height={200}
                                                >   */}


                                            </a>

                                            <a href="#" title="" className="block transition-all duration-200 hover:opacity-80 focus:opacity-80" role="button">
                                                <img className="w-auto rounded h-14 sm:h-16" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/play-store-button.png" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full overflow-hidden lg:w-5/12 lg:order-1">
                        <div className="lg:absolute lg:bottom-0 lg:left-0">
                            <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/phone-mockup.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            
        </div>

    );
};

export default Sojib;