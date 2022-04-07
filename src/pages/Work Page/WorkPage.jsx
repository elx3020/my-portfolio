import HeroGenericComponent from "../../components/Layout/HeroGenericComponent";
import ListItem from "../../components/List/ListItem";
import ColumnLayout from "../../components/Layout/ColumnLayout";
import { mapToList } from "../../utils/utils";
import useLocoScroll from "../../hooks/useLocoScroll";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import useCurrentPage from "../../hooks/useCurrentPage";

const WorkPage = (props) => {
  const { projectsData } = props;

  useLocoScroll(true);

  const { web_Proj } = projectsData;

  const webList = mapToList(web_Proj);

  // pass current Page

  useCurrentPage(props.handlePage);

  return (
    <div className="work-page-container" data-scroll-section>
      <HeroGenericComponent
        fontSize="150px"
        text="Portfolio"
      ></HeroGenericComponent>

      <div className="work-sections">
        <div className="section-content">
          <h1>Web Design</h1>
          <ColumnLayout className="column-content">
            <div className="list-wrapper">{webList}</div>
          </ColumnLayout>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
