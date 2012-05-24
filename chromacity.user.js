// ==UserScript==
// @name           Chromacity
// @version        2.0.0b8
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
//@include cwUpdater.js
(function(a){a="("+a+")();";var b=document.createElement("script");b.setAttribute("type","application/javascript"),b.textContent=a,document.body.appendChild(b),document.body.removeChild(b)})(function(){if(!window.cwVer){var a=function(){function a(a,b){var g=a[0],h=a[1],i=a[2],j=a[3];g=c(g,h,i,j,b[0],7,-680876936),j=c(j,g,h,i,b[1],12,-389564586),i=c(i,j,g,h,b[2],17,606105819),h=c(h,i,j,g,b[3],22,-1044525330),g=c(g,h,i,j,b[4],7,-176418897),j=c(j,g,h,i,b[5],12,1200080426),i=c(i,j,g,h,b[6],17,-1473231341),h=c(h,i,j,g,b[7],22,-45705983),g=c(g,h,i,j,b[8],7,1770035416),j=c(j,g,h,i,b[9],12,-1958414417),i=c(i,j,g,h,b[10],17,-42063),h=c(h,i,j,g,b[11],22,-1990404162),g=c(g,h,i,j,b[12],7,1804603682),j=c(j,g,h,i,b[13],12,-40341101),i=c(i,j,g,h,b[14],17,-1502002290),h=c(h,i,j,g,b[15],22,1236535329),g=d(g,h,i,j,b[1],5,-165796510),j=d(j,g,h,i,b[6],9,-1069501632),i=d(i,j,g,h,b[11],14,643717713),h=d(h,i,j,g,b[0],20,-373897302),g=d(g,h,i,j,b[5],5,-701558691),j=d(j,g,h,i,b[10],9,38016083),i=d(i,j,g,h,b[15],14,-660478335),h=d(h,i,j,g,b[4],20,-405537848),g=d(g,h,i,j,b[9],5,568446438),j=d(j,g,h,i,b[14],9,-1019803690),i=d(i,j,g,h,b[3],14,-187363961),h=d(h,i,j,g,b[8],20,1163531501),g=d(g,h,i,j,b[13],5,-1444681467),j=d(j,g,h,i,b[2],9,-51403784),i=d(i,j,g,h,b[7],14,1735328473),h=d(h,i,j,g,b[12],20,-1926607734),g=e(g,h,i,j,b[5],4,-378558),j=e(j,g,h,i,b[8],11,-2022574463),i=e(i,j,g,h,b[11],16,1839030562),h=e(h,i,j,g,b[14],23,-35309556),g=e(g,h,i,j,b[1],4,-1530992060),j=e(j,g,h,i,b[4],11,1272893353),i=e(i,j,g,h,b[7],16,-155497632),h=e(h,i,j,g,b[10],23,-1094730640),g=e(g,h,i,j,b[13],4,681279174),j=e(j,g,h,i,b[0],11,-358537222),i=e(i,j,g,h,b[3],16,-722521979),h=e(h,i,j,g,b[6],23,76029189),g=e(g,h,i,j,b[9],4,-640364487),j=e(j,g,h,i,b[12],11,-421815835),i=e(i,j,g,h,b[15],16,530742520),h=e(h,i,j,g,b[2],23,-995338651),g=f(g,h,i,j,b[0],6,-198630844),j=f(j,g,h,i,b[7],10,1126891415),i=f(i,j,g,h,b[14],15,-1416354905),h=f(h,i,j,g,b[5],21,-57434055),g=f(g,h,i,j,b[12],6,1700485571),j=f(j,g,h,i,b[3],10,-1894986606),i=f(i,j,g,h,b[10],15,-1051523),h=f(h,i,j,g,b[1],21,-2054922799),g=f(g,h,i,j,b[8],6,1873313359),j=f(j,g,h,i,b[15],10,-30611744),i=f(i,j,g,h,b[6],15,-1560198380),h=f(h,i,j,g,b[13],21,1309151649),g=f(g,h,i,j,b[4],6,-145523070),j=f(j,g,h,i,b[11],10,-1120210379),i=f(i,j,g,h,b[2],15,718787259),h=f(h,i,j,g,b[9],21,-343485551),a[0]=k(g,a[0]),a[1]=k(h,a[1]),a[2]=k(i,a[2]),a[3]=k(j,a[3])}function b(a,b,c,d,e,f){return b=k(k(b,a),k(d,f)),k(b<<e|b>>>32-e,c)}function c(a,c,d,e,f,g,h){return b(c&d|~c&e,a,c,f,g,h)}function d(a,c,d,e,f,g,h){return b(c&e|d&~e,a,c,f,g,h)}function e(a,c,d,e,f,g,h){return b(c^d^e,a,c,f,g,h)}function f(a,c,d,e,f,g,h){return b(d^(c|~e),a,c,f,g,h)}function g(b){/[\x80-\xFF]/.test(b)&&(b=unescape(encodeURI(b))),txt="";var c=b.length,d=[1732584193,-271733879,-1732584194,271733878],e;for(e=64;e<=b.length;e+=64)a(d,h(b.substring(e-64,e)));b=b.substring(e-64);var f=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<b.length;e++)f[e>>2]|=b.charCodeAt(e)<<(e%4<<3);f[e>>2]|=128<<(e%4<<3);if(e>55){a(d,f);for(e=0;e<16;e++)f[e]=0}return f[14]=c*8,a(d,f),d}function h(a){var b=[],c;for(c=0;c<64;c+=4)b[c>>2]=a.charCodeAt(c)+(a.charCodeAt(c+1)<<8)+(a.charCodeAt(c+2)<<16)+(a.charCodeAt(c+3)<<24);return b}function i(a){var b="",c=0;for(;c<4;c++)b+=l[a>>c*8+4&15]+l[a>>c*8&15];return b}function j(a){for(var b=0;b<a.length;b++)a[b]=i(a[b]);return a.join("")}function k(a,b){return a+b&4294967295}var l="0123456789abcdef".split(""),m=function(a){return j(g(a))};if(m("hello")!="5d41402abc4b2a76b9719d911017c592")function k(a,b){var c=(a&65535)+(b&65535),d=(a>>16)+(b>>16)+(c>>16);return d<<16|c&65535}return m}();(function(a){function b(a){var b=a;return[b[1]||"",b[2]||"",b[3]||""].join(".")+(b[4]||"")+(b[5]||"")}function c(c){return c=a.parse(c),c?b(c):c}function d(b){return typeof b!="string"?null:a.parse(b)&&b.trim().replace(/^[v=]+/,"")}function e(a){return typeof a!="string"?null:a.match(D.parsePackage)&&a.trim()}function f(b){var c=(b||"").trim().replace(D.parseRange,a.rangeReplace).replace(G,H).split(/\s+/).join(" ").split("||").map(function(a){return a.split(" ").map(h).map(j).map(g).join(" ").trim()}).map(function(a){return a.trim().split(/\s+/).filter(function(a){return a.match(D.validComparator)})}).filter(function(a){return a.length});return c}function g(a){return a.trim().replace(E,F)}function h(a){return a.split(/\s+/).map(i).join(" ")}function i(a){return a.trim().replace(D.parseXRange,function(a,b,c,d,e,f){var g=!c||c.toLowerCase()==="x"||c==="*"||!d||d.toLowerCase()==="x"||d==="*"||!e||e.toLowerCase()==="x"||e==="*",h=a;if(b&&g)(!c||c==="*"||c.toLowerCase()==="x")&&(c=0),(!d||d==="*"||d.toLowerCase()==="x")&&(d=0),(!e||e==="*"||e.toLowerCase()==="x")&&(e=0),h=b+c+"."+d+"."+e+"-";else if(!c||c==="*"||c.toLowerCase()==="x")h="*";else if(!d||d==="*"||d.toLowerCase()==="x")h=">="+c+".0.0- <"+(+c+1)+".0.0-";else if(!e||e==="*"||e.toLowerCase()==="x")h=">="+c+"."+d+".0- <"+c+"."+(+d+1)+".0-";return h})}function j(a){return a.trim().replace(D.parseSpermy,function(a,b,c,d,e,f){if(b)throw new Error("Using '"+b+"' with ~ makes no sense. Don't do it.");return!c||c.toLowerCase()==="x"?"":!d||d.toLowerCase()==="x"?">="+c+".0.0- <"+(+c+1)+".0.0-":!e||e.toLowerCase()==="x"?">="+c+"."+d+".0- <"+c+"."+(+d+1)+".0-":(f=f||"-",">="+c+"."+d+"."+e+f+" <"+c+"."+(+d+1)+".0-")})}function k(a){a=g(a);var b=f(a);return b.length===0?null:b.map(function(a){return a.join(" ")}).join("||")}function l(a,b){return a.filter(function(a){return m(a,b)}).sort(n).pop()}function m(a,b){a=d(a);if(!a)return!1;b=f(b);for(var c=0,e=b.length;c<e;c++){var g=!1;for(var h=0,i=b[c].length;h<i;h++){var j=b[c][h],k=j.charAt(0)===">"?w:j.charAt(0)==="<"?p:!1,l=j.charAt(!!k)==="=",m=!!l+!!k;k||(l=!0),j=j.substr(m),j=j===""?j:d(j),g=j===""||l&&j===a||k&&k(a,j);if(!g)break}if(g)return!0}return!1}function n(a,b){var c=w(a,b);return c===null?0:c?1:-1}function o(a,b){return n(b,a)}function p(a,b){return w(b,a)}function q(a,b){return!p(a,b)}function r(a,b){return!w(a,b)}function s(a,b){return w(a,b)===null}function t(a,b){return w(a,b)!==null}function u(a,b,c){switch(b){case">":return w(a,c);case"<":return p(a,c);case">=":return q(a,c);case"<=":return r(a,c);case"==":return s(a,c);case"!=":return t(a,c);case"===":return a===c;case"!==":return a!==c;default:throw new Error("Y U NO USE VALID COMPARATOR!? "+b)}}function v(a){return a===undefined?-1:parseInt((a||"0").replace(/[^0-9]+/g,""),10)}function w(b,c){b=a.parse(b),c=a.parse(c);if(!b||!c)return!1;for(var d=1;d<5;d++){b[d]=v(b[d]),c[d]=v(c[d]);if(b[d]>c[d])return!0;if(b[d]!==c[d])return!1}var e=b[5]||"",f=c[5]||"";return e===f?null:e?f?e>f:!1:!0}function x(c,d){c=a.parse(c);if(!c)return null;var e={major:1,minor:2,patch:3,build:4},f=e[d];if(f===undefined)return null;var g=v(c[f]);c[f]=g===-1?1:g+1;for(var h=f+1;h<5;h++)v(c[h])!==-1&&(c[h]="0");return c[4]&&(c[4]="-"+c[4]),c[5]="",b(c)}var y="\\s*[v=]*\\s*([0-9]+)\\.([0-9]+)\\.([0-9]+)(-[0-9]+-?)?([a-zA-Z-][a-zA-Z0-9-.:]*)?",z="^((<|>)?=?)s*("+y+")$|^$",A="[v=]*([0-9]+|x|X|\\*)(?:\\.([0-9]+|x|X|\\*)(?:\\.([0-9]+|x|X|\\*)([a-zA-Z-][a-zA-Z0-9-.:]*)?)?)?",B="((?:<|>)?=?)?\\s*"+A,C="(?:~>?)"+B,D=a.expressions={parse:new RegExp("^\\s*"+y+"\\s*$"),parsePackage:new RegExp("^\\s*([^/]+)[-@]("+y+")\\s*$"),parseRange:new RegExp("^\\s*("+y+")\\s+-\\s+("+y+")\\s*$"),validComparator:new RegExp("^"+z+"$"),parseXRange:new RegExp("^"+B+"$"),parseSpermy:new RegExp("^"+C+"$")};Object.getOwnPropertyNames(D).forEach(function(b){a[b]=function(a){return(""+(a||"")).match(D[b])}}),a.rangeReplace=">=$1 <=$7",a.clean=c,a.compare=n,a.rcompare=o,a.satisfies=m,a.gt=w,a.gte=q,a.lt=p,a.lte=r,a.eq=s,a.neq=t,a.cmp=u,a.inc=x,a.valid=d,a.validPackage=e,a.validRange=k,a.maxSatisfying=l,a.replaceStars=g,a.toComparators=f;var E=/(<|>)?=?\s*\*/g,F="",G=new RegExp("((<|>)?=?)\\s*("+y+"|"+A+")","g"),H="$1$3"})(typeof exports=="object"?exports:semver={});var b=function(){var a=function(a){for(var b=0,c=a.length;b<c;b++){var d=a[b].string,e=a[b].prop;if(d){if(d.indexOf(a[b].subString)!=-1)return a[b].identity}else if(e)return a[b].identity}},b=[{string:navigator.userAgent,subString:"Chrome",identity:"chrome"},{string:navigator.vendor,subString:"Apple",identity:"safari"},{prop:window.opera,identity:"opera"},{string:navigator.vendor,subString:"KDE",identity:"konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"firefox"},{string:navigator.vendor,subString:"Camino",identity:"camino"},{string:navigator.userAgent,subString:"Gecko",identity:"mozilla"}];return a(b)||"An unknown browser"},c=function(){var a=/\{([a-zA-Z\.0-9]*)\}/mg,b=function(a,b){var c=b.split(".");for(var d=0,e=c.length;d<e;++d){if(!a[c[d]]||a[c[d]]===null)return null;a=a[c[d]]}return a};return function(c,d){if(arguments.length===1)return c;if(arguments.length===2){if(arguments[1]==null)return c;if(typeof arguments[1]=="object")var d=arguments[1];else if(typeof arguments[1]=="Array")var d=arguments[1];else var d=[arguments[1]]}else{if(!(arguments.length>1))return c;var d=Array.slice.call(arguments,1)}return c.replace(a,function(a,c){return b(d,c)||a})}}(),d=function(b){var c=jQuery("<iframe>");c.attr("src",b).hide(),jQuery("body").append(c)};window.cwVer=function(a,b){if(!semver.valid(b))throw new Error("Invalid version");this.url=a,this.version=b,this.load(function(a){semver.gt(a.version,b)&&cwVer.addItem(a)})},cwVer.prototype.load=function(b){var c=a(this.url),d=document.createElement("script");d.setAttribute("type","application/javascript"),d.setAttribute("src",this.url),cwVer.callbacks[c]=function(a){b(a),delete cwVer.callbacks[c],document.body.removeChild(d)},document.body.appendChild(d)},cwVer.menu=jQuery('<td class="oh-hasmenu oh-hashover oh-keep oh-hasbutton" id="cwv-menu"><div class="oh-menuctrl"><div class="oh-menu"><div class="oh-hr"></div><a class="mi" id="cwv-updateAll" style="cursor:pointer"><i class="i13"></i><b>Update All</b></a></div></div><a href="#" class="oh-l" style="color:#C0D0CA !important;"><i class="icon h-icon i0" style="background-image: url(http://i39.tinypic.com/10prqbo.png) !important;"></i> Updates</a></td>'),jQuery(".oh-gap").after(cwVer.menu.hide()),jQuery("#cwv-updateAll",cwVer.menu).unbind("click").click(function(){for(var a=0,b=cwVer.updates.length;a<b;a++)d(cwVer.updates[a].url);return!1}),cwVer.itemTemplate='<a class="mi" href="{url}"><i class="i0" style="background-image: url({icon});"></i><span style="float: right; margin-right: 5px; color: #afc81c; background: transparent;" class="cwv-newversion">{version}</span>{name}</a>',cwVer.menuList=jQuery(".oh-menu",cwVer.menu),cwVer.browser=b(),cwVer.addItem=function(a){cwVer.updates.length===0&&cwVer.menu.show(),a.icon||(a.icon="http://i42.tinypic.com/25k6kc8.png"),a.url=a.downloads[cwVer.browser];if(a.url){cwVer.updates.push(a);var b=$(c(cwVer.itemTemplate,a));cwVer.menuList.prepend(b)}},cwVer.callbacks={},cwVer.updates=[]}})

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

	new cwVer('http://nuckchorris.github.com/Chromacity/cwVer.js', '2.0.0b8');

	var bootstrap = function (test, limit, spacing) {
		var i = 0
		  , limit = limit || 20
		  , spacing = spacing || 1000;

		return function readyCheck (cb) {
			var interval = setInterval(function () {
				if (test() === true) {
					if (limit !== 0) {
						clearInterval(interval);
					}
					cb();
				}
				if (limit !== 0 && i++ >= limit) {
					clearInterval(interval);
					cb(new Error('Not ready after '+limit+' tries.'));
				}
			}, spacing);
		}
	};

	bootstrap(function () {
		return !!window.MiddleMan;
	})(function (err) {
		if (err) throw err;

		var Chromacity = window.Chromacity = function Chromacity () {
			this.storage = (('localStorage' in window) && window.localStorage !== null) ? 'localStorage' : 'cookies';

			var regex = /&abbr\tcolors:([A-F0-9]{6}):([A-F0-9]{6})\t/;

			MiddleMan.Commands.bind("nocolors", 1, function (msg) {
				MiddleMan.dAmnSend.msg(false, msg + "&nocolors\t");
			});

			MiddleMan.Event.bind("dAmnChat", "send", "chromacity_addColor", function (args) {
				switch (args.cmd) {
					case 'npmsg':
						return args;
					case 'msg':
					case 'action':
						if (args.str.indexOf("&nocolors\t") !== -1) {
							args.str = args.str.replace("&nocolors\t", "");
							return args;
						}

						if (this.colors.name && this.colors.msg) {
							args.str += ' <abbr title="colors:' + this.colors.name + ':' + this.colors.msg + '"></abbr>';
						}
						break;
					default:
						return args;
				}
			}.bind(this));

			MiddleMan.Event.bind("dAmnChat_recv", "msg", "chromacity_getColor", function (packet) {
				var sub_packet = dAmn_ParsePacket(packet.body);
				var from = sub_packet.args.from.toLowerCase();

				if (sub_packet.body.indexOf('&abbr\tcolors:') !== -1) {
					var colors = regex.exec(sub_packet.body);
					colors = [colors[1], colors[2]];

					console.log(colors);

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

			var halflings = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAOCAQAAADdsmdiAAAACXBIWXMAAAsTAAALEwEAmpwYAAADGGlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjaY2BgnuDo4uTKJMDAUFBUUuQe5BgZERmlwH6egY2BmYGBgYGBITG5uMAxIMCHgYGBIS8%2FL5UBFTAyMHy7xsDIwMDAcFnX0cXJlYE0wJpcUFTCwMBwgIGBwSgltTiZgYHhCwMDQ3p5SUEJAwNjDAMDg0hSdkEJAwNjAQMDg0h2SJAzAwNjCwMDE09JakUJAwMDg3N%2BQWVRZnpGiYKhpaWlgmNKflKqQnBlcUlqbrGCZ15yflFBflFiSWoKAwMD1A4GBgYGXpf8EgX3xMw8BSMDVQYqg4jIKAUICxE%2BCDEESC4tKoMHJQODAIMCgwGDA0MAQyJDPcMChqMMbxjFGV0YSxlXMN5jEmMKYprAdIFZmDmSeSHzGxZLlg6WW6x6rK2s99gs2aaxfWMPZ9%2FNocTRxfGFM5HzApcj1xZuTe4FPFI8U3mFeCfxCfNN45fhXyygI7BD0FXwilCq0A%2FhXhEVkb2i4aJfxCaJG4lfkaiQlJM8JpUvLS19QqZMVl32llyfvIv8H4WtioVKekpvldeqFKiaqP5UO6jepRGqqaT5QeuA9iSdVF0rPUG9V%2FpHDBYY1hrFGNuayJsym740u2C%2B02KJ5QSrOutcmzjbQDtXe2sHY0cdJzVnJRcFV3k3BXdlD3VPXS8Tbxsfd99gvwT%2F%2FID6wIlBS4N3hVwMfRnOFCEXaRUVEV0RMzN2T9yDBLZE3aSw5IaUNak30zkyLDIzs%2BZmX8xlz7PPryjYVPiuWLskq3RV2ZsK%2FcqSql01jLVedVPrHzbqNdU0n22VaytsP9op3VXUfbpXta%2Bx%2F%2B5Em0mzJ%2F%2BdGj%2Ft8AyNmf2zvs9JmHt6vvmCpYtEFrcu%2BbYsc%2Fm9lSGrTq9xWbtvveWGbZtMNm%2FZarJt%2Bw6rnft3u%2B45uy9s%2F4ODOYd%2BHmk%2FJn58xUnrU%2BfOJJ%2F9dX7SRe1LR68kXv13fc5Nm1t379TfU75%2F4mHeY7En%2B59lvhB5efB1%2Flv5dxc%2BNH0y%2Ffzq64Lv4T8Ffp360%2FrP8f9%2FAA0ADzT6lvFdAAAAIGNIUk0AAHolAACAgwAA%2Bf8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAI2SURBVHjaxJQxa9tAGIbfwUMGgwLt4A%2BbtI3b0obIkjlhHCMUgYYaTKFTMqrgtVAPpUNbj8VT%2FkCHQOfu6eg0IUtCLE9ZPHQoxaNb6we8HU5K3IBk06W6RScevY%2B%2B73QH4v8NEPqSUIbyXWYylFA%2FyXzln3gAEEt2b2aJXAyJqjRps06TVUokRl5YyqvYiVfhE7WxefLwVIxb8sq4RkVFbxJEioo1VsZ5YZVxjUF02KVLtzdYzgMyk2GZJk2WKUOZXcsl1OoP7%2BnQPuxqvYRZYRLWGES0WQTEevR7GQ8A%2FsikSoZJf3Qt3zrTVfOuvBaLRW%2BiqLj9NSts60zxYE%2Bv4b1fdTbi3iCPB8QwqehNjvaP9oNI0aReJhDWPPl2PvnRaouh%2B1D%2FmRVmzRuxrlqrP71kqRFn87JbOVZU%2FPKca1w7dxUVK8diESCa07Qhb95yfeNzMouzwppTJ%2F5LXQScOJt%2F4e5cKCo%2BewwAnTuKijsXrTYBwrtM5Q8ofJrc%2B6OsMO%2ByTgkX1WLVc3gWdbX3v4khhu7Cuct1AkTYT%2BX06af3YT8rLOwrVnmjBjZP8niABb3SZZZpUjGIWEjWnCX9iykKJVF7E5YyK0n4Vx911TI0c3kAsOZ6EysqBpE1X9jnIz%2FVp%2BqRn7dvNV%2BlzGS2QXMpD9ClfdUJoiC66tCmuyBngU5vEESNuDVtn%2FYGdHRbstuoeSdursQnJ1rhXfdgj4VbJxwAsESbLpvcZmmVs3p1Pnv8GQDn9Qh5S2I75AAAAABJRU5ErkJggg%3D%3D';

			var styles = "\
				#chromacity-btn {\n\
					position: absolute;\n\
					margin: 0px 8px 0 0;\n\
					top: 2px;\n\
					z-index: 201;\n\
					cursor: pointer;\n\
				}\n\
				.chromacity#chromacity-settings {\n\
					position: absolute;\n\
					z-index: 200;\n\
					width: 400px;\n\
					height: 200px;\n\
					padding: 5px;\n\
					border-radius: 6px;\n\
					-webkit-border-radius: 6px;\n\
					-moz-border-radius: 6px;\n\
					background: #DDE6DA url(http://st.deviantart.net/ui/2011/modals/assets/modal_bkgrd.png) repeat-x 0% 0%;\n\
					box-shadow: rgba(0, 0, 0, 0.496094) 0px 1px 4px, rgb(255, 255, 255) 0px 1px 1px inset;\n\
					border: 1px solid #9EB1A2;\n\
				}\n\
				.chromacity > .left {\n\
					width: 66%;\n\
					float: left;\n\
				}\n\
				.chromacity > .right {\n\
					float: right;\n\
					width: 33%;\n\
					text-align: center;\n\
				}\n\
				.chromacity input.hex {\n\
					height: 20px;\n\
					width: 50%;\n\
					margin: 2px 2% 5px 16%;\n\
					font-size: 1em;\n\
					text-align: center;\n\
					padding: 3px 6px;\n\
					border: 1px solid #889987;\n\
					color: #FFF;\n\
					-moz-border-radius: 3px;\n\
					-webkit-border-radius: 3px;\n\
					border-radius: 3px;\n\
					-moz-box-shadow: 0px 1px #eee, inset 0px 1px 3px #aaa;\n\
					-webkit-box-shadow: 0px 1px #eee, inset 0px 1px 3px #aaa;\n\
					box-shadow: 0px 1px #eee, inset 0px 1px 3px #aaa;\n\
					text-shadow: 0px 0px 1px #111, 0px 0px 2px #111, 0px 1px #222;\n\
				}\n\
				.chromacity label ~ span:after {\n\
					width: 14px;\n\
					height: 14px;\n\
					display: inline-block;\n\
					content: ' ';\n\
					margin: 0px 3px 5px 5px;\n\
					vertical-align: middle;\n\
				}\n\
				.chromacity span.invalid:after {\n\
					background-repeat: no-repeat;\n\
					background-image: url('" + halflings + "');\n\
					background-position: -24px 0px;\n\
					width: 14px;\n\
					height: 14px;\n\
					display: inline-block;\n\
					content: ' ';\n\
					margin: 0px 3px 5px 5px;\n\
					vertical-align: middle;\n\
				}\n\
				.chromacity .button {\n\
					width: 90%;\n\
					height: 40px;\n\
					font-size: 1.2em;\n\
					margin: 5px 5%;\n\
					-webkit-box-shadow: 0px 1px 0px #f1f5ef;\n\
					box-shadow: 0px 1px 0px #f1f5ef;\n\
					-moz-border-radius: 5px;\n\
					-webkit-border-radius: 5px;\n\
					border-radius: 5px;\n\
					color: #2C3635;\n\
					padding: 6px 10px;\n\
					margin-bottom: 15px;\n\
					background: #D2DFC5;\n\
					background: -webkit-gradient(linear, left top, left bottom, from(#D2DFC5), to(#BDD1B4) );\n\
					background: -moz-linear-gradient(-90deg, #D2DFC5, #BDD1B4);\n\
					_background: #D2DFC5;\n\
					_filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr='#D2DFC5', EndColorStr='#BDD1B4');\n\
					color: #121516;\n\
					cursor: pointer;\n\
					font-size: 11px;\n\
					text-align: center;\n\
					min-width: 85px;\n\
					margin: 5px 0;\n\
					border: 1px solid #93A98F;\n\
				}\n\
				.chromacity .button > em {\n\
					display: block;\n\
					font-size: 0.5em;\n\
				}\n\
				.chromacity > .left {\n\
					width: 65%;\n\
					margin-top: 50px;\n\
					text-align: center;\n\
				}\n\
				.chromacity > .left > * {\n\
					display: block;\n\
					margin-top: 2px;\n\
				}\n\
				.chromacity > .left > strong {\n\
					font-size: 32pt;\n\
				}\n\
				.chromacity > .left > em {\n\
					margin-bottom: 62px;\n\
					font-size: 120%;\n\
					font-variant: normal;\n\
					font-style: normal;\n\
				}\n\
				.chromacity > .left > a.left {\n\
					float: left;\n\
					background-repeat: no-repeat;\n\
					background-image: url('" + halflings + "');\n\
					background-position: 0px 0px;\n\
					width: 14px;\n\
					height: 14px;\n\
					display: inline-block;\n\
					content: ' ';\n\
				}\n\
				.chromacity > .left > a.right {\n\
					float: right;\n\
				}\n\
				a[title='Drag'] {\n\
					margin: 2px 8px 0 0;\n\
				}";

			this.styles.append(styles);

			$.getScript('http://damncolors.nol888.com/ColorList.php', function () {
				console.log('dAmnColors loaded');
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

		Chromacity.prototype.checkColor = function () {
			return true;
		};

		Chromacity.prototype.applyColors = function (user, name, msg) {
			var user = user.toLowerCase();
			if (arguments.length === 2) {
				var msg = name[1];
				var name = name[0];
			}

			if (this.checkColor(name) && this.checkColor(msg)) {
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

		/**
		 * Chromacity bootstrapping
		 */

		(function () {
			var $ = jQuery;

			// constants
			var SETTINGS_HTML = '<div id="chromacity-settings" class="chromacity"><div class="left"><strong>:(</strong><em>Out Of Order</em><a class="left" href="http://nuckchorris.github.com/Chromacity/out-of-order.html"> </a><a class="right" href="http://colorpicker.com/">Color Picker</a></div><div class="right"><label for="chr-input-name">Name</label><span><input class="hex" id="chr-input-name"></span><label for="chr-input-msg">Message</label><span><input class="hex" id="chr-input-msg"></span><button class="button" id="chr-save">Apply</button><button class="button" id="chr-port">Port from dAmnColors</button></div></div>';
			var chromacity = new Chromacity();

			// Add the settings button
			var button = $('<img src="http://i52.tinypic.com/2rpcztk.png" id="chromacity-btn">');
			$('.damnc-header h1').after(button);

			// Add the settings window.
			var settingsEl = $(SETTINGS_HTML);
			button.after(settingsEl);

			// Position the button's right
			var rPos = 0;
			$('.damnc-header').children().each(function () {
				var el = $(this);
				if (el.attr('id') && el.attr('id').toLowerCase() !== 'chromacity-btn' && el.attr('id').toLowerCase() !== 'chromacity-settings') {
					var rEl = parseInt(el.css('right').replace("px",""));
					var r = parseInt(el.outerWidth(true)) + rEl;
					rPos = (rPos < r) ? r : rPos;
				}
			});

			button.css('right', rPos);
			settingsEl.css({
				'top': (button.position().top - 4) + 'px',
				'right': (rPos + 4) + 'px'
			}).hide();

			(function () {
				MiddleMan.Event.bind('dAmnChat_self', 'join', 'sd-prefs-detect', function () {
					var i = 0;
					if ($('#sdprefsbtn')) {
						// Position the button's right
						var rPos = 0;
						$('.damnc-header').children().each(function(){
							var el = $(this);
							if (el.attr('id') && el.attr('id').toLowerCase() !== 'chromacity-btn' && el.attr('id').toLowerCase() !== 'chromacity-settings') {
								var rEl = parseInt(el.css('right').replace("px",""));
								var r = parseInt(el.outerWidth(true)) + rEl;
								rPos = (rPos < r) ? r : rPos;
							}
						});

						button.css('right', rPos);
						settingsEl.css('right', (rPos + 4) + 'px').hide();
						MiddleMan.Event.unbind('dAmnChat_self', 'join', 'sd-prefs-detect');
					}
				});
			})();

			button.click(function(){
				settingsEl.toggle();
			});

			var applyBtn = $('#apply-btn');

			var settings = (function () {
				// EventEmitter2
				var EventEmitter=function(){function c(){this._events=new Object}function d(a){if(a){a.delimiter&&(this.delimiter=a.delimiter);a.wildcard&&(this.wildcard=a.wildcard);if(this.wildcard){this.listenerTree=new Object}}}function e(a){this._events=new Object;d.call(this,a)}function f(a,b,c,d){if(!c){return[]}var e=[],g,h,i,j,k,l,m,n=b.length,o=b[d],p=b[d+1];if(d===n&&c._listeners){if(typeof c._listeners==="function"){a&&a.push(c._listeners);return[c]}else{for(g=0,h=c._listeners.length;g<h;g++){a&&a.push(c._listeners[g])}return[c]}}if(o==="*"||o==="**"||c[o]){if(o==="*"){for(i in c){if(i!=="_listeners"&&c.hasOwnProperty(i)){e=e.concat(f(a,b,c[i],d+1))}}return e}else if(o==="**"){m=d+1===n||d+2===n&&p==="*";if(m&&c._listeners){e=e.concat(f(a,b,c,n))}for(i in c){if(i!=="_listeners"&&c.hasOwnProperty(i)){if(i==="*"||i==="**"){if(c[i]._listeners&&!m){e=e.concat(f(a,b,c[i],n))}e=e.concat(f(a,b,c[i],d))}else if(i===p){e=e.concat(f(a,b,c[i],d+2))}else{e=e.concat(f(a,b,c[i],d))}}}return e}e=e.concat(f(a,b,c[o],d+1))}j=c["*"];if(j){f(a,b,j,d+1)}k=c["**"];if(k){if(d<n){if(k._listeners){f(a,b,k,n)}for(i in k){if(i!=="_listeners"&&k.hasOwnProperty(i)){if(i===p){f(a,b,k[i],d+2)}else if(i===o){f(a,b,k[i],d+1)}else{l={};l[i]=k[i];f(a,b,{"**":l},d+1)}}}}else if(k._listeners){f(a,b,k,n)}else if(k["*"]&&k["*"]._listeners){f(a,b,k["*"],n)}}return e}function g(c,d){c=typeof c==="string"?c.split(this.delimiter):c.slice();for(var e=0,f=c.length;e+1<f;e++){if(c[e]==="**"&&c[e+1]==="**"){return}}var g=this.listenerTree;var h=c.shift();while(h){if(!g[h]){g[h]=new Object}g=g[h];if(c.length===0){if(!g._listeners){g._listeners=d}else if(typeof g._listeners==="function"){g._listeners=[g._listeners,d]}else if(a(g._listeners)){g._listeners.push(d);if(!g._listeners.warned){var i=b;if(typeof this._events.maxListeners!=="undefined"){i=this._events.maxListeners}if(i>0&&g._listeners.length>i){g._listeners.warned=true;console.error("(node) warning: possible EventEmitter memory "+"leak detected. %d listeners added. "+"Use emitter.setMaxListeners() to increase limit.",g._listeners.length);console.trace()}}}return true}h=c.shift()}return true}var a=Array.isArray?Array.isArray:function(b){return Object.prototype.toString.call(b)==="[object Array]"};var b=10;e.prototype.delimiter=".";e.prototype.setMaxListeners=function(a){this._events||c.call(this);this._events.maxListeners=a};e.prototype.event="";e.prototype.once=function(a,b){this.many(a,1,b);return this};e.prototype.many=function(a,b,c){function e(){if(--b===0){d.off(a,e)}c.apply(this,arguments)}var d=this;if(typeof c!=="function"){throw new Error("many only accepts instances of Function")}e._origin=c;this.on(a,e);return d};e.prototype.emit=function(){this._events||c.call(this);var a=arguments[0];if(a==="newListener"){if(!this._events.newListener){return false}}if(this._all){var b=arguments.length;var d=new Array(b-1);for(var e=1;e<b;e++)d[e-1]=arguments[e];for(e=0,b=this._all.length;e<b;e++){this.event=a;this._all[e].apply(this,d)}}if(a==="error"){if(!this._all&&!this._events.error&&!(this.wildcard&&this.listenerTree.error)){if(arguments[1]instanceof Error){throw arguments[1]}else{throw new Error("Uncaught, unspecified 'error' event.")}return false}}var g;if(this.wildcard){g=[];var h=typeof a==="string"?a.split(this.delimiter):a.slice();f.call(this,g,h,this.listenerTree,0)}else{g=this._events[a]}if(typeof g==="function"){this.event=a;if(arguments.length===1){g.call(this)}else if(arguments.length>1)switch(arguments.length){case 2:g.call(this,arguments[1]);break;case 3:g.call(this,arguments[1],arguments[2]);break;default:var b=arguments.length;var d=new Array(b-1);for(var e=1;e<b;e++)d[e-1]=arguments[e];g.apply(this,d)}return true}else if(g){var b=arguments.length;var d=new Array(b-1);for(var e=1;e<b;e++)d[e-1]=arguments[e];var i=g.slice();for(var e=0,b=i.length;e<b;e++){this.event=a;i[e].apply(this,d)}return i.length>0||this._all}else{return this._all}};e.prototype.on=function(d,e){if(typeof d==="function"){this.onAny(d);return this}if(typeof e!=="function"){throw new Error("on only accepts instances of Function")}this._events||c.call(this);this.emit("newListener",d,e);if(this.wildcard){g.call(this,d,e);return this}if(!this._events[d]){this._events[d]=e}else if(typeof this._events[d]==="function"){this._events[d]=[this._events[d],e]}else if(a(this._events[d])){this._events[d].push(e);if(!this._events[d].warned){var f=b;if(typeof this._events.maxListeners!=="undefined"){f=this._events.maxListeners}if(f>0&&this._events[d].length>f){this._events[d].warned=true;console.error("(node) warning: possible EventEmitter memory "+"leak detected. %d listeners added. "+"Use emitter.setMaxListeners() to increase limit.",this._events[d].length);console.trace()}}}return this};e.prototype.onAny=function(a){if(!this._all){this._all=[]}if(typeof a!=="function"){throw new Error("onAny only accepts instances of Function")}this._all.push(a);return this};e.prototype.addListener=e.prototype.on;e.prototype.off=function(b,c){if(typeof c!=="function"){throw new Error("removeListener only takes instances of Function")}var d,e=[];if(this.wildcard){var g=typeof b==="string"?b.split(this.delimiter):b.slice();e=f.call(this,null,g,this.listenerTree,0)}else{if(!this._events[b])return this;d=this._events[b];e.push({_listeners:d})}for(var h=0;h<e.length;h++){var i=e[h];d=i._listeners;if(a(d)){var j=-1;for(var k=0,l=d.length;k<l;k++){if(d[k]===c||d[k].listener&&d[k].listener===c||d[k]._origin&&d[k]._origin===c){j=k;break}}if(j<0){return this}if(this.wildcard){i._listeners.splice(j,1)}else{this._events[b].splice(j,1)}if(d.length===0){if(this.wildcard){delete i._listeners}else{delete this._events[b]}}}else if(d===c||d.listener&&d.listener===c||d._origin&&d._origin===c){if(this.wildcard){delete i._listeners}else{delete this._events[b]}}}return this};e.prototype.offAny=function(a){var b=0,c=0,d;if(a&&this._all&&this._all.length>0){d=this._all;for(b=0,c=d.length;b<c;b++){if(a===d[b]){d.splice(b,1);return this}}}else{this._all=[]}return this};e.prototype.removeListener=e.prototype.off;e.prototype.removeAllListeners=function(a){if(arguments.length===0){!this._events||c.call(this);return this}if(this.wildcard){var b=typeof a==="string"?a.split(this.delimiter):a.slice();var d=f.call(this,null,b,this.listenerTree,0);for(var e=0;e<d.length;e++){var g=d[e];g._listeners=null}}else{if(!this._events[a])return this;this._events[a]=null}return this};e.prototype.listeners=function(b){if(this.wildcard){var d=[];var e=typeof b==="string"?b.split(this.delimiter):b.slice();f.call(this,d,e,this.listenerTree,0);return d}this._events||c.call(this);if(!this._events[b])this._events[b]=[];if(!a(this._events[b])){this._events[b]=[this._events[b]]}return this._events[b]};e.prototype.listenersAny=function(){if(this._all){return this._all}else{return[]}};return e}();
				var settings = new EventEmitter();

				var blacklist = [
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

				var fixHex = function (hex) {
					var regexed = /\#?((?:[A-F]|[a-f]|[0-9]){3})((?:[A-F]|[a-f]|[0-9]){3})?/g.exec(hex);
					if (regexed && regexed[2] !== undefined) {
						return (regexed[1] + regexed[2]).toUpperCase();
					} else if (regexed && regexed[1] !== undefined) {
						var splat = regexed[1].split('');
						return (splat[0] + splat[0] + splat[1] + splat[1] + splat[2] + splat[2]).toUpperCase();
					} else {
						return false;
					}
				};
				
				// Mavyrk is a damn boss

				var checkValue = function (color) {
					var r = parseInt(color.slice(0,2), 16);
					var g = parseInt(color.slice(2,4), 16);
					var b = parseInt(color.slice(4,6), 16);
					r /= 255; g /= 255; b /= 255;
					var lum = ((0.2126 * r) + (0.7152 * g) + (0.0722 * b)) * 240;;
					return lum <= 165 && blacklist.indexOf(color) === -1;
				}
				
				// End of declaration of Mavyrk being a damn boss (but he's still a boss.)
				$('input.hex').blur(function () {
					var $this = $(this);
					if ($this.val()) {
						var goodHex = fixHex($this.val());
						if (goodHex === false || !checkValue(goodHex)) {
							settings.emit('invalid', $this, goodHex);
						} else {
							settings.emit('valid', $this, goodHex);
						}
						if (!checkValue(goodHex)) {
							$this.val(goodHex);
							$this.css('background-color', '#' + goodHex);
						}
					}
				});

				$('#chr-save').click(function () {
					if ($('input.hex.invalid').length === 0) {
						var name = $('#chr-input-name').val();
						var msg = $('#chr-input-msg').val();
						settings.emit('save', name, msg);
					}
				});

				$('#chr-port').click(function () {
					(function migrate () {
						var $ = jQuery;
						if (!window.colors) {
							$.getScript('http://damncolors.nol888.com/ColorList.php', migrate);
						} else {
							var username = dAmn_Client_Username.toLowerCase();
							if (!colors[username] || colors[username] === null) {
								setTimeout(MiddleMan.Interface.chatNotice, 0, false, "&nbsp;<b>Chromacity Error:</b> Could not port from dAmnColors. Server may be down, or you may not be in the dAmnColors database.", false);
							} else {
								var name = fixHex(colors[username][0]);
								var msg = fixHex(colors[username][1]);
								if (name && msg) {
									// Fire the change events to induce validation
									$("#chr-input-name").val(name).blur();
									$("#chr-input-msg").val(msg).blur();
									settings.emit('save', name, msg);
								}
							}
						}
					})();
				});

				settings.on('invalid', function (input, hex) {
					input.parent().addClass('invalid');
					$('#chr-save').addClass('invalid');
				});

				settings.on('valid', function (input, hex) {
					input.parent().removeClass('invalid');
					$('#chr-save').removeClass('invalid');
					input.val(hex);
					input.css('background-color', '#' + hex);
				});
				return settings;
			})();

			settings.on('save', function (name, msg) {
				if (name && msg) {
					// chromacity.applyColors(dAmn_Client_Username, name, msg);
					chromacity.change(name, msg);
					settingsEl.hide();
				}
			});

			// Throw the old settings values in
			var name = chromacity.load('name');
			var msg = chromacity.load('msg');
			if (name && msg) {
				$("#chr-input-name").val(name).blur();
				$("#chr-input-msg").val(msg).blur();
				settings.emit('save', name, msg);
			}
		})();
	});
});