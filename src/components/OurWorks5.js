import React,{useEffect} from 'react'
import Image2 from './Our Works/Keithston.jpg'
// import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

const OurWorks5 = () => {

      // for animation
  // const { ref: myRef, inView: myElementIsVisible } = useInView();

    //AOS animation
    
    useEffect(()=>{
      Aos.init({ duration: 500});
    }, [])

  return (
    <div className='container1'>
        <div className="detail" data-aos="slide-up">  {/*  {`${'hid2 detail'} ${myElementIsVisible ? 'show' : 'hid2'}`} ref={myRef}*/}
          <div>
            <img style={{ width: '40vw', marginTop: '-70px' }} src={Image2} alt="" />
          </div>
          <div className='writtenDetail'>
            <div className='work' id='arti'>
              <h3 style={{ color: '#fff' }}>Keithston<span style={{ color: 'orangered' }}>.</span></h3>
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
    </div>
  )
}

export default OurWorks5