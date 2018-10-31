import React from 'react';
import $ from 'jquery';

var Item = (props)=>{
  return (<div className = "menuItem">
         { props.items.dishes.map((item)=>{
          return(
            <div key = {item.id} className="itemName">
            <img src = {item.imageUrl}></img>
            <h4 className = 'name'>{item.name}</h4>
            <span className='price'>{item.price}</span>
            <div className='text'>{item.text}</div>
            </div>
          )
         })}
          </div>)
}

export default Item;