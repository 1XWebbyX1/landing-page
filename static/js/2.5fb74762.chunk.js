(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{358:function(e,t,o){var n,s,l;s=[o(101)],void 0===(l="function"===typeof(n=function(e){var t,o,n=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],s="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],l=Array.prototype.slice;if(e.event.fixHooks)for(var i=n.length;i;)e.event.fixHooks[n[--i]]=e.event.mouseHooks;var r=e.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var t=s.length;t;)this.addEventListener(s[--t],a,!1);else this.onmousewheel=a;e.data(this,"mousewheel-line-height",r.getLineHeight(this)),e.data(this,"mousewheel-page-height",r.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var t=s.length;t;)this.removeEventListener(s[--t],a,!1);else this.onmousewheel=null;e.removeData(this,"mousewheel-line-height"),e.removeData(this,"mousewheel-page-height")},getLineHeight:function(t){var o=e(t),n=o["offsetParent"in e.fn?"offsetParent":"parent"]();return n.length||(n=e("body")),parseInt(n.css("fontSize"),10)||parseInt(o.css("fontSize"),10)||16},getPageHeight:function(t){return e(t).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};function a(n){var s=n||window.event,i=l.call(arguments,1),a=0,f=0,c=0,d=0,w=0,m=0;if((n=e.event.fix(s)).type="mousewheel","detail"in s&&(c=-1*s.detail),"wheelDelta"in s&&(c=s.wheelDelta),"wheelDeltaY"in s&&(c=s.wheelDeltaY),"wheelDeltaX"in s&&(f=-1*s.wheelDeltaX),"axis"in s&&s.axis===s.HORIZONTAL_AXIS&&(f=-1*c,c=0),a=0===c?f:c,"deltaY"in s&&(c=-1*s.deltaY,a=c),"deltaX"in s&&(f=s.deltaX,0===c&&(a=-1*f)),0!==c||0!==f){if(1===s.deltaMode){var p=e.data(this,"mousewheel-line-height");a*=p,c*=p,f*=p}else if(2===s.deltaMode){var v=e.data(this,"mousewheel-page-height");a*=v,c*=v,f*=v}if(d=Math.max(Math.abs(c),Math.abs(f)),(!o||d<o)&&(o=d,u(s,d)&&(o/=40)),u(s,d)&&(a/=40,f/=40,c/=40),a=Math[a>=1?"floor":"ceil"](a/o),f=Math[f>=1?"floor":"ceil"](f/o),c=Math[c>=1?"floor":"ceil"](c/o),r.settings.normalizeOffset&&this.getBoundingClientRect){var g=this.getBoundingClientRect();w=n.clientX-g.left,m=n.clientY-g.top}return n.deltaX=f,n.deltaY=c,n.deltaFactor=o,n.offsetX=w,n.offsetY=m,n.deltaMode=0,i.unshift(n,a,f,c),t&&clearTimeout(t),t=setTimeout(h,200),(e.event.dispatch||e.event.handle).apply(this,i)}}function h(){o=null}function u(e,t){return r.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120===0}e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})})?n.apply(t,s):n)||(e.exports=l)},360:function(e,t,o){"use strict";o.r(t),o.d(t,"startScrollEvent",function(){return l});var n=o(101),s=o.n(n);function l(){s()(window).on("mousewheel",function(e){e.preventDefault();var t,o,n,l,i=s()("#home").offset().top,r=s()("#durability").offset().top,a=s()("#collection").offset().top,h=s()("#order").offset().top,u=s()("#footer").offset().top,f=s()(this).scrollTop();e.deltaY>0?t="up":e.deltaY<=0&&(t="down"),e.preventDefault(),f===i?(o=s()("#home"),n=s()("#durability")):f===r?(o=s()("#home"),n=s()("#collection")):f===a?(o=s()("#durability"),n=s()("#order")):f===h?(o=s()("#collection"),n=s()("#footer")):f===u?(o=s()("#order"),n=s()("#footer")):f<r?(o=s()("#home"),n=s()("#durability")):f<a?(o=s()("#durability"),n=s()("#collection")):f<h?(o=s()("#collection"),n=s()("#order")):f<u?(o=s()("#order"),n=s()("#footer")):f>u&&(o=s()("#footer"),n=s()("#footer")),"down"===t?l=n:"up"===t&&(l=o),function(e,t){s()("html, body").stop().animate({scrollTop:e.offset().top},t,"swing")}(l,1e3)})}o(358)}}]);
//# sourceMappingURL=2.5fb74762.chunk.js.map