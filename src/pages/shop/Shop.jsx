import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Overview from "../../components/overview/Overview";
import { fetchCollectionsAsync } from "../../store/shop/shopAction";
import Collection from "../collection/Collection";
import WithSpinner from "../../hoc/withSpinner/WithSpinner";

const OverviewWithSpinner = WithSpinner(Overview);
const CollectionWithSpinner = WithSpinner(Collection);

class Shop extends React.Component {
  componentDidMount() {
    this.props.fetchCollectionsAsync();

    // replacing with fetch based api call (see - fetchCollectionsAsync)
    // onSnapshot(collectionRef, async (item) => {
    //   const collectionsMap = convertCollectionsToMap(item);
      
    //   this.props.updateCollections(collectionsMap);
    //   this.setState({ isLoading: false });
    // })
  }

  render() {
    return (
      <div className="shop-page">
        <Route 
          exact path={this.props.match.path} 
          render={(props) => <OverviewWithSpinner isLoading={this.props.isLoading} {...props} />}   
        />
        <Route 
          path={`${this.props.match.path}/:collectionId`} 
          render={(props) => <CollectionWithSpinner isLoading={this.props.isLoading} {...props} />} 
        />
      </div>
    )
  }
} 

function mapStateToProps(state) {
  return {
    isLoading: state.shop.isFetching
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
