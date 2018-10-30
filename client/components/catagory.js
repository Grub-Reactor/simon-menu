import React from 'react';
import $ from 'jquery';
import Item from './item.js';


class Catagory extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(<Item items={this.props.dishes} />)
  }
}



export default Catagory;