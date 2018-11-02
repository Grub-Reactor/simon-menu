
import React, {Component} from 'react';
import Modal from './modal.js';
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
			showModal: false
		}
		this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
	}
	
	componentDidMount() {
		const url = `${window.location}menu`
		fetch(url)
		.then(response => response.json())
		.then(data =>  this.setState({menu:data}))	
	}
	

	render() {
		if(this.state.menu.length > 0){
			if(this.state.showModal){
				var modal = <div className = 'modal'></div>;
			}else modal = '';
			return ( 
				<div onClick ={this.handleOpenModal}>
					<React.Fragment >
					{modal}
					<div className = 'display'>
						<div className = 'container'>
							<img className = 'lg' src = {random()}></img>
							<div className = 'priceTag'></div>
						</div>
						<div className = 'container'>
							<img className = 'md' src = {random()}></img>
							<div className = 'priceTag'></div>
						</div>
						<div className = 'container'>
							<img className = 'md' src = {random()}></img>
							<div className = 'priceTag'></div>
						</div>
					</div>
					<div>
					{console.log('here is my menu in app', this.state.menu)}
					<Category menu = {this.state.menu[0]} closeModal = {this.handleCloseModal} openModal = {this.handleOpenModal}/ >
					</div>
				</React.Fragment>
				</div>
			)
		}else {
			return <div> this don't work</div>
		}
	}
}