import React, { useState, useEffect } from 'react'
import image from '../components/Testimonial/Background-removebg-preview.png'
import image1 from '../components/Testimonial/Image 1.jpg'
import image2 from '../components/Testimonial/Image 2.jpg'
import image3 from '../components/Testimonial/Image 3.jpg'
import image4 from '../components/Testimonial/Image 4.jpg'
import image5 from '../components/Testimonial/Image 5.jpg'
import image6 from '../components/Testimonial/Image 6.jpg'

// import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Testimonials1 from './Testimonials1'
import Testimonials2 from './Testimonials2'

const Testimonials = () => {

    // for animation
    //   const { ref: myRef, inView: myElementIsVisible } = useInView();

    //AOS animation

    useEffect(() => {
        Aos.init({ duration: 500 });
    }, [])

    //Testimonial Javascript
    // const [activeIndex, setActiveIndex] = useState(0);

    // const items = [
    //     {
    //         id: 1,
    //         images: require("./Testimonial/Image 2.jpg"),
    //         name: 'David James',
    //         title: '(CEO-GT Solutions)',
    //         quote: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer'
    //     },
    //     {
    //         id: 2,
    //         images: require("./Testimonial/Image 6.jpg"),
    //         name: 'Susane Gate',
    //         title: '(Project Manager - Solutions)',
    //         quote: ' This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content.'
    //     },
    //     {
    //         id: 3,
    //         images: require("./Testimonial/Image 1.jpg"),
    //         name: 'Lara Dane',
    //         title: '(Manager-GT Solutions)',
    //         quote: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer'
    //     },
    //     {
    //         id: 4,
    //         images: require("./Testimonial/Image 5.jpg"),
    //         name: 'Morgan hunt',
    //         title: '(CTO-GT Solutions)',
    //         quote: 'This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. '
    //     },
    //     {
    //         id: 5,
    //         images: require("./Testimonial/Image 3.jpg"),
    //         name: 'Peter samson',
    //         title: '(Product manager-GT Solutions)',
    //         quote: ' This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content.'
    //     },
    //     {
    //         id: 6,
    //         images: require("./Testimonial/Image 4.jpg"),
    //         name: 'Henrry james',
    //         title: '(Vice President- Solutions)',
    //         quote: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer'
    //     },
    // ];

    // const updateIndex = (newIndex) => {
    //     if (newIndex < 0) {
    //         newIndex = 0;
    //     } else if (newIndex >= items.length) {
    //         newIndex = items.length - 1;
    //     }
    //     setActiveIndex(newIndex);
    // };

    //JavaScript code for change the div Content
  const [showtab, setShowtab] = useState("part1");

    return (
        <>
            <div className='Testimonial-main cont'>
                <div>
                    <i className="material-icons mx-3"><a className='slide-arrow' onClick={() => setShowtab("part1")}>&#xe5c4;</a></i>  {/*onClick={() => { updateIndex(activeIndex - 1);}}  */}
                    <i className="material-icons mx-3"><a className='slide-arrow' onClick={() => setShowtab("part2")}>&#xe5c8;</a></i> {/* onClick={() => { updateIndex(activeIndex + 1);}} */}
                </div>
                <div className="" data-aos="slide-left">  {/*{`${'hid'} ${myElementIsVisible? 'show': 'hid'}`} ref={myRef}*/}
                    <div>
                        <h3 className='h3title' style={{ color: 'white', fontSize: '2.75rem', marginTop: '10%' }}>Testimonials<span style={{ color: 'orangered' }}>.</span></h3>
                    </div>
                </div>
            </div>
            <div className="mainContext">
                <div className="part1">
                    <div>
                        <div className="" data-aos="slide-left"> {/* {`${'hid'} ${myElementIsVisible? 'show': 'hid'}`} ref={myRef}*/}
                            <img className='back-img1' src={image1} alt="" />
                            <div className="back-img1-overlay">
                                <img className='overlay-img' src={image} alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="" data-aos="slide-down" > {/* {`${'hid3'} ${myElementIsVisible? 'show': 'hid3'}`} ref={myRef} */}
                            <img className='back-img2' src={image2} alt="" />
                            <div className="back-img1-overlay">
                                <img className='overlay-img2' src={image} alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="" data-aos="slide-up"> {/* {`${'hid2'} ${myElementIsVisible? 'show': 'hid2'}`} ref={myRef} */}
                            <img className='back-img3' src={image6} alt="" />
                            <div className="back-img1-overlay">
                                <img className='overlay-img3' src={image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div class="Testimonials card">
                    <div className="inner" style={{ transform: `translate:(-${activeIndex*100})`}}>
                    {items.map((item) => {
                        return <Testimonials1 item={item} />
                    })} 
                    </div>
                    </div>*/} 
                    {showtab === "part1" && <Testimonials1 title="1" />}
                    {showtab === "part2" &&  <Testimonials2 title="2" />}
                <div className="part2">
                    <div className="" data-aos="slide-right"> {/* {`${'hid1'} ${myElementIsVisible? 'show': 'hid1'}`} ref={myRef} */}
                        <img className='back-img1' src={image5} alt="" />
                        <div className="back-img1-overlay">
                            <img className='overlay-img' src={image} alt="" />
                        </div>
                    </div>
                    <div className="" data-aos="zoom-out-up" >  {/*{`${'hid5'} ${myElementIsVisible? 'show': 'hid5'}`} ref={myRef}  */}
                        <img className='back-img2' src={image3} alt="" />
                        <div className="back-img1-overlay">
                            <img className='overlay-img2' src={image} alt="" />
                        </div>
                    </div>
                    <div className="" data-aos="zoom-out-down">  {/* {`${'hid4'} ${myElementIsVisible? 'show': 'hid4'}`} ref={myRef}  */}
                        <img className='back-img3' src={image4} alt="" />
                        <div className="back-img1-overlay">
                            <img className='overlay-img3' src={image} alt="" />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Testimonials;