import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
// Founder images
import yashImage from "./Founder/YASH.jpg";
import sarthakImage from "./Founder/SARTHAK.png";
import linkedinIcon from "./Founder/LINKEDIN.png";

const AboutUs = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const founders = [
    {
      name: "Yash Kandoi",
      description:
        "A strategic leader with a deep understanding of technology and business, Yash bridges the gap between vision and execution. His expertise in scaling startups and delivering innovative solutions drives Fluencer Digital's mission to empower businesses.",
      image: yashImage,
      linkedin: "https://www.linkedin.com/in/yash-kandoi-85b612184/",
    },
    {
      name: "Sarthak Behera",
      description:
        "As an expert in project management, Sarthak ensures every initiative is executed flawlessly, transforming complex ideas into tangible results. His ability to manage projects with precision has made Fluencer Digital a trusted partner for startups and businesses alike.",
      image: sarthakImage,
      linkedin: "https://www.linkedin.com/in/sarthakbehera/",
    },
  ];

  const values = [
    {
      title: "Innovation",
      description:
        "We drive innovation by leveraging cutting-edge technologies and creative solutions, empowering businesses to stay ahead of the curve and achieve sustainable growth in an ever-evolving landscape.",
      icon: "💡",
    },
    {
      title: "Excellence",
      description:
        "We strive for excellence by delivering high-quality solutions, exceeding expectations, and continuously improving to ensure our clients achieve outstanding results and long-term success.",
      icon: "🎯",
    },
    {
      title: "Adaptability",
      description:
        "We embrace adaptability to be agile and responsive to change, leveraging innovative strategies and technologies to deliver solutions that evolve with dynamic business needs.",
      icon: "🔄",
    },
    {
      title: "Collaboration",
      description:
        "We foster collaboration through open communication, teamwork, and shared goals, creating an environment where diverse ideas thrive and strategies are developed together for lasting success.",
      icon: "🤝",
    },
  ];

  return (
    <>
      <div className="aboutus-page" id="aboutus">
        {/* Hero Section */}
        <div className="aboutus-hero" data-aos="fade-down">
          <div className="container">
            <p className="aboutus-label">ABOUT FLUENCER DIGITAL</p>
            <h1 className="aboutus-hero-title">
              Your Trusted Partner In Turning Ideas Into Innovation
            </h1>
          </div>
        </div>

        {/* About Us Section */}
        <div className="aboutus-intro" data-aos="fade-up">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5" data-aos="fade-right">
                <p className="aboutus-label">ABOUT US</p>
                <h2 className="aboutus-big-title">
                  Innovating
                  <br />
                  For The
                  <br />
                  Future
                </h2>
                <Link to="/Services4" className="aboutus-red-btn">
                  Explore Our Services →
                </Link>
              </div>
              <div className="col-lg-7" data-aos="fade-left">
                <p className="aboutus-description">
                  Fluencer Digital specializes in empowering non-tech founders
                  and businesses to turn their ideas into reality. As a
                  full-service technology partner, we focus on website
                  development, mobile apps, and custom software solutions that
                  support growth. Whether you're launching your first product or
                  scaling a successful business, Fluencer Digital streamlines
                  every step of the process to transform complex requirements
                  into seamless technology solutions, saving you time, reducing
                  costs, and driving innovation. We ensure sustainable growth
                  and deliver scalable, market-ready solutions that drive growth
                  and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Founders Section */}
        <div className="aboutus-founders" data-aos="fade-up">
          <div className="container">
            <p className="aboutus-label text-center">MEET THE FOUNDERS</p>
            <h2 className="aboutus-section-heading text-center">
              The Minds Behind Fluencer Digital
            </h2>

            <div className="founders-list">
              {founders.map((founder, index) => (
                <div
                  className={`founder-item ${
                    index % 2 === 0 ? "founder-left" : "founder-right"
                  }`}
                  key={index}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                >
                  {index % 2 === 0 ? (
                    <>
                      <div className="founder-info">
                        <h3>
                          {founder.name}
                          <a
                            href={founder.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="founder-linkedin"
                          >
                            <img src={linkedinIcon} alt="LinkedIn" />
                          </a>
                        </h3>
                        <p>{founder.description}</p>
                      </div>
                      <div className="founder-image">
                        <img src={founder.image} alt={founder.name} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="founder-image">
                        <img src={founder.image} alt={founder.name} />
                      </div>
                      <div className="founder-info">
                        <h3>
                          {founder.name}
                          <a
                            href={founder.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="founder-linkedin"
                          >
                            <img src={linkedinIcon} alt="LinkedIn" />
                          </a>
                        </h3>
                        <p>{founder.description}</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="aboutus-values" data-aos="fade-up">
          <div className="container">
            <p className="aboutus-label text-center">OUR VALUES</p>
            <h2 className="aboutus-section-heading text-center">
              What Drives Us
            </h2>
            <p className="aboutus-values-intro">
              At Fluencer Digital, we prioritize our team's growth and
              well-being, fostering a culture that empowers personal development
              and professional excellence, and long-term success through
              continuous support and career advancement opportunities.
            </p>

            <div className="values-grid">
              {values.map((value, index) => (
                <div
                  className="value-card"
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="value-icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="aboutus-why" data-aos="fade-up">
          <div className="container">
            <div className="why-box">
              <p className="aboutus-label">WHY CHOOSE US</p>
              <h2 className="aboutus-section-heading">What Sets Us Apart</h2>
              <p className="aboutus-why-text">
                We understand the challenges of building a product from scratch,
                especially for non-tech founders. That's why we created a
                streamlined, transparent, and efficient process that ensures
                your vision becomes a reality without unnecessary stress. With a
                team of experts by your side, you can focus on what matters
                most: growing your business. Our expertise, combined with a
                commitment to innovation is to customer success, positions us at
                the go-to partner for startups and businesses aiming to create
                world-class products.
              </p>
              <Link to="/ourWorks" className="aboutus-red-btn">
                Browse Works →
              </Link>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="aboutus-final-cta" data-aos="zoom-in">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <h2 className="final-cta-title">
                  Let's Build Something Extraordinary
                </h2>
                <p className="final-cta-text">
                  Have a vision. Whether you're just starting out or looking to
                  take your product to the next level, we have the tools,
                  expertise, and passion to help you succeed. Join Fluencer
                  Digital and can take the first toward tailoring innovative,
                  feature-rich solutions.
                </p>
              </div>
              <div className="col-lg-5 text-end">
                <div className="final-cta-buttons">
                  <Link to="/mainContact" className="aboutus-red-btn mb-3">
                    Start Your Journey Today →
                  </Link>
                  <Link to="/mainContact" className="aboutus-outline-btn">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
