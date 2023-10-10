import React,{useEffect} from 'react'
import Image2 from './Our Works/Keithston-min.jpg'
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
              <p className='detail-para' style={{ color: 'gray' }}> We champion continual progress for athletes and sport by taking action to help athletes reach their potential. Every job at Keithston, Inc. is grounded in a team-first mindset,
               cultivating a culture of innovation and a shared purpose to leave an enduring impact.s! </p>
              <br />
              <p className='detail-para' style={{ color: 'gray' }}> At Keithston we craft shoes with care for everyone- men, women and kids, with an equal attention to detail, letting each shoe speak for itself. 
              The world-class quality, trendy designs and affordable prices have captured the imagination of millions of people, across the country- making Keithston, an aspirational brand especially for - young adults, everyday performers and fashionistas.! </p><br />
              {/* <Link className='workbtn' to="/">Read More</Link> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default OurWorks5