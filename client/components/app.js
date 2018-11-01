
import Category from './category.js';
import React, {Component} from 'react';

export default class Menu extends Component {
	constructor(props) {
		super(props)
		this.state = {
			menu: '',
		}
	}
	componentDidMount() {
		var id = Math.floor(Math.random()*99);
		fetch(`http://localhost:3001/grub-reactor/menu/${id}`)
		.then(response => response.json())
		.then(data =>  this.setState({menu:data}))	
	}

	render() {
		
console.log(this.state.menu.length > 0)
		if(this.state.menu.length > 0){
			return ( 
				 <div className = 'display'>
				
				{console.log('here is my menu in app', this.state.menu)}
				<Category menu = {this.state.menu[0]}/ >
				</div>
			)
		}else {
			return <div> this don't work</div>
		}
	}
}