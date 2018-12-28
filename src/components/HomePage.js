import React from 'react'
import backImg from '../images/HomePage/handbag_back.jpg';
import frontImg from '../images/HomePage/handbag_front.jpg';




class HomePage extends React.Component{
  render() {
    return(
      <section id='home'>
        <h1><strong>THE <br />BAG <br />STORE</strong></h1>
          <img id='back-img' src={backImg} alt='handbag-back-img'/>
          <img id='front-img' src={frontImg} alt='handbag-front-img'/>
      </section>
    )
  }
}

export default HomePage;
