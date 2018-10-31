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
      {this.props.menu.categories.map((category,i) => {
      return (
        <div key = {category.categoryName+i}>
          <h3>{category.categoryName}</h3>
          <Item items = {category} key= {category.categoryName + category.dishes[0].id} />
        </div>
      )
      
      })}
    </div>
    )
  }
}



export default Category;