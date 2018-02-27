import React, { Component } from 'react';
import ActionButton from './button.js';
import ItemImg from './image.js';


class MovieBox extends Component {
  render() {
    return (
        <article className="col-md-6">
          <div className="list-item">
            <ItemImg />
            <div className="list-item-body">
                <h3 className="list-item-title">{this.props.titulo}</h3>
                <div className="list-item-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis consequuntur corporis distinctio doloremque, eum expedita id in ipsam minus modi molestias optio perferendis quam quas repudiandae sint. Suscipit, veritatis!</p>
                </div>
                <ActionButton />
            </div>
          </div>
        </article>
    );
  }
}

export default MovieBox;
