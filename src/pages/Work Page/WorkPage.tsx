import { Helmet } from "react-helmet";


import CardContainer from "../../components/Layout/CardContainer";
import useCurrentPage from "../../hooks/useCurrentPage";

// style document been use in this page
import "./style.sass";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import CardImage from "../../components/Layout/Cards/CardImage";



const WorkPage = (props) => {
  const { handlePage } = props;

  const globalContext = useGlobalContext();
  const workPageContent = globalContext.content.workPage;

  const testData = {
    "arr_Id": "showcase_Data",
    "id": "mishkiyaku",
    "project_Name": "MishkiYaku",
    "image_Url": "images/projects/mishki_yaku.png",
    "description": "Mishki Yaku is a coffee e-shop that offers the best Ecuadorian coffee. Their name comes from indigenous language Kichwa, meaning \"delicious water\", and refers to the sugary nectar that the hummingbirds sip from small calyxes with their long, thin beaks.",
    "project_url": "https://www.mishkiyaku.com/"
  }

  // pass current Page
  useCurrentPage(handlePage);

  const cards = workPageContent.showcase_Data.map((project_Data, index) => {
    return (<CardImage key={project_Data.id} data={project_Data} />);
  });

  const pageContent = (
    <div className="page-content">
      <Helmet>
        <title>{workPageContent.helmet_Title}</title>
      </Helmet>
      <br />
      <h1>&#128312; Portofolio &#128312;</h1>
      <br />
      <div style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', columnGap: '35px', rowGap: '35px' }}>
        {cards}
      </div>

    </div>
  );

  return pageContent;
};
export default WorkPage;
