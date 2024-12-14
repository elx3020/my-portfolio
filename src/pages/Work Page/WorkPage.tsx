import React from "react";
import { mapToList } from "../../utils/utils";
import { Helmet } from "react-helmet";


import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import CardContainer from "../../components/Layout/CardContainer";
import useCurrentPage from "../../hooks/useCurrentPage";
import ColumnLayout from "../../components/Layout/ColumnLayout";
import ImageCardComponent from "../../components/Layout/ImageCard/ImageCardComponent";

// style document been use in this page
import "./style.sass";
import { useGlobalContext } from "../../hooks/useGlobalContext";


const imagesUrl = ['/images/WorkPage/web-art-0.png', '/images/WorkPage/web-art-1.png', '/images/WorkPage/web-art-2.png', '/images/WorkPage/web-art-3.png', '/images/WorkPage/circle.png', '/images/WorkPage/cursor.png']

const computerIllustration = '/images/WorkPage/1computer-work.svg';
const WorkPage = (props) => {
  const { handlePage } = props;

  const globalContext = useGlobalContext();
  const workPageContent = globalContext.content.workPage;


  const uiProjects = workPageContent.ui_projects.map((project, index) => {
    return <ImageCardComponent key={index} content={project} />;
  });

  // pass current Page
  useCurrentPage(handlePage);

  const pageContent = (
    <div className="work-page"  >
      <LoadingScreen className="loading-screen" />
      <Helmet>
        <title>{workPageContent.helmet_Title}</title>
      </Helmet>

      {/* Web Developer Work */}
      <div className="work-section">
        {/* TODO all work should be a card */}
        <CardContainer data={workPageContent.showcase_Data} />
      </div>

    </div>
  );

  return pageContent;
};
export default WorkPage;
