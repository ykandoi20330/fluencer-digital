import React , {useEffect} from 'react'
import web from './Our Services/Website Development/BACK-END.png'
import web1 from './Our Services/Website Development/CUSTOM SOFTWARE.png'
import web2 from './Our Services/Website Development/E-COM.png'
import web3 from './Our Services/Website Development/FRONT-END.png'
import web4 from './Our Services/Website Development/PWA.png'
import web5 from './Our Services/Website Development/SAAS.png'
import mobile from './Our Services/Mobile Development/Mobile-App.png'
// import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css'

const OurServicesThree = () => {

     // for animation
//  const { ref: myRef, inView: myElementIsVisible } = useInView();

useEffect(()=>{
    Aos.init({ duration: 500});
  }, [])

    return (
        <>
        {/* Third part */}
        <div>
                <div className="Back-img-Service">
                    <div className='img-back'>
                        <img src={mobile} alt="" />
                    </div>
                    <h2 style={{ color: '#fff', WebkitTextStroke: '0px', textAlign: 'center' }}>Mobile App Development<span style={{ color: 'orangered', fontSize: '2.8rem' }}>.</span></h2>
                </div>
            </div>
            <div className='container'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col" data-aos="slide-left" >    {/* {`${'hid col'} ${myElementIsVisible? 'show': 'hid'}`}ref={myRef}*/}
                        <img src={web3} className="card-img1-top" alt="..." />
                        <div className="web card">
                            <div className="card-body1">
                                <h4 className="card-title1">iOS App Development</h4>
                                <p className="card-text1" style={{ color: 'gray' }}>We specialize in creating high-quality, user-friendly mobile applications for Apple's IOS platform, ensuring compatibility with the latest devices and operating systems.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col" data-aos="slide-left">    {/* {`${'hid col'} ${myElementIsVisible? 'show': 'hid'}`}ref={myRef}*/}
                        <img src={web} className="card-img1-top" alt="..." />
                        <div className="web card">
                            <div className="card-body1">
                                <h4 className="card-title1">Android App Development</h4>
                                <p className="card-text1" style={{ color: 'gray' }}>Our team excels in developing feature-rich and scalable Andriod apps, catering to a wide range of devices and Android versions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col" data-aos="slide-left">    {/* {`${'hid col'} ${myElementIsVisible? 'show': 'hid'}`}ref={myRef}*/}
                        <img src={web5} className="card-img1-top" alt="..." />
                        <div className="web card">
                            <div className="card-body1">
                                <h4 className="card-title1">Cross-Platform App Development</h4>
                                <p className="card-text1" style={{ color: 'gray' }}>We leverage cross-platform development frameworks to build apps that work seamlessly on both iOS and Android,reducing development time and costs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col" data-aos="slide-right">  {/* {`${'hid1 col'} ${myElementIsVisible? 'show': 'hid1'}`} ref={myRef} */}
                        <img src={web4} className="card-img1-top" alt="..." />
                        <div className="web card">
                            <div className="card-body1">
                                <h4 className="card-title1">UI/UX Design</h4>
                                <p className="card-text1" style={{ color: 'gray' }}>Our expert designers craft intuitive and visually appealing user interfaces, enhancing user experience and engagement with your mobile app.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col" data-aos="slide-right">  {/* {`${'hid1 col'} ${myElementIsVisible? 'show': 'hid1'}`} ref={myRef} */}
                        <img src={web2} className="card-img1-top" alt="..." />
                        <div className="web card">
                            <div className="card-body1">
                                <h4 className="card-title1">App Backend Development</h4>
                                <p className="card-text1" style={{ color: 'gray' }}>We develop robust and secure backend systems that power your mobile app, handling data storage,user authentication,and other essentail functionalities.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col" data-aos="slide-right" >  {/* {`${'hid1 col'} ${myElementIsVisible? 'show': 'hid1'}`} ref={myRef}*/}
                        <img src={web1} className="card-img1-top" alt="..." />
                        <div className="web card">
                            <div className="card-body1">
                                <h4 className="card-title1">App Testing and Quality Assurance</h4>
                                <p className="card-text1" style={{ color: 'gray' }}>Our comprehensive testing process ensures that your mobile app functions flawlessly,is free from bugs,and provides a smooth user experience across different devices.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )}

    export default OurServicesThree;