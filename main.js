(()=>{"use strict";var e={247:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(81),a=n.n(r),o=n(645),c=n.n(o),i=n(667),s=n.n(i),l=new URL(n(577),n.b),d=new URL(n(194),n.b),u=new URL(n(93),n.b),p=c()(a()),m=s()(l),f=s()(d),y=s()(u);p.push([e.id,`* {\n  margin: 0;\n  user-select: none;\n  cursor: crosshair;\n  font-family: 'Josefin Sans', sans-serif;\n}\n\n:root {\n  --primary: #1a1a1a;\n  --secondary: #e6e6e6;\n  --accent: #ff4d4d;\n  --accent2: #3691db;\n  --accent3: #06b387;\n}\n\n#gameScreen {\n  height: 100vh;\n  width: 100vw;\n}\n\n#pageHeader {\n  position: absolute;\n  width: 100vw;\n  text-align: center;\n  font-size: 10rem;\n  color: white;\n  top: 1rem;\n  transition: text-shadow 0.5s ease-in-out;\n  animation: textHover 2s infinite;\n}\n\n@keyframes textHover {\n  0% {\n    text-shadow: 0 0 5px black;\n  }\n  30% {\n    text-shadow: 0px 0px 20px white;\n  }\n  100% {\n    text-shadow: 0 0 5px black;\n  }\n}\n\n#board {\n  display: flex;\n  flex-direction: column;\n  height: 50%;\n  width: 50%;\n  justify-content: center;\n  align-items: center;\n}\n\nbody {\n  background-image: url(${m});\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  height: 100px;\n}\n\n.cell {\n  height: 100px;\n  width: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 0 5px black;\n  font-size: 50px;\n}\n\n.hidden {\n  display: none;\n}\n\n.flex {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n}\n\ninput {\n  margin: 10px;\n  height: 30px;\n  width: 200px;\n  font-size: 20px;\n  border-radius: 10px;\n  text-align: center;\n}\n\nlabel {\n  font-size: 20px;\n  margin-top: 20px;\n}\n\nbutton {\n  margin: 20px;\n  height: 30px;\n  width: 200px;\n  font-size: 20px;\n  border-radius: 10px;\n  text-align: center;\n  background-color: var(--accent2);\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: var(--accent);\n}\n\nbutton:active {\n  background-color: var(--accent3);\n}\n\n.o {\n  background-image: url(${f});\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  transition: all 0.5s ease-in-out;\n  animation: fadeIn 0.5s ease-in-out forwards;\n}\n\n.x {\n  background-image: url(${y});\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  transition: all 0.5s ease-in-out;\n  animation: fadeIn 0.5s ease-in-out forwards;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n`,""]);const v=p},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&c[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},c=[],i=0;i<e.length;i++){var s=e[i],l=r.base?s[0]+r.base:s[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=a(m,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var c=0;c<o.length;c++){var i=n(o[c]);t[i].references--}for(var s=r(e,a),l=0;l<o.length;l++){var d=n(o[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},577:(e,t,n)=>{e.exports=n.p+"6888822ad4ce7874e18f.png"},194:(e,t,n)=>{e.exports=n.p+"58f919cceeb236c4d811.png"},93:(e,t,n)=>{e.exports=n.p+"25b618fb2d3c601534ee.png"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{const e=document.querySelector("#playerOneNameInput"),t=document.querySelector("#playerOneNameInputComputer"),r=document.querySelector("#playerTwoNameInput"),a=document.querySelector("#startBtn"),o=document.querySelector("#restartBtn"),c=document.querySelector("#gameScreen"),i=document.querySelector("#pregameScreen"),s=document.querySelector("#pregameScreenComputer"),l=document.querySelector("#currentPlayerText"),d=document.getElementById("board"),u=document.querySelector("#selectPlayerModeBtn"),p=document.querySelector("#selectEasyModeBtn"),m=document.querySelector("#selectMediumModeBtn"),f=document.querySelector("#selectHardModeBtn"),y=document.querySelector("#selectModeScreen"),v=document.querySelector("#mainMenuBtn"),h=document.querySelector("#difficultyText"),x=document.querySelector("#startComputerGameBtn"),g=(e,t)=>({name:e,marker:t}),b={board:[["","",""],["","",""],["","",""]],resetBoard:()=>{b.board=[["","",""],["","",""],["","",""]]}},k=(()=>{const e=g("Player 1","X"),t=g("Player 2","O"),n=()=>{"Easy"===k.difficulty?r():"Medium"===k.difficulty?0===Math.floor(2*Math.random())?r():a():"Hard"===k.difficulty&&a()},r=()=>{const e=b.board,t=Math.floor(3*Math.random()),r=Math.floor(3*Math.random());if(""===e[t][r]){e[t][r]=k.currentPlayer.marker;const n=document.querySelector(`[data-row="${t}"][data-col="${r}"]`);"X"===k.currentPlayer.marker?(n.classList.add("x"),n.classList.remove("o")):(n.classList.add("o"),n.classList.remove("x")),k.currentTurn++,k.currentPlayer=k.player1,currentPlayerText.textContent=`${k.currentPlayer.name}'s turn`;const a=k.checkwinner();"tie"===a?(currentPlayerText.textContent="Tie!",k.gameover=!0):null!==a&&"tie"!==a&&(currentPlayerText.textContent=`${"X"==a?k.player1.name:k.player2.name} wins!`,k.gameover=!0)}else n()},a=()=>{const e=b.board,t=L(e,k.currentPlayer.marker);e[t.row][t.col]=k.currentPlayer.marker;const n=document.querySelector(`[data-row="${t.row}"][data-col="${t.col}"]`);"X"===k.currentPlayer.marker?(n.classList.add("x"),n.classList.remove("o")):(n.classList.add("o"),n.classList.remove("x")),k.currentTurn++,k.currentPlayer=k.player1,currentPlayerText.textContent=`${k.currentPlayer.name}'s turn`;const r=k.checkwinner();"tie"===r?(currentPlayerText.textContent="Tie!",k.gameover=!0):null!==r&&"tie"!==r&&(currentPlayerText.textContent=`${"X"==r?k.player1.name:k.player2.name} wins!`,k.gameover=!0)};return{player1:e,player2:t,currentPlayer:e,checkwinner:()=>{const e=b.board;for(let t=0;t<e.length;t++)if(e[t][0]===e[t][1]&&e[t][1]===e[t][2]&&""!==e[t][0])return e[t][0];for(let t=0;t<e.length;t++)if(e[0][t]===e[1][t]&&e[1][t]===e[2][t]&&""!==e[0][t])return e[0][t];if(e[0][0]===e[1][1]&&e[1][1]===e[2][2]&&""!==e[0][0])return e[0][0];if(e[0][2]===e[1][1]&&e[1][1]===e[2][0]&&""!==e[0][2])return e[0][2];let t=!0;for(let n=0;n<e.length;n++){for(let r=0;r<e[n].length;r++)if(""===e[n][r]){t=!1;break}if(!t)break}return t?"tie":null},gameover:!1,currentTurn:0,difficulty:"",makeComputerMove:n}})(),w=()=>{const e=b.board;for(let t=0;t<e.length;t++){const n=document.createElement("div");n.classList.add("row"),d.appendChild(n);for(let r=0;r<e[t].length;r++){const a=document.createElement("div");a.classList.add("cell"),a.textContent=e[t][r],a.dataset.row=t,a.dataset.col=r,a.addEventListener("click",(e=>{if(""!==e.target.textContent)return;if(""!=k.difficulty&&k.currentPlayer===k.player2)return;if(k.gameover)return;const t=e.target.dataset.row,n=e.target.dataset.col;b.board[t][n]=k.currentPlayer.marker,"X"===k.currentPlayer.marker?(e.target.classList.add("x"),e.target.classList.remove("o")):(e.target.classList.add("o"),e.target.classList.remove("x")),k.currentPlayer===k.player1?k.currentPlayer=k.player2:k.currentPlayer=k.player1,k.currentTurn++,currentPlayerText.textContent=`${k.currentPlayer.name}'s turn`,9===k.currentTurn&&(currentPlayerText.textContent="Tie!",k.gameover=!0);const r=k.checkwinner();null!==r&&"tie"!==r?(currentPlayerText.textContent=`${"X"==r?k.player1.name:k.player2.name} wins!`,k.gameover=!0):"tie"===r?(currentPlayerText.textContent="Tie!",k.gameover=!0):""!=k.difficulty&&setTimeout((()=>{k.makeComputerMove()}),1e3)})),n.appendChild(a)}}},L=(e,t)=>{const n=k.checkwinner();if(null!==n)return n===k.player1.marker?{score:-10}:n===k.player2.marker?{score:10}:{score:0};let r,a=[];for(let n=0;n<e.length;n++)for(let r=0;r<e[n].length;r++)if(""===e[n][r]){let o={};if(o.row=n,o.col=r,e[n][r]=t,t===k.player2.marker){const t=L(e,k.player1.marker);o.score=t.score}else{const t=L(e,k.player2.marker);o.score=t.score}e[n][r]="",a.push(o)}if(t===k.player2.marker){let e=-1/0;for(let t=0;t<a.length;t++)a[t].score>e&&(e=a[t].score,r=t)}else{let e=1/0;for(let t=0;t<a.length;t++)a[t].score<e&&(e=a[t].score,r=t)}return a[r]};var P=n(379),T=n.n(P),C=n(795),S=n.n(C),M=n(569),E=n.n(M),$=n(565),q=n.n($),I=n(216),B=n.n(I),j=n(589),H=n.n(j),z=n(247),N={};N.styleTagTransform=H(),N.setAttributes=q(),N.insert=E().bind(null,"head"),N.domAPI=S(),N.insertStyleElement=B(),T()(z.Z,N),z.Z&&z.Z.locals&&z.Z.locals,v.addEventListener("click",(()=>{O()})),u.addEventListener("click",(()=>{A()})),a.addEventListener("click",(()=>{startGame()})),o.addEventListener("click",(()=>{X()})),p.addEventListener("click",(()=>{k.difficulty="easy"})),m.addEventListener("click",(()=>{k.difficulty="medium"})),f.addEventListener("click",(()=>{k.difficulty="hard"}));const O=()=>{for(c.classList.add("hidden"),c.classList.remove("flex"),y.classList.add("flex"),y.classList.remove("hidden"),a.disabled=!1,e.disabled=!1,r.disabled=!1,e.value="",r.value="",k.gameover=!1,k.currentTurn=0,k.currentPlayer=k.player1,b.board=[["","",""],["","",""],["","",""]];d.firstChild;)d.removeChild(d.firstChild)},X=()=>{b.resetBoard(),k.currentTurn=0,k.gameover=!1,k.currentPlayer=k.player1,d.innerHTML="",w(),l.textContent=`${k.currentPlayer.name}'s turn`},A=()=>{y.classList.add("hidden"),y.classList.remove("flex"),i.classList.add("flex"),i.classList.remove("hidden")};p.addEventListener("click",(()=>{R("Easy")})),m.addEventListener("click",(()=>{R("Medium")})),f.addEventListener("click",(()=>{R("Hard")})),a.addEventListener("click",(()=>{""!==e.value&&""!==r.value?(k.player1.name=e.value,k.player2.name=r.value,w(),a.disabled=!0,e.disabled=!0,r.disabled=!0,c.classList.add("flex"),c.classList.remove("hidden"),i.classList.add("hidden"),i.classList.remove("flex"),l.textContent=`${k.currentPlayer.name}'s turn`):alert("Please enter a name for both players")})),x.addEventListener("click",(()=>{if(""===t.value)return void alert("Please enter a name for the player");const n=Math.floor(2*Math.random());k.currentPlayer=0===n?k.player1:k.player2,k.player1.name=t.value,k.player2.name="Computer",w(),a.disabled=!0,e.disabled=!0,r.disabled=!0,c.classList.add("flex"),c.classList.remove("hidden"),s.classList.add("hidden"),s.classList.remove("flex"),l.textContent=`${k.currentPlayer.name}'s turn`,k.currentPlayer===k.player2&&setTimeout((()=>{k.makeComputerMove()}),1e3)})),o.addEventListener("click",(()=>{b.resetBoard(),k.currentTurn=0,k.gameover=!1;const e=Math.floor(2*Math.random());k.currentPlayer=0===e?k.player1:k.player2,d.innerHTML="",w(),l.textContent=`${k.currentPlayer.name}'s turn`,k.currentPlayer===k.player2&&""!==k.difficulty&&setTimeout((()=>{k.makeComputerMove()}),1e3)}));const R=e=>{k.difficulty=e,h.textContent=` ${e} Computer`,y.classList.add("hidden"),y.classList.remove("flex"),s.classList.add("flex"),s.classList.remove("hidden")}})()})();