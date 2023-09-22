import React, { useEffect } from 'react'
import image1 from './Contact Us.jpg'
// import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
    Link,
} from "react-router-dom";

const Contact = () => {

    // for animation
    //   const { ref: myRef, inView: myElementIsVisible } = useInView();

    //AOS Animation
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, [])


    return (
        <div className='mainContact cont'>
            <div>
                <h2 className='contact-heading' style={{ color: '#fff', WebkitTextStroke: '0px', textAlign: 'center' }}>Have a Question? Let's Chat<span style={{ color: 'orangered', fontSize: '2.8rem' }}>.</span></h2>
                <p style={{color:'#fff', textAlign:'center',marginBottom:'4%'}}>Ready for digital transformation? Partner with Fluencer Digital today!</p>
            </div>
            <div className="contact">
                <div className="firstPart" data-aos="slide-left"> {/*{`${'hid firstPart'} ${myElementIsVisible? 'show': 'hid'}`} ref={myRef}  */}
                    <img style={{ width: '100%', marginRight: '30px' }} src={image1} alt="" />
                </div>
                <div className="SecondPart" data-aos="slide-up" style={{ marginLeft: '25px' }}>  {/*{`${'hid2 SecondPart'} ${myElementIsVisible? 'show': 'hid2'}`} ref={myRef} */}
                    <div>
                        <h3 className='h3title' style={{ color: 'white', fontSize: '2.30rem', fontWeight: '400' }}>Get In Touch<span style={{ color: 'orangered', fontSize: '2.8rem' }}>.</span></h3>
                    </div>
                    <form className="row g-3">
                        <div class="form-floating mb-3 col-12">
                            <input type="text" class="form-control" id="floatingInput" placeholder="name" />
                            <label for="floatingInput">Your Name</label>
                        </div>
                        <div class="form-floating col-md-6">
                            <input type="email" class="form-control" id="floatingPassword" placeholder="name@example.com" />
                            <label for="floatingPassword">Your Email Id</label>
                        </div>
                        <div class="form-floating col-md-6">
                            <input type="number" class="form-control" id="floatingInput" placeholder="number" />
                            <label for="floatingInput">Mobile No.</label>
                        </div>
                        <div class="form-floating col-12">
                            <input type="text" class="form-control" id="floatingPassword" placeholder="text" />
                            <label for="floatingPassword">Tell US A Little About Your Project...</label>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">How Can We Help?</label>
                            <div className="form-check">
                                <div className='check'>
                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label" htmlFor="gridCheck">
                                        UI/UX
                                    </label>
                                </div>
                                <div className='check'>
                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label" htmlFor="gridCheck">
                                        Website Development
                                    </label>
                                </div>
                                <div className='check'>
                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label" htmlFor="gridCheck">
                                        Mobile App Development
                                    </label>
                                </div>
                                <div className='check'>
                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label" htmlFor="gridCheck">
                                        Other
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <Link to="/" className='button'>Let's work</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact