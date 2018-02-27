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
<<<<<<< HEAD
                <h3 className="list-item-title">{this.props.titulo}</h3>
=======
                <h3 className="list-item-title">{this.props.name}</h3>
>>>>>>> b95825b889fdda5aa7e16a3066e7075c598701a7
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
