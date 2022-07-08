import React from "react";

import { fullPage, quickContainer } from "../../utils/quickStyles";

import CanvasLearning from "../../components/functionality/CanvasLearning";
import CollisionSystem from "../../components/functionality/CollisionSystem";
function ExperimentPage() {
  return (
    <div style={fullPage} data-scroll data-scroll-section>
      <h1 style={{ margin: "50px 0" }}>Canvas Experiments</h1>
      <CollisionSystem />
    </div>
  );
}

export default ExperimentPage;
