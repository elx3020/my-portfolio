// components

import { Helmet } from "react-helmet";
// hooks
import useCurrentPage from "../../hooks/useCurrentPage";

// elements styles
import { downloadIcon } from "../../utils/icons";
import { triangleDown } from "../../utils/svgFigures";
import "./style.sass";

import { useGlobalContext } from "../../hooks/useGlobalContext";

const AboutPage = (props: { handlePage: (value: string) => void }) => {

  const globalContext = useGlobalContext();

  const pageData = globalContext.content.aboutPage;

  const cardsInfo = globalContext.content.aboutPage.cardsData.map((item, index) => {
    return (<div className="cards-info" key={index}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>)

  });

  // set as current page
  useCurrentPage(props.handlePage);

  return (
    <div className="page-content">
      <Helmet>
        <title>Esteban Lasso | About</title>
      </Helmet>

      <div className="generic-hero-wrapper" >
        <h1>
          {pageData.heroText}
        </h1>
      </div>

      <div className="v-img-wrap">
        <div style={{ backgroundColor: 'black', opacity: 0.5 }}>
          <img src="/images/yo.jpg" alt="me" />
        </div>
      </div>


      <div className="cards-section">
        <h1>
          {pageData.title_cards}
        </h1>
        <div className="column-layout">
          {cardsInfo}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', padding: '3vw' }}>

        <div className="cv_button">
          <a href="files/CV_Esteban.pdf" target="_blank">{pageData.button_text} <span> {downloadIcon} </span></a>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;
