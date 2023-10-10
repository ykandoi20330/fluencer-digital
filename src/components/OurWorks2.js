import React, {useEffect}  from 'react'
import Image4 from './Our Works/Sandesh Foundation-min.jpg'
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
          <div className='WrittenDetailwork2 writtenDetail1'>
            <div className='work' id='custom'>
              <h3 style={{ color: '#fff' }}>Sandesh Foundation<span style={{ color: 'orangered' }}>.</span></h3>
              <p className='detail-para' style={{ color: 'gray' }}>Sandesh Foundation is a not for profit organization registered under Indian Trust Act 1882 in Delhi (NCT), registered in 2014. 
              Sandesh Foundation also has 80G & 124 Certifications under Income Tax Act as well as registered for undertaking CSR Activities CSR 01 (MCA) and NITI Aayog Since last 8 years, 
              Sandesh Foundation is working on Education, Sanitation, Health & Nutrition, Women Empowerment, Relief Activities like Food and Cloths distribution to needed especially at the time of Disaster and Pandemic like Covid-19.! </p><br />
              <p className='detail-para' style={{ color: 'gray' }}>And we are also working with different Govt. activities and schemes like Immunization, Polio, Vaccination, Legal Aid Health Camps and Health Checkups. 
              We are also working with Govt Schools for supporting disadvantaged community and supporting education Working with Apollo Tyres Foundation (CSR Project CMTN) Delhi! </p>
              <br />
              <Link className='workbtn' to="https://sandeshfoundation.in/">Visit Site</Link>
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