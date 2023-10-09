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
              Our passionate team stays ahead of technological advancements to deliver innovative, future-proof solutions. 
              Partner with us for a transformative journey towards sustainable growth. Contact us today.
              <br />
              <br />
              Transforming your custom business ideas into an innovative next-gen web app is our forte. 
              With proven results and promising qualitative deliverables across multiple tech markets, 
              Fluencer digital solutions endures the client demands at scale and offers high-quality web development customized business solutions.
              Upkeeping with changing client's expectations, our team of qualified web app developers delivers an impressive and secure web experience.
              Our deep domain expertise combined with technology innovation help clients build disruptive user-friendly web applications with superior customer experience and higher business agility.
              Design, develop and deploy web ap applications to bring impactful changes within your web development projects. Fluencer digital solution's development approach assists clients right from analyzing disruptive web development challenges to create an intuitive UI/UX, 
              fully functional, and powerful web based solution.
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About