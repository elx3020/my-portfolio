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

  const testData = {
    "arr_Id": "showcase_Data",
    "id": "mishkiyaku",
    "project_Name": "MishkiYaku",
    "image_Url": "images/projects/mishkiyaku.jpg",
    "description": "Mishki Yaku is a coffee e-shop that offers the best Ecuadorian coffee. Their name comes from indigenous language Kichwa, meaning \"delicious water\", and refers to the sugary nectar that the hummingbirds sip from small calyxes with their long, thin beaks.",
    "project_url": "https://www.mishkiyaku.com/"
  }

  // pass current Page
  useCurrentPage(handlePage);

  const pageContent = (
    <div className="page-content no-padding">
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
