import './App.css';
import React from 'react';
import SingIn from './screens/SignIn'
import Products from './screens/Products'
import Home from './screens/Home'


class App extends React.Component() {

  constructor(pros){
    super(pros)
    this.state ={screens: 'Home'} 
  }

  render(){
    return (
      <div className="App">
          <ul className="Menu">
            <li onClick={() => this.setState({screens: 'singin'})}> SingIn</li>
            <li onClick={() => this.setState({screens: 'products'})}>Products</li>
            <li onClick={() => this.setState({screens: 'home'})}>Home</li>
          </ul>
          APP: {this.state.screens}
          {this.state.screens === 'singin' ? <SingIn/>:null}
          {this.state.screens === 'products' ? <Products/>:null}
          {this.state.screens === 'home' ? <Home/>:null}
      </div>
    );
  }

  
}

export default App;
