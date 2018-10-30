
import Catagory from './catagory.js';

import React, {
	Component
} from 'react'

export default class Menu extends Component {
	constructor() {
		super()
		this.state = {

		}
	}
	componentDidMount() {
		fetch('http://localhost:3001/grub-reactor/menu').then(response => response.json()).then(data => console.log(data))
	}

	render() {
		return ( 
			<div>
			<Catagory / >
			</div>
		)
	}
}