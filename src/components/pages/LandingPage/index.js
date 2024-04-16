import React from "react";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import AboutMe from "../../content/about-me.js/about-me";
import Details from "../../content/details/details";
import MainLayout from "../MainLayout/MainLayout";
import MySkills from "../../content/skills/skills";
import Experience from "../../content/experience/experience";

const LandingPage = () => {
  return (
    <>
      <Header />
      <MainLayout>
        <AboutMe />
        <Details />
        <MySkills />
        <Experience />
      </MainLayout>
      <Footer />
    </>
  );
};
export default LandingPage;
