(()=>{"use strict";var t,e,n=function(){function t(t,e,n){return this.context=t,this.width=e,this.height=n,this}return t.prototype.init=function(){this.initCoordinates(),this.initImage(),this.createPath()},t.prototype.initCoordinates=function(){var t=this;this.coordinates=this.coordinates.map((function(e){return t.convertCoordinatesToPixel(e)})),this.startCoordinates=this.convertCoordinatesToPixel(this.startCoordinates)},t.prototype.convertCoordinatesToPixel=function(t){return{x:this.width*t.x/100,y:this.height*t.y/100}},t.prototype.initImage=function(){var t=this,e=new Image;e.src=this.imageUrl,e.onload=function(){t.image=e,t.clear()}},t.prototype.createPath=function(){var t=new Path2D;this.coordinates.forEach((function(e,n){0===n?t.moveTo(e.x,e.y):t.lineTo(e.x,e.y)})),this.path=t},t.prototype.start=function(){this.image&&this.clear()},t.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height),this.drawBackground(),this.drawPersonage().catch()},t.prototype.drawBackground=function(){this.context.drawImage(this.image,0,0,this.width,this.height)},t.prototype.getPath=function(){return this.path},t.prototype.getWidth=function(){return this.width},t.prototype.getHeight=function(){return this.height},t.prototype.drawPersonage=function(){return t=this,e=void 0,o=function(){var t,e,n,o,i,r;return function(t,e){var n,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(t){r=[6,t],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}}(this,(function(a){switch(a.label){case 0:return t=this.context,e=this.personage,n=e.getCoordinates(),o=e.getStateCoordinates(),[4,e.getImage()];case 1:return i=a.sent(),r=e.getSizePersonageInImage(),t.drawImage(i,o.x,o.y,r.width,r.height,n.x,n.y,e.getWidth(),e.getHeight()),[2]}}))},new((n=void 0)||(n=Promise))((function(i,r){function a(t){try{h(o.next(t))}catch(t){r(t)}}function s(t){try{h(o.throw(t))}catch(t){r(t)}}function h(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}h((o=o.apply(t,e||[])).next())}));var t,e,n,o},t.prototype.setPersonage=function(t){t.setCoordinates(this.startCoordinates.x,this.startCoordinates.y),this.personage=t},t.prototype.checkCoordinateInArea=function(t,e){return this.context.isPointInPath(this.path,t,e)},t}(),o=(t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)},function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}),i=function(t){function e(e,n,o){var i=t.call(this,e,n,o)||this;return i.imageUrl="./images/room.png",i.coordinates=[{x:14.5,y:62.5},{x:50,y:42},{x:85.2,y:62.5},{x:50,y:79.5}],i.startCoordinates={x:50,y:55},i.init(),i}return o(e,t),e}(n);!function(t){t[t.Up=0]="Up",t[t.Down=1]="Down",t[t.Left=2]="Left",t[t.Right=3]="Right"}(e||(e={}));var r=function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function a(t){try{h(o.next(t))}catch(t){r(t)}}function s(t){try{h(o.throw(t))}catch(t){r(t)}}function h(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}h((o=o.apply(t,e||[])).next())}))},a=function(t,e){var n,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(t){r=[6,t],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}},s=function(){function t(t){return this.state=0,this.walkExecute={},this.walkValue=10,this.walkInterval={},this.walkLoopStop=!1,this.context=t,this}return t.prototype.init=function(){this.initImage().catch()},t.prototype.initImage=function(){return r(this,void 0,void 0,(function(){var t,e=this;return a(this,(function(n){switch(n.label){case 0:return(t=new Image).src=this.imageUrl,t.onload=function(){e.image=t},[4,t.decode()];case 1:return n.sent(),[2]}}))}))},t.prototype.setCoordinates=function(t,e){this.coordinates={x:t,y:e}},t.prototype.setAreaPath=function(t){this.areaPath=t},t.prototype.setArea=function(t){this.area=t,this.width=t.getWidth()*this.widthPercent/100,this.height=t.getHeight()*this.heightPercent/100,this.setAreaPath(t.getPath())},t.prototype.getImage=function(){return r(this,void 0,void 0,(function(){return a(this,(function(t){switch(t.label){case 0:return this.image?[3,2]:[4,this.initImage()];case 1:t.sent(),t.label=2;case 2:return[2,this.image]}}))}))},t.prototype.getSizePersonageInImage=function(){return this.personageInImageSize},t.prototype.getState=function(){return this.state},t.prototype.getStateCoordinates=function(){return this.stateCoordinateInImage[this.getState()]},t.prototype.getHeight=function(){return this.height},t.prototype.getWidth=function(){return this.width},t.prototype.getCoordinates=function(){return this.coordinates},t.prototype.getWalk=function(){return this.walkValue},t.prototype.changeNextState=function(){this.state=this.getState()<=this.stateCoordinateInImage.length-2?this.getState()+1:0},t.prototype.checkPersonageInArea=function(t,e){var n=[{x:t+this.width,y:e+this.height},{x:t,y:e+this.height}],o=0,i=!0;do{i=this.context.isPointInPath(this.areaPath,n[o].x,n[o].y),o++}while(o<n.length&&i);return i},t.prototype.startWalk=function(t){var e=this;this.walkExecute[t]||(this.walkExecute[t]=!0,this.walkInterval[t]=setInterval((function(){return e.walk(t)}),100))},t.prototype.walk=function(t){if(this.walkExecute[t]){var n=this.getCoordinates(),o=n.x,i=n.y;switch(t){case e.Up:i=n.y-this.walkValue;break;case e.Down:i=n.y+this.walkValue;break;case e.Left:o=n.x-this.walkValue;break;case e.Right:o=n.x+this.walkValue;break;default:this.walkExecute=!1}this.generateWalk(o,i)}},t.prototype.generateWalk=function(t,e){this.changeNextState(),this.checkPersonageInArea(t,e)&&this.setCoordinates(t,e),this.area.clear()},t.prototype.stopWalk=function(t){this.walkExecute[t]&&(this.walkExecute[t]=!1,clearInterval(this.walkInterval[t]))},t.prototype.walkToCoordinate=function(t,e){t>this.area.getWidth()/2&&(t-=this.width),e-=this.height;var n=this.coordinates,o=n.x<t,i=n.y<e;this.walkLoopStop=!1,this.loopWalk(n.x,n.y,t,e,o,i)},t.prototype.walkToCoordinateStop=function(){this.walkLoopStop=!0,this.walkLoopTimer&&clearTimeout(this.walkLoopTimer)},t.prototype.loopWalk=function(t,e,n,o,i,r){var a=this,s=this.isWalkToCoordinate(t,n,i),h=this.isWalkToCoordinate(e,o,r);s&&(t=i?t+this.walkValue:t-this.walkValue),h&&(e=r?e+this.walkValue:e-this.walkValue),!s&&!h||this.walkLoopStop||(this.walkLoopTimer=setTimeout((function(){return a.loopWalk(t,e,n,o,i,r)}),100)),this.generateWalk(t,e)},t.prototype.isWalkToCoordinate=function(t,e,n){return n?t<e+this.walkValue:t>e+this.walkValue},t}(),h=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),c=function(t){function e(e){var n=t.call(this,e)||this;return n.imageUrl="./images/personage_1.png",n.personageInImageSize={width:55,height:85},n.stateCoordinateInImage=[{x:15,y:5},{x:90,y:5},{x:170,y:5},{x:235,y:5},{x:310,y:5},{x:380,y:5},{x:445,y:5},{x:500,y:5}],n.widthPercent=9.16,n.heightPercent=14.16,n.init(),n}return h(e,t),e}(s);(new(function(){function t(){this.init(),this.createCanvas();var t=new i(this.canvasContext,this.width,this.height),e=new c(this.canvasContext);this.setCurrentPersonage(e),this.setCurrentArea(t),this.initEventsUser()}return t.prototype.init=function(){var t=window.screen.width;if(t>=600)this.width=600,this.height=600;else{this.width=t,this.height=1*t}},t.prototype.initEventsUser=function(){var t=this.currentPersonage,n=this.canvas,o=this.currentArea;document.addEventListener("keydown",(function(n){"ArrowUp"!==n.code&&"KeyW"!==n.code||t.startWalk(e.Up),"ArrowDown"!==n.code&&"KeyS"!==n.code||t.startWalk(e.Down),"ArrowLeft"!==n.code&&"KeyA"!==n.code||t.startWalk(e.Left),"ArrowRight"!==n.code&&"KeyD"!==n.code||t.startWalk(e.Right)})),document.addEventListener("keyup",(function(n){"ArrowUp"!==n.code&&"KeyW"!==n.code||t.stopWalk(e.Up),"ArrowDown"!==n.code&&"KeyS"!==n.code||t.stopWalk(e.Down),"ArrowLeft"!==n.code&&"KeyA"!==n.code||t.stopWalk(e.Left),"ArrowRight"!==n.code&&"KeyD"!==n.code||t.stopWalk(e.Right)})),n.addEventListener("touchstart",(function(e){var n=e.changedTouches[0].clientX,i=e.changedTouches[0].clientY;o.checkCoordinateInArea(n,i)&&(t.walkToCoordinateStop(),t.walkToCoordinate(n,i))}))},t.prototype.setCurrentArea=function(t){t.setPersonage(this.currentPersonage),this.currentPersonage.setArea(t),this.currentArea=t},t.prototype.setCurrentPersonage=function(t){this.currentPersonage=t},t.prototype.createCanvas=function(){var t=document.getElementById("gameArea");if(!t)throw new Error("Canvas Not Found");this.canvas=t,t.width=this.width,t.height=this.height,this.canvasContext=t.getContext("2d")},t.prototype.start=function(){console.log("start"),this.currentArea.start()},t}())).start()})();