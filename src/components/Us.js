import React, { useEffect, useState } from 'react'

import back from '../components/MaskGroup.png'

// import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Technology1 from './Technology1'
import Technology2 from './Technology2'
import Technology3 from './Technology3'
import Technology4 from './Technology4'

const Us = () => {

  // for animation
  //  const { ref: myRef, inView: myElementIsVisible } = useInView();

  //AOS animation

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, [])



  //change the section
  const [showtab, setShowtab] = useState("tab1");

  return (
    <>
      <div className='Us'
        style={{ backgroundImage: `url(${back})`, backgroundRepeat:'no-repeat' }}
      >
        <div className="cont">
          <div>
            <h3 className='h3title-Us' style={{ color: 'white', fontSize: '2.75rem' }}>Why Us<span style={{ color: 'orangered', fontSize: '2.8rem' }}>?</span></h3>
          </div>
          <div className="firstContent " data-aos="slide-right" > {/*{`${'firstContent hid'} ${myElementIsVisible? 'show': 'hid'}`}  ref={myRef}  */}
            <div className="para1 my-3 mx-4">
              <div className="box1">
                <h2 className='h2-Us'>01</h2>
                <h3 className='h3-Us' style={{ color: '#fff', bottom: '20px', position: 'relative' }}>Expertise<br />Team<span style={{ color: 'orangered' }}>.</span></h3>
              </div>
              <span className='span-Us' style={{ color: 'gray' }}>Our software company boasts an exceptional team of experienced professionals, dedicated to delivering innovative solutions that exceed your expectations.</span>
            </div>
            <div className="para1 my-3 mx-4">
              <div className="box1">
                <h2 className='h2-Us'>02</h2>
                <h3 className='h3-Us' style={{ color: '#fff', bottom: '20px', position: 'relative' }}>On-Time<br />Delivery<span style={{ color: 'orangered' }}>.</span></h3>
              </div>
              <span className='span-Us' style={{ color: 'gray' }}>Our commitment to excellence ensures on-time delivery of our software solutions, empowering your business to stay ahead in a rapidly evolving digital landscape.</span>
            </div>
            <div className="para1 my-3 mx-4">
              <div className="box1">
                <h2 className='h2-Us'>03</h2>
                <h3 className='h3-Us' style={{ color: '#fff', bottom: '20px', position: 'relative' }}>Latest<br />Technology<span style={{ color: 'orangered' }}>.</span></h3>
              </div>
              <span className='span-Us' style={{ color: 'gray' }}>We harness the power of the latest technology, enabling us to craft cutting-edge software solutions that propel your business towards unmatched success and competitiveness.</span>
            </div>
            <div className="para1 my-3 mx-4">
              <div className="box1">
                <h2 className='h2-Us'>04</h2>
                <h3 className='h3-Us' style={{ color: '#fff', bottom: '20px', position: 'relative' }}>24*7<br />Support<span style={{ color: 'orangered' }}>.</span></h3>
              </div>
              <span className='span-Us' style={{ color: 'gray' }}>Our dedicated team provides round-the-clock support, ensuring that your business recevies prompt assistance and peace of mind, no matter the time or day.</span>
            </div>
          </div>
        </div>
        <div className="secondContent container" style={{ marginTop: '100px' }}>
          <div>
            <h3 className='h3title' style={{ color: 'white', fontSize: '2.75rem' }}>Techonologies We Work<span style={{ color: 'orangered' }}>.</span></h3>
          </div>
          <div className="smallNav">
            <ul>
              <li><a className='' onClick={() => setShowtab("tab1")}>Frontend</a></li> 
              <li><a className='' onClick={() => setShowtab("tab2")}>Backend</a></li> 
              <li><a className='' onClick={() => setShowtab("tab3")}>Database</a></li>
              <li><a className='' onClick={() => setShowtab("tab4")}>Mobile</a></li>
            </ul>
          </div>
          <div className='tabs'>
            { showtab === "tab1" && <Technology1 title="1"/> }
            { showtab === "tab2" && <Technology2 title="2"/> }
            { showtab === "tab3" &&  <Technology3 title="3"/> }
            { showtab === "tab4" && <Technology4 title="4"/> }
          </div>
        </div>
      </div>
    </>
  )
}

export default Us