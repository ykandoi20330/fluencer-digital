import React, { useEffect, useState } from 'react'
import bikeLogo from './Myple.png'
import firstLogo from './Garol Advisory.png'
import thirdLogo from './Sandesh Foundation.png'
import fourthLogo from './Ababeel-removebg-preview.png'
import fiveLogo from './Kn-removebg-preview.png'
import sixLogo from './3-removebg-preview.png'
import sevenLogo from './Jaipur-removebg-preview.png'
// import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
  Link,
} from "react-router-dom";
import Work1 from './Work1'
import Work0 from './Work0'
import Work2 from './Work2'
import Work3 from './Work3'
import Work4 from './Work4'
import Work5 from './Work5'
import Work6 from './Work6'

//swiper

import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const Work = () => {

  // for animation
  // const { ref: myRef, inView: myElementIsVisible } = useInView();

  //AOS animation

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, [])

  //JavaScript code for change the div Content
  const [showtab, setShowtab] = useState("part1");

  return (
    <>
      <div className='works cont' style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '40px'
      }}>
        <div className="" data-aos="slide-left"> {/* {`${'hid'} ${myElementIsVisible? 'show': 'hid'}`} ref={myRef}  */}
          <div>
            <h3 className='h3title' style={{ color: 'white', fontSize: '2.75rem', marginTop: '10%' }}>Our Works<span style={{ color: 'orangered' }}>.</span></h3>
          </div>
        </div>
        <div>
          <i className="material-icons mx-3" style={{ color: '#fff' }}><Link className='slide-arrow' to='/' onClick={() => setShowtab("part1")}>&#xe5c4;</Link></i>
          <i className="material-icons mx-3" style={{ color: '#fff' }}><Link className='slide-arrow' to='/' onClick={() => setShowtab("part2")}>&#xe5c8;</Link></i>
        </div>
      </div>
      <div className="first">
        {showtab === "part1" && <Work0 title="1" />}
        {showtab === "part2" && <Work1 title="2" />}
        {showtab === "part3" && <Work2 title="3" />}

        {showtab === "part4" && <Work3 title="4" />}
        {showtab === "part5" && <Work4 title="5" />}
        {showtab === "part6" && <Work5 title="6" />}
        {showtab === "part7" && <Work6 title="7" />}
      </div>
      <div className='logobtn'>
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          //  navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <button className="Showbtn" onClick={() => setShowtab("part1")}><img className='btn1 back' style={{ width: '60%' }} src={firstLogo} alt="" /></button>
          </SwiperSlide>
          <SwiperSlide>
            <button className="Showbtn" onClick={() => setShowtab("part2")}><img className='btn2 back' style={{ width: '60%' }} src={bikeLogo} alt="" /></button>
          </SwiperSlide>

          <SwiperSlide>
            <button className='Showbtn1' onClick={() => setShowtab("part3")}><img className='btn2 back1' style={{ width: '36%' }} src={fourthLogo} alt="" /></button>
          </SwiperSlide>
          <SwiperSlide>
            <button className='Showbtn' onClick={() => setShowtab("part4")}><img className='btn2 back' style={{ width: '60%' }} src={thirdLogo} alt="" /></button>
          </SwiperSlide>
          <SwiperSlide>
            <button className="Showbtn1" onClick={() => setShowtab("part5")}><img className='btn2 back1' style={{ width: '36%' }} src={fiveLogo} alt="" /></button>
          </SwiperSlide>
          <SwiperSlide>
            <button className='Showbtn1' onClick={() => setShowtab("part6")}><img className='btn2 back1' style={{ width: '36%' }} src={sixLogo} alt="" /></button>
          </SwiperSlide>
          <SwiperSlide>
            <button className='Showbtn1' onClick={() => setShowtab("part7")}><img className='btn2 back1' style={{ width: '36%' }} src={sevenLogo} alt="" /></button>
          </SwiperSlide>
        </Swiper>

      </div>
    </>
  )
}

export default Work