import BaseSectionLayout from "../components/Layout/BaseSectionLayout.jsx";
import TwoColumnLayout from "../components/Layout/TwoColumnLayout";
import HeroGenericComponent from "../components/Layout/HeroGenericComponent.jsx";
const AboutPage = (props) => {
  const heroText =
    "Creating innovative solutions to fulfill the most demanding problems";
  return (
    <div>
      <HeroGenericComponent fontSize={100} text={heroText} />
      <TwoColumnLayout>
        <p>Something something about me</p>
        <p>Something else about me </p>
      </TwoColumnLayout>
    </div>
  );
};

export default AboutPage;
