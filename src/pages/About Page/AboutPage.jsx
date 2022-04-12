// components
import GoToTop from "../../components/functionality/GoToTop.jsx";
import BaseSectionLayout from "../../components/Layout/BaseSectionLayout.jsx";
import ColumnLayout from "../../components/Layout/ColumnLayout";
import HeroGenericComponent from "../../components/Layout/HeroGenericComponent.jsx";
import TitleParagraphComponent from "../../components/Layout/TitleParagraphComponent.jsx";
import CardContainer from "../../components/Layout/CardContainer";

// hooks
import useCurrentPage from "../../hooks/useCurrentPage.jsx";
import useLocoScroll from "../../hooks/useLocoScroll.jsx";

// elements styles
import "./style.sass";

const AboutPage = (props) => {
  const heroText =
    "I am an artist and technical thinker. I like to push every creation forward, bringing the best of the two worlds.";

  const title = "About me:";

  const aboutText =
    "Hello there, I am Ecuadorian programmer. I create impactful websites that attract the view of visitors. My love for coding, animation and design, is merge in what I do and what I offer. My principles are to try new design and explore ideas. I provide SEO optimized websites";

  const cardsData = [
    {
      Designer:
        "I can design or re-design a project to give that extra layer of personality. I have work in webdesign and UX design to offer an engaging and friendly user experecience. My primarly experiences comes as a Webflow designer.",
    },
    {
      Programmer:
        "Programing is what I do for a living. I can set up website pages from the ground and up. I have work with many frameworks like React, Angular, Ionic. For CMS content I have work with Joomala and Kirvy CMS",
    },
    {
      Art: "My passion for creation is what drives me forward and makes me always go outsite to other areas to learn surprising new method to current problems.",
    },
    {
      Multidiciplinary:
        "My passion for creation is what drives me forward and makes me always go outsite to other areas to learn surprising new method to current problems.",
    },
  ];

  const cardsInfo = cardsData.map((item, index) => {
    return (
      <TitleParagraphComponent
        key={index}
        title={Object.keys(item)}
        text={item[Object.keys(item)]}
        className="cards-info"
      ></TitleParagraphComponent>
    );
  });

  // set as current page

  const { loading } = props;

  useCurrentPage(props.handlePage);

  // aplly scroll animation
  useLocoScroll(true);

  return (
    <div className="about-page" data-scroll-section>
      <HeroGenericComponent
        className="generic-hero-wrapper"
        fontSize={80}
        text={heroText}
      />

      <div className="center-flex">
        <ColumnLayout className="section-text-column photo">
          <div className="circle"></div>
          <div className="v-img-wrap">
            <div data-scroll data-scroll-speed="-1">
              <img
                src="my-portfolio /images/yo-playa.png"
                alt="me at the beatch"
              />
            </div>
          </div>
          <TitleParagraphComponent
            title={title}
            text={aboutText}
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

      <GoToTop />
    </div>
  );
};

export default AboutPage;
