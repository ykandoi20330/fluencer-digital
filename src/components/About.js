import React, { useEffect } from 'react'
// import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css'


const About = () => {

  // for Intersection animation
  // const { ref: myRef, inView: myElementIsVisible } = useInView();

  //AOS Animation
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, [])

  return (
    <>
      <section>
        <div className='main cont' id="home">
          <div className="" data-aos="slide-left"> {/* {`${'hid1'} ${myElementIsVisible? 'show': 'hid1'}`} ref={myRef}*/}
            <h3>About Us<span style={{ color: 'orangered' }}>.</span></h3>
          </div>
          <div className="" data-aos="slide-right" >   {/* {`${'hid'} ${myElementIsVisible? 'show': 'hid'}`} ref={myRef}*/}
            <div className="para container">
              Fluencer Digital is a dynamic digital solutions provider specializing in website development,mobile app development, and software solutions.
              Our passionate team stays ahead of technologicaladvancements to deliver innovative, future-proof solutions. 
              Partner with us for a transformative journey towards sustainable growth. Contact us today.#
              Fluencer Digital is a dynamic digital solutions provider specializing in website development,mobile app development, and software solutions.
              Our passionate team stays ahead of technologicaladvancements to deliver innovative, future-proof solutions. 
              Partner with us for a transformative journey towards sustainable growth. Contact us today.
              <br />
              <br />
              Fluencer Digital is a dynamic digital solutions provider specializing in website development,mobile app development, and software solutions.
              Our passionate team stays ahead of technologicaladvancements to deliver innovative, future-proof solutions. 
              Partner with us for a transformative journey towards sustainable growth. Contact us today.
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About