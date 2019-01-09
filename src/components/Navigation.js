import React from 'react'


class Navigation extends React.Component{
  render() {
    return(
      <div id='navbar' >
        <nav class="stroke">
           <ul>
             <li><a href="#collection">Collections</a></li>
             <li><a href="#order">Pre-Order</a></li>
            </ul>
            <div id='logo'>THE LOGO</div>
          </nav>
       </div>
    )
  }
}

export default Navigation;
