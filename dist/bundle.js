!function(n){var e={};function t(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return n[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,i){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(i,r,function(e){return n[e]}.bind(null,r));return i},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=2)}([function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",i=n[3];if(!i)return t;if(e&&"function"==typeof btoa){var r=(a=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=i.sources.map(function(n){return"/*# sourceURL="+i.sourceRoot+n+" */"});return[t].concat(o).concat([r]).join("\n")}var a;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(r=0;r<n.length;r++){var a=n[r];null!=a[0]&&i[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e,t){var i,r,o={},a=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=i.apply(this,arguments)),r}),s=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var i=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(n){i=null}e[n]=i}return e[n]}}(),c=null,d=0,l=[],p=t(5);function m(n,e){for(var t=0;t<n.length;t++){var i=n[t],r=o[i.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](i.parts[a]);for(;a<i.parts.length;a++)r.parts.push(x(i.parts[a],e))}else{var s=[];for(a=0;a<i.parts.length;a++)s.push(x(i.parts[a],e));o[i.id]={id:i.id,refs:1,parts:s}}}}function u(n,e){for(var t=[],i={},r=0;r<n.length;r++){var o=n[r],a=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};i[a]?i[a].parts.push(s):t.push(i[a]={id:a,parts:[s]})}return t}function f(n,e){var t=s(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=l[l.length-1];if("top"===n.insertAt)i?i.nextSibling?t.insertBefore(e,i.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),l.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(n.insertAt.before,t);t.insertBefore(e,r)}}function h(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=l.indexOf(n);e>=0&&l.splice(e,1)}function g(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var i=function(){0;return t.nc}();i&&(n.attrs.nonce=i)}return b(e,n.attrs),f(n,e),e}function b(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function x(n,e){var t,i,r,o;if(e.transform&&n.css){if(!(o="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=o}if(e.singleton){var a=d++;t=c||(c=g(e)),i=_.bind(null,t,a,!1),r=_.bind(null,t,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",b(e,n.attrs),f(n,e),e}(e),i=function(n,e,t){var i=t.css,r=t.sourceMap,o=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||o)&&(i=p(i));r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([i],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,e),r=function(){h(t),t.href&&URL.revokeObjectURL(t.href)}):(t=g(e),i=function(n,e){var t=e.css,i=e.media;i&&n.setAttribute("media",i);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),r=function(){h(t)});return i(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;i(n=e)}else r()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=u(n,e);return m(t,e),function(n){for(var i=[],r=0;r<t.length;r++){var a=t[r];(s=o[a.id]).refs--,i.push(s)}n&&m(u(n,e),e);for(r=0;r<i.length;r++){var s;if(0===(s=i[r]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete o[s.id]}}}};var v,w=(v=[],function(n,e){return v[n]=e,v.filter(Boolean).join("\n")});function _(n,e,t,i){var r=t?"":i.css;if(n.styleSheet)n.styleSheet.cssText=w(e,r);else{var o=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(o,a[e]):n.appendChild(o)}}},function(n,e,t){"use strict";t.r(e);t(3),t(6),t(8)},function(n,e,t){var i=t(4);"string"==typeof i&&(i=[[n.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(1)(i,r);i.locals&&(n.exports=i.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""])},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,i=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var r,o=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?n:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?t+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(n,e,t){var i=t(7);"string"==typeof i&&(i=[[n.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(1)(i,r);i.locals&&(n.exports=i.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,"/* General styles */\n@font-face {\n    font-family: 'Halyard Display';\n    src: url('/fonts/Halyard\\ Display\\ Regular.ttf');\n}\n\n@font-face {\n    font-family: 'Halyard Text';\n    src: url('/fonts/Halyard\\ Text\\ Regular.ttf');\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: 'Halyard Text';\n    font-size: 1.1rem;\n    color: #33302D;\n    margin: 0;\n    display: grid;\n    grid-template-rows: 3.8rem auto fit-content(8rem);\n    grid-template-areas: 'header'\n                         'main'\n                         'footer';\n}\n\n@media (max-width: 840px) {\n    body {\n        grid-template-rows: 5rem auto fit-content(8rem);\n    }\n}\n\nmain {\n    grid-area: main;\n}\n\nh1 {\n    font-family: 'Halyard Display';\n}\n\n/* Header style */\n\n.main-header {\n    grid-area: header;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    text-transform: uppercase;\n    font-weight: bold;\n    letter-spacing: 0.1rem;\n    padding: 0.8rem 2rem;\n    color: #33302D; /*#e35d45*/\n    border-bottom: 2px solid #33302D;\n    position: fixed;\n    z-index: 10;\n    background-color: #ffffff;\n}\n\n@media (max-width: 840px) {\n    .main-header {\n        position: static;\n        padding: 1rem 1rem;\n    }\n\n    .main-nav {\n        display: none;\n    }\n\n    .main-header__logo {\n        order: 2;\n    }\n\n    .mobile-nav {\n        order: 1;\n    }\n\n    .account {\n        order: 3;\n    }\n\n}\n\n.main-header__logo--img {\n    height: 3rem;\n}\n\n.main-nav__items {\n    display: flex;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\n.main-nav__item {\n    padding: 0 1rem;\n    vertical-align: middle;\n}\n\n/* Hamburger menu styles */\n\n.hamburger-menu {\n    cursor: pointer;\n    display: none;\n}\n\n@media (max-width: 840px) {\n    .hamburger-menu {\n        display: block;\n    }\n}\n\n.hamburger-menu__line {\n    width: 30px;\n    height: 3px;\n    background-color: #33302D;\n    margin: 0.25rem;\n    transition: 0.4s ease-in-out;\n}\n\n.change {\n    position: relative;\n    left: 10px;\n}\n\n.change .hamburger-menu__line:nth-of-type(1) {\n    /* -webkit-transform: rotate(-45deg) translate(-9px, 6px); */\n    transform: rotate(135deg) translate(10px);\n}\n  \n.change .hamburger-menu__line:nth-of-type(2) { \n    opacity: 0;\n}\n\n.change .hamburger-menu__line:nth-of-type(3) {\n    /* -webkit-transform: rotate(45deg) translate(-8px, -8px); */\n    transform: rotate(225deg) translate(10px);\n}\n\n/* Mobile navigation styles */\n\n.mobile-nav {\n    position: absolute;\n    z-index: -99;\n    top: 11.9%;\n    left: 0;\n    width: 100%;\n    padding: 1rem;\n    background: white;\n    opacity: 0;\n    transform: translateY(-130%);\n    min-height: 250px;\n    transition: 0.6s cubic-bezier(0.56, 0.1, 0.34, 0.91);\n}\n\n.mobile-nav--active {\n    transform: translateY(0);\n    min-height: 0;\n    border-bottom: 2px solid #33302D;\n    opacity: 1;\n}\n\n.mobile-nav__items {\n    display: flex;\n    flex-direction: column;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\n.mobile-nav__item {\n    padding: 0.4rem 0;\n}\n\n/* Links ih header */\n\n.main-header__link {\n    text-decoration: none;\n    color: #33302D;\n    transition: color 0.3s;\n}\n\n.main-header__link:hover,\n.main-header__link:active {\n    color: #e35d45;\n}\n\n/* Buttons */\n\n.button {\n    color: #e35d45;\n    text-decoration: none;\n    text-transform: uppercase;\n    letter-spacing: 0.05rem;\n    background-color: white;\n    border: 2px solid #e35d45;\n    padding: 0.8rem 2.5rem;\n    transition: 0.3s;\n}\n\n.button:hover,\n.button:active {\n    background-color: #e35d45;\n    color: white;\n}\n\n/* Footer styles */\n\nfooter {\n    grid-area: footer;\n}",""])},function(n,e,t){var i=t(9);"string"==typeof i&&(i=[[n.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(1)(i,r);i.locals&&(n.exports=i.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,"#sauce-cover {\n    border-bottom: 2px solid #33302D;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 3.5rem 0;\n    background-image: url('/img/logo.svg');\n    background-repeat: no-repeat;\n    background-position: 50% 100%;\n    background-attachment: fixed;\n    position: relative;\n}\n\n.redclay-logo {\n    width: 100%;\n    height: 20vh;\n    background-image: url('/img/logo.svg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    z-index: 1;\n    position: relative;\n    bottom: 5%;\n}\n\n.cover-content {\n    background-image: url('/img/original.jpg');\n    background-size: cover;\n    width: 950px;\n    height: 600px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n@media (max-width: 960px) {\n    #sauce-cover {\n        padding: 0;\n    }\n\n    .cover-content {\n        width: 100%;\n        height: 90vh;\n    }\n}\n\n.cover-content__title {\n    font-size: 4rem;\n    letter-spacing: 0.1rem;\n    text-align: center;\n    line-height: 1.2;\n    width: 35rem;\n    color: #33302D;\n}\n\n@media (max-width: 960px) {\n    .cover-content__title {\n        width: 100%;\n        font-size: 3rem;\n    }\n}\n\n.cover-content__button {\n    border: none;\n}\n\n/* Sauces showcase */\n\n.sauce-showcase__title-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n    margin: 0 5%;\n    position: relative;\n    z-index: 5;\n}\n\n@media (max-width: 840px) {\n    .sauce-showcase__title-container {\n        margin: 0 10%;\n    }\n}\n\n.sauce-showcase__title {\n    font-size: 6rem;\n    letter-spacing: 0.1rem;\n    width: 44rem;\n    margin: 0;\n    margin-top: 5rem;\n}\n\n@media (max-width: 960px) {\n    .sauce-showcase__title {\n        font-size: 3rem;\n        width: 100%;\n        margin-bottom: 2.5rem;\n    }\n}\n\n.sauce-showcase__container {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    width: 1000px;\n    grid-gap: 3.5rem;\n    padding: 0 5%;\n    margin: auto;\n    /* height: 100vh; */\n    justify-content: center;\n    align-content: center;\n    min-height: 0;\n    min-width: 0;\n    position: relative;\n    bottom: 60px;\n}\n\n@media (max-width: 1000px) {\n    .sauce-showcase__container {\n        width: 100%;\n    }\n}\n\n@media (max-width: 960px) {\n    .sauce-showcase__container {\n        margin: 1rem auto;\n        bottom: 0;\n    }\n}\n\n@media (max-width: 640px) {\n    .sauce-showcase__container {\n        grid-template-columns: 60vmin;\n        grid-gap: 2rem;\n    }\n}\n\n.sauce-showcase__item {\n    overflow: hidden;\n    min-width: 0;\n    position: relative;\n    cursor: pointer;\n    text-decoration: none;\n}\n\n.sauce-showcase__item--img {\n    display: block;\n    position: relative;\n    max-width: 100%;\n    height: auto;\n    object-fit: cover;\n}\n\n.sauce-showcase__item-name-container {\n    position: absolute;\n    bottom: 5%;\n    z-index: 6;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    margin: 0 auto;\n    opacity: 1;\n}\n\n@media (max-width: 960px) {\n    .sauce-showcase__item-name-container {\n        position: static;\n    }\n}\n\n.sauce-showcase__item-name {\n    font-weight: 100;\n    margin: 0;\n}\n\n.sauce-showcase__item-price {\n    color: #e35d45;\n}\n\n.sauce-showcase__item-overlay--img {\n    height: auto;\n    width: 100%;\n    object-fit: cover;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    z-index: 1;\n    opacity: 0;\n    transition: opacity 0.4s;\n}\n\n.sauce-showcase__item:hover .sauce-showcase__item-overlay--img {\n    opacity: 1;\n}\n\n.sauce-showcase__item:hover .sauce-showcase__item-name-container {\n    opacity: 0;\n}\n\n/* Newsletter form */\n\n#newsletter {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    padding: 2rem;\n    background-color: #e35d45;\n    color: white;\n}\n\n.newsletter-title,\n.newsletter-subtitle {\n    margin: 0;\n    text-transform: uppercase;\n    font-weight: 100;\n    text-align:center;\n}\n\n.newsletter-title {\n    letter-spacing: 0.02rem;\n}\n\n.newsletter-subtitle {\n    font-size: 1.15rem;\n}\n\n.newsletter-form {\n    margin-top: 2.5rem;\n    background-color: white;\n    display: flex;\n    justify-content: space-between;\n    width: 300px;\n}\n\n.newsletter-form__email,\n.newsletter-form__submit {\n    all: unset;\n}\n\n.newsletter-form__email {\n    color: #9c968f;\n    padding: 0 0.7rem;\n}\n\n.newsletter-form__submit {\n    background-image: url('/img/submit-arrow.png');\n    background-repeat: no-repeat;\n    background-size: 80%;\n    background-position: left;\n    width: 40px;\n    height: 56px;\n    cursor: pointer;\n}\n\n/* Our peppers */\n\n#our-peppers {\n    padding: 3rem 0;\n    display: flex;\n    position: relative;\n    overflow: hidden;\n}\n\n@media (max-width: 1020px) {\n    #our-peppers {\n        flex-direction: column;\n    }\n}\n\n.our-peppers__image {\n    background-image: url('/img/our-peppers-fresno.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center center;\n    width: 55%;\n    height: 100vh;\n    transition: 0.3s;\n}\n\n@media (max-width: 1020px) {\n    .our-peppers__image {\n        width: 80%;\n        max-height: 100vw;\n        margin: auto;\n    }\n}\n\n.our-peppers-list {\n    align-self: center;\n    margin-left: 8rem;\n}\n\n@media (max-width: 1020px) {\n    .our-peppers-list {\n        margin-left: 10%;\n        margin-top: 3rem;\n        align-self: normal;\n    }\n}\n\n.our-peppers-list__title {\n    font-size: 1.5rem;\n    text-transform: uppercase;\n    position: relative;\n    display: inline-block;\n\n}\n\n.our-peppers-list__title::after {\n    content: \"\";\n    background-color: #e35d45;\n    height: 20px;\n    width: 120%;\n    z-index: -1;\n    display: block;\n    position: absolute;\n    top: 14px;\n    left: -13px;\n}\n\n.our-peppers-list__items {\n    list-style: none;\n    font-size: 4rem;\n    padding: 0;\n    cursor: pointer;\n}\n\n@media (max-width: 1020px) {\n    .our-peppers-list__items {\n        font-size: 3rem;\n    }\n}\n\n.our-peppers-list__item {\n    margin: 1rem 0;\n    width: 50%;\n    color: #33302D;\n    transition: color 0.3s;\n}\n\n.our-peppers-list__item:hover,\n.our-peppers-list__item:active {\n    color: #e35d45;\n}\n\n.our-peppers__pepper-icon {\n    position: absolute;\n    width: 150px;\n    height: 150px;\n    right: -10px;\n}\n\n@media (max-width: 1020px) {\n    .our-peppers__pepper-icon {\n        width: 115px;\n        height: 115px;\n        right: 10px;\n        bottom: 30%;\n    }\n}\n\n@media (max-width: 640px) {\n    .our-peppers__pepper-icon {\n        bottom: 25rem;\n    }\n}\n\n/* Inspiration section */\n\n#inspiration {\n    padding: 3rem 0;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n}\n\n@media (max-width: 1020px) {\n    #inspiration {\n        grid-template-columns: 1fr;\n        grid-row-gap: 3rem;\n    }\n}\n\n.inspiration-text {\n    width: 55vw;\n    padding: 0 2rem;\n    font-size: 1.5rem;\n}\n\n@media (max-width: 1020px) {\n    .inspiration-text {\n        width: 100%;\n        font-size: 1.2rem;\n    }\n}\n\n.inspiration-text__title,\n.inspiration-text__subtitle {\n    text-transform: uppercase;\n    color: #e35d45;\n    letter-spacing: 0.12rem;\n    margin: 0;\n}\n\n.inspiration-text__title {\n    margin-bottom: 0.5rem;\n}\n\n.inspiration-text__paragraph {\n    font-size: 1.2em;\n    line-height: 2rem;\n}\n\n.inspiration-text__button {\n    font-size: 1.1rem;\n    display: inline-block;\n}\n\n.inspiration-image {\n    height: 85vh;\n    justify-self: center;\n}\n\n@media (max-width: 1020px) {\n    .inspiration-image {\n        grid-row: 1;\n    }\n}\n\n@media (max-width: 640px) {\n    .inspiration-image {\n        width: 80%;\n        height: auto;\n    }\n}",""])}]);