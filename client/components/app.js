
import React, {Component} from 'react';
import MenuModal from './modal.js';
import Category from './category.js';
var image = ['https://s3-us-west-1.amazonaws.com/grubreactor/abstract-barbecue-barbeque-bbq-161519.jpeg',
    'https://s3-us-west-1.amazonaws.com/grubreactor/abstract-barbecue-barbeque-bbq-161519.jpeg',
    'https://s3-us-west-1.amazonaws.com/grubreactor/brownie-dessert-cake-sweet-45202.jpeg',
    'https://s3-us-west-1.amazonaws.com/grubreactor/pexels-photo-106343.jpeg',
    'https://s3-us-west-1.amazonaws.com/grubreactor/pexels-photo-156114.jpeg',
    'https://s3-us-west-1.amazonaws.com/grubreactor/pexels-photo-236781.jpeg',
    'https://s3-us-west-1.amazonaws.com/grubreactor/pexels-photo-262959.jpeg',
    'https://s3-us-west-1.amazonaws.com/grubreactor/pexels-photo-629093.jpeg',
    'https://s3-us-west-1.amazonaws.com/grubreactor/pexels-photo-718742.jpeg',
    'https://s3-us-west-1.amazonaws.com/grubreactor/salmon-dish-food-meal-46239.jpeg'];
var random = function(){
    var index = Math.floor(Math.random()*10);
    return image[index];
};

export default class Menu extends Component {
	constructor(props) {
		super(props)
		this.state = {
			menu: '',
			modalIsOpen: false
		}
		this.openModal = this.openModal.bind(this);

    this.closeModal = this.closeModal.bind(this);
  }
  
  
	
	componentDidMount() {
		console.log('mount');
		let menuId = window.location.pathname.split('/')[1];
		const url = `/grub-reactor/${menuId}/menu`;
		fetch(url)
		.then(response => {
			console.log(response);
			return response.json()
		})
		.then(data =>  this.setState({menu:data}))	
	}
	openModal() {
		var newState = this.state;
		newState.modalIsOpen= true;
    this.setState(newState);
  }

  

  closeModal() {
		var newState = this.state;
		newState.modalIsOpen = false;
    this.setState(newState);
    
  }
	

	render() {

		if(this.state.menu.length > 0){
			return ( 
					<div onClick = {this.openModal}>
						<React.Fragment >
						<MenuModal />
					<div className = 'display'>
						<div className = 'container1'>
							<img className = 'lg' src = {random()}></img>
							<div className = 'priceTag1'>
							<h2 className ='price1'>Pizza</h2>
							<h3 className ='price1'>$ 9.99 +</h3>
							</div>
						</div>
						<div className = 'container2'>
							<img className = 'md' src = {random()}></img>
							<div className = 'priceTag2'>
							<h2 className ='price1'>chicken</h2>
							<h3 className ='price1'>$ 9.99 +</h3>
							</div>
						</div>
						<div className = 'container3'>
							<img className = 'md' src = {random()}></img>
							<div className = 'priceTag3'>
							<h2 className = 'price1'>Tuna</h2>
							<h3 className = 'price1'>$ 9.99 +</h3>
							</div>
						</div>
					</div>

					<div>
					<Category menu = {this.state.menu[0]} / >
					</div>
				</React.Fragment>
					</div>
			)
		}else {
			return <div></div>
		}
	}
}