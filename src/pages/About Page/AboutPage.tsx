// components

import ColumnLayout from "../../components/Layout/ColumnLayout";
import HeroGenericComponent from "../../components/Layout/HeroGenericComponent";
import TitleParagraphComponent from "../../components/Layout/TitleParagraphComponent";

import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import { Helmet } from "react-helmet";
// hooks
import useCurrentPage from "../../hooks/useCurrentPage";

// elements styles
import "./style.sass";
import { triangleDown } from "../../utils/svgFigures";
import { downloadIcon } from "../../utils/icons";
import React from "react";

const AboutPage = (props: {handlePage: (value: string) => void}) => {
  const heroText =
    "I am a technical thinker and artist. I like to push every creation forward, bringing the best of the two worlds.";

  const title = "About me:";

  const aboutText =
    "Hello there, I am an Ecuadorian programmer. I create impactful websites that attract the view of visitors. My love for coding, animation, and design, is merged into what I do and offer. My principles are to try new designs and explore ideas. I provide SEO optimized websites";

  const cardsData = [
    {
      title: "Designer",
      description: "I can design or re-design a project to give that extra layer of personality. I have worked in Webdesign and UX design to offer an engaging and friendly user experience. I am most versatile using Webflow designer, but I can also adapt to other software.",
    },
    {
      title: "Programmer",
      description: "Programming is what I do for a living. I can set up website pages from the ground and up. Develop systems to keep track of products. Integrate your web page with third-party software. I have worked with many frameworks like React, Angular, and Ionic. To manage CMS content, I have worked with Joomla and Kirby CMS.",
    },
    {
      title: "Art", 
      description: "I like to create experiences. I know that more than ever your service needs care and authenticity. UI design is not only about providing a friendly user UI but making the experiences as enjoyable and memorable as possible. To bring my design to life I work mostly with Figma where I can share my progress.",
    },
    {
      title: "Multidiciplinary",
      description: "My passion for creation is what drives me forward and makes me always go outside to other areas to learn surprising new methods to current problems. My background is related to many topics. And I believe they have shaped my vision to create unique work. Let's work together on something new and incredible.",
    },
  ];

  const cardsInfo = cardsData.map((item, index) => {
    return (<TitleParagraphComponent 
      className="cards-info"
      title={item.title}
      key={index}
      textContent={item.description}
    />)

    
  });

  // set as current page

  useCurrentPage(props.handlePage);

  // aplly scroll animation
  // useLocoScroll(true);

  return (
    <div className="about-page" data-scroll-section>
      <LoadingScreen className="loading-screen" />

      <Helmet>
        <title>Esteban Lasso | About</title>
      </Helmet>
      <HeroGenericComponent
        className="generic-hero-wrapper"
        styleOptions = {{fontSize: "clamp(2vw, 80px, 13vw)"}}
        textContent={heroText}
      >
        {triangleDown}
        </HeroGenericComponent>

      <div className="center-flex">
        <ColumnLayout className="section-text-column photo">
          <div className="circle"></div>
          <div className="v-img-wrap">
            <div data-scroll data-scroll-speed="-1">
              <img src="/images/yo.jpg" alt="me at the beatch" />
            </div>
          </div>
          <TitleParagraphComponent
            title={title}
            textContent={aboutText}
            className="wrap-text"
          />
        </ColumnLayout>
      </div>

      <div className="cards-section">
        <h1 data-scroll data-scroll-speed="1">
          What can I do for you?
        </h1>
        <ColumnLayout className="column-layout">{cardsInfo}</ColumnLayout>
      </div>

      <div style={{display: 'flex', justifyContent: 'center', padding: '3vw'}}>

      <div className="cv_button">
        <a href="files/CV_Esteban_2023.pdf" target="_blank">Download CV <span> {downloadIcon} </span></a>   
      </div>
      </div>

    </div>
  );
};

export default AboutPage;
