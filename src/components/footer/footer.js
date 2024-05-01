import React from "react";
import SocialMedia from "../socials/socials";
import { Urlconfig } from "../../constant/config";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const Footer = () => {
  return (
    <>
      <div className="footer" id="contact">
        <div className="footer-intro">
          <div className="footer-intro-section-1">
            <h3 className="footer-intro-section-1-header">Get In Touch</h3>
            <div className="footer-intro-section-1-description">
              Discuss a project or just want to say Hi🖐? My Inbox is open for
              all.
            </div>
            <div className="footer-intro-section-1-contact">
              <div className="footer-intro-section-1-contact-details">
                <div className="socials-icon">
                  <LocationOnIcon />
                </div>
                {Urlconfig.Location}
              </div>
              <div
                className="footer-intro-section-1-contact-details"
                onClick={() => {
                  window.location.href = `mailto:${Urlconfig.Email}`;
                }}
              >
                <div className="socials-icon">
                  <EmailIcon />
                </div>
                {Urlconfig.Email}
              </div>
              <div
                className="footer-intro-section-1-contact-details"
                onClick={() => {
                  window.location.href = `tel:${Urlconfig.ContactDetails}`;
                }}
              >
                <div className="socials-icon">
                  <CallIcon />
                </div>
                {Urlconfig.ContactDetails}
              </div>
            </div>
          </div>
          <div className="footer-intro-section-2">
            <SocialMedia />
          </div>
        </div>
        <div className="footer-note">"Thanks for Scrolling"</div>
      </div>
    </>
  );
};
export default Footer;
