import React, { useEffect } from 'react'
import Image2 from './Our Works/Ababeel1.png'
// import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

const OurWorks7 = () => {

    // for animation
    // const { ref: myRef, inView: myElementIsVisible } = useInView();

    //AOS animation

    useEffect(() => {
        Aos.init({ duration: 500 });
    }, [])

    return (
        <div className='container1'>
            <div className="detail" data-aos="slide-up">  {/*  {`${'hid2 detail'} ${myElementIsVisible ? 'show' : 'hid2'}`} ref={myRef}*/}
                <div>
                    <img style={{ width: '40vw', marginTop: '-70px' }} src={Image2} alt="" />
                </div>
                <div className='writtenDetail'>
                    <div className='work' id='arti'>
                        <h3 style={{ color: '#fff' }}>Ababeel<span style={{ color: 'orangered' }}>.</span></h3>
                        <p className='detail-para' style={{ color: 'gray' }}>  The website is well-designed and easy to navigate. The
                            homepage has a clear and concise call to action, inviting
                            visitors to learn more about the organization, It provides website owners and admins
                            with a simplified interface for inputting and organizing
                            their product related information </p><br />
                        <p className='detail-para' style={{ color: 'gray' }}> The website is mobile-friendly, so it can be easily
                            accessed on smartphones and tablets. This is important,
                            as more and more people are using their mobile devices! </p>
                        <br />
                        <Link className='workbtn' to="/">Visit Site</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurWorks7