import React, { useEffect, useState } from "react";
import image from "./Contact Us.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://formspree.io/f/mdkqvnnl', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Name: formData.name,
        Email: formData.email,
        Number: formData.mobile,
        Message: formData.message
      })
    });
    if (response.ok) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', mobile: '', message: '' });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="cont" style={{ marginTop: "120px" }}>
      <style>{`
        .modern-input {
          background: transparent;
          border: none;
          border-bottom: 2px solid #ff4500;
          color: white;
          padding: 12px 0;
          width: 100%;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.3s;
        }
        
        .modern-input::placeholder {
          color: #999;
        }
        
        .modern-input:focus {
          border-bottom-color: #ff6347;
        }
        
        .modern-textarea {
          background: transparent;
          border: 2px solid #ff4500;
          color: white;
          padding: 12px;
          width: 100%;
          font-size: 1rem;
          outline: none;
          resize: vertical;
          min-height: 120px;
          border-radius: 4px;
          transition: border-color 0.3s;
        }
        
        .modern-textarea::placeholder {
          color: #999;
        }
        
        .modern-textarea:focus {
          border-color: #ff6347;
        }
        
        .submit-button {
          background: transparent;
          border: 2px solid #ff4500;
          color: white;
          padding: 15px 60px;
          font-size: 1.2rem;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s;
          width: 100%;
          font-weight: 500;
        }
        
        .submit-button:hover {
          background: #ff4500;
          transform: scale(1.02);
        }
        
        .form-group {
          margin-bottom: 30px;
        }
        
        .contact {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        @media (max-width: 968px) {
          .contact {
            grid-template-columns: 1fr;
          }
        }
        
        .row-inputs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }
        
        @media (max-width: 768px) {
          .row-inputs {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1
          style={{
            color: "white",
            fontSize: "3rem",
            fontWeight: "600",
            marginBottom: "15px",
          }}
        >
          Have a Question? Let's Chat
          <span style={{ color: "orangered", fontSize: "3rem" }}>.</span>
        </h1>
        <p style={{ color: "white", fontSize: "1.2rem", fontWeight: "300" }}>
          Ready for digital transformation? Partner with Fluencer Digital today!
        </p>
      </div>
      
      <div className="contact">
        <div className="firstPart" data-aos="slide-left">
          <img
            style={{ width: "100%", marginRight: "30px" }}
            src={image}
            alt=""
          />
        </div>
        
        <div
          className="SecondPart"
          style={{ marginLeft: "25px" }}
          data-aos="slide-up"
        >
          <div style={{ marginBottom: "40px" }}>
            <h3
              className="h3title"
              style={{ 
                color: "white", 
                fontSize: "2.30rem", 
                fontWeight: "400"
              }}
            >
              Contact Team Fluencer Digital
              <span style={{ color: "orangered", fontSize: "2.8rem" }}>.</span>
            </h3>
          </div>
          
          <div>
            <div className="form-group">
              <input
                type="text"
                className="modern-input"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="row-inputs">
              <div className="form-group">
                <input
                  type="email"
                  className="modern-input"
                  placeholder="Your Email Id"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="tel"
                  className="modern-input"
                  placeholder="Mobile No."
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <textarea
                className="modern-textarea"
                placeholder="Project Details"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <div className="form-group">
              <button onClick={handleSubmit} className="submit-button">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;