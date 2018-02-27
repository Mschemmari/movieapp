import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemImg extends Component {
  render() {
    return (
      <div className="list-item-img">
          <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" alt="Movie" className="img-fluid"/>
      </div>
    );
  }
}
ItemImg.propTypes = {
  children: PropTypes.element.isRequired
};
export default ItemImg;
