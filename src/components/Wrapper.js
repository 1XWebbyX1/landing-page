
import React from 'react'
import HomePage from './HomePage'
import Durability from './InfoPage'
import Collection from './Collections'
import Order from './Order'
import Footer from './Footer'
import Navigation from './Navigation'

class Wrapper extends React.Component{
  render() {
    return(
      <div>
        <Navigation />
        <HomePage />
        <Durability />
        <Collection />
        <Order />
        <Footer />
      </div>
    )
  }
}


export default Wrapper;
