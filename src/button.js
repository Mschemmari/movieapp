import React, { Component } from 'react';

class ActionButton extends Component {
  render() {
    return (
      <div className="list-item-actions">
          <a href="peliculas-list.html" className="btn btn-primary" aria-label="Profile">
              <i className="mdi mdi-heart-outline" aria-hidden="true"></i> Agregar a Mi Lista
          </a>
      </div>
    );
  }
}

export default ActionButton;
