import React, {useEffect} from 'react'
import web from './Our Services/Website Development/BACK-END.png'
import web1 from './Our Services/Website Development/CUSTOM SOFTWARE.png'
import web2 from './Our Services/Website Development/E-COM.png'
import web3 from './Our Services/Website Development/FRONT-END.png'
import web4 from './Our Services/Website Development/PWA.png'
import web5 from './Our Services/Website Development/SAAS.png'
import ai from './Our Services/Artificial Intelligence/AI.jpg'
// import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css'

const OurServicesFour = () => {

           // for animation
//   const { ref: myRef, inView: myElementIsVisible } = useInView();

useEffect(()=>{
    Aos.init({ duration: 500});
  }, [])

    return (
        <>
            {/* Fourth part */}
            <div>
                <div className="Back-img-Service">
                    <div className='img-back'>
                        <img src={ai} alt="" />
                    </div>
                    <h2 style={{ color: '#fff', WebkitTextStroke: '0px', textAlign: 'center' }}>Artificial Intelligence<span style={{ color: 'orangered', fontSize: '2.8rem' }}>.</span></h2>
                </div>
            </div>
            <div className='container'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col"  data-aos="slide-left">  {/* {`${'hid col'} ${myElementIsVisible? 'show': 'hid'}`}ref={myRef}*/}
                        <img src={web3} className="card-img1-top" alt="..." />
                        <div className="web card">
                            <div className="card-body1">
                                <h4 className="card-title1">AI Consulting</h4>
                                <p className="card-text1" style={{ color: 'gray' }}>Our team of AI experts provides consultation services to help businesses identify opportunities where AI can be leveraged effectively to improve processes,efficiency,and decision-making.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col"  data-aos="slide-left" >  {/*  {`${'hid col'} ${myElementIsVisible? 'show': 'hid'}`}ref={myRef}*/}
                        <img src={web} className="card-img1-top" alt="..." />
                        <div className="web card">
                            <div className="card-body1">
                                <h4 className="card-title1">AI Software Development</h4>
                                <p className="card-text1" style={{ color: 'gray' }}>We develop custom AI solutions,including machine learning models, natural language processing (NLP) algorithms,computer vision systems,and more, tailored to meet specific business needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col"  data-aos="slide-left" > {/*  {`${'hid col'} ${myElementIsVisible? 'show': 'hid'}`}ref={myRef}*/}
                        <img src={web5} className="card-img1-top" alt="..." />
                        <div className="web card">
                            <div className="card-body1">
                                <h4 className="card-title1">AI Chatbots and Virtual Assistants</h4>
                                <p className="card-text1" style={{ color: 'gray' }}>We design and build Intelligent chatbots and virtual Assistants that can interact with users,answer quetions,provide support,and automate repetitive tasks.</p>
                            </div>
                        </div>
                    </div>
                    <div className= "col"  data-aos="slide-right" > {/*{`${'hid1 col'} ${myElementIsVisible? 'show': 'hid1'}`} ref={myRef}*/}
                        <img src={web4} className="card-img1-top" alt="..." />
                        <div className="web card">
                            <div className="card-body1">
                                <h4 className="card-title1">AI Data Analysis and Insights</h4>
                                <p className="card-text1" style={{ color: 'gray' }}>Our AI-powered data Analytics services help businesses extract valuable insights from vast amounts of data,enabling data-driven decision-making and predictive analytics.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col"  data-aos="slide-right">  {/* {`${'hid1 col'} ${myElementIsVisible? 'show': 'hid1'}`} ref={myRef}*/}
                        <img src={web2} className="card-img1-top" alt="..." />
                        <div className="web card">
                            <div className="card-body1">
                                <h4 className="card-title1">API Integration Services</h4>
                                <p className="card-text1" style={{ color: 'gray' }}>We integrate AI capabilities into existing software systems,empowering businesses to harness the power of AI without major disruptions to their current infrastructuure.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col" data-aos="slide-right">  {/* {`${'hid1 col'} ${myElementIsVisible? 'show': 'hid1'}`} ref={myRef} */}
                        <img src={web1} className="card-img1-top" alt="..." />
                        <div className="web card">
                            <div className="card-body1">
                                <h4 className="card-title1">Predictive Analytics</h4>
                                <p className="card-text1" style={{ color: 'gray' }}>We implement AI-driven predictive models that analyze historical data to make informed forecasts and predictions, aiding businesses in making data-driven decisions and optimizing processes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurServicesFour;