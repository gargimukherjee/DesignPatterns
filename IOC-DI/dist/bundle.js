!function(){function e(t,r,n){function i(s,u){if(!r[s]){if(!t[s]){var a="function"==typeof require&&require;if(!u&&a)return a(s,!0);if(o)return o(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var d=r[s]={exports:{}};t[s][0].call(d.exports,function(e){return i(t[s][1][e]||e)},d,d.exports,e,t,r,n)}return r[s].exports}for(var o="function"==typeof require&&require,s=0;s<n.length;s++)i(n[s]);return i}return e}()({1:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(){this.index=0,this.heroList=[{name:"Clark Kent",superheroname:"SuperMan",strength:"I can fly and fight",weakness:"Kryptonite",girlfriend:"Lois Lane"},{name:"Peter Parker",superheroname:"SpiderMan",strength:"I can create webs and swing from buildings",weakness:"Girls",girlfriend:"Gwen Stacy"}]}return e.prototype.hasHeroItem=function(){return this.heroList.length>0&&this.index<this.heroList.length},e.prototype.getNextHeroItem=function(){var e=this.heroList[this.index];return this.index++,e},e.prototype.reset=function(){this.index=0},e}();r.SuperHeroModel=n},{}],2:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e("./superHeroForm.view"),i=function(){function e(){this.view=new n.SuperHeroFormView}return e.prototype.init=function(e){this.model=e,this.view.render(this.model)},e.prototype.destroy=function(){},e}();r.SuperHeroFormPresenter=i},{"./superHeroForm.view":3}],3:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(){this.ul=document.createElement("ul")}return e.prototype.render=function(e){var t=document.body;for(this.container=document.getElementById("container");e.hasHeroItem();){var r=e.getNextHeroItem(),n=document.createElement("li");n.classList.add("hero-list"),n.innerHTML="My name is "+r.name+" and "+r.strength,this.ul.appendChild(n)}this.container.appendChild(this.ul),t.appendChild(this.container)},e}();r.SuperHeroFormView=n},{}],4:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e("./classes/superHeroForm.presenter"),i=e("./classes/superHero.model"),o=function(){function e(){document.addEventListener("DOMContentLoaded",this.init.bind(this))}return e.prototype.init=function(){this.model=new i.SuperHeroModel,(new n.SuperHeroFormPresenter).init(this.model)},e}();r.Main=o;new o},{"./classes/superHero.model":1,"./classes/superHeroForm.presenter":2}]},{},[4]);
//# sourceMappingURL=bundle.js.map
