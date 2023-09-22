import React, { useEffect } from 'react'
import Image2 from './Our Works/JIT.png'
// import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

const OurWorks6 = () => {

    // for animation
    // const { ref: myRef, inView: myElementIsVisible } = useInView();

    //AOS animation

    useEffect(() => {
        Aos.init({ duration: 500 });
    }, [])

    return (
        <div className='container1'>
            <div className="detail4 detail" data-aos="slide-up">  {/*  {`${'hid2 detail'} ${myElementIsVisible ? 'show' : 'hid2'}`} ref={myRef}*/}
                <div className='WrittenDetailwork4 writtenDetail'>
                    <div className='work' id='arti'>
                        <h3 style={{ color: '#fff' }}>Jaipur Institute of Technology<span style={{ color: 'orangered' }}>.</span></h3>
                        <p className='detail-para' style={{ color: 'gray' }}> Our website for Jaipur Institute of Technology boasts a
                            modern design that prioritizes user-friendliness,
                            ensuring a seamless browsing experience, It serves as an engagement hub with features like
                            virtual campus tours, event calendars, and news
                            updates, keeping stakeholders informed and engaged. </p><br />
                        <p className='detail-para' style={{ color: 'gray' }}> The website is fully responsive and accessible across
                            devices, including mobile phones, tablets, and
                            desktops! </p>
                        <br />
                        <Link className='workbtn' to="/">Visit Site</Link>
                    </div>
                </div>
                <div>
                    <img className='detail4-img' style={{ width: '40vw', marginTop: '-70px' }} src={Image2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default OurWorks6