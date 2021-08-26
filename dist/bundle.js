(()=>{var e={306:function(e){!function(t){"use strict";var n=function(){return{escape:function(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")},parseExtension:t,mimeType:function(e){var n,r;return(n="application/font-woff",r="image/jpeg",{woff:n,woff2:n,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:r,jpeg:r,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"})[t(e).toLowerCase()]||""},dataAsUrl:function(e,t){return"data:"+t+";base64,"+e},isDataUrl:function(e){return-1!==e.search(/^(data:)/)},canvasToBlob:function(e){return e.toBlob?new Promise((function(t){e.toBlob(t)})):function(e){return new Promise((function(t){for(var n=window.atob(e.toDataURL().split(",")[1]),r=n.length,o=new Uint8Array(r),i=0;i<r;i++)o[i]=n.charCodeAt(i);t(new Blob([o],{type:"image/png"}))}))}(e)},resolveUrl:function(e,t){var n=document.implementation.createHTMLDocument(),r=n.createElement("base");n.head.appendChild(r);var o=n.createElement("a");return n.body.appendChild(o),r.href=t,o.href=e,o.href},getAndEncode:function(e){return a.impl.options.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+(new Date).getTime()),new Promise((function(t){var n,r=new XMLHttpRequest;if(r.onreadystatechange=function(){if(4===r.readyState)if(200===r.status){var o=new FileReader;o.onloadend=function(){var e=o.result.split(/,/)[1];t(e)},o.readAsDataURL(r.response)}else n?t(n):i("cannot fetch resource: "+e+", status: "+r.status)},r.ontimeout=function(){n?t(n):i("timeout of 30000ms occured while fetching resource: "+e)},r.responseType="blob",r.timeout=3e4,r.open("GET",e,!0),r.send(),a.impl.options.imagePlaceholder){var o=a.impl.options.imagePlaceholder.split(/,/);o&&o[1]&&(n=o[1])}function i(e){console.error(e),t("")}}))},uid:(e=0,function(){return"u"+("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)+e++}),delay:function(e){return function(t){return new Promise((function(n){setTimeout((function(){n(t)}),e)}))}},asArray:function(e){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t},escapeXhtml:function(e){return e.replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(e){return new Promise((function(t,n){var r=new Image;r.onload=function(){t(r)},r.onerror=n,r.src=e}))},width:function(e){var t=n(e,"border-left-width"),r=n(e,"border-right-width");return e.scrollWidth+t+r},height:function(e){var t=n(e,"border-top-width"),r=n(e,"border-bottom-width");return e.scrollHeight+t+r}};var e;function t(e){var t=/\.([^\.\/]*?)$/g.exec(e);return t?t[1]:""}function n(e,t){var n=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(n.replace("px",""))}}(),r=function(){var e=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:function(e,n,i){return t(e)?Promise.resolve(e).then(r).then((function(t){var r=Promise.resolve(e);return t.forEach((function(e){r=r.then((function(t){return o(t,e,n,i)}))})),r})):Promise.resolve(e)},shouldProcess:t,impl:{readUrls:r,inline:o}};function t(t){return-1!==t.search(e)}function r(t){for(var r,o=[];null!==(r=e.exec(t));)o.push(r[1]);return o.filter((function(e){return!n.isDataUrl(e)}))}function o(e,t,r,o){return Promise.resolve(t).then((function(e){return r?n.resolveUrl(e,r):e})).then(o||n.getAndEncode).then((function(e){return n.dataAsUrl(e,n.mimeType(t))})).then((function(r){return e.replace(function(e){return new RegExp("(url\\(['\"]?)("+n.escape(e)+")(['\"]?\\))","g")}(t),"$1"+r+"$3")}))}}(),o=function(){return{resolveAll:function(){return e(document).then((function(e){return Promise.all(e.map((function(e){return e.resolve()})))})).then((function(e){return e.join("\n")}))},impl:{readAll:e}};function e(){return Promise.resolve(n.asArray(document.styleSheets)).then((function(e){var t=[];return e.forEach((function(e){try{n.asArray(e.cssRules||[]).forEach(t.push.bind(t))}catch(t){console.log("Error while reading CSS rules from "+e.href,t.toString())}})),t})).then((function(e){return e.filter((function(e){return e.type===CSSRule.FONT_FACE_RULE})).filter((function(e){return r.shouldProcess(e.style.getPropertyValue("src"))}))})).then((function(t){return t.map(e)}));function e(e){return{resolve:function(){var t=(e.parentStyleSheet||{}).href;return r.inlineAll(e.cssText,t)},src:function(){return e.style.getPropertyValue("src")}}}}}(),i=function(){return{inlineAll:function t(o){return o instanceof Element?function(e){var t=e.style.getPropertyValue("background");return t?r.inlineAll(t).then((function(t){e.style.setProperty("background",t,e.style.getPropertyPriority("background"))})).then((function(){return e})):Promise.resolve(e)}(o).then((function(){return o instanceof HTMLImageElement?e(o).inline():Promise.all(n.asArray(o.childNodes).map((function(e){return t(e)})))})):Promise.resolve(o)},impl:{newImage:e}};function e(e){return{inline:function(t){return n.isDataUrl(e.src)?Promise.resolve():Promise.resolve(e.src).then(t||n.getAndEncode).then((function(t){return n.dataAsUrl(t,n.mimeType(e.src))})).then((function(t){return new Promise((function(n,r){e.onload=n,e.onerror=r,e.src=t}))}))}}}}(),u=void 0,c=!1,a={toSvg:l,toPng:function(e,t){return s(e,t||{}).then((function(e){return e.toDataURL()}))},toJpeg:function(e,t){return s(e,t=t||{}).then((function(e){return e.toDataURL("image/jpeg",t.quality||1)}))},toBlob:function(e,t){return s(e,t||{}).then(n.canvasToBlob)},toPixelData:function(e,t){return s(e,t||{}).then((function(t){return t.getContext("2d").getImageData(0,0,n.width(e),n.height(e)).data}))},impl:{fontFaces:o,images:i,util:n,inliner:r,options:{}}};function l(e,t){return function(e){void 0===e.imagePlaceholder?a.impl.options.imagePlaceholder=u:a.impl.options.imagePlaceholder=e.imagePlaceholder,void 0===e.cacheBust?a.impl.options.cacheBust=c:a.impl.options.cacheBust=e.cacheBust}(t=t||{}),Promise.resolve(e).then((function(e){return f(e,t.filter,!0)})).then(h).then(d).then((function(e){return t.bgcolor&&(e.style.backgroundColor=t.bgcolor),t.width&&(e.style.width=t.width+"px"),t.height&&(e.style.height=t.height+"px"),t.style&&Object.keys(t.style).forEach((function(n){e.style[n]=t.style[n]})),e})).then((function(r){return function(e,t,r){return Promise.resolve(e).then((function(e){return e.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(e)})).then(n.escapeXhtml).then((function(e){return'<foreignObject x="0" y="0" width="100%" height="100%">'+e+"</foreignObject>"})).then((function(e){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+r+'">'+e+"</svg>"})).then((function(e){return"data:image/svg+xml;charset=utf-8,"+e}))}(r,t.width||n.width(e),t.height||n.height(e))}))}function s(e,t){return l(e,t).then(n.makeImage).then(n.delay(100)).then((function(r){var o=function(e){var r=document.createElement("canvas");if(r.width=t.width||n.width(e),r.height=t.height||n.height(e),t.bgcolor){var o=r.getContext("2d");o.fillStyle=t.bgcolor,o.fillRect(0,0,r.width,r.height)}return r}(e);return o.getContext("2d").drawImage(r,0,0),o}))}function f(e,t,r){return r||!t||t(e)?Promise.resolve(e).then((function(e){return e instanceof HTMLCanvasElement?n.makeImage(e.toDataURL()):e.cloneNode(!1)})).then((function(r){return function(e,t,r){var o=e.childNodes;return 0===o.length?Promise.resolve(t):function(e,t,n){var r=Promise.resolve();return t.forEach((function(t){r=r.then((function(){return f(t,n)})).then((function(t){t&&e.appendChild(t)}))})),r}(t,n.asArray(o),r).then((function(){return t}))}(e,r,t)})).then((function(t){return function(e,t){return t instanceof Element?Promise.resolve().then((function(){r=window.getComputedStyle(e),o=t.style,r.cssText?o.cssText=r.cssText:function(e,t){n.asArray(e).forEach((function(n){t.setProperty(n,e.getPropertyValue(n),e.getPropertyPriority(n))}))}(r,o);var r,o})).then((function(){[":before",":after"].forEach((function(r){!function(r){var o=window.getComputedStyle(e,r),i=o.getPropertyValue("content");if(""!==i&&"none"!==i){var u=n.uid();t.className=t.className+" "+u;var c=document.createElement("style");c.appendChild(function(e,t,r){var o="."+e+":"+t,i=r.cssText?u(r):c(r);return document.createTextNode(o+"{"+i+"}");function u(e){var t=e.getPropertyValue("content");return e.cssText+" content: "+t+";"}function c(e){return n.asArray(e).map(t).join("; ")+";";function t(t){return t+": "+e.getPropertyValue(t)+(e.getPropertyPriority(t)?" !important":"")}}}(u,r,o)),t.appendChild(c)}}(r)}))})).then((function(){e instanceof HTMLTextAreaElement&&(t.innerHTML=e.value),e instanceof HTMLInputElement&&t.setAttribute("value",e.value)})).then((function(){t instanceof SVGElement&&(t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t instanceof SVGRectElement&&["width","height"].forEach((function(e){var n=t.getAttribute(e);n&&t.style.setProperty(e,n)})))})).then((function(){return t})):t}(e,t)})):Promise.resolve()}function h(e){return o.resolveAll().then((function(t){var n=document.createElement("style");return e.appendChild(n),n.appendChild(document.createTextNode(t)),e}))}function d(e){return i.inlineAll(e).then((function(){return e}))}e.exports=a}()}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(306),t=n.n(e);let r="black",o="color",i=16;function u(e){o=e}const c=document.getElementById("color"),a=document.getElementById("randomColor"),l=document.getElementById("eraser"),s=document.getElementById("clear"),f=document.getElementById("rangeTable"),h=document.getElementById("colorMode"),d=document.querySelector(".drawTable");function m(e){for(let t=1;t<=e*e;t++){const e=document.createElement("div");e.id="box",d.appendChild(e)}d.style.gridTemplateColumns="repeat("+e+",1fr)",d.style.gridTemplateRows="repeat("+e+",1fr)";const t=document.querySelectorAll("#box");for(let e=0;e<t.length;e++)t[e].addEventListener("mouseover",p)}function g(){d.innerHTML="",m(i)}function p(){if("randomColor"==o){var e=Math.round,t=Math.random;this.style.backgroundColor="rgba("+e(255*t())+","+e(255*t())+","+e(255*t())+","+t().toFixed(1)+")"}else"colorMode"==o?this.style.backgroundColor=r:"eraser"==o&&(this.style.backgroundColor="white")}document.querySelector(".image"),m(16),c.onchange=e=>{return t=e.target.value,void(r=t);var t},h.onclick=()=>u("colorMode"),a.onclick=()=>u("randomColor"),l.onclick=()=>u("eraser"),s.onclick=()=>g(),f.onchange=e=>{return t=e.target.value,g(),i=t,void m(t);var t},document.getElementById("save").onclick=()=>{t().toJpeg(document.getElementById("image"),{quality:.95}).then((function(e){var t=document.createElement("a");t.download="my-image-name.jpeg",t.href=e,t.click()}))}})()})();