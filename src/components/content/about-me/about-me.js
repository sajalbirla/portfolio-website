import React, { useContext } from "react";
import SelfMemoji from "../../assets/memoji_self.png";
import { Urlconfig } from "../../../constant/config";
import { ThemeContext } from "../../../context/ThemeContext";
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const AboutMe = () => {
  const { theme } = useContext(ThemeContext);
  const DownloadResume = () => {
    // Track event in Google Analytics
    window.gtag('event', 'resume_click');
    window.location.href = Urlconfig.ResumeUrl;
  };

  const handleContactClick = () => {
    window.location.href = '#contact';
  };

  return (
    <div className="about" id="about">
      <div className="about-details">
        <span className="about-details-name">Sajal Birla</span>
        <div className="about-details-role">Software Development Engineer</div>
        <div className="about-details-buttons">
          <button className="about-details-resume-button" onClick={DownloadResume}>
            <FileDownloadIcon />
            Resume
          </button>
          <button className="about-details-contact-button" onClick={handleContactClick}>Contact Me</button>
        </div>
      </div>
      <div className="about-details-image">
        <div className={`image-container ${theme}`}>
          <img src={SelfMemoji} alt="Sajal Birla" />
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
