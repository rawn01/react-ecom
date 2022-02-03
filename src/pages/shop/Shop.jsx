import { onSnapshot } from "firebase/firestore";
import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Overview from "../../components/overview/Overview";
import { convertCollectionsToMap, getCollections } from "../../firebase/firebase";
import { updateCollections } from "../../store/shop/shopAction";
import Collection from "../collection/Collection";
import WithSpinner from "../../hoc/withSpinner/WithSpinner";

const OverviewWithSpinner = WithSpinner(Overview);
const CollectionWithSpinner = WithSpinner(Collection);

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.unSubscribeFromShop = null;
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    const collectionRef = getCollections();
    
    onSnapshot(collectionRef, async (item) => {
      const collectionsMap = convertCollectionsToMap(item);
      
      this.props.updateCollections(collectionsMap);
      this.setState({ isLoading: false });
    })
  }

  render() {
    return (
      <div className="shop-page">
        <Route 
          exact path={this.props.match.path} 
          render={(props) => <OverviewWithSpinner isLoading={this.state.isLoading} {...props} />}   
        />
        <Route 
          path={`${this.props.match.path}/:collectionId`} 
          render={(props) => <CollectionWithSpinner isLoading={this.state.isLoading} {...props} />} 
        />
      </div>
    )
  }
} 

function mapStateToProps() {
  return {
    test: "123"
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
