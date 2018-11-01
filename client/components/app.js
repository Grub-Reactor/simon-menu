
import Category from './category.js';
import React, {Component} from 'react';
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
		}
	}
	componentDidMount() {

		const url = `${window.location}menu`
		fetch(url)
		.then(response => response.json())
		.then(data =>  this.setState({menu:data}))	
	}

	render() {
		
console.log(this.state.menu.length > 0)
		if(this.state.menu.length > 0){
			return ( 
				<React.Fragment>
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
					<Category menu = {this.state.menu[0]}/ >
					</div>
				</React.Fragment>
			)
		}else {
			return <div> this don't work</div>
		}
	}
}