import React, { useEffect, useRef, useState } from "react";
import mobile from "./Our Services/Mobile Development/MOBILE_DEV.png";
import robot from "./Our Services/Artificial Intelligence/AI-bg.jpg";
import soft from "./Our Services/Software Development/SOFTWARE_DEV.png";
import web from "./Our Services/Website Development/WEBSITE_DEV.png";
import blockchain from "./Our Services/Blockchain Services/blockchain-bg.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Services = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollContainerRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollContainerRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      checkScroll();
      return () => container.removeEventListener("scroll", checkScroll);
    }
  }, []);

  return (
    <>
      <section
        className="serviceSection"
        style={{
          marginTop: "15vh",
          backgroundColor: "#000",
          paddingTop: "10vh",
        }}
      >
        <div
          className="services cont"
          style={{
            marginBottom: "40px",
          }}
        >
          <div className="" data-aos="slide-right">
            <div>
              <h3
                className="h3title-Us"
                style={{
                  color: "white",
                  fontSize: "2.75rem",
                  marginTop: "0",
                }}
              >
                Our Services<span style={{ color: "orangered" }}>.</span>
              </h3>
            </div>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            maxWidth: "100%",
            overflow: "hidden",
            padding: "0 80px",
          }}
        >
          {/* Left Scroll Button */}
          {canScrollLeft && (
            <button
              onClick={handleScrollLeft}
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "transparent",
                color: "white",
                border: "2px solid grey",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                fontSize: "28px",
                cursor: "pointer",
                boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.border = "2px solid #ff3b4f")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.border = "2px solid grey")
              }
              aria-label="Scroll left"
            >
              ‹
            </button>
          )}

          <div
            ref={scrollContainerRef}
            className="card-div d-flex align-item-center my-5"
            style={{
              overflowX: "hidden",
              overflowY: "hidden",
              scrollBehavior: "smooth",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              gap: "20px",
            }}
          >
            {/* Card 1 - AI */}
            <div
              className="card text-bg-dark"
              data-aos="slide-down"
              style={{
                minWidth: "calc(33.333% - 20px)",
                flex: "0 0 calc(33.333% - 20px)",
                scrollSnapAlign: "start",
              }}
            >
              <img src={robot} className="card-img" alt="..." />
              <div className="card-overlay">
                <Link to="/Services4">
                  <h4
                    className="card-title"
                    style={{
                      fontWeight: "600",
                      fontSize: "2.6rem",
                      color: "#fff",
                    }}
                  >
                    Artificial
                  </h4>
                  <h4
                    className="card-title"
                    style={{
                      fontWeight: "600",
                      fontSize: "2.6rem",
                      color: "#fff",
                    }}
                  >
                    Intelligence
                  </h4>
                  <p className="card-text" style={{ color: "grey" }}>
                    Artificial Intelligence Services Innovative AI Solutions for
                    a Smarter ,and also holds expertise in developing top-notch
                    AI web solutions that are responsive and adapt well to user
                    behavior.
                  </p>
                </Link>
              </div>
            </div>

            {/* Card 2 - Blockchain */}
            <div
              className="card text-bg-dark"
              data-aos="slide-left"
              style={{
                minWidth: "calc(33.333% - 20px)",
                flex: "0 0 calc(33.333% - 20px)",
                scrollSnapAlign: "start",
              }}
            >
              <img src={blockchain} className="card-img" alt="..." />
              <div className="card-overlay">
                <Link to="/Services5">
                  <h4
                    className="card-title"
                    style={{
                      fontWeight: "600",
                      fontSize: "2.6rem",
                      color: "#fff",
                    }}
                  >
                    Blockchain
                  </h4>
                  <h4
                    className="card-title"
                    style={{
                      fontWeight: "600",
                      fontSize: "2.6rem",
                      color: "#fff",
                    }}
                  >
                    Technology
                  </h4>
                  <p className="card-text " style={{ color: "grey" }}>
                    We provide comprehensive blockchain technology services
                    including smart contracts, NFTs, and Web3 solutions.
                  </p>
                </Link>
              </div>
            </div>

            {/* Card 3 - Mobile */}
            <div
              className="card text-bg-dark"
              data-aos="slide-up"
              style={{
                minWidth: "calc(33.333% - 20px)",
                flex: "0 0 calc(33.333% - 20px)",
                scrollSnapAlign: "start",
              }}
            >
              <img src={mobile} className="card-img" alt="..." />
              <div className="card-overlay">
                <Link to="/Services3">
                  <h4
                    className="card-title"
                    style={{
                      fontWeight: "600",
                      fontSize: "2.6rem",
                      color: "#fff",
                    }}
                  >
                    Mobile App
                  </h4>
                  <h4
                    className="card-title"
                    style={{
                      fontWeight: "600",
                      fontSize: "2.6rem",
                      color: "#fff",
                    }}
                  >
                    Developement
                  </h4>
                  <p className="card-text" style={{ color: "grey" }}>
                    We have all the expertise you need to produce fully-fledged,
                    stable, and scalable mobile applications.
                  </p>
                </Link>
              </div>
            </div>

            {/* Card 4 - Software */}
            <div
              className="card text-bg-dark"
              data-aos="slide-up"
              style={{
                minWidth: "calc(33.333% - 20px)",
                flex: "0 0 calc(33.333% - 20px)",
                scrollSnapAlign: "start",
              }}
            >
              <img src={soft} className="card-img" alt="..." />
              <div className="card-overlay">
                <Link to="/Services2">
                  {" "}
                  <h4
                    className="card-title"
                    style={{
                      fontWeight: "600",
                      fontSize: "2.6rem",
                      color: "#fff",
                    }}
                  >
                    Software
                  </h4>
                  <h4
                    className="card-title"
                    style={{
                      fontWeight: "600",
                      fontSize: "2.6rem",
                      color: "#fff",
                    }}
                  >
                    Developement
                  </h4>
                  <p className="card-text" style={{ color: "grey" }}>
                    fluencer digital delivers a full-cycle custom software
                    development services that adapt seamlessly to your project
                    requirements and business needs.
                  </p>
                </Link>
              </div>
            </div>

            {/* Card 5 - Website */}
            <div
              className="card text-bg-dark"
              data-aos="slide-left"
              style={{
                minWidth: "calc(33.333% - 20px)",
                flex: "0 0 calc(33.333% - 20px)",
                scrollSnapAlign: "start",
              }}
            >
              <img src={web} className="card-img" alt="..." />
              <div className="card-overlay">
                <Link to="/ourServices">
                  <h4
                    className="card-title"
                    style={{
                      fontWeight: "600",
                      fontSize: "2.6rem",
                      color: "#fff",
                    }}
                  >
                    Website
                  </h4>
                  <h4
                    className="card-title"
                    style={{
                      fontWeight: "600",
                      fontSize: "2.6rem",
                      color: "#fff",
                    }}
                  >
                    Developement
                  </h4>
                  <p className="card-text " style={{ color: "grey" }}>
                    We help large organizations become a lasting success in the
                    globally by Website development solutions of different
                    complexity.
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Scroll Button */}
          {canScrollRight && (
            <button
              onClick={handleScrollRight}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "transparent",
                color: "white",
                border: "2px solid grey",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                fontSize: "28px",
                cursor: "pointer",
                boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.border = "2px solid #ff3b4f")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.border = "2px solid grey")
              }
              aria-label="Scroll right"
            >
              ›
            </button>
          )}
        </div>
      </section>
    </>
  );
};

export default Services;
