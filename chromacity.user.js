// ==UserScript==
// @name           Chromacity
// @version        2.0b1
// @namespace      nuckchorris0.deviantart.com
// @description    Chromacity for dAmn
// @include        *://chat.deviantart.com/chat/*
// @match          *://chat.deviantart.com/chat/*
// ==/UserScript==

var contentEval = function(source) {
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
	var bootstrap = (function () {
		var i = 0;
		return function bootstrap (cb) {
			var interval = setInterval(function () {
				if (window.MiddleMan) {
					clearInterval(interval);
					cb();
				}
				if (i++ < 20) {
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
			#chromacity-settings .settings-buttons div {\n\
				font-size: 12pt;\n\
				color: rgb(154, 170, 151);\n\
				text-shadow: 0pt -1px 0pt rgb(44, 55, 49);\n\
				background: -webkit-gradient(linear, left bottom, left top, color-stop(0, rgb(53, 66, 58)), color-stop(1, rgb(77, 95, 83)));\n\
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
				cursor: default;\n\
				float: right;\n\
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

			var name = this.get('name');
			var msg = this.get('msg');
			if (name && msg) {
				this.applyColors(dAmn_Client_Username, [name, msg]);
			}

			setTimeout(MiddleMan.Interface.chatNotice, 0, false, "&nbsp;<b>Chromacity has loaded.</b>", false, 1);
			// MiddleMan.Interface.chatNotice(false, "&nbsp;<b>Chromacity has loaded.</b>", false, 1);
		
			$.getScript('http://damncolors.nol888.com/ColorList.php', function () {
				MiddleMan.Interface.chatNotice(false, "&nbsp;Chromacity has loaded dAmnColors list for comaptibility.", false, 1);
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

			if (!this.users[user] || (this.users[user][0] !== name && this.users[user][1] !== msg)) {
				this.users[user] = [name, msg];
				var css = '.u-$user .from { color:#$name; } .u-$user .text { color: #$msg; }';
				css = css.replace(/\$user/g, user);
				css = css.replace(/\$name/g, name);
				css = css.replace(/\$msg/g, msg);
				this.styles.append(css);
			}
		};
		Chromacity.prototype.change = function (name, msg) {
			this.colors.name = name;
			this.colors.msg = msg;

			this.set('name', name);
			this.set('msg', msg);
			this.applyColors(dAmn_Client_Username, name, msg);
		};

		Chromacity.prototype.set = function (name, value) {
			var name = name.toString();

			if (this.storage === 'localStorage') {
				localStorage['chromacity_' + name] = value;
			} else {
				var cookieDate = new Date();
				cookieDate.setTime(cookieDate.getTime()+(100 * 24 * 60 * 60 * 1000));
				document.cookie = "chromacity_" + name + "=" + escape(value) + "; expires=" +  cookieDate.toGMTString() + "; path=/; domain=deviantart.com";
			}
		};

		Chromacity.prototype.get = function (name) {
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
						if (this.get('hasrun') === false){
							$('#chromacity-btn').attr('src', 'http://i52.tinypic.com/2rpcztk.png').css('margin-top', '2px');
							$(".damncrc-error .damncrc-hide img").click();
							this.set('hasrun', true);
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
					if (this.get('hasrun') === false){
						$('#chromacity-btn').attr('src', 'http://i52.tinypic.com/2rpcztk.png').css('margin-top', '2px');
						$(".damncrc-error .damncrc-hide img").click();
						this.set('hasrun', true);
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

				settings.css({
					'top': (button.position().top - 4) + 'px',
					'right': (rPos + 4) + 'px'
				}).hide();

				// Show first-run messages
				if (chromacity.get('hasrun') === false) {
					setTimeout(MiddleMan.Interface.chatNotice, 0, false, FIRSTSTART_MSG, false, 30);
					button.attr('src', 'http://i51.tinypic.com/2qjhj7m.png').css('margin-top','-6px');
				}

				// Throw the old settings values in
				var name = chromacity.get('name');
				var msg = chromacity.get('msg');
				if (name && msg) {
					$("#name-color-box").val(name).validHex().applyFarbtastic();
					$("#msg-color-box").val(msg).validHex().applyFarbtastic();
				}

				button.click(function(){
					settings.toggle();
				});

				button.click(function () {
					// Normalize the numbers
					var name = $('#name-color-box').val().replace("#","").toUpperCase();
					var msg = $('#msg-color-box').val().replace("#","").toUpperCase();

					// Check the blacklist
					if (chromacity.blacklist.indexOf(name) !== -1) {
						// Name color is blacklisted
						$('#name-color-box').addClass('blacklisted');
					} else if (chromacity.blacklist.indexOf(msg) === -1) {
						// Message color is blacklisted
						$('#msg-color-box').addClass('blacklisted');
					} else {
						// Not blacklisted, so change the setting
						chromacity.change(name, msg);
					}
					if (chromacity.get('hasrun') === false) {
						button.attr('src', 'http://i52.tinypic.com/2rpcztk.png').css('margin-top', '0px');
						$(".damncrc-error .damncrc-hide img").click();
						chromacity.set('hasrun', true);
					}
				});

				jQuery('#port-btn', settings).click(function () {
					chromacity.migrate();
				});

				$('input.hex').validHex().keyup(function () {
					$(this).validHex();
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