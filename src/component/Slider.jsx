import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import i1 from "../assets/imags/image1.png"
import i2 from "../assets/imags/image2.png"
import i3 from "../assets/imags/image3.png"

const Slider = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src={i1} alt="" className="image1 w-full  h-[500px] object-cover" /></SwiperSlide>
        <SwiperSlide><img src={i2} alt="" className="image2 w-full h-[500px] object-cover" /></SwiperSlide>
        <SwiperSlide><img src={i3} alt="" className="image3 w-full h-[500px] object-cover" /></SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Slider;