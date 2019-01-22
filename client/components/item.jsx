import React from 'react';

const Item = (props) => {
  return (
    <div className="menuItem">
      {props.items.dishes.map((item) => {
        return (
          <div key={item.id} className="itemName">
            <img src={item.imageUrl} />
            <h4 className="name">{item.name}</h4>
            <div className="text">{item.text}</div>
            <span className="price">$ {item.price}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Item;
