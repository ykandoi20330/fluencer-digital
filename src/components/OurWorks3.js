import React,{useEffect}  from 'react'
import Image1 from './Our Works/Kanmart-min.jpg'
// import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
  Link,
} from "react-router-dom";

const OurWorks3 = () => {

     // for animation
  // const { ref: myRef, inView: myElementIsVisible } = useInView();

   //AOS animation
   
   useEffect(()=>{
    Aos.init({duration: 500});
  }, [])
  
  return (
    <div className='container1'>
          <div className="detail" data-aos="slide-up" >  {/*{`${'hid2 detail'} ${myElementIsVisible ? 'show' : 'hid2'}`} ref={myRef}*/}
          <div>
            <img style={{ width: '40vw', marginTop: '-70px' }} src={Image1} alt="" />
          </div>
          <div className='writtenDetail'>
            <div className='work' id='mobile'>
              <h3 style={{ color: '#fff' }}>Kanmart<span style={{ color: 'orangered' }}>.</span>(Refurbished india)</h3>
              <p className='detail-para' style={{ color: 'gray' }}> As a e-commerce Brand, we are hopeful of making a big impact in the refurbished products market, starting off with smartphones and laptops as our star categories.
               we have all types of categories for our customers to buy anything from kanmart,we provides best products experience to customers, We will be adding new product segments in the future.! </p><br />
              <p className='detail-para' style={{ color: 'gray' }}> Customers can visit the e-store to buy refurbished products and accessories for their smartphones, laptos and other products as the brand has also launched a range of accessories from smartphone covers, Headphones, chairs, daily essentail and laptops , tablets etc.! </p>
              <br />
              {/* <Link className='workbtn' to="/">Read More</Link> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default OurWorks3