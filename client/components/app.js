
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
		console.log("hello world")
		fetch('http://localhost:3001/grub-reactor/menu')
		.then(response => response.json())
		.then(data =>  this.setState({menu:data}))	
	}

	render() {
		
console.log(this.state.menu.length > 0)
		if(this.state.menu.length > 0){
			return ( 
				<div>
				{console.log('here is my menu in app', this.state.menu[0])}
				<Category menu = {this.state.menu[0]}/ >
				</div>
			)
		}else {
			return <div> this don't work</div>
		}
	}
}