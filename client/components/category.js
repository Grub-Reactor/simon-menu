import React from 'react';
import $ from 'jquery';
import Item from './item.js';


class Category extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
    <div>
      {this.props.menu.categories.map((category) => {
      return <Item items = {category} key= {category.categoryName + category.dishes[0].id} />
      })}
    </div>
    )
  }
}



export default Category;