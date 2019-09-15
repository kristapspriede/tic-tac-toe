parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"YsqD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Game=void 0;var s=function(){function s(){this.cells=["-","-","-","-","-","-","-","-","-"]}return s.prototype.getCells=function(){return this.cells},s.prototype.getTurn=function(){return this.cells.filter(function(s){return"X"===s}).length===this.cells.filter(function(s){return"O"===s}).length?"X":"O"},s.prototype.getWinner=function(){return this.cells[0]===this.cells[1]&&this.cells[1]===this.cells[2]&&"-"!==this.cells[0]?this.cells[0]:this.cells[3]===this.cells[4]&&this.cells[4]===this.cells[5]&&"-"!==this.cells[3]?this.cells[3]:this.cells[6]===this.cells[7]&&this.cells[7]===this.cells[8]&&"-"!==this.cells[8]?this.cells[6]:this.cells[0]===this.cells[3]&&this.cells[3]===this.cells[6]&&"-"!==this.cells[0]?this.cells[0]:this.cells[1]===this.cells[4]&&this.cells[4]===this.cells[7]&&"-"!==this.cells[1]?this.cells[1]:this.cells[2]===this.cells[5]&&this.cells[5]===this.cells[8]&&"-"!==this.cells[2]?this.cells[2]:this.cells[0]===this.cells[4]&&this.cells[4]===this.cells[8]&&"-"!==this.cells[0]?this.cells[0]:this.cells[2]===this.cells[4]&&this.cells[4]===this.cells[6]&&"-"!==this.cells[2]?this.cells[2]:"-"},s.prototype.isTie=function(){return!("-"!=this.getWinner()||!this.cells.every(function(s){return"-"!==s}))},s.prototype.onClick=function(s){"-"===this.cells[s]&&(this.cells[s]=this.getTurn())},s.prototype.restart=function(){this.cells=["-","-","-","-","-","-","-","-","-"]},s}();exports.Game=s;
},{}],"jrQd":[function(require,module,exports) {
"use strict";var e=require("./Game"),t=new e.Game,n=document.getElementById("info"),i=document.getElementById("play-button"),r=document.getElementById("board");i.addEventListener("click",function(){t.restart(),a(t)});var a=function e(t){r.innerHTML="",t.getCells().forEach(function(n,i){var a=document.createElement("div");a.className="box","-"!==n&&(a.innerText=n),a.addEventListener("click",function(){t.onClick(i),e(t)}),r.appendChild(a)}),t.isTie()?(n.innerText="It's a tie!",i.removeAttribute("disabled"),i.className="button button-hoverable"):"-"!==t.getWinner()?(n.innerText="Nice, "+t.getWinner()+" won",i.removeAttribute("disabled"),i.className="button button-hoverable"):(n.innerText="It's "+t.getTurn()+" turn",i.setAttribute("disabled","true"),i.className="button")};a(t);
},{"./Game":"YsqD"}]},{},["jrQd"], null)
//# sourceMappingURL=/GameUI.a0b4454c.js.map