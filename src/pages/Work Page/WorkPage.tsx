import { Helmet } from "react-helmet";


import CardContainer from "../../components/Layout/CardContainer";
import useCurrentPage from "../../hooks/useCurrentPage";

// style document been use in this page
import "./style.sass";
import { useGlobalContext } from "../../hooks/useGlobalContext";



const WorkPage = (props) => {
  const { handlePage } = props;

  const globalContext = useGlobalContext();
  const workPageContent = globalContext.content.workPage;



  // pass current Page
  useCurrentPage(handlePage);

  const pageContent = (
    <div className="page-content">
      <Helmet>
        <title>{workPageContent.helmet_Title}</title>
      </Helmet>
      <h1 className="h1-absolute">Portfolio</h1>
      {/* Web Developer Work */}
      <div className="work-section">
        {/* TODO all work should be a card */}
        <CardContainer data={workPageContent.showcase_Data} maxSize={15} />
      </div>

    </div>
  );

  return pageContent;
};
export default WorkPage;
