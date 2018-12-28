import React from 'react'



class Footer extends React.Component{
  render() {
    return(
      <section id='footer'>
      <div id='wrap'>
        <div class='stroke'>
          <ul>
            <li><a href='#'>ABOUT</a></li>
            <li><a href='#'>PRIVACY POLICY</a></li>
            <li><a href='#'>CONTACT</a></li>
          </ul>
        </div>
          <div id='copyright'> © year Company Name  | All Rights Reserved</div>
      </div>
      </section>
    )
  }
}


export default Footer;
