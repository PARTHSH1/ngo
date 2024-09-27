import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import './VideoSlider.css'; // Custom CSS

const VideoSlider = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Adjust the number of slides based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    // Add event listener for screen resize
    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '30px',
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const openModal = (videoSrc) => {
    setCurrentVideo(videoSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentVideo(null);
  };

  // Replace with YouTube video URLs
  const videoLinks = [
    'https://www.youtube.com/embed/LXb3EKWsInQ',
    'https://www.youtube.com/embed/K4TOrB7at0Y',
    'https://www.youtube.com/embed/-iQFSz_5dSw'
  ];

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <h2>Stories in Motion</h2>
      <Slider {...settings}>
        {videoLinks.map((videoSrc, index) => (
          <div key={index} style={{ position: "relative", padding: '0 20px' }}>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
              }}
              onClick={() => openModal(videoSrc)}
            >
              {/* Embedded YouTube iframe */}
              <iframe
                width="100%"
                height="315"
                src={videoSrc}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`Video ${index}`}
                style={{ borderRadius: "8px" }}
              ></iframe>

              {/* Play Button on Each Video (optional) */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    width: "0",
                    height: "0",
                    borderLeft: "20px solid white",
                    borderTop: "10px solid transparent",
                    borderBottom: "10px solid transparent",
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Modal for Video Playback */}
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <iframe
              width="100%"
              height="500"
              src={currentVideo}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Current Video"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoSlider;
