import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Urlconfig } from "../../constant/config";

const SocialMedia = () => {
  return (
    <>
      <div className="socials">
        <div
          className="socials-icon"
          onClick={() => {
            window.location.href = Urlconfig.LinkedinUrl;
          }}
        >
          <LinkedInIcon />
        </div>
        <div
          className="socials-icon"
          onClick={() => {
            window.location.href = Urlconfig.GitHubUrl;
          }}
        >
          <GitHubIcon />
        </div>
        <div
          className="socials-icon"
          onClick={() => {
            window.location.href = `mailto:${Urlconfig.Email}`;
          }}
        >
          <ContactMailIcon />
        </div>
        <div
          className="socials-icon"
          onClick={() => {
            window.location.href = Urlconfig.InstagramUrl;
          }}
        >
          <InstagramIcon />
        </div>
        <div
          className="socials-icon"
          onClick={() => {
            window.location.href = Urlconfig.FaceBookUrl;
          }}
        >
          <FacebookIcon />
        </div>
        <div
          className="socials-icon"
          onClick={() => {
            window.location.href = Urlconfig.TwitterUrl;
          }}
        >
          <XIcon />
        </div>
        <div
          className="socials-icon"
          onClick={() => {
            window.location.href = Urlconfig.WhatsappMe;
          }}
        >
          <WhatsAppIcon />
        </div>
      </div>
    </>
  );
};
export default SocialMedia;
