import React, {useEffect} from 'react'
import Image from './Our Works/Garol Advisory.jpg'
// import { useInView } from 'react-intersection-observer';
import OurWorks2 from './OurWorks2'
import OurWorks3 from './OurWorks3'
import OurWorks4 from './OurWorks4'
import OurWorks5 from './OurWorks5'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
  Link,
} from "react-router-dom";
import OurWorks6 from './OurWorks6'
import OurWorks7 from './OurWorks7'

const OurWorks = () => {

  // for animation
  // const { ref: myRef, inView: myElementIsVisible } = useInView();

  //AOS animation
  useEffect(()=>{

    Aos.init({ duration: 500});
  }, [])

  return (
    <div className='ourWork container1'>
      <div>
        <h1 className='heading' style={{ color: '#fff', WebkitTextStroke: '0px', textAlign: 'center', zIndex: '-1' }}>Our Works<span style={{ color: 'orangered', fontSize: '2.8rem' }}>.</span></h1>
      </div>
      <div>
        <ul className='ul-ourWorks container'>
          <li><Link to="#mobile">Mobile</Link></li>
          <li><Link to="#website">Website</Link></li>
          <li><Link to="#custom">Custom Software</Link></li>
          <li><Link to="#arti">Artificial Intelligence</Link></li>
        </ul>
      </div>
      <div className="detail" data-aos="slide-up">  {/*   {`${'hid2 detail'} ${myElementIsVisible ? 'show' : 'hid2'}`} ref={myRef}*/}
        <div>
          <img style={{ width: '40vw' }} src={Image} alt="" />
        </div>
        <div className=' writtenDetail'>
          <div className='work1 work' id='website'>
            <h3 style={{ color: '#fff' }}>Goral Advisory<span style={{ color: 'orangered' }}>.</span></h3>
            <p className='detail-para' style={{ color: 'gray' }}> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur consequatur, libero nobis assumenda debitis laudantium corrupti veniam dignissimos rerum dolorum.
              Atque iure blanditiis odio ipsum nisi natus consectetur, sunt debitis! </p><br />
            <p className='detail-para' style={{ color: 'gray' }}> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur consequatur, libero nobis assumenda debitis laudantium corrupti veniam dignissimos rerum dolorum.
              Atque iure blanditiis odio ipsum nisi natus consectetur, sunt debitis! </p>
            <br />
            <Link className='workbtn' to="/">Visit Site</Link>
          </div>
        </div>
      </div>

      <OurWorks2 />
      <OurWorks3 />
      <OurWorks4 />
      <OurWorks5 />
      <OurWorks6 />
      <OurWorks7 />

    </div>
  )
}

export default OurWorks