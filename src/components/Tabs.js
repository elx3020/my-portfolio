import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import Background from './Background';

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
      tabhistory: [],
    };

  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
    
    

  }
  render() {
    const {
      onClickTabItem,
      props: {
        children: childrenData,
      },
      state: {
        activeTab,
      }
    } = this;
    console.log(this.state.tabhistory);
    return (
      
      <div className="tabs">
        {/* Render the background color */}
      <Background activeTab={activeTab}/>


        <ol className="tab-list">
          {childrenData.map((child) => {
            const { label } = child.props;


            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
          
        </ol>
        
        <div className="tab-content">
          {childrenData.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}



export default Tabs;

