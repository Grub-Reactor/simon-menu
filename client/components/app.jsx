import React, { Component } from 'react';
import MenuModal from './modal.jsx';
import Category from './category.jsx';
const image = [
  'https://s3-us-west-1.amazonaws.com/grubreactor/abstract-barbecue-barbeque-bbq-161519.jpeg',
  'https://s3-us-west-1.amazonaws.com/grubreactor/abstract-barbecue-barbeque-bbq-161519.jpeg',
  'https://s3-us-west-1.amazonaws.com/grubreactor/brownie-dessert-cake-sweet-45202.jpeg',
  'https://s3-us-west-1.amazonaws.com/grubreactor/pexels-photo-106343.jpeg',
  'https://s3-us-west-1.amazonaws.com/grubreactor/pexels-photo-156114.jpeg',
  'https://s3-us-west-1.amazonaws.com/grubreactor/pexels-photo-236781.jpeg',
  'https://s3-us-west-1.amazonaws.com/grubreactor/pexels-photo-262959.jpeg',
  'https://s3-us-west-1.amazonaws.com/grubreactor/pexels-photo-629093.jpeg',
  'https://s3-us-west-1.amazonaws.com/grubreactor/pexels-photo-718742.jpeg',
  'https://s3-us-west-1.amazonaws.com/grubreactor/salmon-dish-food-meal-46239.jpeg',
];
const random = function() {
  var index = Math.floor(Math.random() * 10);
  return image[index];
};

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: '',
      modalIsOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    let menuId = window.location.pathname.split('/')[2];
    const url = `http://localhost:3001/grub-reactor/${menuId}/menu`;
    console.log(url);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ menu: data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  toggleModal() {
    // rename to toggleModal
    var newState = this.state;
    newState.modalIsOpen = !this.state.modalIsOpen;
    this.setState(newState);
  }

  render() {
    if (this.state.menu.length > 0) {
      return (
        <div onClick={this.toggleModal}>
          <React.Fragment>
            <MenuModal
              a={this.state.modalIsOpen}
              handleToggle={this.toggleModal}
            />
            <div className="display">
              <div className="container1">
                <img className="lg" src={random()} />
                <div className="priceTag1">
                  <h2 className="price1">Pizza</h2>
                  <h3 className="price1">$ 9.99 +</h3>
                </div>
              </div>
              <div className="container2">
                <img className="md" src={random()} />
                <div className="priceTag2">
                  <h2 className="price1">chicken</h2>
                  <h3 className="price1">$ 9.99 +</h3>
                </div>
              </div>
              <div className="container3">
                <img className="md" src={random()} />
                <div className="priceTag3">
                  <h2 className="price1">Tuna</h2>
                  <h3 className="price1">$ 9.99 +</h3>
                </div>
              </div>
            </div>

            <div>
              <Category menu={this.state.menu[0]} />
            </div>
          </React.Fragment>
        </div>
      );
    } 
  return <div />;
    
  }
}
