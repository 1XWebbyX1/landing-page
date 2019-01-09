
import React from 'react'
import sideImg from '../images/InfoPage/side_img.jpg';
import frontImg from '../images/InfoPage/front_img.jpg';




class Durability extends React.Component{
  render() {
    return(
      <section id='durability'>
         <img id='front-img' class='anim slide-left slide' src={frontImg} alt='front-handbag-img'/>
         <img id='back-img' class='anim slide-left' src={sideImg} alt='side-handbag-img' />
        <div class='information'>
          <h1>Product Description</h1>
          <p>Describe your awesome product here.. Could be anything...
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <p id='features'>Some key features....Lorem ipsum dolor sit amet consectetur adipiscing sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </p>
         <button>Find out more</button>
        </div>
      </section>
    )
  }
}

export default Durability;
