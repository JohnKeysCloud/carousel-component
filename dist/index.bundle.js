(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var a=e.g.document;if(!t&&a&&(a.currentScript&&(t=a.currentScript.src),!t)){var n=a.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&!t;)t=n[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();var t=[{src:e.p+"eb4c9ba54db7e6985da4.webp",alt:"NYC Tech Bro 1"},{src:e.p+"a6bae7e4137eedb80a86.webp",alt:"NYC Tech Bro 2"},{src:e.p+"ae313c26fb347ab4023e.webp",alt:"NYC Tech Bro 3"},{src:e.p+"9956e2bf8bbe312bca48.webp",alt:"NYC Tech Bro 4"}];function a(e,t){for(var a in t)e.setAttribute(a,t[a])}function n(e){var t=document.createElement("section");t.classList.add("carousel");var n=function(e){var t=document.createElement("button");t.classList.add("arrow","right-arrow","carousel-arrow"),a(t,{type:"button","aria-label":"Next"});var n=function(e){var t=document.createElement("div");return t.classList.add("carousel-slide-container"),e.forEach((function(n,r){var c=document.createElement("figcaption");c.classList.add("carousel-image-caption"),c.textContent=n.alt;var o=document.createElement("img");o.classList.add("carousel-image","non-interactive"),a(o,{src:n.src,alt:n.alt});var i=document.createElement("span");i.classList.add("carousel-image-index"),i.textContent="".concat(r+1,"/").concat(e.length);var s=document.createElement("figure");s.classList.add("carousel-image-container"),s.append(i,o,c);var l=document.createElement("div");l.classList.add("carousel-slide"),0===r&&l.classList.add("active"),l.setAttribute("data-index",r+1),l.append(s),t.append(l)})),t}(e),r=document.createElement("button");r.classList.add("arrow","left-arrow","carousel-arrow"),a(r,{type:"button","aria-label":"Previous"});var c=document.createElement("section");return c.classList.add("carousel-container"),c.append(r,n,t),c}(e),r=function(e){var t=document.createElement("div");t.classList.add("carousel-navigation-button-container"),e.forEach((function(e,n){var r=document.createElement("button");r.classList.add("carousel-navigation-button"),0===n&&r.classList.add("active"),a(r,{type:"button","aria-label":"Go to slide ".concat(n+1),"data-index":n+1}),t.append(r)}));var n=document.createElement("div");return n.classList.add("carousel-navigation-container"),n.appendChild(t),n}(e);return t.append(n,r),t}var r=1,c=!1;function o(e){i(r+=e)}function i(e){var t,a,n=document.querySelectorAll(".carousel-slide");document.querySelectorAll(".carousel-navigation-button"),function(e,t){t>e?r=1:t<1&&(r=e)}(n.length,e),(t=document.querySelector(".carousel-slide.active")).classList.add("deactivating"),c=!0,(a=t).setDeactivatedSlideToDisplayNoneRef=function(){!function(e){e.classList.remove("deactivating","active"),c=!1,e.removeEventListener("animationend",e.setDeactivatedSlideToDisplayNoneRef)}(a)},a.addEventListener("animationend",a.setDeactivatedSlideToDisplayNoneRef),document.querySelector(".carousel-navigation-button.active").classList.remove("active"),function(){var e=document.querySelectorAll(".carousel-slide"),t=document.querySelectorAll(".carousel-navigation-button");e[r-1].classList.add("active"),t[r-1].classList.add("active")}()}function s(e,t){"left"===t?(e.style.setProperty("--fade-in","var(--left-fade-in-animation)"),e.style.setProperty("--fade-out","var(--left-fade-out-animation)")):"right"===t&&(e.style.setProperty("--fade-in","var(--right-fade-in-animation)"),e.style.setProperty("--fade-out","var(--right-fade-out-animation)"))}const l=e.p+"e7124316bf43e6e2e0ba.svg";var d;!function(){var e=document.createElement("img");e.classList.add("cyclone-studios-logo","non-interactive"),e.src=l;var a=n(t);document.getElementById("content").append(e,a)}(),function(e){var t=document.querySelector(".carousel-arrow.left-arrow"),a=document.querySelector(".carousel-arrow.right-arrow");t&&t.addEventListener("click",(function(){if(!c){var t=r;o(-1),s(e,"left"),t<=r&&s(e,"right")}})),a&&a.addEventListener("click",(function(){if(!c){var t=r;o(1),s(e,"right"),t>=r&&s(e,"left")}}))}(d=document.documentElement),function(e){document.querySelectorAll(".carousel-navigation-button").forEach((function(t,a){t.addEventListener("click",(function(){if(!t.classList.contains("active")&&!c){var n=r;!function(e){i(r=e)}(a+1),n<r?s(e,"right"):n>r&&s(e,"left")}}))}))}(d)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJtQkFDQSxJQUFJQSxFQUFzQixDQUFDLEVDRDNCQSxFQUFvQkMsRUFBSSxXQUN2QixHQUEwQixpQkFBZkMsV0FBeUIsT0FBT0EsV0FDM0MsSUFDQyxPQUFPQyxNQUFRLElBQUlDLFNBQVMsY0FBYixFQUNoQixDQUFFLE1BQU9DLEdBQ1IsR0FBc0IsaUJBQVhDLE9BQXFCLE9BQU9BLE1BQ3hDLENBQ0EsQ0FQdUIsRyxNQ0F4QixJQUFJQyxFQUNBUCxFQUFvQkMsRUFBRU8sZ0JBQWVELEVBQVlQLEVBQW9CQyxFQUFFUSxTQUFXLElBQ3RGLElBQUlDLEVBQVdWLEVBQW9CQyxFQUFFUyxTQUNyQyxJQUFLSCxHQUFhRyxJQUNiQSxFQUFTQyxnQkFDWkosRUFBWUcsRUFBU0MsY0FBY0MsTUFDL0JMLEdBQVcsQ0FDZixJQUFJTSxFQUFVSCxFQUFTSSxxQkFBcUIsVUFDNUMsR0FBR0QsRUFBUUUsT0FFVixJQURBLElBQUlDLEVBQUlILEVBQVFFLE9BQVMsRUFDbEJDLEdBQUssSUFBTVQsR0FBV0EsRUFBWU0sRUFBUUcsS0FBS0osR0FFeEQsQ0FJRCxJQUFLTCxFQUFXLE1BQU0sSUFBSVUsTUFBTSx5REFDaENWLEVBQVlBLEVBQVVXLFFBQVEsT0FBUSxJQUFJQSxRQUFRLFFBQVMsSUFBSUEsUUFBUSxZQUFhLEtBQ3BGbEIsRUFBb0JtQixFQUFJWixDLEtDVnhCLElBQU1hLEVBQVMsQ0FDYixDQUNFUixJLGdDQUNBUyxJQUFLLGtCQUVQLENBQ0VULEksZ0NBQ0FTLElBQUssa0JBRVAsQ0FDRVQsSSxnQ0FDQVMsSUFBSyxrQkFFUCxDQUNFVCxJLGdDQUNBUyxJQUFLLG1CQ3ZCVCxTQUFTQyxFQUFjQyxFQUFTQyxHQUM5QixJQUFLLElBQU1DLEtBQU9ELEVBQ2hCRCxFQUFRRyxhQUFhRCxFQUFLRCxFQUFXQyxHQUV6QyxDQzRGQSxTQUFTRSxFQUFlQyxHQUN0QixJQUFNQyxFQUFXbkIsU0FBU29CLGNBQWMsV0FDeENELEVBQVNFLFVBQVVDLElBQUksWUFFdkIsSUFBTUMsRUE1QlIsU0FBaUNMLEdBQy9CLElBQU1NLEVBQWF4QixTQUFTb0IsY0FBYyxVQUMxQ0ksRUFBV0gsVUFBVUMsSUFBSSxRQUFTLGNBQWUsa0JBQ2pEVixFQUFjWSxFQUFZLENBQ3hCQyxLQUFNLFNBQ04sYUFBYyxTQUdoQixJQUFNQyxFQWhEUixTQUFzQ1IsR0FDcEMsSUFBTVMsRUFBeUIzQixTQUFTb0IsY0FBYyxPQW9DdEQsT0FuQ0FPLEVBQXVCTixVQUFVQyxJQUFJLDRCQUVyQ0osRUFBWVUsU0FBUSxTQUFDQyxFQUFPQyxHQUMxQixJQUFNQyxFQUF5Qi9CLFNBQVNvQixjQUFjLGNBQ3REVyxFQUF1QlYsVUFBVUMsSUFBSSwwQkFDckNTLEVBQXVCQyxZQUFjSCxFQUFNbEIsSUFFM0MsSUFBTXNCLEVBQWVqQyxTQUFTb0IsY0FBYyxPQUM1Q2EsRUFBYVosVUFBVUMsSUFBSSxpQkFBa0IsbUJBQzdDVixFQUFjcUIsRUFBYyxDQUMxQi9CLElBQUsyQixFQUFNM0IsSUFDWFMsSUFBS2tCLEVBQU1sQixNQUdiLElBQU11QixFQUF3QmxDLFNBQVNvQixjQUFjLFFBQ3JEYyxFQUFzQmIsVUFBVUMsSUFBSSx3QkFDcENZLEVBQXNCRixZQUFjLEdBQUhHLE9BQU9MLEVBQVEsRUFBQyxLQUFBSyxPQUFNakIsRUFBWWIsUUFFbkUsSUFBTStCLEVBQXFCcEMsU0FBU29CLGNBQWMsVUFDbERnQixFQUFtQmYsVUFBVUMsSUFBSSw0QkFDakNjLEVBQW1CQyxPQUNqQkgsRUFDQUQsRUFDQUYsR0FHRixJQUFNTyxFQUFnQnRDLFNBQVNvQixjQUFjLE9BQzdDa0IsRUFBY2pCLFVBQVVDLElBQUksa0JBQ2QsSUFBVlEsR0FBYVEsRUFBY2pCLFVBQVVDLElBQUksVUFDN0NnQixFQUFjdEIsYUFBYSxhQUFjYyxFQUFRLEdBQ2pEUSxFQUFjRCxPQUFPRCxHQUVyQlQsRUFBdUJVLE9BQU9DLEVBQ2hDLElBRU9YLENBQ1QsQ0FVeUJZLENBQTZCckIsR0FFOUNzQixFQUFZeEMsU0FBU29CLGNBQWMsVUFDekNvQixFQUFVbkIsVUFBVUMsSUFBSSxRQUFTLGFBQWMsa0JBQy9DVixFQUFjNEIsRUFBVyxDQUN2QmYsS0FBTSxTQUNOLGFBQWMsYUFHaEIsSUFBTUYsRUFBb0J2QixTQUFTb0IsY0FBYyxXQUlqRCxPQUhBRyxFQUFrQkYsVUFBVUMsSUFBSSxzQkFDaENDLEVBQWtCYyxPQUFPRyxFQUFXZCxFQUFnQkYsR0FFN0NELENBQ1QsQ0FNNEJrQixDQUF3QnZCLEdBQzVDd0IsRUEvRlIsU0FBMkN4QixHQUN6QyxJQUFNeUIsRUFBb0MzQyxTQUFTb0IsY0FBYyxPQUNqRXVCLEVBQWtDdEIsVUFBVUMsSUFDMUMsd0NBR0ZKLEVBQVlVLFNBQVEsU0FBQ0MsRUFBT0MsR0FDMUIsSUFBTWMsRUFBMkI1QyxTQUFTb0IsY0FBYyxVQUN4RHdCLEVBQXlCdkIsVUFBVUMsSUFBSSw4QkFDekIsSUFBVlEsR0FBYWMsRUFBeUJ2QixVQUFVQyxJQUFJLFVBQ3hEVixFQUFjZ0MsRUFBMEIsQ0FDdENuQixLQUFNLFNBQ04sYUFBYyxlQUFGVSxPQUFpQkwsRUFBUSxHQUNyQyxhQUFjQSxFQUFRLElBR3hCYSxFQUFrQ04sT0FBT08sRUFDM0MsSUFFQSxJQUFNRixFQUE4QjFDLFNBQVNvQixjQUFjLE9BSTNELE9BSEFzQixFQUE0QnJCLFVBQVVDLElBQUksaUNBQzFDb0IsRUFBNEJHLFlBQVlGLEdBRWpDRCxDQUNULENBd0VJSSxDQUFrQzVCLEdBSXBDLE9BRkFDLEVBQVNrQixPQUFPZCxFQUFtQm1CLEdBRTVCdkIsQ0FDVCxDQzNHQSxJQUFJNEIsRUFBYSxFQUNiQyxHQUF1QixFQUczQixTQUFTQyxFQUFXbkIsR0FDbEJvQixFQUFXSCxHQUFjakIsRUFDM0IsQ0EyREEsU0FBU29CLEVBQVdwQixHQUNsQixJQXRCTXFCLEVBVDhCQyxFQStCOUIxQixFQUFpQjFCLFNBQVNxRCxpQkFBaUIsbUJBQ2ZyRCxTQUFTcUQsaUJBQ3pDLCtCQWpCSixTQUF5QkMsRUFBc0J4QixHQUV6Q0EsRUFBUXdCLEVBQ1ZQLEVBQWEsRUFLWGpCLEVBQVEsSUFDVmlCLEVBQWFPLEVBR2pCLENBUUVDLENBQWdCN0IsRUFBZXJCLE9BQVF5QixJQTNCakNxQixFQUFzQm5ELFNBQVN3RCxjQUFjLDJCQUMvQm5DLFVBQVVDLElBQUksZ0JBQ2xDMEIsR0FBdUIsR0FYYUksRUFhUEQsR0FaSE0sb0NBQXNDLFlBUmxFLFNBQTBDTCxHQUN4Q0EsRUFBMEIvQixVQUFVcUMsT0FBTyxlQUFnQixVQUMzRFYsR0FBdUIsRUFFdkJJLEVBQTBCTyxvQkFBb0IsZUFBZ0JQLEVBQTBCSyxvQ0FDMUYsQ0FJSUcsQ0FBaUNSLEVBQ25DLEVBRUFBLEVBQTBCUyxpQkFBaUIsZUFBZ0JULEVBQTBCSyxxQ0FoQjlDekQsU0FBU3dELGNBQWMsc0NBQy9CbkMsVUFBVXFDLE9BQU8sVUFabEQsV0FDRSxJQUFNaEMsRUFBaUIxQixTQUFTcUQsaUJBQWlCLG1CQUMzQ1MsRUFBNEI5RCxTQUFTcUQsaUJBQ3pDLCtCQUdGM0IsRUFBZXFCLEVBQWEsR0FBRzFCLFVBQVVDLElBQUksVUFDN0N3QyxFQUEwQmYsRUFBYSxHQUFHMUIsVUFBVUMsSUFBSSxTQUMxRCxDQXFERXlDLEVBQ0YsQ0NyRUEsU0FBU0MsRUFBNEJDLEVBQWFDLEdBQzlCLFNBQWRBLEdBQ0ZELEVBQVlFLE1BQU1DLFlBQVksWUFBYSxpQ0FDM0NILEVBQVlFLE1BQU1DLFlBQVksYUFBYyxtQ0FDckIsVUFBZEYsSUFDVEQsRUFBWUUsTUFBTUMsWUFBWSxZQUFhLGtDQUMzQ0gsRUFBWUUsTUFBTUMsWUFBWSxhQUFjLG1DQUVoRCxDLHVDQXlEQSxJQUNRSCxHQ2pFUixXQUNFLElBQU1JLEVBQTRCckUsU0FBU29CLGNBQWMsT0FDekRpRCxFQUEwQmhELFVBQVVDLElBQUksdUJBQXdCLG1CQUNoRStDLEVBQTBCbkUsSUFBTW9FLEVBR2hDLElBQU1uRCxFQUFXRixFQUFlUCxHQUVoQlYsU0FBU3VFLGVBQWUsV0FDaENsQyxPQUFPZ0MsRUFBMkJsRCxFQUM1QyxDQUVBcUQsR0RrQkEsU0FBa0NQLEdBQ2hDLElBQU16QixFQUFZeEMsU0FBU3dELGNBQWMsOEJBQ25DaEMsRUFBYXhCLFNBQVN3RCxjQUFjLCtCQUV0Q2hCLEdBQ0ZBLEVBQVVxQixpQkFBaUIsU0FBUyxXQUNsQyxJQUFJYixFQUFKLENBQ0EsSUFBTXlCLEVBQW9CMUIsRUFFMUJFLEdBQVksR0FDWmUsRUFBNEJDLEVBQWEsUUFFckNRLEdBQXFCMUIsR0FDdkJpQixFQUE0QkMsRUFBYSxRQVBYLENBU2xDLElBSUV6QyxHQUNGQSxFQUFXcUMsaUJBQWlCLFNBQVMsV0FDbkMsSUFBSWIsRUFBSixDQUNBLElBQU15QixFQUFvQjFCLEVBRTFCRSxFQUFXLEdBQ1hlLEVBQTRCQyxFQUFhLFNBRXJDUSxHQUFxQjFCLEdBQ3ZCaUIsRUFBNEJDLEVBQWEsT0FQWCxDQVNsQyxHQUVKLENBS0VTLENBRk1ULEVBQWNqRSxTQUFTMkUsaUJBeEQvQixTQUE2Q1YsR0FDVGpFLFNBQVNxRCxpQkFBaUIsK0JBRWxDekIsU0FBUSxTQUFDZ0QsRUFBUTlDLEdBQ3pDOEMsRUFBT2YsaUJBQWlCLFNBQVMsV0FDL0IsSUFBSWUsRUFBT3ZELFVBQVV3RCxTQUFTLFlBQzFCN0IsRUFBSixDQUVBLElBQU15QixFQUFvQjFCLEdEZmhDLFNBQXNCakIsR0FDcEJvQixFQUFXSCxFQUFhakIsRUFDMUIsQ0NlTWdELENBQWFoRCxFQUFRLEdBRWpCMkMsRUFBb0IxQixFQUN0QmlCLEVBQTRCQyxFQUFhLFNBQ2hDUSxFQUFvQjFCLEdBQzdCaUIsRUFBNEJDLEVBQWEsT0FUWCxDQVdsQyxHQUNGLEdBQ0YsQ0F3Q0VjLENBQW9DZCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3ljbG9uZS1zdHVkaW9zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2N5Y2xvbmUtc3R1ZGlvcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2N5Y2xvbmUtc3R1ZGlvcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9jeWNsb25lLXN0dWRpb3MvLi9zcmMvanMvY2Fyb3VzZWwtaW1hZ2VzLmpzIiwid2VicGFjazovL2N5Y2xvbmUtc3R1ZGlvcy8uL3NyYy91dGlsaXRpZXMvc2V0LWF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY3ljbG9uZS1zdHVkaW9zLy4vc3JjL2pzL2Nhcm91c2VsLW1hcmt1cC5qcyIsIndlYnBhY2s6Ly9jeWNsb25lLXN0dWRpb3MvLi9zcmMvanMvY2Fyb3VzZWwtbG9naWMuanMiLCJ3ZWJwYWNrOi8vY3ljbG9uZS1zdHVkaW9zLy4vc3JjL2pzL2Nhcm91c2VsLWhhbmRsaW5nLmpzIiwid2VicGFjazovL2N5Y2xvbmUtc3R1ZGlvcy8uL3NyYy9qcy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gKiBpbXBvcnQgaW1hZ2VzXG5pbXBvcnQgdGVjaEJyb09uZSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3RlY2gtYnJvcy90ZWNoLWJyby0xLndlYnAnO1xuaW1wb3J0IHRlY2hCcm9Ud28gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy90ZWNoLWJyb3MvdGVjaC1icm8tMi53ZWJwJztcbmltcG9ydCB0ZWNoQnJvVGhyZWUgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy90ZWNoLWJyb3MvdGVjaC1icm8tMy53ZWJwJztcbmltcG9ydCB0ZWNoQnJvRm91ciBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3RlY2gtYnJvcy90ZWNoLWJyby00LndlYnAnO1xuXG4vLyA+IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IGltYWdlcyA9IFtcbiAge1xuICAgIHNyYzogdGVjaEJyb09uZSxcbiAgICBhbHQ6ICdOWUMgVGVjaCBCcm8gMScsXG4gIH0sXG4gIHtcbiAgICBzcmM6IHRlY2hCcm9Ud28sXG4gICAgYWx0OiAnTllDIFRlY2ggQnJvIDInLFxuICB9LFxuICB7XG4gICAgc3JjOiB0ZWNoQnJvVGhyZWUsXG4gICAgYWx0OiAnTllDIFRlY2ggQnJvIDMnLFxuICB9LFxuICB7XG4gICAgc3JjOiB0ZWNoQnJvRm91cixcbiAgICBhbHQ6ICdOWUMgVGVjaCBCcm8gNCcsXG4gIH0sXG5dO1xuXG5leHBvcnQgeyBpbWFnZXMgfTtcblxuIiwiZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gIGZvciAoY29uc3Qga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgc2V0QXR0cmlidXRlcyB9OyIsImltcG9ydCAnLi4vY3NzL3N0eWxlcy5jc3MnO1xuXG5pbXBvcnQgeyBzZXRBdHRyaWJ1dGVzIH0gZnJvbSAnLi4vdXRpbGl0aWVzL3NldC1hdHRyaWJ1dGVzJztcblxuLy8gPiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBjcmVhdGVDYXJvdXNlbE5hdmlnYXRpb25Db250YWluZXIoaW1hZ2VzQXJyYXkpIHtcbiAgY29uc3QgY2Fyb3VzZWxOYXZpZ2F0aW9uQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcm91c2VsTmF2aWdhdGlvbkJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICdjYXJvdXNlbC1uYXZpZ2F0aW9uLWJ1dHRvbi1jb250YWluZXInXG4gICk7XG5cbiAgaW1hZ2VzQXJyYXkuZm9yRWFjaCgoaW1hZ2UsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgY2Fyb3VzZWxOYXZpZ2F0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2Fyb3VzZWxOYXZpZ2F0aW9uQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsLW5hdmlnYXRpb24tYnV0dG9uJyk7XG4gICAgaWYgKGluZGV4ID09PSAwKSBjYXJvdXNlbE5hdmlnYXRpb25CdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgc2V0QXR0cmlidXRlcyhjYXJvdXNlbE5hdmlnYXRpb25CdXR0b24sIHtcbiAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgJ2FyaWEtbGFiZWwnOiBgR28gdG8gc2xpZGUgJHtpbmRleCArIDF9YCxcbiAgICAgICdkYXRhLWluZGV4JzogaW5kZXggKyAxLFxuICAgIH0pO1xuXG4gICAgY2Fyb3VzZWxOYXZpZ2F0aW9uQnV0dG9uQ29udGFpbmVyLmFwcGVuZChjYXJvdXNlbE5hdmlnYXRpb25CdXR0b24pO1xuICB9KTtcblxuICBjb25zdCBjYXJvdXNlbE5hdmlnYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2Fyb3VzZWxOYXZpZ2F0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsLW5hdmlnYXRpb24tY29udGFpbmVyJyk7XG4gIGNhcm91c2VsTmF2aWdhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJvdXNlbE5hdmlnYXRpb25CdXR0b25Db250YWluZXIpO1xuXG4gIHJldHVybiBjYXJvdXNlbE5hdmlnYXRpb25Db250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhcm91c2VsU2xpZGVDb250YWluZXIoaW1hZ2VzQXJyYXkpIHtcbiAgY29uc3QgY2Fyb3VzZWxTbGlkZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJvdXNlbFNsaWRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsLXNsaWRlLWNvbnRhaW5lcicpO1xuXG4gIGltYWdlc0FycmF5LmZvckVhY2goKGltYWdlLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGltYWdlRmlnY2FwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWdjYXB0aW9uJyk7XG4gICAgaW1hZ2VGaWdjYXB0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbC1pbWFnZS1jYXB0aW9uJyk7XG4gICAgaW1hZ2VGaWdjYXB0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IGltYWdlLmFsdDtcblxuICAgIGNvbnN0IGltYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbC1pbWFnZScsICdub24taW50ZXJhY3RpdmUnKTtcbiAgICBzZXRBdHRyaWJ1dGVzKGltYWdlRWxlbWVudCwge1xuICAgICAgc3JjOiBpbWFnZS5zcmMsXG4gICAgICBhbHQ6IGltYWdlLmFsdCxcbiAgICB9KTtcblxuICAgIGNvbnN0IGltYWdlSW5kZXhTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBpbWFnZUluZGV4U3BhbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWwtaW1hZ2UtaW5kZXgnKTtcbiAgICBpbWFnZUluZGV4U3BhbkVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHsgaW5kZXggKyAxIH0vJHsgaW1hZ2VzQXJyYXkubGVuZ3RoIH1gO1xuXG4gICAgY29uc3QgaW1hZ2VGaWd1cmVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmlndXJlJyk7XG4gICAgaW1hZ2VGaWd1cmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsLWltYWdlLWNvbnRhaW5lcicpO1xuICAgIGltYWdlRmlndXJlRWxlbWVudC5hcHBlbmQoXG4gICAgICBpbWFnZUluZGV4U3BhbkVsZW1lbnQsXG4gICAgICBpbWFnZUVsZW1lbnQsXG4gICAgICBpbWFnZUZpZ2NhcHRpb25FbGVtZW50XG4gICAgKTtcblxuICAgIGNvbnN0IGNhcm91c2VsU2xpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJvdXNlbFNsaWRlLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsLXNsaWRlJyk7XG4gICAgaWYgKGluZGV4ID09PSAwKSBjYXJvdXNlbFNsaWRlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIGNhcm91c2VsU2xpZGUuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXggKyAxKTtcbiAgICBjYXJvdXNlbFNsaWRlLmFwcGVuZChpbWFnZUZpZ3VyZUVsZW1lbnQpO1xuICBcbiAgICBjYXJvdXNlbFNsaWRlQ29udGFpbmVyLmFwcGVuZChjYXJvdXNlbFNsaWRlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNhcm91c2VsU2xpZGVDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhcm91c2VsQ29udGFpbmVyKGltYWdlc0FycmF5KSB7XG4gIGNvbnN0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcmlnaHRBcnJvdy5jbGFzc0xpc3QuYWRkKCdhcnJvdycsICdyaWdodC1hcnJvdycsICdjYXJvdXNlbC1hcnJvdycpO1xuICBzZXRBdHRyaWJ1dGVzKHJpZ2h0QXJyb3csIHtcbiAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAnYXJpYS1sYWJlbCc6ICdOZXh0JyxcbiAgfSk7XG5cbiAgY29uc3QgY2Fyb3VzZWxTbGlkZXMgPSBjcmVhdGVDYXJvdXNlbFNsaWRlQ29udGFpbmVyKGltYWdlc0FycmF5KTtcblxuICBjb25zdCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbGVmdEFycm93LmNsYXNzTGlzdC5hZGQoJ2Fycm93JywgJ2xlZnQtYXJyb3cnLCAnY2Fyb3VzZWwtYXJyb3cnKTtcbiAgc2V0QXR0cmlidXRlcyhsZWZ0QXJyb3csIHtcbiAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAnYXJpYS1sYWJlbCc6ICdQcmV2aW91cycsXG4gIH0pO1xuXG4gIGNvbnN0IGNhcm91c2VsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBjYXJvdXNlbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbC1jb250YWluZXInKTtcbiAgY2Fyb3VzZWxDb250YWluZXIuYXBwZW5kKGxlZnRBcnJvdywgY2Fyb3VzZWxTbGlkZXMsIHJpZ2h0QXJyb3cpO1xuXG4gIHJldHVybiBjYXJvdXNlbENvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2Fyb3VzZWwoaW1hZ2VzQXJyYXkpIHtcbiAgY29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGNhcm91c2VsLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsJyk7XG5cbiAgY29uc3QgY2Fyb3VzZWxDb250YWluZXIgPSBjcmVhdGVDYXJvdXNlbENvbnRhaW5lcihpbWFnZXNBcnJheSk7XG4gIGNvbnN0IGNhcm91c2VsTmF2aWdhdGlvbkNvbnRhaW5lciA9XG4gICAgY3JlYXRlQ2Fyb3VzZWxOYXZpZ2F0aW9uQ29udGFpbmVyKGltYWdlc0FycmF5KTtcblxuICBjYXJvdXNlbC5hcHBlbmQoY2Fyb3VzZWxDb250YWluZXIsIGNhcm91c2VsTmF2aWdhdGlvbkNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGNhcm91c2VsO1xufVxuXG5leHBvcnQgeyBjcmVhdGVDYXJvdXNlbCB9OyIsImxldCBzbGlkZUluZGV4ID0gMTtcbmxldCBpc1NsaWRlVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuXG4vLyA/IE5leHQvcHJldmlvdXMgY29udHJvbHNcbmZ1bmN0aW9uIHBsdXNTbGlkZXMoaW5kZXgpIHtcbiAgc2hvd1NsaWRlcyhzbGlkZUluZGV4ICs9IGluZGV4KTtcbn1cblxuLy8gPyBUaHVtYm5haWwgaW1hZ2UgY29udHJvbHNcbmZ1bmN0aW9uIGN1cnJlbnRTbGlkZShpbmRleCkge1xuICBzaG93U2xpZGVzKHNsaWRlSW5kZXggPSBpbmRleCk7XG59XG5cbmZ1bmN0aW9uIHNldE5ld0FjdGl2ZVNsaWRlKCkge1xuICBjb25zdCBjYXJvdXNlbFNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbC1zbGlkZScpO1xuICBjb25zdCBjYXJvdXNlbE5hdmlnYXRpb25CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAnLmNhcm91c2VsLW5hdmlnYXRpb24tYnV0dG9uJ1xuICApO1xuXG4gIGNhcm91c2VsU2xpZGVzW3NsaWRlSW5kZXggLSAxXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgY2Fyb3VzZWxOYXZpZ2F0aW9uQnV0dG9uc1tzbGlkZUluZGV4IC0gMV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIGRlYWN0aXZhdGVDdXJyZW50TmF2aWdhdGlvbkJ1dHRvbigpIHtcbiAgY29uc3QgYWN0aXZlQ2Fyb3VzZWxOYXZpZ2F0aW9uQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsLW5hdmlnYXRpb24tYnV0dG9uLmFjdGl2ZScpO1xuICBhY3RpdmVDYXJvdXNlbE5hdmlnYXRpb25CdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIHNldERlYWN0aXZhdGVkU2xpZGVUb0Rpc3BsYXlOb25lKGRlYWN0aXZhdGluZ0Nhcm91c2VsU2xpZGUpIHtcbiAgZGVhY3RpdmF0aW5nQ2Fyb3VzZWxTbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCdkZWFjdGl2YXRpbmcnLCAnYWN0aXZlJyk7XG4gIGlzU2xpZGVUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG5cbiAgZGVhY3RpdmF0aW5nQ2Fyb3VzZWxTbGlkZS5yZW1vdmVFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBkZWFjdGl2YXRpbmdDYXJvdXNlbFNsaWRlLnNldERlYWN0aXZhdGVkU2xpZGVUb0Rpc3BsYXlOb25lUmVmKTtcbn1cblxuZnVuY3Rpb24gYWRkU2xpZGVBbmltYXRpb25FbmRMaXN0ZW5lcihkZWFjdGl2YXRpbmdDYXJvdXNlbFNsaWRlKSB7XG4gIGRlYWN0aXZhdGluZ0Nhcm91c2VsU2xpZGUuc2V0RGVhY3RpdmF0ZWRTbGlkZVRvRGlzcGxheU5vbmVSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgc2V0RGVhY3RpdmF0ZWRTbGlkZVRvRGlzcGxheU5vbmUoZGVhY3RpdmF0aW5nQ2Fyb3VzZWxTbGlkZSk7XG4gIH07XG5cbiAgZGVhY3RpdmF0aW5nQ2Fyb3VzZWxTbGlkZS5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBkZWFjdGl2YXRpbmdDYXJvdXNlbFNsaWRlLnNldERlYWN0aXZhdGVkU2xpZGVUb0Rpc3BsYXlOb25lUmVmKTtcbn1cblxuZnVuY3Rpb24gZGVhY3RpdmF0ZUN1cnJlbnRTbGlkZSgpIHsgIFxuICBjb25zdCBhY3RpdmVDYXJvdXNlbFNsaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsLXNsaWRlLmFjdGl2ZScpO1xuICBhY3RpdmVDYXJvdXNlbFNsaWRlLmNsYXNzTGlzdC5hZGQoJ2RlYWN0aXZhdGluZycpO1xuICBpc1NsaWRlVHJhbnNpdGlvbmluZyA9IHRydWU7XG5cbiAgYWRkU2xpZGVBbmltYXRpb25FbmRMaXN0ZW5lcihhY3RpdmVDYXJvdXNlbFNsaWRlKTtcbn1cblxuZnVuY3Rpb24gcmVzZXRTbGlkZUluZGV4KGNhcm91c2VsU2xpZGVzTGVuZ3RoLCBpbmRleCkge1xuICAvLyA/IHJlc2V0IHRvIGZpcnN0IHNsaWRlIGlmIGNsaWNrZWQgb24gbmV4dCBmcm9tIGxhc3Qgc2xpZGVcbiAgaWYgKGluZGV4ID4gY2Fyb3VzZWxTbGlkZXNMZW5ndGgpIHtcbiAgICBzbGlkZUluZGV4ID0gMTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyA/IHJlc2V0IHRvIGxhc3Qgc2xpZGUgaWYgY2xpY2tlZCBvbiBwcmV2aW91cyBmcm9tIGZpcnN0IHNsaWRlXG4gIGlmIChpbmRleCA8IDEpIHtcbiAgICBzbGlkZUluZGV4ID0gY2Fyb3VzZWxTbGlkZXNMZW5ndGg7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dTbGlkZXMoaW5kZXgpIHtcbiAgY29uc3QgY2Fyb3VzZWxTbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWwtc2xpZGUnKTtcbiAgY29uc3QgY2Fyb3VzZWxOYXZpZ2F0aW9uQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgJy5jYXJvdXNlbC1uYXZpZ2F0aW9uLWJ1dHRvbidcbiAgKTtcblxuICByZXNldFNsaWRlSW5kZXgoY2Fyb3VzZWxTbGlkZXMubGVuZ3RoLCBpbmRleCk7XG4gIGRlYWN0aXZhdGVDdXJyZW50U2xpZGUoKTtcbiAgZGVhY3RpdmF0ZUN1cnJlbnROYXZpZ2F0aW9uQnV0dG9uKCk7XG4gIHNldE5ld0FjdGl2ZVNsaWRlKGNhcm91c2VsU2xpZGVzLCBjYXJvdXNlbE5hdmlnYXRpb25CdXR0b25zKTtcbn1cblxuZXhwb3J0IHsgc2hvd1NsaWRlcywgcGx1c1NsaWRlcywgY3VycmVudFNsaWRlLCBzbGlkZUluZGV4LCBpc1NsaWRlVHJhbnNpdGlvbmluZ307IiwiaW1wb3J0IHsgcGx1c1NsaWRlcyB9IGZyb20gJy4vY2Fyb3VzZWwtbG9naWMuanMnO1xuaW1wb3J0IHsgY3VycmVudFNsaWRlLCBpc1NsaWRlVHJhbnNpdGlvbmluZyB9IGZyb20gJy4vY2Fyb3VzZWwtbG9naWMuanMnO1xuaW1wb3J0IHsgc2xpZGVJbmRleCB9IGZyb20gJy4vY2Fyb3VzZWwtbG9naWMuanMnO1xuXG4vLyA+IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIHVwZGF0ZVJvb3RBbmltYXRpb25Qcm9wZXJ0eShyb290RWxlbWVudCwgZGlyZWN0aW9uKSB7XG4gIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgIHJvb3RFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWZhZGUtaW4nLCAndmFyKC0tbGVmdC1mYWRlLWluLWFuaW1hdGlvbiknKTtcbiAgICByb290RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1mYWRlLW91dCcsICd2YXIoLS1sZWZ0LWZhZGUtb3V0LWFuaW1hdGlvbiknKTtcbiAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcbiAgICByb290RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1mYWRlLWluJywgJ3ZhcigtLXJpZ2h0LWZhZGUtaW4tYW5pbWF0aW9uKScpO1xuICAgIHJvb3RFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWZhZGUtb3V0JywgJ3ZhcigtLXJpZ2h0LWZhZGUtb3V0LWFuaW1hdGlvbiknKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVDYXJvdXNlbE5hdmlnYXRpb25CdXR0b25DbGljayhyb290RWxlbWVudCkge1xuICBjb25zdCBjYXJvdXNlbE5hdmlnYXRpb25CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsLW5hdmlnYXRpb24tYnV0dG9uJyk7XG5cbiAgY2Fyb3VzZWxOYXZpZ2F0aW9uQnV0dG9ucy5mb3JFYWNoKChidXR0b24sIGluZGV4KSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gICAgICBpZiAoaXNTbGlkZVRyYW5zaXRpb25pbmcpIHJldHVybjtcblxuICAgICAgY29uc3QgY3VycmVudFNsaWRlSW5kZXggPSBzbGlkZUluZGV4O1xuXG4gICAgICBjdXJyZW50U2xpZGUoaW5kZXggKyAxKTtcblxuICAgICAgaWYgKGN1cnJlbnRTbGlkZUluZGV4IDwgc2xpZGVJbmRleCkge1xuICAgICAgICB1cGRhdGVSb290QW5pbWF0aW9uUHJvcGVydHkocm9vdEVsZW1lbnQsICdyaWdodCcpO1xuICAgICAgfSBlbHNlIGlmIChjdXJyZW50U2xpZGVJbmRleCA+IHNsaWRlSW5kZXgpIHtcbiAgICAgICAgdXBkYXRlUm9vdEFuaW1hdGlvblByb3BlcnR5KHJvb3RFbGVtZW50LCAnbGVmdCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2Fyb3VzZWxBcnJvd0NsaWNrKHJvb3RFbGVtZW50KSB7XG4gIGNvbnN0IGxlZnRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbC1hcnJvdy5sZWZ0LWFycm93Jyk7XG4gIGNvbnN0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwtYXJyb3cucmlnaHQtYXJyb3cnKTtcblxuICBpZiAobGVmdEFycm93KSB7XG4gICAgbGVmdEFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGlzU2xpZGVUcmFuc2l0aW9uaW5nKSByZXR1cm47XG4gICAgICBjb25zdCBjdXJyZW50U2xpZGVJbmRleCA9IHNsaWRlSW5kZXg7XG5cbiAgICAgIHBsdXNTbGlkZXMoLTEpO1xuICAgICAgdXBkYXRlUm9vdEFuaW1hdGlvblByb3BlcnR5KHJvb3RFbGVtZW50LCAnbGVmdCcpO1xuXG4gICAgICBpZiAoY3VycmVudFNsaWRlSW5kZXggPD0gc2xpZGVJbmRleCkge1xuICAgICAgICB1cGRhdGVSb290QW5pbWF0aW9uUHJvcGVydHkocm9vdEVsZW1lbnQsICdyaWdodCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIHJpZ2h0IGFycm93IGNsaWNrXG4gIGlmIChyaWdodEFycm93KSB7XG4gICAgcmlnaHRBcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChpc1NsaWRlVHJhbnNpdGlvbmluZykgcmV0dXJuO1xuICAgICAgY29uc3QgY3VycmVudFNsaWRlSW5kZXggPSBzbGlkZUluZGV4O1xuXG4gICAgICBwbHVzU2xpZGVzKDEpO1xuICAgICAgdXBkYXRlUm9vdEFuaW1hdGlvblByb3BlcnR5KHJvb3RFbGVtZW50LCAncmlnaHQnKTtcblxuICAgICAgaWYgKGN1cnJlbnRTbGlkZUluZGV4ID49IHNsaWRlSW5kZXgpIHtcbiAgICAgICAgdXBkYXRlUm9vdEFuaW1hdGlvblByb3BlcnR5KHJvb3RFbGVtZW50LCAnbGVmdCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNhcm91c2VsKCkge1xuICBjb25zdCByb290RWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICBoYW5kbGVDYXJvdXNlbEFycm93Q2xpY2socm9vdEVsZW1lbnQpO1xuICBoYW5kbGVDYXJvdXNlbE5hdmlnYXRpb25CdXR0b25DbGljayhyb290RWxlbWVudCk7XG59XG5cbmV4cG9ydCB7IGhhbmRsZUNhcm91c2VsIH07XG4iLCJpbXBvcnQgeyBpbWFnZXMgfSBmcm9tICcuL2Nhcm91c2VsLWltYWdlcyc7XG5pbXBvcnQgeyBjcmVhdGVDYXJvdXNlbCB9IGZyb20gJy4vY2Fyb3VzZWwtbWFya3VwJztcbmltcG9ydCB7IGhhbmRsZUNhcm91c2VsIH0gZnJvbSAnLi9jYXJvdXNlbC1oYW5kbGluZyc7XG5pbXBvcnQgY3ljbG9uZVN0dWRpb3NMb2dvU1ZHIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvbG9nb3MvY3ljbG9uZVN0dWRpb3Muc3ZnJztcblxuLy8gPiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiByZW5kZXJET00oKSB7XG4gIGNvbnN0IGN5Y2xvbmVTdHVkaW9zTG9nb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY3ljbG9uZVN0dWRpb3NMb2dvRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjeWNsb25lLXN0dWRpb3MtbG9nbycsICdub24taW50ZXJhY3RpdmUnKTtcbiAgY3ljbG9uZVN0dWRpb3NMb2dvRWxlbWVudC5zcmMgPSBjeWNsb25lU3R1ZGlvc0xvZ29TVkc7XG4gIFxuXG4gIGNvbnN0IGNhcm91c2VsID0gY3JlYXRlQ2Fyb3VzZWwoaW1hZ2VzKTtcblxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29udGVudC5hcHBlbmQoY3ljbG9uZVN0dWRpb3NMb2dvRWxlbWVudCwgY2Fyb3VzZWwpO1xufVxuXG5yZW5kZXJET00oKTtcbmhhbmRsZUNhcm91c2VsKCk7XG4iXSwibmFtZXMiOlsiX193ZWJwYWNrX3JlcXVpcmVfXyIsImciLCJnbG9iYWxUaGlzIiwidGhpcyIsIkZ1bmN0aW9uIiwiZSIsIndpbmRvdyIsInNjcmlwdFVybCIsImltcG9ydFNjcmlwdHMiLCJsb2NhdGlvbiIsImRvY3VtZW50IiwiY3VycmVudFNjcmlwdCIsInNyYyIsInNjcmlwdHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImxlbmd0aCIsImkiLCJFcnJvciIsInJlcGxhY2UiLCJwIiwiaW1hZ2VzIiwiYWx0Iiwic2V0QXR0cmlidXRlcyIsImVsZW1lbnQiLCJhdHRyaWJ1dGVzIiwia2V5Iiwic2V0QXR0cmlidXRlIiwiY3JlYXRlQ2Fyb3VzZWwiLCJpbWFnZXNBcnJheSIsImNhcm91c2VsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImNhcm91c2VsQ29udGFpbmVyIiwicmlnaHRBcnJvdyIsInR5cGUiLCJjYXJvdXNlbFNsaWRlcyIsImNhcm91c2VsU2xpZGVDb250YWluZXIiLCJmb3JFYWNoIiwiaW1hZ2UiLCJpbmRleCIsImltYWdlRmlnY2FwdGlvbkVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImltYWdlRWxlbWVudCIsImltYWdlSW5kZXhTcGFuRWxlbWVudCIsImNvbmNhdCIsImltYWdlRmlndXJlRWxlbWVudCIsImFwcGVuZCIsImNhcm91c2VsU2xpZGUiLCJjcmVhdGVDYXJvdXNlbFNsaWRlQ29udGFpbmVyIiwibGVmdEFycm93IiwiY3JlYXRlQ2Fyb3VzZWxDb250YWluZXIiLCJjYXJvdXNlbE5hdmlnYXRpb25Db250YWluZXIiLCJjYXJvdXNlbE5hdmlnYXRpb25CdXR0b25Db250YWluZXIiLCJjYXJvdXNlbE5hdmlnYXRpb25CdXR0b24iLCJhcHBlbmRDaGlsZCIsImNyZWF0ZUNhcm91c2VsTmF2aWdhdGlvbkNvbnRhaW5lciIsInNsaWRlSW5kZXgiLCJpc1NsaWRlVHJhbnNpdGlvbmluZyIsInBsdXNTbGlkZXMiLCJzaG93U2xpZGVzIiwiYWN0aXZlQ2Fyb3VzZWxTbGlkZSIsImRlYWN0aXZhdGluZ0Nhcm91c2VsU2xpZGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2Fyb3VzZWxTbGlkZXNMZW5ndGgiLCJyZXNldFNsaWRlSW5kZXgiLCJxdWVyeVNlbGVjdG9yIiwic2V0RGVhY3RpdmF0ZWRTbGlkZVRvRGlzcGxheU5vbmVSZWYiLCJyZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0RGVhY3RpdmF0ZWRTbGlkZVRvRGlzcGxheU5vbmUiLCJhZGRFdmVudExpc3RlbmVyIiwiY2Fyb3VzZWxOYXZpZ2F0aW9uQnV0dG9ucyIsInNldE5ld0FjdGl2ZVNsaWRlIiwidXBkYXRlUm9vdEFuaW1hdGlvblByb3BlcnR5Iiwicm9vdEVsZW1lbnQiLCJkaXJlY3Rpb24iLCJzdHlsZSIsInNldFByb3BlcnR5IiwiY3ljbG9uZVN0dWRpb3NMb2dvRWxlbWVudCIsImN5Y2xvbmVTdHVkaW9zTG9nb1NWRyIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyRE9NIiwiY3VycmVudFNsaWRlSW5kZXgiLCJoYW5kbGVDYXJvdXNlbEFycm93Q2xpY2siLCJkb2N1bWVudEVsZW1lbnQiLCJidXR0b24iLCJjb250YWlucyIsImN1cnJlbnRTbGlkZSIsImhhbmRsZUNhcm91c2VsTmF2aWdhdGlvbkJ1dHRvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==