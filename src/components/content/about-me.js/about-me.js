import React from "react";
// import SocialMedia from "../../socials/s¸ocials";

const AboutMe = () => {
  const DownloadResume = () => {
    window.location.href =
      "/portfolio-website/Resume_Sajal_Birla_Developer.pdf";
  };
  return (
    <>
      <div className="about">
        <div className="about-details">
          {/* <span className="about-details-tag">I'M</span> */}
          <span className="about-details-name">Sajal Birla</span>
          <div className="about-details-role">Software Developer - ReactJs</div>
          <button className="about-details-resume">Contact Me</button>
          <button className="about-details-resume" onClick={DownloadResume}>
            Resume
          </button>
          {/* <SocialMedia /> */}
        </div>
        <div className="about-details-image"></div>
      </div>
    </>
  );
};
export default AboutMe;
