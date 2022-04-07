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

// data
import DummyData from "../../data/project_data.json";

const AboutPage = (props) => {
  const dummyData = JSON.parse(JSON.stringify(DummyData));

  const { showcase_Data } = dummyData;

  const heroText =
    "Creating innovative solutions to fulfill the most demanding problems";

  const title = "About me:";

  const aboutText =
    "I am Ecuadorian programmer. I create impactful websites that attract the view of visitors. My lover for coding, animation and design, is merge in what I do and what I offer. I am very technical as well so if your project follow this path we can work together as well.";

  const cardsData = [
    {
      Designer:
        "I can design or re-design a project to give that extra layer of personality. I have work in webdesign and UX design to offer an engaging and friendly user experecience ",
    },
    {
      Programmer:
        "A love and hate relationship with programing but I always come back. I can set up website pages from the ground and up using bare code but also frameworks like React.",
    },
    {
      Multidiciplinary:
        "My passion for creation is what drives me forward and makes me always go outsite to other areas to learn surprising new method to current problems.",
    },
    {
      Multidiciplinary:
        "My passion for creation is what drives me forward and makes me always go outsite to other areas to learn surprising new method to current problems.",
    },
  ];

  const cardsInfo = cardsData.map((item) => {
    return (
      <TitleParagraphComponent
        title={Object.keys(item)}
        text={item[Object.keys(item)]}
        className="cards-info"
      ></TitleParagraphComponent>
    );
  });

  // set as current page

  useCurrentPage(props.handlePage);

  // aplly scroll animation
  useLocoScroll(true);

  return (
    <div className="about-page" data-scroll-section>
      <HeroGenericComponent fontSize={80} text={heroText} />

      <div className="center-flex">
        <ColumnLayout className="section-text-column photo">
          <div className="circle"></div>
          <div className="v-img-wrap">
            <div data-scroll data-scroll-speed="-2">
              <img src="/images/yo-playa.png" alt="me at the beatch" />
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

      <div className="dark-rounded">
        <h1>Technical Work</h1>
        <CardContainer data={showcase_Data}></CardContainer>
      </div>

      <GoToTop />
    </div>
  );
};

export default AboutPage;
