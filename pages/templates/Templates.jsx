import TemplateItem from "./templateItem/TemplateItem"
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

            <h1 className="text-white text-5xl w-4/5 mt-28" dir="rtl"> نمونه کارها </h1>
            <p className="text-white text-2xl w-4/5 mt-6" dir="rtl"> روی عکس مورد نظر کلیک راست کنید و سپس لینک آن را کپی کنید.</p>


            <div className=" w-1/2 h-1/3 mx-auto mt-24">


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