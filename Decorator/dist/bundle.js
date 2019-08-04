!function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var d=n[o]={exports:{}};t[o][0].call(d.exports,function(e){return s(t[o][1][e]||e)},d,d.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}return e}()({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e){this.user=e,console.log(this.user)}return e.prototype.init=function(){console.log(this.greeting())},e.prototype.renderUser=function(){var e=this.user.renderUser();e.innerHTML=" ";var t=document.createElement("span");return t.classList.add("happy"),t.innerText=this.greeting()+" :) ",e.appendChild(t),e},e.prototype.greeting=function(){var e=this.user.greeting();return e+=" And I am a Happy User"},e}();n.HappyUser=r},{}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e){this.user=e,console.log(this.user)}return e.prototype.init=function(){console.log(this.greeting())},e.prototype.renderUser=function(){var e=this.user.renderUser();e.innerHTML=" ";var t=document.createElement("span");return t.classList.add("sad"),t.innerText=this.greeting()+" :( ",e.appendChild(t),e},e.prototype.greeting=function(){var e=this.user.greeting();return e+=" And I am a Sad User"},e}();n.SadUser=r},{}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e){this.name=e}return e.prototype.init=function(){console.log(this.greeting())},e.prototype.renderUser=function(){this.container=document.createElement("div"),this.container.innerHTML=" ";var e=document.createElement("span");return e.innerText="Hi!! I am a User and My name is "+this.name,e.classList.add("user"),this.container.appendChild(e),this.container},e.prototype.greeting=function(){return"Hi!! I am a User and My name is "+this.name},e}();n.User=r},{}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,t){this.user=e,this.reason=t}return e.prototype.init=function(){console.log(this.greeting())},e.prototype.renderUser=function(){var e=this.user.renderUser(),t=document.createElement("span");return t.classList.add("reason"),t.innerText=this.reason,e.appendChild(t),e},e.prototype.greeting=function(){var e=this.user.greeting();return e=e+"because"+this.reason},e}();n.UserReason=r},{}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("./classes/user"),s=e("./classes/happyUser"),i=e("./classes/sadUser"),o=e("./classes/userReason"),u=function(){function e(){}return e.prototype.init=function(){document.addEventListener("DOMContentLoaded",this.render.bind(this))},e.prototype.render=function(e){document.getElementById("container").innerHTML='\n        <label>Enter your name to create an user:</label>\n        <input type="text" id="username" />\n        <label>Enter your reason here:</label>\n        <input type="text" id="userReason"/>\n        <button type="button" id="createBtn">Create User</button>\n        <button id="happyUserBtn" type="button">Create Happy User</button>\n        <button id="sadUserBtn" type="button">Create Sad User</button>\n        <button id="userReasonBtn" type="button">Provide reason for the user</button>\n        <button id="showUserBtn" type="button">Show User</button>\n        <div id="view"></div>\n        ',this.assignEvent()},e.prototype.assignEvent=function(){document.getElementById("createBtn").addEventListener("click",this.createUser.bind(this)),document.getElementById("happyUserBtn").addEventListener("click",this.createHappyUser.bind(this)),document.getElementById("sadUserBtn").addEventListener("click",this.createSadUser.bind(this)),document.getElementById("showUserBtn").addEventListener("click",this.showUser.bind(this)),document.getElementById("userReasonBtn").addEventListener("click",this.createUserReason.bind(this))},e.prototype.createUser=function(){var e=document.getElementById("username");this.user=new r.User(e.value),this.user.init()},e.prototype.createHappyUser=function(){this.user=new s.HappyUser(this.user),this.user.init()},e.prototype.createSadUser=function(){this.user=new i.SadUser(this.user),this.user.init()},e.prototype.createUserReason=function(){var e=document.getElementById("userReason");this.user=new o.UserReason(this.user,e.value)},e.prototype.showUser=function(){console.log("show user");var e=document.getElementById("view");e.innerHTML=" ";var t=this.user.renderUser();e.appendChild(t)},e}();n.Main=u,(new u).init()},{"./classes/happyUser":1,"./classes/sadUser":2,"./classes/user":3,"./classes/userReason":4}]},{},[5]);
//# sourceMappingURL=bundle.js.map
