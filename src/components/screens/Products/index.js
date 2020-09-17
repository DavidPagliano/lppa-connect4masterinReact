import './style.css';
import React from 'react';



class Products extends React.Component() {

  constructor(pros){
    super(pros)
    this.state = {screens: 'Products'}
  }

  render(){
    return (
      <div className="Products">
        <div className='wrapper'>
          <div className='header'><a href='#'>&larr; Back</a></div>
          
        </div>
          
      </div>
    );
  }
  
}

export default Products;