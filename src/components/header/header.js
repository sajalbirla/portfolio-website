import React, { useState } from "react";

const Header = () => {
  const headeroptions = [
    {
      id: 1,
      Name: "About",
    },
    {
      id: 2,
      Name: "Portfolio",
    },
    {
      id: 3,
      Name: "Contact",
    },
  ];
  const [activeTab, setActiveTab] = useState("About");
  const activeTabHandler = (val) => {
    setActiveTab(val);
  };
  const DownloadResume = () => {
    // const pdfUrl = "/Resume_Sajal_Birla_Developer.pdf";
    // const link = document.createElement("a");
    // link.href = pdfUrl;
    // link.download = "Resume_Sajal_Birla_Developer.pdf"; // specify the filename
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
    window.location.href = "/Resume_Sajal_Birla_Developer.pdf";
  };
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
          Resume
        </button>
      </div>
    </>
  );
};
export default Header;
