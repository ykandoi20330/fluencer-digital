import React from 'react'
import image1 from '../components/AI/TENSORFLOW.png'
import image2 from '../components/AI/PYTORCH.png'
import image3 from '../components/AI/KERAS.png'
import image4 from '../components/AI/SCIKITLEARN.png'
import image5 from '../components/AI/OPENCV.png'
import image6 from '../components/AI/HUGGINGFACE.png'
import image7 from '../components/AI/LANGCHAIN.png'
import image8 from '../components/AI/OPENAI.webp'

const Technology5 = () => {
  return (
    <div className="technology">
      <img className="" data-aos="slide-up" src={image1} alt="TensorFlow" />
      <img className="" data-aos="slide-down" src={image2} alt="PyTorch" />
      <img className="" data-aos="slide-up" src={image3} alt="Keras" />
      <img className="" data-aos="slide-down" src={image4} alt="Scikit-Learn" />
      <img className="" data-aos="slide-up" src={image5} alt="OpenCV" />
      <img className="" data-aos="slide-down" src={image6} alt="Hugging Face" />
      <img className="" data-aos="slide-up" src={image7} alt="LangChain" />
      <img className="" data-aos="slide-down" src={image8} alt="OpenAI" />
    </div>
  )
}

export default Technology5