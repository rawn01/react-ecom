import React from "react";
import { connect } from "react-redux";
import MenuItem from "../menu-item/MenuItem";
import "./MenuContainer.scss";

class MenuContainer extends React.Component {
  render() {
    return (
      <div className="menu-container">
        {this.props.sections.map((section) => {
          return (
            <MenuItem key={section.id} {...section} />
          )
        })}
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    sections: state.menu.sections
  }
} 

export default connect(mapStateToProps)(MenuContainer);
