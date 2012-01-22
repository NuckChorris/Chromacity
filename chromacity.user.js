// ==UserScript==
// @name           Chromacity
// @version        2.0.0b2
// @namespace      nuckchorris0.deviantart.com
// @description    Chromacity for dAmn
// @include        *://chat.deviantart.com/chat/*
// @match          *://chat.deviantart.com/chat/*
// ==/UserScript==

/*
 * Clockwork Updater
 * https://github.com/nuckchorris/cwUpdater/
 * Minified by UglifyJS
 */ 
(function(a){a="("+a+")();";var b=document.createElement("script");b.setAttribute("type","application/javascript"),b.textContent=a,document.body.appendChild(b),document.body.removeChild(b)})(function(){if(!window.cwVer){var a=function(){function a(a,b){var g=a[0],h=a[1],i=a[2],j=a[3];g=c(g,h,i,j,b[0],7,-680876936),j=c(j,g,h,i,b[1],12,-389564586),i=c(i,j,g,h,b[2],17,606105819),h=c(h,i,j,g,b[3],22,-1044525330),g=c(g,h,i,j,b[4],7,-176418897),j=c(j,g,h,i,b[5],12,1200080426),i=c(i,j,g,h,b[6],17,-1473231341),h=c(h,i,j,g,b[7],22,-45705983),g=c(g,h,i,j,b[8],7,1770035416),j=c(j,g,h,i,b[9],12,-1958414417),i=c(i,j,g,h,b[10],17,-42063),h=c(h,i,j,g,b[11],22,-1990404162),g=c(g,h,i,j,b[12],7,1804603682),j=c(j,g,h,i,b[13],12,-40341101),i=c(i,j,g,h,b[14],17,-1502002290),h=c(h,i,j,g,b[15],22,1236535329),g=d(g,h,i,j,b[1],5,-165796510),j=d(j,g,h,i,b[6],9,-1069501632),i=d(i,j,g,h,b[11],14,643717713),h=d(h,i,j,g,b[0],20,-373897302),g=d(g,h,i,j,b[5],5,-701558691),j=d(j,g,h,i,b[10],9,38016083),i=d(i,j,g,h,b[15],14,-660478335),h=d(h,i,j,g,b[4],20,-405537848),g=d(g,h,i,j,b[9],5,568446438),j=d(j,g,h,i,b[14],9,-1019803690),i=d(i,j,g,h,b[3],14,-187363961),h=d(h,i,j,g,b[8],20,1163531501),g=d(g,h,i,j,b[13],5,-1444681467),j=d(j,g,h,i,b[2],9,-51403784),i=d(i,j,g,h,b[7],14,1735328473),h=d(h,i,j,g,b[12],20,-1926607734),g=e(g,h,i,j,b[5],4,-378558),j=e(j,g,h,i,b[8],11,-2022574463),i=e(i,j,g,h,b[11],16,1839030562),h=e(h,i,j,g,b[14],23,-35309556),g=e(g,h,i,j,b[1],4,-1530992060),j=e(j,g,h,i,b[4],11,1272893353),i=e(i,j,g,h,b[7],16,-155497632),h=e(h,i,j,g,b[10],23,-1094730640),g=e(g,h,i,j,b[13],4,681279174),j=e(j,g,h,i,b[0],11,-358537222),i=e(i,j,g,h,b[3],16,-722521979),h=e(h,i,j,g,b[6],23,76029189),g=e(g,h,i,j,b[9],4,-640364487),j=e(j,g,h,i,b[12],11,-421815835),i=e(i,j,g,h,b[15],16,530742520),h=e(h,i,j,g,b[2],23,-995338651),g=f(g,h,i,j,b[0],6,-198630844),j=f(j,g,h,i,b[7],10,1126891415),i=f(i,j,g,h,b[14],15,-1416354905),h=f(h,i,j,g,b[5],21,-57434055),g=f(g,h,i,j,b[12],6,1700485571),j=f(j,g,h,i,b[3],10,-1894986606),i=f(i,j,g,h,b[10],15,-1051523),h=f(h,i,j,g,b[1],21,-2054922799),g=f(g,h,i,j,b[8],6,1873313359),j=f(j,g,h,i,b[15],10,-30611744),i=f(i,j,g,h,b[6],15,-1560198380),h=f(h,i,j,g,b[13],21,1309151649),g=f(g,h,i,j,b[4],6,-145523070),j=f(j,g,h,i,b[11],10,-1120210379),i=f(i,j,g,h,b[2],15,718787259),h=f(h,i,j,g,b[9],21,-343485551),a[0]=k(g,a[0]),a[1]=k(h,a[1]),a[2]=k(i,a[2]),a[3]=k(j,a[3])}function b(a,b,c,d,e,f){return b=k(k(b,a),k(d,f)),k(b<<e|b>>>32-e,c)}function c(a,c,d,e,f,g,h){return b(c&d|~c&e,a,c,f,g,h)}function d(a,c,d,e,f,g,h){return b(c&e|d&~e,a,c,f,g,h)}function e(a,c,d,e,f,g,h){return b(c^d^e,a,c,f,g,h)}function f(a,c,d,e,f,g,h){return b(d^(c|~e),a,c,f,g,h)}function g(b){/[\x80-\xFF]/.test(b)&&(b=unescape(encodeURI(b))),txt="";var c=b.length,d=[1732584193,-271733879,-1732584194,271733878],e;for(e=64;e<=b.length;e+=64)a(d,h(b.substring(e-64,e)));b=b.substring(e-64);var f=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<b.length;e++)f[e>>2]|=b.charCodeAt(e)<<(e%4<<3);f[e>>2]|=128<<(e%4<<3);if(e>55){a(d,f);for(e=0;e<16;e++)f[e]=0}return f[14]=c*8,a(d,f),d}function h(a){var b=[],c;for(c=0;c<64;c+=4)b[c>>2]=a.charCodeAt(c)+(a.charCodeAt(c+1)<<8)+(a.charCodeAt(c+2)<<16)+(a.charCodeAt(c+3)<<24);return b}function i(a){var b="",c=0;for(;c<4;c++)b+=l[a>>c*8+4&15]+l[a>>c*8&15];return b}function j(a){for(var b=0;b<a.length;b++)a[b]=i(a[b]);return a.join("")}function k(a,b){return a+b&4294967295}var l="0123456789abcdef".split(""),m=function(a){return j(g(a))};if(m("hello")!="5d41402abc4b2a76b9719d911017c592")function k(a,b){var c=(a&65535)+(b&65535),d=(a>>16)+(b>>16)+(c>>16);return d<<16|c&65535}return m}();(function(a){function b(a){var b=a;return[b[1]||"",b[2]||"",b[3]||""].join(".")+(b[4]||"")+(b[5]||"")}function c(c){return c=a.parse(c),c?b(c):c}function d(b){return typeof b!="string"?null:a.parse(b)&&b.trim().replace(/^[v=]+/,"")}function e(a){return typeof a!="string"?null:a.match(D.parsePackage)&&a.trim()}function f(b){var c=(b||"").trim().replace(D.parseRange,a.rangeReplace).replace(G,H).split(/\s+/).join(" ").split("||").map(function(a){return a.split(" ").map(h).map(j).map(g).join(" ").trim()}).map(function(a){return a.trim().split(/\s+/).filter(function(a){return a.match(D.validComparator)})}).filter(function(a){return a.length});return c}function g(a){return a.trim().replace(E,F)}function h(a){return a.split(/\s+/).map(i).join(" ")}function i(a){return a.trim().replace(D.parseXRange,function(a,b,c,d,e,f){var g=!c||c.toLowerCase()==="x"||c==="*"||!d||d.toLowerCase()==="x"||d==="*"||!e||e.toLowerCase()==="x"||e==="*",h=a;if(b&&g)(!c||c==="*"||c.toLowerCase()==="x")&&(c=0),(!d||d==="*"||d.toLowerCase()==="x")&&(d=0),(!e||e==="*"||e.toLowerCase()==="x")&&(e=0),h=b+c+"."+d+"."+e+"-";else if(!c||c==="*"||c.toLowerCase()==="x")h="*";else if(!d||d==="*"||d.toLowerCase()==="x")h=">="+c+".0.0- <"+(+c+1)+".0.0-";else if(!e||e==="*"||e.toLowerCase()==="x")h=">="+c+"."+d+".0- <"+c+"."+(+d+1)+".0-";return h})}function j(a){return a.trim().replace(D.parseSpermy,function(a,b,c,d,e,f){if(b)throw new Error("Using '"+b+"' with ~ makes no sense. Don't do it.");return!c||c.toLowerCase()==="x"?"":!d||d.toLowerCase()==="x"?">="+c+".0.0- <"+(+c+1)+".0.0-":!e||e.toLowerCase()==="x"?">="+c+"."+d+".0- <"+c+"."+(+d+1)+".0-":(f=f||"-",">="+c+"."+d+"."+e+f+" <"+c+"."+(+d+1)+".0-")})}function k(a){a=g(a);var b=f(a);return b.length===0?null:b.map(function(a){return a.join(" ")}).join("||")}function l(a,b){return a.filter(function(a){return m(a,b)}).sort(n).pop()}function m(a,b){a=d(a);if(!a)return!1;b=f(b);for(var c=0,e=b.length;c<e;c++){var g=!1;for(var h=0,i=b[c].length;h<i;h++){var j=b[c][h],k=j.charAt(0)===">"?w:j.charAt(0)==="<"?p:!1,l=j.charAt(!!k)==="=",m=!!l+!!k;k||(l=!0),j=j.substr(m),j=j===""?j:d(j),g=j===""||l&&j===a||k&&k(a,j);if(!g)break}if(g)return!0}return!1}function n(a,b){var c=w(a,b);return c===null?0:c?1:-1}function o(a,b){return n(b,a)}function p(a,b){return w(b,a)}function q(a,b){return!p(a,b)}function r(a,b){return!w(a,b)}function s(a,b){return w(a,b)===null}function t(a,b){return w(a,b)!==null}function u(a,b,c){switch(b){case">":return w(a,c);case"<":return p(a,c);case">=":return q(a,c);case"<=":return r(a,c);case"==":return s(a,c);case"!=":return t(a,c);case"===":return a===c;case"!==":return a!==c;default:throw new Error("Y U NO USE VALID COMPARATOR!? "+b)}}function v(a){return a===undefined?-1:parseInt((a||"0").replace(/[^0-9]+/g,""),10)}function w(b,c){b=a.parse(b),c=a.parse(c);if(!b||!c)return!1;for(var d=1;d<5;d++){b[d]=v(b[d]),c[d]=v(c[d]);if(b[d]>c[d])return!0;if(b[d]!==c[d])return!1}var e=b[5]||"",f=c[5]||"";return e===f?null:e?f?e>f:!1:!0}function x(c,d){c=a.parse(c);if(!c)return null;var e={major:1,minor:2,patch:3,build:4},f=e[d];if(f===undefined)return null;var g=v(c[f]);c[f]=g===-1?1:g+1;for(var h=f+1;h<5;h++)v(c[h])!==-1&&(c[h]="0");return c[4]&&(c[4]="-"+c[4]),c[5]="",b(c)}var y="\\s*[v=]*\\s*([0-9]+)\\.([0-9]+)\\.([0-9]+)(-[0-9]+-?)?([a-zA-Z-][a-zA-Z0-9-.:]*)?",z="^((<|>)?=?)s*("+y+")$|^$",A="[v=]*([0-9]+|x|X|\\*)(?:\\.([0-9]+|x|X|\\*)(?:\\.([0-9]+|x|X|\\*)([a-zA-Z-][a-zA-Z0-9-.:]*)?)?)?",B="((?:<|>)?=?)?\\s*"+A,C="(?:~>?)"+B,D=a.expressions={parse:new RegExp("^\\s*"+y+"\\s*$"),parsePackage:new RegExp("^\\s*([^/]+)[-@]("+y+")\\s*$"),parseRange:new RegExp("^\\s*("+y+")\\s+-\\s+("+y+")\\s*$"),validComparator:new RegExp("^"+z+"$"),parseXRange:new RegExp("^"+B+"$"),parseSpermy:new RegExp("^"+C+"$")};Object.getOwnPropertyNames(D).forEach(function(b){a[b]=function(a){return(""+(a||"")).match(D[b])}}),a.rangeReplace=">=$1 <=$7",a.clean=c,a.compare=n,a.rcompare=o,a.satisfies=m,a.gt=w,a.gte=q,a.lt=p,a.lte=r,a.eq=s,a.neq=t,a.cmp=u,a.inc=x,a.valid=d,a.validPackage=e,a.validRange=k,a.maxSatisfying=l,a.replaceStars=g,a.toComparators=f;var E=/(<|>)?=?\s*\*/g,F="",G=new RegExp("((<|>)?=?)\\s*("+y+"|"+A+")","g"),H="$1$3"})(typeof exports=="object"?exports:semver={});var b=function(){var a=function(a){for(var b=0,c=a.length;b<c;b++){var d=a[b].string,e=a[b].prop;if(d){if(d.indexOf(a[b].subString)!=-1)return a[b].identity}else if(e)return a[b].identity}},b=[{string:navigator.userAgent,subString:"Chrome",identity:"chrome"},{string:navigator.vendor,subString:"Apple",identity:"safari"},{prop:window.opera,identity:"opera"},{string:navigator.vendor,subString:"KDE",identity:"konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"firefox"},{string:navigator.vendor,subString:"Camino",identity:"camino"},{string:navigator.userAgent,subString:"Gecko",identity:"mozilla"}];return a(b)||"An unknown browser"},c=function(){var a=/\{([a-zA-Z\.0-9]*)\}/mg,b=function(a,b){var c=b.split(".");for(var d=0,e=c.length;d<e;++d){if(!a[c[d]]||a[c[d]]===null)return null;a=a[c[d]]}return a};return function(c,d){if(arguments.length===1)return c;if(arguments.length===2){if(arguments[1]==null)return c;if(typeof arguments[1]=="object")var d=arguments[1];else if(typeof arguments[1]=="Array")var d=arguments[1];else var d=[arguments[1]]}else{if(!(arguments.length>1))return c;var d=Array.slice.call(arguments,1)}return c.replace(a,function(a,c){return b(d,c)||a})}}(),d=function(b){var c=jQuery("<iframe>");c.attr("src",b).hide(),jQuery("body").append(c)};window.cwVer=function(a,b){if(!semver.valid(b))throw new Error("Invalid version");this.url=a,this.version=b,this.load(function(a){semver.gt(a.version,b)&&cwVer.addItem(a)})},cwVer.prototype.load=function(b){var c=a(this.url),d=document.createElement("script");d.setAttribute("type","application/javascript"),d.setAttribute("src",this.url),cwVer.callbacks[c]=function(a){b(a),delete cwVer.callbacks[c],document.body.removeChild(d)},document.body.appendChild(d)},cwVer.menu=jQuery('<td class="oh-hasmenu oh-hashover oh-keep oh-hasbutton" id="cwv-menu"><div class="oh-menuctrl"><div class="oh-menu"><div class="oh-hr"></div><a class="mi" id="cwv-updateAll" style="cursor:pointer"><i class="i13"></i><b>Update All</b></a></div></div><a href="#" class="oh-l" style="color:#C0D0CA !important;"><i class="icon h-icon i0" style="background-image: url(http://i46.tinypic.com/11ca7w7.png) !important;"></i> Updates</a></td>'),jQuery(".oh-gap").after(cwVer.menu.hide()),jQuery("#cwv-updateAll",cwVer.menu).unbind("click").click(function(){for(var a=0,b=cwVer.updates.length;a<b;a++)d(cwVer.updates[a].url);return!1}),cwVer.itemTemplate='<a class="mi" href="{url}"><i class="i0" style="background-image: url({icon});"></i><span style="float: right; margin-right: 5px; color: #afc81c; background: transparent;" class="cwv-newversion">{version}</span>{name}</a>',cwVer.menuList=jQuery(".oh-menu",cwVer.menu),cwVer.browser=b(),cwVer.addItem=function(a){console.log(a),cwVer.updates.length===0&&cwVer.menu.show(),a.url=a.downloads[cwVer.browser];if(a.url){cwVer.updates.push(a);var b=$(c(cwVer.itemTemplate,a));cwVer.menuList.prepend(b)}},cwVer.callbacks={},cwVer.updates=[]}})

var contentEval = function (source) {
	if ('function' == typeof source) {
		source = '(' + source + ')();'
	}
	var script = document.createElement('script');
	script.setAttribute("type", "application/javascript");
	script.textContent = source;
	document.body.appendChild(script);
	document.body.removeChild(script);
}
contentEval(function () {

	new cwVer('http://nuckchorris.github.com/Chromacity/cwVer.js', '2.0.0b2');

	var bootstrap = (function () {
		var i = 0;
		return function bootstrap (cb) {
			var interval = setInterval(function () {
				if (window.MiddleMan) {
					clearInterval(interval);
					cb();
				}
				if (i++ >= 20) {
					if (!window.MiddleMan) {
						clearInterval(interval);
						cb(new Error('No MiddleMan found'));
					}
				}
			}, 500);
		};
	})();

	bootstrap(function (err) {
		if (err) throw err;

		/**
		 * Farbtastic Color Picker 1.2
		 * © 2008 Steven Wittens
		 *
		 * This program is free software; you can redistribute it and/or modify
		 * it under the terms of the GNU General Public License as published by
		 * the Free Software Foundation; either version 2 of the License, or
		 * (at your option) any later version.
		 *
		 * This program is distributed in the hope that it will be useful,
		 * but WITHOUT ANY WARRANTY; without even the implied warranty of
		 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
		 * GNU General Public License for more details.
		 *
		 * You should have received a copy of the GNU General Public License
		 * along with this program; if not, write to the Free Software
		 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
		 */

(function(){jQuery.fn.farbtastic=function(a){return jQuery.farbtastic(this,a),this},jQuery.farbtastic=function(a,b){var a=jQuery(a).get(0);return a.farbtastic||(a.farbtastic=new jQuery._farbtastic(a,b))},jQuery._farbtastic=function(a,b){var c=this;jQuery(a).html('<div class="farbtastic"><div class="color"></div><div class="wheel"></div><div class="overlay"></div><div class="h-marker marker"></div><div class="sl-marker marker"></div></div>');var d=jQuery(".farbtastic",a);c.wheel=jQuery(".wheel",a).get(0),c.radius=84,c.square=100,c.width=194,navigator.appVersion.match(/MSIE [0-6]\./)&&jQuery("*",d).each(function(){if(this.currentStyle.backgroundImage!="none"){var a=this.currentStyle.backgroundImage;a=this.currentStyle.backgroundImage.substring(5,a.length-2),jQuery(this).css({backgroundImage:"none",filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='"+a+"')"})}}),c.linkTo=function(a){typeof c.callback=="object"&&jQuery(c.callback).unbind("keyup",c.updateValue),c.color=null;if(typeof a=="function")c.callback=a;else if(typeof a=="object"||typeof a=="string")c.callback=jQuery(a),c.callback.bind("keyup",c.updateValue),c.callback.get(0).value&&c.setColor(c.callback.get(0).value);return this},c.updateValue=function(a){this.value&&this.value!=c.color&&c.setColor(this.value)},c.setColor=function(a){var b=c.unpack(a);return c.color!=a&&b&&(c.color=a,c.rgb=b,c.hsl=c.RGBToHSL(c.rgb),c.updateDisplay()),this},c.setHSL=function(a){return c.hsl=a,c.rgb=c.HSLToRGB(a),c.color=c.pack(c.rgb),c.updateDisplay(),this},c.widgetCoords=function(a){var b,d,e=a.target||a.srcElement,f=c.wheel;if(typeof a.offsetX!="undefined"){var g={x:a.offsetX,y:a.offsetY},h=e;while(h)h.mouseX=g.x,h.mouseY=g.y,g.x+=h.offsetLeft,g.y+=h.offsetTop,h=h.offsetParent;var h=f,i={x:0,y:0};while(h){if(typeof h.mouseX!="undefined"){b=h.mouseX-i.x,d=h.mouseY-i.y;break}i.x+=h.offsetLeft,i.y+=h.offsetTop,h=h.offsetParent}h=e;while(h)h.mouseX=undefined,h.mouseY=undefined,h=h.offsetParent}else{var g=c.absolutePosition(f);b=(a.pageX||0*(a.clientX+jQuery("html").get(0).scrollLeft))-g.x,d=(a.pageY||0*(a.clientY+jQuery("html").get(0).scrollTop))-g.y}return{x:b-c.width/2,y:d-c.width/2}},c.mousedown=function(a){document.dragging||(jQuery(document).bind("mousemove",c.mousemove).bind("mouseup",c.mouseup),document.dragging=!0);var b=c.widgetCoords(a);return c.circleDrag=Math.max(Math.abs(b.x),Math.abs(b.y))*2>c.square,c.mousemove(a),!1},c.mousemove=function(a){var b=c.widgetCoords(a);if(c.circleDrag){var d=Math.atan2(b.x,-b.y)/6.28;d<0&&(d+=1),c.setHSL([d,c.hsl[1],c.hsl[2]])}else{var e=Math.max(0,Math.min(1,-(b.x/c.square)+.5)),f=Math.max(0,Math.min(1,-(b.y/c.square)+.5));c.setHSL([c.hsl[0],e,f])}return!1},c.mouseup=function(){jQuery(document).unbind("mousemove",c.mousemove),jQuery(document).unbind("mouseup",c.mouseup),document.dragging=!1},c.updateDisplay=function(){var a=c.hsl[0]*6.28;jQuery(".h-marker",d).css({left:Math.round(Math.sin(a)*c.radius+c.width/2)+"px",top:Math.round(-Math.cos(a)*c.radius+c.width/2)+"px"}),jQuery(".sl-marker",d).css({left:Math.round(c.square*(.5-c.hsl[1])+c.width/2)+"px",top:Math.round(c.square*(.5-c.hsl[2])+c.width/2)+"px"}),jQuery(".color",d).css("backgroundColor",c.pack(c.HSLToRGB([c.hsl[0],1,.5]))),typeof c.callback=="object"?(jQuery(c.callback).css({backgroundColor:c.color,color:c.hsl[2]>.5?"#000":"#fff"}),jQuery(c.callback).each(function(){this.value&&this.value!=c.color&&(this.value=c.color)})):typeof c.callback=="function"&&c.callback.call(c,c.color)},c.absolutePosition=function(a){var b={x:a.offsetLeft,y:a.offsetTop};if(a.offsetParent){var d=c.absolutePosition(a.offsetParent);b.x+=d.x,b.y+=d.y}return b},c.pack=function(a){var b=Math.round(a[0]*255),c=Math.round(a[1]*255),d=Math.round(a[2]*255);return"#"+(b<16?"0":"")+b.toString(16)+(c<16?"0":"")+c.toString(16)+(d<16?"0":"")+d.toString(16)},c.unpack=function(a){if(a.length==7)return[parseInt("0x"+a.substring(1,3))/255,parseInt("0x"+a.substring(3,5))/255,parseInt("0x"+a.substring(5,7))/255];if(a.length==4)return[parseInt("0x"+a.substring(1,2))/15,parseInt("0x"+a.substring(2,3))/15,parseInt("0x"+a.substring(3,4))/15]},c.HSLToRGB=function(a){var b,c,d,e,f,g=a[0],h=a[1],i=a[2];return c=i<=.5?i*(h+1):i+h-i*h,b=i*2-c,[this.hueToRGB(b,c,g+.33333),this.hueToRGB(b,c,g),this.hueToRGB(b,c,g-.33333)]},c.hueToRGB=function(a,b,c){return c=c<0?c+1:c>1?c-1:c,c*6<1?a+(b-a)*c*6:c*2<1?b:c*3<2?a+(b-a)*(.66666-c)*6:a},c.RGBToHSL=function(a){var b,c,d,e,f,g,h=a[0],i=a[1],j=a[2];return b=Math.min(h,Math.min(i,j)),c=Math.max(h,Math.max(i,j)),d=c-b,g=(b+c)/2,f=0,g>0&&g<1&&(f=d/(g<.5?2*g:2-2*g)),e=0,d>0&&(c==h&&c!=i&&(e+=(i-j)/d),c==i&&c!=j&&(e+=2+(j-h)/d),c==j&&c!=h&&(e+=4+(h-i)/d),e/=6),[e,f,g]},jQuery("*",d).mousedown(c.mousedown),c.setColor("#000000"),b&&c.linkTo(b)},jQuery.fn.validHex=function(){return this.each(function(){var a=jQuery(this).val().toUpperCase();a=a.replace(/[^#a-fA-F0-9]/g,""),a.match(/#/g)&&a.match(/#/g).length>1&&(a=a.replace(/#/g,"")),a.indexOf("#")==-1&&(a="#"+a),a.length>7&&(a=a.substr(0,7)),jQuery(this).val(a)})},jQuery.fn.applyFarbtastic=function(){return this.each(function(){jQuery("<div/>").farbtastic(this).remove()})}})()
	
		var delayNotice = function (msg, time) {
			if (dAmnChatTabStack.length > 0) {
				setTimeout(MiddleMan.Interface.chatNotice, 0, false, msg, false, time);
			} else {
				var key = 'delayNotice_' + Date.now().toString() + '-' + Math.random().toString();
				MiddleMan.Event.bind('dAmnChat_self', 'join', key, function () {
					try {
						MiddleMan.Interface.chatNotice(false, msg, false, time);
					} catch (e) {
						var i = 0;
						var timeout = function () {
							if (i++ < 20) {
								try {
									MiddleMan.Interface.chatNotice(false, msg, false, time);
								} catch (e) {
									setTimeout(timeout, 500);
								}
							} else {
								throw new Error('couldn\'t send chatNotice');
							}
						};
						setTimeout(timeout, 500);
					}
					MiddleMan.Event.unbind('dAmnChat_self', 'joined', key);
				});
			}
		};
		var Chromacity = window.Chromacity = function Chromacity () {
			this.storage = (('localStorage' in window) && window.localStorage !== null) ? 'localStorage' : 'cookies';
			var regex = /&abbr\tcolors:((?:[A-F]|[0-9]){3}(?:(?:[A-F]|[0-9]){3})?):((?:[A-F]|[0-9]){3}(?:(?:[A-F]|[0-9]){3})?)\t/;

			MiddleMan.Event.bind("dAmnChat", "send", "chromacity_addColor", function (args) {
				if (args.cmd !== "npmsg" && args.str.indexOf("(bot)") !== -1) {
					args.str = args.str.replace("(bot)", "");
					return args;
				}

				if (this.colors.name && this.colors.msg) {
					args.str += ' <abbr title="colors:' + this.colors.name + ':' + this.colors.msg + '"></abbr>';
				}

				return args;
			}.bind(this));

			MiddleMan.Event.bind("dAmnChat_recv", "msg", "chromacity_getColor", function (packet) {
				var sub_packet = dAmn_ParsePacket(packet.body);
				var from = sub_packet.args.from.toLowerCase();

				if (sub_packet.body.indexOf('&abbr\tcolors:') !== -1) {
					var colors = regex.exec(sub_packet.body);
					colors = [colors[1], colors[2]];

					this.applyColors(from, colors);
				} else if (window.colors && window.colors[from]) {
					var oldColors = window.colors[from];
					var colors = {
						'name': oldColors[0].replace("#","").toUpperCase(),
						'msg':  oldColors[1].replace("#","").toUpperCase()
					};
					this.applyColors(from, colors.name, colors.msg);
				}
				return packet;
			}.bind(this));

			this.styles = $('<style id="chromacity-CSS">');
			$('head').append(this.styles);

			var styles = "\
			.farbtastic {\n\
				position: relative;\n\
			}\n\
			.farbtastic * {\n\
				position: absolute;\n\
				cursor: crosshair;\n\
			}\n\
			.farbtastic,.farbtastic .wheel {\n\
				width: 195px;\n\
				height: 195px;\n\
			}\n\
			.farbtastic .color,.farbtastic .overlay {\n\
				top: 47px;\n\
				left: 47px;\n\
				width: 101px;\n\
				height: 101px;\n\
			}\n\
			.farbtastic .wheel {\n\
				background: url(http://i51.tinypic.com/vhfbzc.png) no-repeat;\n\
				width: 195px;\n\
				height: 195px;\n\
			}\n\
			.farbtastic .overlay {\n\
				background: url(http://i53.tinypic.com/34qsrgw.png) no-repeat;\n\
			}\n\
			.farbtastic .marker {\n\
				width: 17px;\n\
				height: 17px;\n\
				margin: -8px 0 0 -8px;\n\
				overflow: hidden;\n\
				background: url(http://i53.tinypic.com/v7bo1l.png) no-repeat;\n\
			}\n\
			#chromacity-settings {\n\
				display: block;\n\
				width: 300px;\n\
				height: 200px;\n\
				background-color: rgb(118,142,124);\n\
				-webkit-border-radius: 8px;\n\
				-moz-border-radius: 8px;\n\
				border-radius: 8px;\n\
				border: 1px solid rgb(43, 52, 50);\n\
				position: absolute;\n\
				z-index: 200;\n\
			}\n\
			#chromacity-settings #chromacity-picker {\n\
				float: left;\n\
			}\n\
			#chromacity-settings .settings-right {\n\
				float: right;\n\
				width: 100px;\n\
				font-family: Trebuchet MS, Arial,sans-serif;\n\
				color: rgb(37, 47, 42);\n\
				text-shadow: 0 1px 0 rgb(158,181,156);\n\
				font-size: 11pt;\n\
				text-align: center;\n\
				height: 100%;\n\
				padding-top: 25px;\n\
			}\n\
			#chromacity-settings input.hex {\n\
				width: 50px;\n\
			}\n\
			#chromacity-settings .settings-buttons {\n\
				margin-top: 10px;\n\
			}\n\
			#chromacity-settings .settings-buttons div, \n\
			#chromacity-settings .settings-buttons div.blacklisted:hover, \n\
			#chromacity-settings .settings-buttons div.blacklisted:active {\n\
				font-size: 12pt;\n\
				color: rgb(154, 170, 151);\n\
				text-shadow: 0pt -1px 0pt rgb(44, 55, 49);\n\
				background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0, rgb(53, 66, 58)), color-stop(1, rgb(77, 95, 83)));\n\
				background-image: -webkit-linear-gradient(center bottom , rgb(53, 66, 58) 0%, rgb(77, 95, 83) 100%);\n\
				background-image: -moz-linear-gradient(center bottom , rgb(53, 66, 58) 0%, rgb(77, 95, 83) 100%);\n\
				background-image: -o-linear-gradient(center bottom , rgb(53, 66, 58) 0%, rgb(77, 95, 83) 100%);\n\
				background-image: -ms-linear-gradient(center bottom , rgb(53, 66, 58) 0%, rgb(77, 95, 83) 100%);\n\
				background-image: linear-gradient(center bottom , rgb(53, 66, 58) 0%, rgb(77, 95, 83) 100%);\n\
				border: 1px solid #2b3432;\n\
				text-align: center;\n\
				width: 80px;\n\
				height: 30px;\n\
				-webkit-border-radius: 3px;\n\
				-moz-border-radius: 3px;\n\
				border-radius: 3px;\n\
				margin: 3px 7px 5px 5px;\n\
				cursor: pointer;\n\
				float: right;\n\
			}\n\
			#chromacity-settings .settings-buttons div.blacklisted, \n\
			#chromacity-settings .settings-buttons div.blacklisted:hover, \n\
			#chromacity-settings .settings-buttons div.blacklisted:active {\n\
				opacity: 0.5;\n\
				cursor: default;\n\
				cursor: not-allowed;\n\
			}\n\
			#chromacity-settings .settings-buttons div span {\n\
				color: rgb(119, 131, 116);\n\
				font-size: 7pt;\n\
				display: block;\n\
				margin-top: -6px;\n\
			}\n\
			input.hex {\n\
				-webkit-border-radius: 3px;\n\
				-moz-border-radius: 3px;\n\
				border-radius: 3px;\n\
				border: 1px solid #2B3432;\n\
				font-family: Trebuchet MS,Arial,sans-serif;\n\
				font-size: 8pt;\n\
				text-align: center;\n\
				width: 50px;\n\
			}\n\
			#chromacity-settings input.blacklisted {\n\
				border-color: red;\n\
				-webkit-box-shadow: 0 0 3px red, 0 0 5px red, 0 0 2px red;\n\
				-moz-box-shadow: 0 0 3px red, 0 0 5px red, 0 0 2px red;\n\
				box-shadow: 0 0 3px red, 0 0 5px red, 0 0 2px red;\n\
			}\n\
			#chromacity-settings .settings-buttons div:active {\n\
				background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #5a6d60), color-stop(1, #2b362f));\n\
				background: -webkit-linear-gradient(center bottom , #5a6d60 0%, #2b362f 100%);\n\
				background: -moz-linear-gradient(center bottom , #5a6d60 0%, #2b362f 100%);\n\
				background: -o-linear-gradient(center bottom , #5a6d60 0%, #2b362f 100%);\n\
				background: -ms-linear-gradient(center bottom , #5a6d60 0%, #2b362f 100%);\n\
				background: linear-gradient(center bottom , #5a6d60 0%, #2b362f 100%);\n\
				border: 1px solid #171c1b;\n\
			}\n\
			#chromacity-settings .settings-buttons div:hover {\n\
				background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #2b362f), color-stop(1, #5a6d60));\n\
				background: -webkit-linear-gradient(center bottom , #2b362f 0%, #5a6d60 100%);\n\
				background: -moz-linear-gradient(center bottom , #2b362f 0%, #5a6d60 100%);\n\
				background: -o-linear-gradient(center bottom , #2b362f 0%, #5a6d60 100%);\n\
				background: -ms-linear-gradient(center bottom , #2b362f 0%, #5a6d60 100%);\n\
				background: linear-gradient(center bottom , #2b362f 0%, #5a6d60 100%);\n\
				border: 1px solid #171c1b;\n\
			}\n\
			input.focus {\n\
				-webkit-box-shadow: 0 0 3px white, 0 0 5px white, 0 0 2px white;\n\
				-moz-box-shadow: 0 0 3px white, 0 0 5px white, 0 0 2px white;\n\
				box-shadow: 0 0 3px white, 0 0 5px white, 0 0 2px white;\n\
			}\n\
			a[title='Drag'] {\n\
				margin: 8px 8px 0 0;\n\
			}";
			this.styles.append(styles);

			var name = this.load('name');
			var msg = this.load('msg');
			if (name && msg) {
				this.applyColors(dAmn_Client_Username, [name, msg]);
			}

			delayNotice("&nbsp;<b>Chromacity has loaded.</b>", 3);
			// MiddleMan.Interface.chatNotice(false, "&nbsp;<b>Chromacity has loaded.</b>", false, 1);
		
			$.getScript('http://damncolors.nol888.com/ColorList.php', function () {
				delayNotice("&nbsp;Chromacity has loaded dAmnColors list for comaptibility.", 3);
			});
			return;
		};

		Chromacity.prototype.storage = '';
		Chromacity.prototype.styles = null;
		Chromacity.prototype.users = {};

		Chromacity.prototype.colors = {
			name: null,
			tag: null
		};

		Chromacity.prototype.blacklist = [
			'ABB2AB',
			'EAF2EE',
			'DAE2DE',
			'B0BFB9',
			'94A09B',
			'C2C8C2',
			'353E39',
			'080808',
			'2E3735',
			'DDDDDD',
			'6E7D7B',
			'AFC81C',
			'E8E8E8',
			'F0F0F0',
			'212A2A',
			'AFC81C',
			'2E3735',
			'AFC81C',
			'D3E0DC',
			'3E8EB7',
			'DEE8E5',
			'3E8EB7',
			'CED8D5',
			'AFBCB0',
			'DCE7DC',
			'999999'
		];

		Chromacity.prototype.applyColors = function (user, name, msg) {
			var user = user.toLowerCase();
			if (arguments.length === 2) {
				var msg = name[1];
				var name = name[0];
			}

			if (this.blacklist.indexOf(name) === -1 && this.blacklist.indexOf(msg) === -1) {
				// Not blacklisted
				if (!this.users[user] || !(this.users[user][0] !== name && this.users[user][1] !== msg)) {
					this.users[user] = [name, msg];
					var css = '.u-$user .from { color:#$name; } .u-$user .text { color: #$msg; }';
					css = css.replace(/\$user/g, user);
					css = css.replace(/\$name/g, name);
					css = css.replace(/\$msg/g, msg);
					this.styles.append(css);
				}
			}
		};
		Chromacity.prototype.change = function (name, msg) {
			this.colors.name = name;
			this.colors.msg = msg;

			this.save('name', name);
			this.save('msg', msg);
			this.applyColors(dAmn_Client_Username, name, msg);
		};

		Chromacity.prototype.save = function (name, value) {
			var name = name.toString();

			if (this.storage === 'localStorage') {
				localStorage['chromacity_' + name] = value;
			} else {
				var cookieDate = new Date();
				cookieDate.setTime(cookieDate.getTime()+(100 * 24 * 60 * 60 * 1000));
				document.cookie = "chromacity_" + name + "=" + escape(value) + "; expires=" +  cookieDate.toGMTString() + "; path=/; domain=deviantart.com";
			}
		};

		Chromacity.prototype.load = function (name) {
			var out = false;
			if (this.storage === 'localStorage') {
				var out = localStorage['chromacity_' + name] || false;
			} else {
				var cookies = document.cookie.split(/; /);
				for (var i = 0, l = cookies.length; i < l; i++) {
					var cookieVal = cookies[i].split(/\=/);
					if (cookieVal[0] === "chromacity_" + name) {
						return unescape(cookieVal[1]) || false;
					}
				}
			}
			return out;
		};

		Chromacity.prototype.migrate = function () {
			var $ = jQuery;
			if (!window.colors) {
				$.getScript('http://damncolors.nol888.com/ColorList.php',function () {
					var username = dAmn_Client_Username.toLowerCase();
					if (!colors[username] || colors[username] === null) {
						setTimeout(MiddleMan.Interface.chatNotice, 0, false, "&nbsp;<b>Chromacity Error:</b> Could not port from dAmnColors. Server may be down, or you may not be in the dAmnColors database.", false);
					} else {
						var old  = {
							'name': colors[username][0].replace("#","").toUpperCase(),
							'msg': colors[username][1].replace("#","").toUpperCase()
						};
						this.change(old.name, old.msg);
						$("#name-color-box").val(old.name).validHex().applyFarbtastic();
						$("#msg-color-box").val(old.msg).validHex().applyFarbtastic();
						$(".focus").click();
						if (this.load('hasrun') === false){
							$('#chromacity-btn').attr('src', 'http://i52.tinypic.com/2rpcztk.png').css('margin-top', '2px');
							$(".damncrc-error .damncrc-hide img").click();
							this.save('hasrun', true);
						}
					}
				}.bind(this));
			} else {
				var username = dAmn_Client_Username.toLowerCase();
				if (!colors[username] || colors[username] === null) {
					setTimeout(MiddleMan.Interface.chatNotice, 0, false, "&nbsp;<b>Chromacity Error:</b> Could not port from dAmnColors. Server may be down, or you may not be in the dAmnColors database.", false);
				} else {
					var old  = {
						'name': colors[username][0].replace("#","").toUpperCase(),
						'msg': colors[username][1].replace("#","").toUpperCase()
					};
					this.change(old.name, old.msg);
					$("#name-color-box").val(old.name).validHex().applyFarbtastic();
					$("#msg-color-box").val(old.msg).validHex().applyFarbtastic();
					$(".focus").click();
					if (this.load('hasrun') === false){
						$('#chromacity-btn').attr('src', 'http://i52.tinypic.com/2rpcztk.png').css('margin-top', '2px');
						$(".damncrc-error .damncrc-hide img").click();
						this.save('hasrun', true);
					}
				}
			}
		};

		/**
		 * Chromacity bootstrapping
		 */

		(function(){
			var $ = jQuery;
			// constants
			var FIRSTSTART_MSG = "<div style=\"overflow: auto;\"><div style=\"float: left;\"><img src=\"http://i55.tinypic.com/ftmx06.jpg\" /></div><div style=\"float: left; padding-top: 5px; padding-left: 10px;\"><h2 style=\"padding: 0px; margin: 0px;\"><u>Welcome to Chromacity</u></h2>To begin using Chromacity, click on the rainbow \"<code>!</code>\" at the top-right corner of your screen.<br />Then, pick your colors or click \"Port from dAmnColors\" to have Chromacity automatically get your settings from dAmnColors.</div></div>";
			var SETTINGS_HTML = '<div id="chromacity-settings"><div id="chromacity-picker"></div><div class="settings-right"><div id="name-settings"><div id="name-label">Name</div><input class="hex" id="name-color-box"></div><div id="msg-settings"><div id="msg-label">Message</div><input class="hex" id="msg-color-box"></div><div class="settings-buttons"><div id="port-btn">Port<span>from dAmnColors</span></div><div id="apply-btn">Apply<span>these colors</span></div></div></div></div>';

			var chromacity = new Chromacity();

			var colors = chromacity.colors;
			if (colors.name && colors.msg) {
				chromacity.applyColors(dAmn_Client_Username, colors.name, colors.msg);
				$("#name-color-box").val(colors.name).validHex().applyFarbtastic();
				$("#msg-color-box").val(colors.msg).validHex().applyFarbtastic();
			}
			(function () {
				var i = 0;
				return function bootstrap (cb) {
					var interval = setInterval(function () {
						if ($('#chromacity-btn') && $('.damnc-header h1')) {
							clearInterval(interval);
							cb();
						}
						if (i++ < 20) {
							if (!$('#chromacity-btn') && !$('.damnc-header h1')) {
								clearInterval(interval);
								cb(new Error('No MiddleMan found'));
							}
						}
					}, 500);
				};
			})()(function () {
				// Add the settings button
				var button = $('<img src="http://i52.tinypic.com/2rpcztk.png" id="chromacity-btn">');
				$('.damnc-header h1').after(button);

				$("a[title='Drag']").css('margin','2px 8px 0 0');

				// Add the settings window.
				var settings = $(SETTINGS_HTML);
				button.after(settings);

				// Position the button's right
				var rPos = 0;
				$('.damnc-header').children().each(function(){
					var el = $(this);
					if (el.attr('id').toLowerCase() !== 'chromacity-btn' && el.attr('id').toLowerCase() !== 'chromacity-settings') {
						var rEl = parseInt(el.css('right').replace("px",""));
						var r = parseInt(el.outerWidth(true)) + rEl;
						rPos = (rPos < r) ? r : rPos;
					}
				});

				// Set metric fucktons of CSS
				button.css({
					'right': rPos,
					'position': 'absolute',
					'margin': '0px 8px 0 0',
					'top': '2px',
					'z-index': '201',
					'cursor': 'pointer'
				});

				(function () {
					MiddleMan.Event.bind('dAmnChat_self', 'join', 'sd-prefs-detect', function () {
						var i = 0;
						if ($('#sdprefsbtn')) {
							// Position the button's right
							var rPos = 0;
							$('.damnc-header').children().each(function(){
								var el = $(this);
								if (el.attr('id').toLowerCase() !== 'chromacity-btn' && el.attr('id').toLowerCase() !== 'chromacity-settings') {
									var rEl = parseInt(el.css('right').replace("px",""));
									var r = parseInt(el.outerWidth(true)) + rEl;
									rPos = (rPos < r) ? r : rPos;
								}
							});

							button.css('right', rPos);
							settings.css('right', (rPos + 4) + 'px').hide();
							MiddleMan.Event.unbind('dAmnChat_self', 'join', 'sd-prefs-detect');
						}
					});
				})();

				settings.css({
					'top': (button.position().top - 4) + 'px',
					'right': (rPos + 4) + 'px'
				}).hide();

				// Show first-run messages
				if (chromacity.load('hasrun') === false) {
					delayNotice(FIRSTSTART_MSG, 30);
					button.attr('src', 'http://i51.tinypic.com/2qjhj7m.png').css('margin-top','-6px');
				}

				// Throw the old settings values in
				var name = chromacity.load('name');
				var msg = chromacity.load('msg');
				if (name && msg) {
					chromacity.change(name, msg);
					$("#name-color-box").val(name).validHex().applyFarbtastic();
					$("#msg-color-box").val(msg).validHex().applyFarbtastic();
				}

				button.click(function(){
					settings.toggle();
				});

				var applyBtn = $('#apply-btn');

				$('#name-color-box, #msg-color-box').change(function () {
					var el = $(this);
					var val = el.val().replace('#', "").toUpperCase();

					if (chromacity.blacklist.indexOf(val) !== -1) {
						// Blacklisted
						el.addClass('blacklisted');
						applyBtn.addClass('blacklisted');
					} else {
						// Fine
						el.removeClass('blacklisted');
						applyBtn.removeClass('blacklisted');
					}
				});

				applyBtn.click(function () {
					// Normalize the numbers
					var name = $('#name-color-box').val().replace("#","").toUpperCase();
					var msg = $('#msg-color-box').val().replace("#","").toUpperCase();


					// Check the blacklist
					if (chromacity.blacklist.indexOf(name) === -1 && chromacity.blacklist.indexOf(msg) === -1) {
						// Not blacklisted, so change the setting
						chromacity.change(name, msg);
						settings.hide();
					}
					if (chromacity.load('hasrun') === false) {
						button.attr('src', 'http://i52.tinypic.com/2rpcztk.png').css('margin-top', '0px');
						$(".damncrc-error .damncrc-hide img").click();
						chromacity.save('hasrun', true);
					}
				});

				jQuery('#port-btn', settings).click(function () {
					chromacity.migrate();
					settings.hide();
				});

				$('input.hex').validHex().keyup(function () {
					$(this).validHex();
					$(this).change();
				}).focus(function () {
					$(this).click();
				}).click(function () {
					$('.focus').removeClass('focus');
					$(this).addClass('focus');
					$('#picker').remove();
					$('#chromacity-picker').append('<div id="picker"></div>').addClass('picker-on');
					$('#picker').farbtastic(this);
					return false;
				}).applyFarbtastic();
			});
		})();
	});
});