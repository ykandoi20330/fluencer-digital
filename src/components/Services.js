import React, { useEffect } from 'react'
import mobile from './Mobile.jpg'
import robot from './Artificial Intelligence.jpg'
import soft from './Software Development.jpg'
import web from './Website Development.jpg'
// import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
  Link
} from "react-router-dom";

const Services = () => {

  // for animation
  //  const { ref: myRef, inView: myElementIsVisible } = useInView();


  //AOS animation

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, [])


  return (
    <>
      <div className='services cont' style={{
        marginBottom: '40px'
      }}>
        {/* <div className=''>
          <i className="material-icons mx-3" style={{ color: '#fff' }}><a className='slide-arrow' href='#'>&#xe5c4;</a></i>
          <i className="material-icons mx-3" style={{ color: '#fff' }}><a className='slide-arrow' href='#'>&#xe5c8;</a></i>
        </div> */}
        <div className="" data-aos="slide-right"> {/* {`${'hid'} ${myElementIsVisible? 'show': 'hid'}`}  ref={myRef} */}
          <div>
            <h3 className='h3title-Us' style={{ color: 'white', fontSize: '2.75rem',marginTop: '10%' }}>Our Services<span style={{ color: 'orangered' }}>.</span></h3>
          </div>
        </div>
      </div>

      <div className="card-div d-flex justify-content-center align-item-center my-5">
        <div className="card text-bg-dark mx-3" data-aos="slide-up">  {/*  {`${'hid2 card text-bg-dark mx-3'} ${myElementIsVisible? 'show': 'hid2'}`}  ref={myRef}*/}
          <img src={mobile} className="card-img" alt="..." />
          <div className="card-overlay">
            <Link to="/Services3"><h4 className="card-title detail-hover" style={{ fontWeight: '600', fontSize: '2.6rem' }}>Mobile App</h4>
              <h4 className="card-title detail-hover" style={{ fontWeight: '600', fontSize: '2.6rem' }}>Developement</h4>
              <p className="card-text detail-hover" style={{ color: 'grey' }}>This is a wider card with supporting text belowas a natural lead-in.</p>
            </Link>
          </div>
        </div>
        <div className=" card text-bg-dark mx-3" data-aos="slide-up" >  {/*  {`${'hid2 card text-bg-dark mx-3'} ${myElementIsVisible? 'show': 'hid2'}`}  ref={myRef}*/}
          <img src={soft} className="card-img" alt="..." />
          <div className="card-overlay">
            <Link to="/Services2"> <h4 className="card-title detail-hover" style={{ fontWeight: '600', fontSize: '2.6rem' }}>Software</h4>
              <h4 className="card-title detail-hover" style={{ fontWeight: '600', fontSize: '2.6rem' }}>Developement</h4>
              <p className="card-text detail-hover" style={{ color: 'grey' }}>This is a wider card with supporting text below as a natural lead-in.</p>
            </Link>
          </div>
        </div>
        <div className="card text-bg-dark mx-3" data-aos="slide-down" > {/* {`${'hid3 card text-bg-dark mx-3'} ${myElementIsVisible? 'show': 'hid3'}`}  ref={myRef} */}
          <img src={robot} className="card-img" alt="..." />
          <div className="card-overlay">
            <Link to="/Services4"><h4 className="card-title detail-hover" style={{ fontWeight: '600', fontSize: '2.6rem' }}>Artificial</h4>
              <h4 className="card-title detail-hover" style={{ fontWeight: '600', fontSize: '2.6rem' }}>Intelligence</h4>
              <p className="card-text detail-hover" style={{ color: 'grey' }}>This is a wider card with supporting text below as a natural lead-in.</p>
            </Link>
          </div>
        </div>
        <div className="card text-bg-dark mx-3" data-aos="slide-left"> {/* {`${'hid card text-bg-dark mx-3'} ${myElementIsVisible? 'show': 'hid'}`}  ref={myRef}  */}
          <img src={web} className="card-img" alt="..." />
          <div className="card-overlay">
            <Link to="/ourServices"><h4 className="card-title detail-hover" style={{ fontWeight: '600', fontSize: '2.6rem' }}>Website</h4>
              <h4 className="card-title detail-hover" style={{ fontWeight: '600', fontSize: '2.6rem' }}>Developement</h4>
              <p className="card-text detail-hover" style={{ color: 'grey' }}>This is a wider card with supporting text below as a natural lead-in.</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services