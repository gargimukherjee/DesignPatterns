!function(){function t(e,n,r){function o(u,a){if(!n[u]){if(!e[u]){var c="function"==typeof require&&require;if(!a&&c)return c(u,!0);if(i)return i(u,!0);var p=new Error("Cannot find module '"+u+"'");throw p.code="MODULE_NOT_FOUND",p}var s=n[u]={exports:{}};e[u][0].call(s.exports,function(t){return o(e[u][1][t]||t)},s,s.exports,t,e,n,r)}return n[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}return t}()({1:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function t(){}return t.prototype.doOperation=function(t,e){return t+e},t}();n.AddOperation=r},{}],2:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function t(t){this.strategy=t}return t.prototype.executeStrategy=function(t,e){return this.strategy.doOperation(t,e)},t}();n.Context=r},{}],3:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function t(){}return t.prototype.doOperation=function(t,e){return t*e},t}();n.MultiplyOperation=r},{}],4:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function t(){}return t.prototype.doOperation=function(t,e){return t-e},t}();n.SubtractOperation=r},{}],5:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("./classes/context"),o=t("./classes/addOperation"),i=t("./classes/subtractOperation"),u=t("./classes/multiplyOperation"),a=function(){function t(){}return t.prototype.init=function(){var t=new r.Context(new o.AddOperation),e=document.createElement("span");e.innerText="Strategy: Add Operation  10+5= "+t.executeStrategy(10,5)+" ",document.body.appendChild(e);var n=new r.Context(new i.SubtractOperation),a=document.createElement("span");a.innerText="Strategy: Subtract Operation  10-5= "+n.executeStrategy(10,5),document.body.appendChild(a);var c=new r.Context(new u.MultiplyOperation),p=document.createElement("span");p.innerText="Strategy: Multiply Operation  10*5= "+c.executeStrategy(10,5),document.body.appendChild(p)},t}();n.Main=a,(new a).init()},{"./classes/addOperation":1,"./classes/context":2,"./classes/multiplyOperation":3,"./classes/subtractOperation":4}]},{},[5]);
//# sourceMappingURL=bundle.js.map
