import React, {useEffect} from 'react'
import web from './Our Services/Website Development/BACK-END.png'
import web1 from './Our Services/Website Development/CUSTOM SOFTWARE.png'
import web2 from './Our Services/Website Development/E-COM.png'
import web3 from './Our Services/Website Development/FRONT-END.png'
import web4 from './Our Services/Website Development/PWA.png'
import web5 from './Our Services/Website Development/SAAS.png'
import web6 from './Our Services/Website Development/Website Development.jpg'
// import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css'

const OurServices = () => {

       // for animation
//   const { ref: myRef, inView: myElementIsVisible } = useInView();

useEffect(()=>{
    Aos.init({ duration: 500});
  }, [])

    return (
        <>
            <div>
                <div className="Back-img-Service">
                    <div className='img-back'>
                        <img src={web6} alt="" />
                    </div>
                    <h2 style={{ color: '#fff', WebkitTextStroke: '0px', textAlign: 'center' }}>Website Development<span style={{ color: 'orangered', fontSize: '2.8rem' }}>.</span></h2>
                </div>
            </div>
            <div className='container'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className= "col" data-aos="slide-left" > {/* {`${'hid col'} ${myElementIsVisible? 'show': 'hid'}`}ref={myRef}*/}
                        <img src={web3} className="card-img1-top" alt="..." />
                        <div className="web1 card">
                            <div className="card-body1">
                                <h4 className="card-title1">Front-end Web Development</h4>
                                <p className="card-text1" style={{ color: 'gray' }}>Utilize the reusable components and deliver component-driven architecture using advanced Frontend technologies like React.js,Angular, and Vue.js.Fluencer is a web application development company that combines amazing UI designs with required functionalities effortlessly.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col"  data-aos="slide-left"> {/*{`${'hid col'} ${myElementIsVisible? 'show': 'hid'}`} ref={myRef} */}
                        <img src={web} className="card-img1-top" alt="..." />
                        <div className="web1 card">
                            <div className="card-body1">
                                <h4 className="card-title1">Back-end Web Developemnt</h4>
                                <p className="card-text1" style={{ color: 'gray' }}>Seamlessly navigate between multiple features of an application by accessing the talented pool of backend web developers who can make your application scalable. We offer AWS and Azure services to host the backend services on cloud, and SQL and NoSQL databases to store and fetch data reliably using Microservices .</p>
                            </div>
                        </div>
                    </div>
                    <div className="col" data-aos="slide-left"> {/* {`${'hid col'} ${myElementIsVisible? 'show': 'hid'}`} ref={myRef} */}
                        <img src={web5} className="card-img1-top" alt="..." />
                        <div className="web1 card">
                            <div className="card-body1">
                                <h4 className="card-title1">Saas Development</h4>
                                <p className="card-text1" style={{ color: 'gray' }}>Comprehensively delve deep into the client's need to understand the scope of web application and its expandability. Our team of web app developers are adept and backed up by technical soundness to offer secured and multi-tenant SaaS application development solutions benefiting business in the longer run.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col" data-aos="slide-right">  {/*{`${'hid1 col'} ${myElementIsVisible? 'show': 'hid1'}`} ref={myRef}  */}
                        <img src={web4} className="card-img1-top" alt="..." />
                        <div className="web1 card">
                            <div className="card-body1">
                                <h4 className="card-title1">Progressive Web Apps(PWA)</h4>
                                <p className="card-text1" style={{ color: 'gray' }}>Aligning to the modern needs of app development, we create native web apps with enhanced technology features, faster application load times, highly interactive visual content and hassle-free navigation between distinct features within the apllication.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col" data-aos="slide-right"> {/*{`${'hid1 col'} ${myElementIsVisible? 'show': 'hid1'}`} ref={myRef}  */}
                        <img src={web2} className="card-img1-top" alt="..." />
                        <div className="web1 card">
                            <div className="card-body1">
                                <h4 className="card-title1">E-Commerce</h4>
                                <p className="card-text1" style={{ color: 'gray' }}>Customize and build eCommerce Web Apps using Shopify, Magento and custom frameworks to amplify business growth and boost online web presence. Our adept web developers ensure growth and user engagement by developing aglie, secure, & user-friendly eCommerce apps.</p>
                            </div>
                        </div>
                    </div>
                    <div className= "col" data-aos="slide-right">  {/*{`${'hid1 col'} ${myElementIsVisible? 'show': 'hid1'}`} ref={myRef}*/}
                        <img src={web1} className="card-img1-top" alt="..." />
                        <div className="web1 card">
                            <div className="card-body1">
                                <h4 className="card-title1">Custom Software Development</h4>
                                <p className="card-text1" style={{ color: 'gray' }}>We help you deliver superior web development services combined with expert resources, technical prowess to strengthen overall business strategy. Our experience in custom web app development assures compatibility, scalability and intuitive user experiences.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurServices