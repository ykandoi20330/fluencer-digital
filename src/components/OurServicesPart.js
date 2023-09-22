import React, {useEffect} from 'react'
import website from './Our Services/Website Development/BACK-END.png'
import website1 from './Our Services/Website Development/CUSTOM SOFTWARE.png'
import website2 from './Our Services/Website Development/E-COM.png'
import website3 from './Our Services/Website Development/FRONT-END.png'
import website4 from './Our Services/Website Development/PWA.png'
import website5 from './Our Services/Website Development/SAAS.png'
import software from './Our Services/Software Development/software-img.jpg'
// import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css'

const OurServicesPart = () => {

 // for animation
//  const { ref: myRef, inView: myElementIsVisible } = useInView();

useEffect(()=>{
    Aos.init({ duration: 500});
  }, [])

return (
    <>
        {/* Second part */}
        <div>
            <div className="Back-img-Service">
                <div className='img-back'>
                    <img src={software} alt="" />
                </div>
                <h2 style={{ color: '#fff', WebkitTextStroke: '0px', textAlign: 'center' }}>Custom Software Development<span style={{ color: 'orangered', fontSize: '2.8rem' }}>.</span></h2>
            </div>
        </div>
        <div className='container'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col" data-aos="slide-left">    {/*  {`${'hid col'} ${myElementIsVisible? 'show': 'hid'}`}ref={myRef}*/}
                    <img src={website3} className="card-img1-top" alt="..." />
                    <div className="web card">
                        <div className="card-body1">
                            <h4 className="card-title1">Custom Software Development</h4>
                            <p className="card-text1" style={{ color: 'gray' }}>We create tailor-made software solutions that cater to your unique business needs. providing effective tools for your operations.</p>
                        </div>
                    </div>
                </div>
                <div className="col"  data-aos="slide-left">   {/* {`${'hid col'} ${myElementIsVisible? 'show': 'hid'}`}ref={myRef}*/}
                    <img src={website} className="card-img1-top" alt="..." />
                    <div className="web card">
                        <div className="card-body1">
                            <h4 className="card-title1">Software Consulting</h4>
                            <p className="card-text1" style={{ color: 'gray' }}>Our expert consultants offer valuable insights and guidance to help you make informed decisions about software requirements, technology choices, and development strategies.</p>
                        </div>
                    </div>
                </div>
                <div className="col" data-aos="slide-left">    {/*  {`${'hid col'} ${myElementIsVisible? 'show': 'hid'}`}ref={myRef}*/}
                    <img src={website5} className="card-img1-top" alt="..." />
                    <div className="web card">
                        <div className="card-body1">
                            <h4 className="card-title1">Legacy Software Modernization</h4>
                            <p className="card-text1" style={{ color: 'gray' }}>We revamp and update outdated software systems,ensuring they are compatible with the latest technologies and security standards, thus enhancing performance and usability.</p>
                        </div>
                    </div>
                </div>
                <div className="col" data-aos="slide-right" >   {/*{`${'hid1 col'} ${myElementIsVisible? 'show': 'hid1'}`} ref={myRef} */}
                    <img src={website4} className="card-img1-top" alt="..." />
                    <div className="web card">
                        <div className="card-body1">
                            <h4 className="card-title1">API Integration Services</h4>
                            <p className="card-text1" style={{ color: 'gray' }}>We seamlessly integrate third-party API's and systems into your existing software,enabling enhanced functionality and improved connectivity with otther platforms.</p>
                        </div>
                    </div>
                </div>
                <div className="col" data-aos="slide-right" >  {/*{`${'hid1 col'} ${myElementIsVisible? 'show': 'hid1'}`} ref={myRef} */}
                    <img src={website2} className="card-img1-top" alt="..." />
                    <div className="web card">
                        <div className="card-body1">
                            <h4 className="card-title1">Software Maintenance and Support</h4>
                            <p className="card-text1" style={{ color: 'gray' }}>Our team provides ongoing maintenance and support services to ensure that your custom software remains up-to-date,secure,and optimized for peak performace.</p>
                        </div>
                    </div>
                </div>
                <div className="col" data-aos="slide-right">  {/* {`${'hid1 col'} ${myElementIsVisible? 'show': 'hid1'}`} ref={myRef} */}
                    <img src={website1} className="card-img1-top" alt="..." />
                    <div className="web card">
                        <div className="card-body1">
                            <h4 className="card-title1">Quality Assurance Testing</h4>
                            <p className="card-text1" style={{ color: 'gray' }}>We conduct comprehensive testing and quality assurance processes to identify and address any issues, guaranteeing a flawless end-product that meets your expectations</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default OurServicesPart;