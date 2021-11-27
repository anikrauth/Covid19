import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import CardTest from '../cards/CardTest.js'

SwiperCore.use([Navigation, Pagination])

const swiperStyle = {
    height: '100%',

}




function CustomSwiper(props) {

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={3}
            navigation
        >
            {
                props.persons.map((person) =>
                    <SwiperSlide key={person.id} style={{

                    }}><CardTest
                            key={person.id}
                            id={person.id}
                            first_name={person.first_name}
                            last_name={person.last_name}
                            created={person.created}
                        />
                    </SwiperSlide>)
            }
        </Swiper >
    );
}

export default CustomSwiper;