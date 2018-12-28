
import React from 'react'
import asyncComponent from './asyncComponent/async';
import Durability from './InfoPage'
import Collection from './Collections'
import Order from './Order'

const Navigation = asyncComponent(() =>
        import('./Navigation').then(module => module.default)
);
const HomePage = asyncComponent(() =>
        import('./HomePage').then(module => module.default)
);

const Footer = asyncComponent(() =>
        import('./Footer').then(module => module.default)
);



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
