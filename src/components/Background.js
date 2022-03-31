import React, { Component } from "react";
import PropTypes from "prop-types";

class Background extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
  };

  render() {
    const { activeTab } = this.props;
    let backgroundClassName = "background";

    if (activeTab === "Bio") {
      backgroundClassName = "background-bio";
    } else if (activeTab === "Design") {
      backgroundClassName = "background-Design";
    } else if (activeTab === "Programming") {
      backgroundClassName = "background-Programming";
    } else if (activeTab === "VideoGame") {
      backgroundClassName = "background-Videogame";
    } else if (activeTab === "Physics") {
      backgroundClassName = "background-Physics";
    }
    return (
      <div>
        <div className={backgroundClassName + " background"}></div>
      </div>
    );
  }
}

export default Background;
