import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/preview-item/CollectionItem';
import { selectCollection } from '../../store/shop/shopUtil';
import "./Collection.scss";

const Collection = (props) => {
  const { title, items } = props.collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => <CollectionItem key={item.id} {...item} />)}
      </div>
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    // @ts-ignore is not memoized because new function is created
    // collection: selectCollection(urlParam)(state),
    collection: selectCollection(state, ownProps)
  };
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
