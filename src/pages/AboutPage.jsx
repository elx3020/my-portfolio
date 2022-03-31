// components
import GoToTop from "../components/functionality/GoToTop.jsx";
import BaseSectionLayout from "../components/Layout/BaseSectionLayout.jsx";
import ColumnLayout from "../components/Layout/ColumnLayout";
import HeroGenericComponent from "../components/Layout/HeroGenericComponent.jsx";
import TitleParagraphComponent from "../components/Layout/TitleParagraphComponent.jsx";
import CardContainer from "../components/Layout/CardContainer";

// data
import DummyData from "../data/project_data.json";
const AboutPage = (props) => {
  const dummyData = JSON.parse(JSON.stringify(DummyData));

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

  return (
    <div>
      <HeroGenericComponent fontSize={80} text={heroText} />
      <ColumnLayout className="section-text-column photo">
        <div className="circle"></div>
        <div className="v-img-wrap">
          <img src="#" alt="photo me" />
        </div>
        <TitleParagraphComponent
          title={title}
          text={aboutText}
          className="wrap-text"
        />
      </ColumnLayout>

      <div className="cards-section">
        <h1>What can I do for you?</h1>
        <ColumnLayout className="column-layout">{cardsInfo}</ColumnLayout>
      </div>

      <BaseSectionLayout></BaseSectionLayout>

      <div className="dark-rounded">
        <h1>Technical Work</h1>
        <CardContainer data={dummyData}></CardContainer>
      </div>

      <GoToTop />
    </div>
  );
};

export default AboutPage;
