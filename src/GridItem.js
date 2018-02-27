import React, { Component } from 'react';
import PropTypes from 'prop-types';


class GridItem extends Component {
  render() {
    return (
      <article class="col-md-2">
          <a href="detalle.html" class="grid-item">
            <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" alt="Movie Image" class="img-fluid" />
            <span class="grid-item-body">
                <span class="grid-item-title">{this.props.titulo}</span>
                <span class="grid-item-date">{this.props.fecha}</span>
            </span>
          </a>
      </article>
    );
  }
}

GridItem.propTypes = {
  titulo: PropTypes.string.isRequired,
  fecha:  PropTypes.string.isRequired
};

export default GridItem;
