import React, { useEffect } from 'react'
import smartContract from './Our Services/Blockchain Services/smart-contract.png'
import blockchain from './Our Services/Blockchain Services/blockchain.png'
import nft from './Our Services/Blockchain Services/nft.png'
import web3 from './Our Services/Blockchain Services/web3.png'
import defi from './Our Services/Blockchain Services/defi.png'
import metaverse from './Our Services/Blockchain Services/metaverse.png'
import bgImage from './Our Services/Blockchain Services/blockchain-bg.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const OurServicesFive = () => {

    useEffect(() => {
        Aos.init({ duration: 500 });
    }, [])

    return (
        <>
            <div>
                <div className="Back-img-Service">
                    <div className='img-back'>
                        <img src={bgImage} alt="Blockchain Technology" />
                    </div>
                    <h2 style={{ color: '#fff', WebkitTextStroke: '0px', textAlign: 'center' }}>Blockchain Technology Services<span style={{ color: 'orangered', fontSize: '2.8rem' }}>.</span></h2>
                </div>
            </div>
            <div className='container'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col" data-aos="slide-left">
                        <img src={smartContract} className="card-img1-top" alt="Smart Contract Development" />
                        <div className="web1 card">
                            <div className="card-body1">
                                <h4 className="card-title1">Smart Contract Development</h4>
                                <p className="card-text1" style={{ color: 'gray' }}>Automate and secure your business processes with self-executing smart contracts on various blockchain platforms. We ensure code security and efficiency.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col" data-aos="slide-left">
                        <img src={blockchain} className="card-img1-top" alt="Blockchain Development" />
                        <div className="web1 card">
                            <div className="card-body1">
                                <h4 className="card-title1">Blockchain Development</h4>
                                <p className="card-text1" style={{ color: 'gray' }}>Build decentralized, secure, and transparent blockchain solutions tailored to your enterprise needs. From private to public blockchains, we cover it all.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col" data-aos="slide-left">
                        <img src={nft} className="card-img1-top" alt="NFT Development" />
                        <div className="web1 card">
                            <div className="card-body1">
                                <h4 className="card-title1">NFT Development</h4>
                                <p className="card-text1" style={{ color: 'gray' }}>Create, mint, and trade Non-Fungible Tokens (NFTs) with our comprehensive NFT development services. Launch your own marketplace or collection.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col" data-aos="slide-right">
                        <img src={web3} className="card-img1-top" alt="Web3 Development" />
                        <div className="web1 card">
                            <div className="card-body1">
                                <h4 className="card-title1">Web3 Development</h4>
                                <p className="card-text1" style={{ color: 'gray' }}>Transition to the decentralized web with our cutting-edge Web3 development services, empowering user ownership and decentralized applications (dApps).</p>
                            </div>
                        </div>
                    </div>
                    <div className="col" data-aos="slide-right">
                        <img src={defi} className="card-img1-top" alt="DeFi Development" />
                        <div className="web1 card">
                            <div className="card-body1">
                                <h4 className="card-title1">DeFi Development</h4>
                                <p className="card-text1" style={{ color: 'gray' }}>Revolutionize finance with Decentralized Finance (DeFi) solutions, enabling open and permissionless financial services like lending, borrowing, and trading.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col" data-aos="slide-right">
                        <img src={metaverse} className="card-img1-top" alt="Metaverse Development" />
                        <div className="web1 card">
                            <div className="card-body1">
                                <h4 className="card-title1">Metaverse Development</h4>
                                <p className="card-text1" style={{ color: 'gray' }}>Step into the future with immersive Metaverse development, creating virtual worlds and experiences that connect people in new digital dimensions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurServicesFive
