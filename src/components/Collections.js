import React from 'react'
import officeCol from '../images/Collection/handmade.jpg';
import designerCol from '../images/Collection/designer.jpg';
import casualCol from '../images/Collection/casual.jpg';

class Collection extends React.Component{
  render() {
    return(
      <section id='collection'>
         <div class='information'>
          <h1>Collection</h1>
          <p>Display Collection ...Information regarding the latest collection....Sample Text
            </p>
        </div>
        <div class='collection'>
          <div class='container'>
          <img id='img1' class='anim slide-top' src={officeCol} alt='office collection' />
            <div class='text-block anim slide-top'>
            THE HANDMADE COLLECTION
            <button class='button'>View COLLECTION</button>
            </div>
          </div>
          <div class='container upper'>
          <img id='img2' class='anim slide-top slide' src={designerCol} alt='designer collection' />
            <div class='text-block anim slide-top slide'>
            THE DESIGNER COLLECTION
            <button class='button'>View COLLECTION</button>
            </div>
          </div>
          <div class='container'>
          <img id='img3' class='anim slide-top' src={casualCol} alt='casual collection' />
            <div class='text-block anim slide-top'>
            THE CASUAL COLLECTION
            <button class='button'>View COLLECTION</button>
            </div>
          </div>
       </div>
      </section>
    )
  }
}

export default Collection;
