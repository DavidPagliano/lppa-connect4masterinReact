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
            <div className='game'>
              <div id='board' className='board'>
                {
                  
                }
              </div>
              <div className='ribbon'></div>
              <div className='players'>
                  <div className='spot yellow'></div>
                  <div className='player p1'></div>
                  <div className='direction left'></div>
                  <div className='direction text'></div>
                  <div className='direction right'></div>
                  <div className='player p2'></div>
                  <div className='spot red'></div>
              </div>
            </div>
            <div className='footer'>
                <button className='fb'>&#x1f44d; Like</button>
                <button className='embed'>Embed</button>
            </div>
        </div>
        
      </div>
    );
  }
  
}

export default Products;