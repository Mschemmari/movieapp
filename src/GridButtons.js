import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class ItemImg extends Component {
  render() {
    return (
      <div className="filters-bar-right">
          <a href="series-grid.html" className="btn btn-light active" aria-label="Profile">
              <i className="mdi mdi-view-grid" aria-hidden="true"></i>
          </a>
          <a href="series-list.html" className="btn btn-light" aria-label="Profile">
              <i class="mdi mdi-view-list" aria-hidden="true"></i>
          </a>
      </div>
    );
  }
}
// ItemImg.propTypes = {
//   children: PropTypes.element.isRequired
// };

export default ItemImg;
