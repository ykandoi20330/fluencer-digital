import React, {useEffect}  from 'react'
import Image4 from './Our Works/Sandesh Foundation.jpg'
// import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
  Link,
} from "react-router-dom";

const OurWorks2 = () => {
      // for animation
  // const { ref: myRef, inView: myElementIsVisible } = useInView();

    //AOS animation
    
    useEffect(()=>{
      Aos.init({ duration: 500});
    }, [])

  return (
    <div className='container1'>
          <div className="detail2 detail"  data-aos="slide-up">  {/*  {`${'hid2 detail'} ${myElementIsVisible ? 'show' : 'hid2'}`} ref={myRef}*/}
          <div className='WrittenDetailwork2 writtenDetail'>
            <div className='work' id='custom'>
              <h3 style={{ color: '#fff' }}>Sandesh Foundation<span style={{ color: 'orangered' }}>.</span></h3>
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
          <div>
            <img className='detail2-img' style={{ width: '40vw', marginTop: '-150px' }} src={Image4} alt="" />
          </div>
        </div>
    </div>
  )
}

export default OurWorks2