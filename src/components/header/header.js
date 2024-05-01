import React, { useState } from "react";
import DownloadIcon from "@mui/icons-material/Download";

const Header = () => {
  const headeroptions = [
    {
      id: 1,
      Name: "about",
    },
    {
      id: 2,
      Name: "portfolio",
    },
    {
      id: 3,
      Name: "contact",
    },
  ];
  const [activeTab, setActiveTab] = useState("about");
  const activeTabHandler = (val) => {
    window.location.href = `#${val}`;
    setActiveTab(val);
  };
  const DownloadResume = () => {
    window.location.href =
      "/portfolio-website/Resume_Sajal_Birla_Developer.pdf";
  };

  const DarkModeHandler = () => {};

  return (
    <>
      <div className="header">
        {/* <div className="header-logo"></div> */}
        <div className="header-bar">
          {headeroptions.map((option, id) => (
            <div
              key={id}
              onClick={() => {
                activeTabHandler(option.Name);
              }}
              className={`header-bar-options  ${
                activeTab === option.Name && "header-bar-options-active"
              }`}
            >
              {option.Name}
            </div>
          ))}
        </div>
        <button className="header-button" onClick={DownloadResume}>
          <DownloadIcon /> Resume 
        </button>
        {/* <button onClick={DarkModeHandler}>Dark Mode</button> */}
      </div>
    </>
  );
};
export default Header;
