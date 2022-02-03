import React from 'react';
import { connect } from 'react-redux';
import { selectCollectionsArray } from '../../store/shop/shopUtil';
import Preview from '../preview/Preview';
import "./Overview.scss";

const Overview = (props) => {
  return (
    <div className="collections-overview">
      {props.collections.map((item) => {
        return (
          <Preview key={item.id} {...item} />
        );
      })}
    </div>
  ) 
};

function mapStateToProps(state) {
  return {
    // @ts-ignore
    collections: selectCollectionsArray(state)
  }
}

export default connect(mapStateToProps)(Overview);
