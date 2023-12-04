import '../styles/Carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function Carousel() {

  const [slidesPerView, setSliderPerView] = useState(2)
  const data = [
    { id: 1, image: '/assets/banner.png'},
    { id: 2, image: '/assets/banner-sale.png'},
    { id: 3, image: '/assets/banner-sale-2.png'},
  ]

  useEffect(() => {

    function handleResize(){
      if(window.innerWidth < 720) {
        setSliderPerView(1);
      }else{
        setSliderPerView(1);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }

  }, [])

  return (
    <div className='carrossel'>
        <Swiper
        slidesPerView={slidesPerView}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 3000 }}  
        >
        {data.map((item) => (
            <SwiperSlide key={item.id}>
            <img 
                src={item.image}
                alt='Slider'
                className='item-slides'
            />
            </SwiperSlide>
        ))}
        </Swiper>
    </div>
  );
}

export default Carousel;