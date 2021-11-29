'use strict';
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(name) {
 return typeof name;
} : function(obj) {
 return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
!function(data, factory) {
 if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module) {
   factory(exports);
 } else {
   if ("function" == typeof define && define.amd) {
     define(["exports"], factory);
   } else {
     factory((data = data || self).window = data.window || {});
   }
 }
}(undefined, function(self) {
 function getText(node) {
   var type = node.nodeType;
   var txt = "";
   if (1 === type || 9 === type || 11 === type) {
     if ("string" == typeof node.textContent) {
       return node.textContent;
     }
     node = node.firstChild;
     for (; node; node = node.nextSibling) {
       txt = txt + getText(node);
     }
   } else {
     if (3 === type || 4 === type) {
       return node.nodeValue;
     }
   }
   return txt;
 }
 function func(s, value, url) {
   if (s = s + "", url && (s = s.replace(entityRegExp, "")), value && "" !== value) {
     return s.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(value);
   }
   var index;
   var ch;
   var result = [];
   var l = s.length;
   var i = 0;
   for (; i < l; i++) {
     if (55296 <= (ch = s.charAt(i)).charCodeAt(0) && ch.charCodeAt(0) <= 56319 || 65024 <= s.charCodeAt(i + 1) && s.charCodeAt(i + 1) <= 65039) {
       index = ((s.substr(i, 12).split(RE_comparison) || [])[1] || "").length || 2;
       ch = s.substr(i, index);
       i = i + (index - (result.emoji = 1));
     }
     result.push(">" === ch ? "&gt;" : "<" === ch ? "&lt;" : ch);
   }
   return result;
 }
 function render(elementId) {
   this.chars = func(elementId);
   this.sets = [];
   this.length = 50;
   var i = 0;
   for (; i < 20; i++) {
     this.sets[i] = parseInt(80, this.chars);
   }
 }
 function $() {
   return host || "undefined" != typeof window && (host = window.gsap) && host.registerPlugin && host;
 }
 function indent() {
   return String.fromCharCode.apply(null, arguments);
 }
 function getData() {
   getDataPromise = host = $();
 }
 var entityRegExp = /(^\s+|\s+$)/g;
 var RE_comparison = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
 var RegExp = (render.prototype.grow = function start(length) {
   var i = 0;
   for (; i < 20; i++) {
     this.sets[i] += parseInt(length - this.length, this.chars);
   }
   this.length = length;
 }, render);
 var host;
 var getDataPromise;
 var newLine = "ScrambleTextPlugin";
 var label = indent(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109);
 var B = function(ret) {
   var u = 0 === (window ? window.location.href : "https://whynot.media").indexOf(indent(102, 105, 108, 101, 58, 47, 47)) || -1 !== ret.indexOf(indent(108, 111, 99, 97, 108, 104, 111, 115, 116)) || -1 !== ret.indexOf(indent(49, 50, 55, 46, 48, 32, 48, 46, 49));
   var keys = [label, indent(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), indent(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103), indent(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), indent(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112), indent(112, 101, 110, 115, 46, 99, 108, 111, 117, 100), indent(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), indent(99, 100, 112, 110, 46, 105, 111), indent(112, 101, 110, 115, 46, 105, 111), indent(103,
   97, 110, 110, 111, 110, 46, 116, 118), indent(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), indent(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), indent(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), indent(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), indent(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), indent(116, 119, 101, 101, 110, 108, 105, 116, 101, 46, 99, 111, 109), indent(112, 108, 110, 107, 114,
   46, 99, 111), indent(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), indent(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), indent(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103), indent(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111), indent(99, 115, 98, 46, 97, 112, 112), indent(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109), indent(99, 111, 100, 105, 101, 114, 46, 105, 111), indent(109, 111, 116, 105, 111, 110, 116, 114, 105, 99, 107,
   115, 46, 99, 111, 109), indent(115, 116, 97, 99, 107, 111, 118, 101, 114, 102, 108, 111, 119, 46, 99, 111, 109), indent(115, 116, 97, 99, 107, 101, 120, 99, 104, 97, 110, 103, 101, 46, 99, 111, 109), indent(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)];
   var i = keys.length;
   setTimeout(function() {
     if (window && window.console && !window._gsapWarned && host && false !== host.config().trialWarn) {
       console.log(indent(37, 99, 87, 97, 114, 110, 105, 110, 103), indent(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 51, 48, 112, 120, 59, 99, 111, 108, 111, 114, 58, 114, 101, 100, 59));
       console.log(indent(65, 32, 116, 114, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + newLine + indent(32, 105, 115, 32, 108, 111, 97, 100, 101, 100, 32, 116, 104, 97, 116, 32, 111, 110, 108, 121, 32, 119, 111, 114, 107, 115, 32, 108, 111, 99, 97, 108, 108, 121, 32, 97, 110, 100, 32, 111, 110, 32, 100, 111, 109, 97, 105, 110, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 32, 97, 110, 100, 32, 99, 111, 100, 101, 115, 97, 110, 100,
       98, 111, 120, 46, 105, 111, 46, 32, 42, 42, 42, 32, 68, 79, 32, 78, 79, 84, 32, 68, 69, 80, 76, 79, 89, 32, 84, 72, 73, 83, 32, 70, 73, 76, 69, 32, 42, 42, 42, 32, 76, 111, 97, 100, 105, 110, 103, 32, 105, 116, 32, 111, 110, 32, 97, 110, 32, 117, 110, 97, 117, 116, 104, 111, 114, 105, 122, 101, 100, 32, 115, 105, 116, 101, 32, 118, 105, 111, 108, 97, 116, 101, 115, 32, 116, 104, 101, 32, 108, 105, 99, 101, 110, 115, 101, 32, 97, 110, 100, 32, 119, 105, 108, 108, 32, 99, 97, 117, 115, 101,
       32, 97, 32, 114, 101, 100, 105, 114, 101, 99, 116, 46, 32, 80, 108, 101, 97, 115, 101, 32, 106, 111, 105, 110, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 116, 111, 32, 103, 101, 116, 32, 102, 117, 108, 108, 32, 97, 99, 99, 101, 115, 115, 32, 116, 111, 32, 116, 104, 101, 32, 98, 111, 110, 117, 115, 32, 112, 108, 117, 103, 105, 110, 115, 32, 116, 104, 97, 116, 32, 98, 111, 111, 115, 116, 32, 121, 111, 117, 114, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32,
       115, 117, 112, 101, 114, 112, 111, 119, 101, 114, 115, 46, 32, 68, 105, 115, 97, 98, 108, 101, 32, 116, 104, 105, 115, 32, 119, 97, 114, 110, 105, 110, 103, 32, 119, 105, 116, 104, 32, 103, 115, 97, 112, 46, 99, 111, 110, 102, 105, 103, 40, 123, 116, 114, 105, 97, 108, 87, 97, 114, 110, 58, 32, 102, 97, 108, 115, 101, 125, 41, 59));
       console.log(indent(37, 99, 71, 101, 116, 32, 117, 110, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 102, 105, 108, 101, 115, 32, 97, 116, 32, 104, 116, 116, 112, 115, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98), indent(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 49, 54, 112, 120, 59, 99, 111, 108, 111, 114, 58, 35, 52, 101, 57, 56, 49, 53));
       window._gsapWarned = 0;
     }
   }, 50);
   for (; -1 < --i;) {
     if (-1 !== ret.indexOf(keys[i])) {
       return true;
     }
   }
   return u || !setTimeout(function() {
     window.location.href = indent(104, 116, 116, 112, 115, 58, 47, 47) + label + indent(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47) + "?plugin=" + newLine + "&source=codepen";
   }, 3e3);
 }(window ? window.location.host : "");
 var a = /\s+/g;
 var parseInt = function _create_secret_key(tx, results) {
   var custom_meta_to_complete = results.length;
   var ret = "";
   for (; -1 < --tx;) {
     ret = ret + results[~~(Math.random() * custom_meta_to_complete)];
   }
   return ret;
 };
 var chr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var val = chr.toLowerCase();
 var regexCache = {
   upperCase : new RegExp(chr),
   lowerCase : new RegExp(val),
   upperAndLowerCase : new RegExp(chr + val)
 };
 var result = {
   version : "3.8.0",
   name : "scrambleText",
   register : function writeSearchEntry(output) {
     host = output;
     getData();
   },
   init : function render(el, value, obj) {
     if (getDataPromise || getData(), this.prop = "innerHTML" in el ? "innerHTML" : "textContent" in el ? "textContent" : 0, this.prop) {
       this.target = el;
       if ("object" != (typeof value === "undefined" ? "undefined" : _typeof(value))) {
         value = {
           text : value
         };
       }
       var context;
       var end;
       var options;
       var isVertical;
       var name = value.text || value.value || "";
       var text = false !== value.trim;
       var self = this;
       return self.delimiter = context = value.delimiter || "", self.original = func(getText(el).replace(a, " ").split("&nbsp;").join(""), context, text), "{original}" !== name && true !== name && null != name || (name = self.original.join(context)), self.text = func((name || "").replace(a, " "), context, text), self.hasClass = !(!value.newClass && !value.oldClass), self.newClass = value.newClass, self.oldClass = value.oldClass, isVertical = "" === context, self.textHasEmoji = isVertical && !!self.text.emoji,
       self.charsHaveEmoji = !!value.chars && !!func(value.chars).emoji, self.length = isVertical ? self.original.length : self.original.join(context).length, self.lengthDif = (isVertical ? self.text.length : self.text.join(context).length) - self.length, self.fillChar = value.fillChar || value.chars && ~value.chars.indexOf(" ") ? "&nbsp;" : "", self.charSet = options = regexCache[value.chars || "upperCase"] || new RegExp(value.chars), self.speed = .05 / (value.speed || 1), self.prevScrambleTime =
       0, self.setIndex = 20 * Math.random() | 0, (end = self.length + Math.max(self.lengthDif, 0)) > options.length && options.grow(end), self.chars = options.sets[self.setIndex], self.revealDelay = value.revealDelay || 0, self.tweenLength = false !== value.tweenLength, self.tween = obj, self.rightToLeft = !!value.rightToLeft, self._props.push("scrambleText", "text"), B;
     }
   },
   render : function render(x, options) {
     var p;
     var e;
     var n;
     var type;
     var isLastSib;
     var desc;
     var value;
     var el;
     var expireDomain;
     var s;
     var w;
     var dest = options.target;
     var property = options.prop;
     var val = options.text;
     var d = options.delimiter;
     var data = options.tween;
     var expiration = options.prevScrambleTime;
     var start = options.revealDelay;
     var i = options.setIndex;
     var chars = options.chars;
     var area = options.charSet;
     var indent = options.length;
     var l = options.textHasEmoji;
     var reverse = options.charsHaveEmoji;
     var days = options.lengthDif;
     var direction = options.tweenLength;
     var domain = options.oldClass;
     var tag = options.newClass;
     var item = options.rightToLeft;
     var fillChar = options.fillChar;
     var j_diff = options.speed;
     var url = options.original;
     var dateTime = options.hasClass;
     var y = val.length;
     var time = data._time;
     var small_diff = time - expiration;
     if (start) {
       if (data._from) {
         time = data._dur - time;
       }
       x = 0 === time ? 0 : time < start ? 1e-6 : time === data._dur ? 1 : data._ease((time - start) / (data._dur - start));
     }
     if (x < 0) {
       x = 0;
     } else {
       if (1 < x) {
         x = 1;
       }
     }
     if (item) {
       x = 1 - x;
     }
     p = ~~(x * y + .5);
     type = x ? ((j_diff < small_diff || small_diff < -j_diff) && (options.setIndex = i = (i + (19 * Math.random() | 0)) % 20, options.chars = area.sets[i], options.prevScrambleTime += small_diff), chars) : url.join(d);
     w = data._from ? x : 1 - x;
     s = indent + (direction ? data._from ? w * w * w : 1 - w * w * w : 1) * days;
     type = item ? 1 !== x || !data._from && "isFromStart" !== data.data ? (value = val.slice(p).join(d), n = reverse ? func(type).slice(0, s - (l ? func(value) : value).length + .5 | 0).join("") : type.substr(0, s - (l ? func(value) : value).length + .5 | 0), value) : (n = "", url.join(d)) : (n = val.slice(0, p).join(d), e = (l ? func(n) : n).length, reverse ? func(type).slice(e, s + .5 | 0).join("") : type.substr(e, s - e + .5 | 0));
     value = dateTime ? ((isLastSib = (el = item ? domain : tag) && 0 != p) ? "<span class='" + el + "'>" : "") + n + (isLastSib ? "</span>" : "") + ((desc = (expireDomain = item ? tag : domain) && p !== y) ? "<span class='" + expireDomain + "'>" : "") + d + type + (desc ? "</span>" : "") : n + d + type;
     dest[property] = "&nbsp;" === fillChar && ~value.indexOf("  ") ? value.split("  ").join("&nbsp;&nbsp;") : value;
   }
 };
 result.emojiSafeSplit = func;
 result.getText = getText;
 if ($()) {
   host.registerPlugin(result);
 }
 self.ScrambleTextPlugin = result;
 self.default = result;
 if (typeof window === "undefined" || window !== self) {
   Object.defineProperty(self, "__esModule", {
     value : true
   });
 } else {
   delete self.default;
 }
});
