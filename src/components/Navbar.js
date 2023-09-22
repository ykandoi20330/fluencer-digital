import React from 'react'
import Logo from './Logo.png'
/*social media icons */
import Linked from './Linkedin.png'
import what from './icons8-whatsapp-50.png'
import Email from './icons8-email-48.png'
import Consult from './icons8-center-51.png'
import {
    Link,
} from "react-router-dom";
import sideBar from './image (4).png'

const Navbar = () => {
    return (
        <div className='hero1'>
            {/* <nav>
                <Link className="navbar-brand" to="/"><img src={Logo} alt="Logo" className='Logo' /></Link>
                <ul className="ul nav justify-content-between">
                    <li className="nav-item">
                        <Link className="link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">

                        <li className="nav-item dropdown">
                            <Link className="link nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/ourServices">Our Services</Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/ourServices">Website Development</Link></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><Link className="dropdown-item" to="/Services2">Custom Software Development</Link></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><Link className="dropdown-item" to="/Services3">Mobile App Development</Link></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><Link className="dropdown-item" to="/Services4">Artificial Intelligence</Link></li>
                            </ul>
                        </li>
                    </li>
                    <li className="nav-item">
                        <Link className="link" to="/ourWorks">Our Works</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="link" to="/mainContact">Contact</Link>
                    </li>
                </ul>
            </nav> */}

            <nav className="navbar navbar-dark  fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={Logo} alt="Logo" className='Logo' /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler"><img src={sideBar} style={{ width: '40px' }} alt='sidebar' /></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel" style={{ color: '#ED1C24' }}><img src={Logo} style={{ width: '60px' }} />Fluencer</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item"> {/*dropdown */}
                                    <Link className="nav-link dropdown-toggle" to="/ourServices" role="button"  aria-expanded="false"> {/* data-bs-toggle="dropdown" */} 
                                        Our Services
                                    </Link>
                                    <ul className="dropdown-menu-dark" style={{listStyleType:'none', padding:'0'}}> {/*dropdown-menu  */}
                                        <li><Link className="dropdown-item" to="/ourServices">Website Development</Link></li>
                                        <li><Link className="dropdown-item" to="/Services2">Custom Software Development</Link></li>
                                        <li><Link className="dropdown-item" to="/Services3">Mobile App Development</Link></li>
                                        <li><Link className="dropdown-item" to="/Services4">Artificial Intelligence</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/ourWorks">Our Works</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/mainContact">Contact</Link>
                                </li>
                            </ul>
                            <div className='icon'>
                                <a style={{ border: 'none', margin: '0', padding: '0' }} href="mailto:yash.kandoi@fluencer.co.in"><img src={Email} style={{ width: '25px', margin: '10px' }} alt="" /></a>
                                <a style={{ border: 'none', margin: '0', padding: '0' }} href="https://www.linkedin.com/company/fluencer2022/"><img src={Linked} style={{ width: '25px', margin: '10px' }} alt="" /></a>
                                <a style={{ border: 'none', margin: '0', padding: '0' }} href="https://api.whatsapp.com/send?phone=918306067708&text"><img src={what} style={{ width: '25px', margin: '10px' }} alt="" /></a>
                                <a style={{ border: 'none', margin: '0', padding: '0' }} href="https://topmate.io/yash_kandoi/432383"><img src={Consult} style={{ width: '25px', margin: '10px' }} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar