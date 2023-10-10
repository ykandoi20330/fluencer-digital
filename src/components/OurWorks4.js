import React, {useEffect} from 'react'
import Image3 from './Our Works/Myple-min.jpg'
// import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
  Link,
} from "react-router-dom";

const OurWorks4 = () => {

     // for animation
  // const { ref: myRef, inView: myElementIsVisible } = useInView();

     //AOS animation
     
     useEffect(()=>{
      Aos.init({duration: 500 });
    }, [])

  return (
    <div className='container1'>
         <div className="detail4 detail" data-aos="slide-up">  {/* {`${'hid2 detail'} ${myElementIsVisible ? 'show' : 'hid2'}`} ref={myRef} */}
          <div className='WrittenDetailwork4 writtenDetail1'>
            <div className='work' id='div1'>
              <h3 style={{ color: '#fff' }}>Myple<span style={{ color: 'orangered' }}>.</span></h3>
              <p className='detail-para' style={{ color: 'gray' }}> Choose any bike you like, Are you ready to hit the road and experience the thrill of a two-wheeled adventure? Look no further than Myple, the leading platform connecting Bike owners and passionate riders like you.
 Whether you're seeking an exhilarating escape, affordable bike rental in your city, or bike rental for tourists, we've got you covered.! </p><br />
              <p className='detail-para' style={{ color: 'gray' }}>Experience the joy of riding without the commitment of ownership. At Myple, we offer a vast selection of well-maintained bikes for rent, catering to riders of all skill levels. Whether you're seasoned enthusiast or a curious beginner, 
              our diverse range of bikes ensures you'll find the perfect ride for any occasion.! </p>
              <br />
              {/* <Link className='workbtn' to="/">Read More</Link> */}
            </div>
          </div>
          <div>
            <img className='detail4-img' style={{ width: '40vw', marginTop: '-70px' }} src={Image3} alt="" />
          </div>
        </div>
    </div>
  )
}

export default OurWorks4