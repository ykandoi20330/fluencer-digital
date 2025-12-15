import React from 'react'
import image1 from '../components/Blockchain/ETHEREUM.png'
import image2 from '../components/Blockchain/SOLIDITY.png'
import image3 from '../components/Blockchain/WEB3JS.png'
import image4 from '../components/Blockchain/HYPERLEDGER.png'
import image5 from '../components/Blockchain/POLYGON.png'
import image6 from '../components/Blockchain/TRUFFLE.png'
import image7 from '../components/Blockchain/HARDHAT.png'
import image8 from '../components/Blockchain/METAMASK.png'

const Technology6 = () => {
  return (
    <div className="technology">
      <img className="" data-aos="slide-up" src={image1} alt="Ethereum" />
      <img className="" data-aos="slide-down" src={image2} alt="Solidity" />
      <img className="" data-aos="slide-up" src={image3} alt="Web3.js" />
      <img className="" data-aos="slide-down" src={image4} alt="Hyperledger" />
      <img className="" data-aos="slide-up" src={image5} alt="Polygon" />
      <img className="" data-aos="slide-down" src={image6} alt="Truffle" />
      <img className="" data-aos="slide-up" src={image7} alt="Hardhat" />
      <img className="" data-aos="slide-down" src={image8} alt="MetaMask" />
    </div>
  )
}

export default Technology6