import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import $ from 'jquery'
import 'babel-polyfill';
require('jquery-mousewheel');

ReactDOM.render(<App />, document.getElementById('root'));


var $animation_elements = $('.anim');
var $window = $(window);


function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
       console.log('added');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);


//------------------------------------------------------------------

//--- DEFINE a reusable animation function: ---//
function scrollThere(targetElement, speed) {
  // initiate an animation to a certain page element:
  $('html, body').stop().animate(
    { scrollTop: targetElement.offset().top }, // move window so target element is at top of window
    speed, // speed in milliseconds
    'swing' // easing
  ); // end animate
} // end scrollThere function definition

//--- START SCROLL EVENTS ---//
// detect a mousewheel event (note: relies on jquery mousewheel plugin):
$(window).on('mousewheel', function (e) {
  e.preventDefault();
  // get Y-axis value of each div:
  var div1y = $('#home').offset().top,
      div2y = $('#durability').offset().top,
      div3y = $('#collection').offset().top,
      div4y = $('#order').offset().top,
      div5y = $('#footer').offset().top,
      // get window's current scroll position:
      lastScrollTop = $(this).scrollTop(),
      // for getting user's scroll direction:
      scrollDirection,
      // for determining the previous and next divs to scroll to, based on lastScrollTop:
      targetUp,
      targetDown,
      // for determining which of targetUp or targetDown to scroll to, based on scrollDirection:
      targetElement;


  // get scroll direction:
  if ( e.deltaY > 0 ) {
    scrollDirection = 'up';
  } else if ( e.deltaY <= 0 ) {
    scrollDirection = 'down';
  } // end if


  // prevent default behavior (page scroll):
  e.preventDefault();


  // condition: determine the previous and next divs to scroll to, based on lastScrollTop:
  if (lastScrollTop === div1y) {
    targetUp = $('#home');
    targetDown = $('#durability');
  } else if (lastScrollTop === div2y) {
    targetUp = $('#home');
    targetDown = $('#collection');
  } else if (lastScrollTop === div3y) {
    targetUp = $('#durability');
    targetDown = $('#order');
  }else if (lastScrollTop === div4y) {
    targetUp = $('#collection');
    targetDown = $('#footer');
  }else if (lastScrollTop === div5y) {
    targetUp = $('#order');
    targetDown = $('#footer');
  }else if (lastScrollTop < div2y) {
    targetUp = $('#home');
    targetDown = $('#durability');
  } else if (lastScrollTop < div3y) {
    targetUp = $('#durability');
    targetDown = $('#collection');
  } else if (lastScrollTop < div4y) {
    targetUp = $('#collection');
    targetDown = $('#order');
  } else if (lastScrollTop < div5y) {
    targetUp = $('#order');
    targetDown = $('#footer');
  } else if (lastScrollTop > div5y) {
    targetUp = $('#footer');
    targetDown = $('#footer');
  } // end else if
  // condition: determine which of targetUp or targetDown to scroll to, based on scrollDirection:
  if (scrollDirection === 'down') {
    targetElement = targetDown;

  } else if (scrollDirection === 'up') {
    targetElement = targetUp;
  } // end else if
  // scroll smoothly to the target element:

  scrollThere(targetElement, 1000);

}); // end on mousewheel event
//--- END SCROLL EVENTS ---//
