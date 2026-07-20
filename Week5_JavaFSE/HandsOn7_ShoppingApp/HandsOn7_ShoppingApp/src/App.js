import React from 'react';

class Cart{
  constructor(itemName,price){
    this.itemName=itemName;
    this.price=price;
  }
}

class OnlineShopping extends React.Component{
  items=[
    new Cart('Laptop',65000),
    new Cart('Mouse',800),
    new Cart('Keyboard',1500),
    new Cart('Headphones',2200),
    new Cart('Monitor',12000)
  ];

  render(){
    return(
      <div style={{padding:'20px'}}>
        <h2>Online Shopping Cart</h2>
        <table border="1" cellPadding="8">
          <thead>
            <tr><th>Item Name</th><th>Price</th></tr>
          </thead>
          <tbody>
            {this.items.map((i,idx)=>(
              <tr key={idx}>
                <td>{i.itemName}</td>
                <td>₹{i.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default OnlineShopping;
