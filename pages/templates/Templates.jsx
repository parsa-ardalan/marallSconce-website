import templateData from "../../data/templates.json"

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


export default function Templates() {


    return (

        <div className="w-screen h-screen">

            <h1 className="text-white text-2xl w-full pr-10 mt-28 md:w-4/5 md:text-5xl md:pr-0" dir="rtl"> نمونه کارها </h1>
            <p className="text-white text-lg mt-3 w-full pr-10 md:text-2xl md:w-4/5 md:mt-6 md:pr-0" dir="rtl"> جهت دیدن نمونه کارهای بیشتر، ورق بزنید </p>


            <div className="w-7/8 h-1/6 mt-14 md:w-1/2 md:h-1/3 mx-auto md:mt-24">


                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}

                    coverflowEffect={{

                        rotate: 50,
                        stretch: 2,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}

                    pagination={false}
                    modules={[EffectCoverflow]}

                    className="h-full w-full rounded-xl"
                >

                    {
                        templateData.map((template) => (

                            <SwiperSlide className="w-full h-full ">
                                <img src={template.image} className="w-1/2 h-full shadow-xl shadow-white/25 rounded-lg opacity-85" alt="template image" />
                            </SwiperSlide>

                        ))
                    }

                </Swiper>

            </div>

        </div >

    )


}