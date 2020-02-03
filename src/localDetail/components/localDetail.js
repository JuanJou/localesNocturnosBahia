//@ts-check
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DetailHeader from './headerLocalDetail/headerDetail';

export default class LocalDetail extends Component {
  static navigationOptions = props => {
    return {
      header: () => (
        <DetailHeader
          goBack={props.navigation.goBack}
          item={props.navigation.getParam('item')}></DetailHeader>
      ),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      item: props.navigation.getParam('item'),
    };
  }

  render() {
    console.log(this.state.item);
    return this.state.item.renderDetail();
  }
}

LocalDetail.propTypes = {
  navigation: PropTypes.object.isRequired,
};
