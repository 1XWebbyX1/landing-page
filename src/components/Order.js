import React from 'react'
import HandbagImg from '../images/Order/handbag.svg';
import StarsImg from '../images/Order/stars.svg';

class Order extends React.Component{

  render() {
    return(
      <section id='order'>
         <div class='form'>
          <form action='#'>
          <div class='left-box'>
          <div class='field'>
           <h1>Pre Order</h1>
           <div class='card'>
            <label id="dropdown-label"> Product </label>
            <select name="roles" id="dropdown">
              <option>Product1</option>
              <option>Product2</option>
           </select><br />
           </div>
           <div class='card'>
           <label id='name-label'>Name</label>
           <input name='name' type='text' required/><br />
           </div>
           <div class='card'>
           <label id='email-label'>Email</label>
           <input name='email' type='email' required/><br />
           </div>
           <div class='card'>
           <label id='message-label'>Message</label>
           <textarea id='message' name='message' type='text'></textarea><br />
           </div>
           </div>
          </div>
          <div class='right-box'>
           <div class='vectors'>
            <img id='stars-img-1' class='blink' src={StarsImg} alt='stars vector'/>
            <img id='handbag-img' class='anim slide-top' src={HandbagImg} alt='handbag vector'/>
            <img id='stars-img-2' class='blink' src={StarsImg} alt='stars vector'/>
            </div>
            <button id='send-order'>Place My Order</button>
          </div>
          </form>
        </div>
      </section>
    )
  }
}

export default Order;
