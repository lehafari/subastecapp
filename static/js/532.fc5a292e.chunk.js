"use strict";(self.webpackChunkcliente=self.webpackChunkcliente||[]).push([[532],{69998:function(e,n){n.Z=function(e,n){if(e&&n){var t=Array.isArray(n)?n:n.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return t.some((function(e){var n=e.trim().toLowerCase();return"."===n.charAt(0)?r.toLowerCase().endsWith(n):n.endsWith("/*")?i===n.replace(/\/.*$/,""):o===n}))}return!0}},65532:function(e,n,t){t.d(n,{uI:function(){return ye}});var r=t(72791),o=t(52007),i=t.n(o);function a(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(n){i(n)}}function c(e){try{u(r.throw(e))}catch(n){i(n)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}u((r=r.apply(e,n||[])).next())}))}function c(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(c){i=[6,c],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}Object.create;function u(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,i=t.call(e),a=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return a}function l(e,n,t){if(t||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}Object.create;var s=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function f(e,n){var t=function(e){var n=e.name;if(n&&-1!==n.lastIndexOf(".")&&!e.type){var t=n.split(".").pop().toLowerCase(),r=s.get(t);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!==typeof t.path){var r=e.webkitRelativePath;Object.defineProperty(t,"path",{value:"string"===typeof n?n:"string"===typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}var p=[".DS_Store","Thumbs.db"];function d(e){return"object"===typeof e&&null!==e}function v(e){return b(e.target.files).map((function(e){return f(e)}))}function m(e){return a(this,void 0,void 0,(function(){return c(this,(function(n){switch(n.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,n.sent().map((function(e){return f(e)}))]}}))}))}function g(e,n){return a(this,void 0,void 0,(function(){var t;return c(this,(function(r){switch(r.label){case 0:return e.items?(t=b(e.items).filter((function(e){return"file"===e.kind})),"drop"!==n?[2,t]:[4,Promise.all(t.map(h))]):[3,2];case 1:return[2,y(w(r.sent()))];case 2:return[2,y(b(e.files).map((function(e){return f(e)})))]}}))}))}function y(e){return e.filter((function(e){return-1===p.indexOf(e.name)}))}function b(e){if(null===e)return[];for(var n=[],t=0;t<e.length;t++){var r=e[t];n.push(r)}return n}function h(e){if("function"!==typeof e.webkitGetAsEntry)return D(e);var n=e.webkitGetAsEntry();return n&&n.isDirectory?A(n):D(e)}function w(e){return e.reduce((function(e,n){return l(l([],u(e),!1),u(Array.isArray(n)?w(n):[n]),!1)}),[])}function D(e){var n=e.getAsFile();if(!n)return Promise.reject("".concat(e," is not a File"));var t=f(n);return Promise.resolve(t)}function x(e){return a(this,void 0,void 0,(function(){return c(this,(function(n){return[2,e.isDirectory?A(e):j(e)]}))}))}function A(e){var n=e.createReader();return new Promise((function(e,t){var r=[];!function o(){var i=this;n.readEntries((function(n){return a(i,void 0,void 0,(function(){var i,a,u;return c(this,(function(c){switch(c.label){case 0:if(n.length)return[3,5];c.label=1;case 1:return c.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return i=c.sent(),e(i),[3,4];case 3:return a=c.sent(),t(a),[3,4];case 4:return[3,6];case 5:u=Promise.all(n.map(x)),r.push(u),o(),c.label=6;case 6:return[2]}}))}))}),(function(e){t(e)}))}()}))}function j(e){return a(this,void 0,void 0,(function(){return c(this,(function(n){return[2,new Promise((function(n,t){e.file((function(t){var r=f(t,e.fullPath);n(r)}),(function(e){t(e)}))}))]}))}))}var O=t(69998);function F(e){return function(e){if(Array.isArray(e))return S(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||E(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}(e,n)||E(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,n){if(e){if("string"===typeof e)return S(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?S(e,n):void 0}}function S(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var C="file-invalid-type",P="file-too-large",z="file-too-small",R="too-many-files",I=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var n=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:C,message:"File type must be ".concat(n)}},T=function(e){return{code:P,message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},M=function(e){return{code:z,message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},L={code:R,message:"Too many files"};function B(e,n){var t="application/x-moz-file"===e.type||(0,O.Z)(e,n);return[t,t?null:I(n)]}function K(e,n,t){if(_(e.size))if(_(n)&&_(t)){if(e.size>t)return[!1,T(t)];if(e.size<n)return[!1,M(n)]}else{if(_(n)&&e.size<n)return[!1,M(n)];if(_(t)&&e.size>t)return[!1,T(t)]}return[!0,null]}function _(e){return void 0!==e&&null!==e}function U(e){var n=e.files,t=e.accept,r=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles,c=e.validator;return!(!i&&n.length>1||i&&a>=1&&n.length>a)&&n.every((function(e){var n=k(B(e,t),1)[0],i=k(K(e,r,o),1)[0],a=c?c(e):null;return n&&i&&!a}))}function $(e){return"function"===typeof e.isPropagationStopped?e.isPropagationStopped():"undefined"!==typeof e.cancelBubble&&e.cancelBubble}function W(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function G(e){e.preventDefault()}function H(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function q(e){return-1!==e.indexOf("Edge/")}function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return H(e)||q(e)}function Z(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return n.some((function(n){return!$(e)&&n&&n.apply(void 0,[e].concat(r)),$(e)}))}}function Y(){return"showOpenFilePicker"in window}function J(e){return _(e)?Object.entries(e).filter((function(e){var n=k(e,2),t=n[0],r=n[1],o=!0;return ee(t)||(console.warn('Skipped "'.concat(t,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),o=!1),Array.isArray(r)&&r.every(ne)||(console.warn('Skipped "'.concat(t,'" because an invalid file extension was provided.')),o=!1),o})).map((function(e){var n,t,r,o=k(e,2),i=o[0],a=o[1];return{accept:(n={},t=i,r=a,t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n)}})):e}function Q(e){if(_(e))return Object.entries(e).reduce((function(e,n){var t=k(n,2),r=t[0],o=t[1];return[].concat(F(e),[r],F(o))}),[]).filter((function(e){return ee(e)||ne(e)})).join(",")}function V(e){return e instanceof DOMException&&("AbortError"===e.name||e.code===e.ABORT_ERR)}function X(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}function ee(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function ne(e){return/^.*\.[\w]+$/.test(e)}var te=["children"],re=["open"],oe=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],ie=["refKey","onChange","onClick"];function ae(e){return function(e){if(Array.isArray(e))return le(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ue(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ce(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}(e,n)||ue(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ue(e,n){if(e){if("string"===typeof e)return le(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?le(e,n):void 0}}function le(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function se(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function fe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?se(Object(t),!0).forEach((function(n){pe(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):se(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function pe(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function de(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var ve=(0,r.forwardRef)((function(e,n){var t=e.children,o=ye(de(e,te)),i=o.open,a=de(o,re);return(0,r.useImperativeHandle)(n,(function(){return{open:i}}),[i]),r.createElement(r.Fragment,null,t(fe(fe({},a),{},{open:i})))}));ve.displayName="Dropzone";var me={disabled:!1,getFilesFromEvent:function(e){return a(this,void 0,void 0,(function(){return c(this,(function(n){return d(e)&&d(e.dataTransfer)?[2,g(e.dataTransfer,e.type)]:function(e){return d(e)&&d(e.target)}(e)?[2,v(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"===typeof e.getFile}))?[2,m(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};ve.defaultProps=me,ve.propTypes={children:i().func,accept:i().objectOf(i().arrayOf(i().string)),multiple:i().bool,preventDropOnDocument:i().bool,noClick:i().bool,noKeyboard:i().bool,noDrag:i().bool,noDragEventsBubbling:i().bool,minSize:i().number,maxSize:i().number,maxFiles:i().number,disabled:i().bool,getFilesFromEvent:i().func,onFileDialogCancel:i().func,onFileDialogOpen:i().func,useFsAccessApi:i().bool,autoFocus:i().bool,onDragEnter:i().func,onDragLeave:i().func,onDragOver:i().func,onDrop:i().func,onDropAccepted:i().func,onDropRejected:i().func,onError:i().func,validator:i().func};var ge={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function ye(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=fe(fe({},me),e),t=n.accept,o=n.disabled,i=n.getFilesFromEvent,a=n.maxSize,c=n.minSize,u=n.multiple,l=n.maxFiles,s=n.onDragEnter,f=n.onDragLeave,p=n.onDragOver,d=n.onDrop,v=n.onDropAccepted,m=n.onDropRejected,g=n.onFileDialogCancel,y=n.onFileDialogOpen,b=n.useFsAccessApi,h=n.autoFocus,w=n.preventDropOnDocument,D=n.noClick,x=n.noKeyboard,A=n.noDrag,j=n.noDragEventsBubbling,O=n.onError,F=n.validator,k=(0,r.useMemo)((function(){return Q(t)}),[t]),E=(0,r.useMemo)((function(){return J(t)}),[t]),S=(0,r.useMemo)((function(){return"function"===typeof y?y:he}),[y]),C=(0,r.useMemo)((function(){return"function"===typeof g?g:he}),[g]),P=(0,r.useRef)(null),z=(0,r.useRef)(null),R=(0,r.useReducer)(be,ge),I=ce(R,2),T=I[0],M=I[1],_=T.isFocused,H=T.isFileDialogActive,q=(0,r.useRef)("undefined"!==typeof window&&window.isSecureContext&&b&&Y()),ee=function(){!q.current&&H&&setTimeout((function(){z.current&&(z.current.files.length||(M({type:"closeDialog"}),C()))}),300)};(0,r.useEffect)((function(){return window.addEventListener("focus",ee,!1),function(){window.removeEventListener("focus",ee,!1)}}),[z,H,C,q]);var ne=(0,r.useRef)([]),te=function(e){P.current&&P.current.contains(e.target)||(e.preventDefault(),ne.current=[])};(0,r.useEffect)((function(){return w&&(document.addEventListener("dragover",G,!1),document.addEventListener("drop",te,!1)),function(){w&&(document.removeEventListener("dragover",G),document.removeEventListener("drop",te))}}),[P,w]),(0,r.useEffect)((function(){return!o&&h&&P.current&&P.current.focus(),function(){}}),[P,h,o]);var re=(0,r.useCallback)((function(e){O?O(e):console.error(e)}),[O]),ue=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),Ee(e),ne.current=[].concat(ae(ne.current),[e.target]),W(e)&&Promise.resolve(i(e)).then((function(n){if(!$(e)||j){var t=n.length,r=t>0&&U({files:n,accept:k,minSize:c,maxSize:a,multiple:u,maxFiles:l,validator:F});M({isDragAccept:r,isDragReject:t>0&&!r,isDragActive:!0,type:"setDraggedFiles"}),s&&s(e)}})).catch((function(e){return re(e)}))}),[i,s,re,j,k,c,a,u,l,F]),le=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),Ee(e);var n=W(e);if(n&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(t){}return n&&p&&p(e),!1}),[p,j]),se=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),Ee(e);var n=ne.current.filter((function(e){return P.current&&P.current.contains(e)})),t=n.indexOf(e.target);-1!==t&&n.splice(t,1),ne.current=n,n.length>0||(M({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),W(e)&&f&&f(e))}),[P,f,j]),ve=(0,r.useCallback)((function(e,n){var t=[],r=[];e.forEach((function(e){var n=ce(B(e,k),2),o=n[0],i=n[1],u=ce(K(e,c,a),2),l=u[0],s=u[1],f=F?F(e):null;if(o&&l&&!f)t.push(e);else{var p=[i,s];f&&(p=p.concat(f)),r.push({file:e,errors:p.filter((function(e){return e}))})}})),(!u&&t.length>1||u&&l>=1&&t.length>l)&&(t.forEach((function(e){r.push({file:e,errors:[L]})})),t.splice(0)),M({acceptedFiles:t,fileRejections:r,type:"setFiles"}),d&&d(t,r,n),r.length>0&&m&&m(r,n),t.length>0&&v&&v(t,n)}),[M,u,k,c,a,l,d,v,m,F]),ye=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),Ee(e),ne.current=[],W(e)&&Promise.resolve(i(e)).then((function(n){$(e)&&!j||ve(n,e)})).catch((function(e){return re(e)})),M({type:"reset"})}),[i,ve,re,j]),we=(0,r.useCallback)((function(){if(q.current){M({type:"openDialog"}),S();var e={multiple:u,types:E};window.showOpenFilePicker(e).then((function(e){return i(e)})).then((function(e){ve(e,null),M({type:"closeDialog"})})).catch((function(e){V(e)?(C(e),M({type:"closeDialog"})):X(e)?(q.current=!1,z.current?(z.current.value=null,z.current.click()):re(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):re(e)}))}else z.current&&(M({type:"openDialog"}),S(),z.current.value=null,z.current.click())}),[M,S,C,b,ve,re,E,u]),De=(0,r.useCallback)((function(e){P.current&&P.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),we()))}),[P,we]),xe=(0,r.useCallback)((function(){M({type:"focus"})}),[]),Ae=(0,r.useCallback)((function(){M({type:"blur"})}),[]),je=(0,r.useCallback)((function(){D||(N()?setTimeout(we,0):we())}),[D,we]),Oe=function(e){return o?null:e},Fe=function(e){return x?null:Oe(e)},ke=function(e){return A?null:Oe(e)},Ee=function(e){j&&e.stopPropagation()},Se=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,t=void 0===n?"ref":n,r=e.role,i=e.onKeyDown,a=e.onFocus,c=e.onBlur,u=e.onClick,l=e.onDragEnter,s=e.onDragOver,f=e.onDragLeave,p=e.onDrop,d=de(e,oe);return fe(fe(pe({onKeyDown:Fe(Z(i,De)),onFocus:Fe(Z(a,xe)),onBlur:Fe(Z(c,Ae)),onClick:Oe(Z(u,je)),onDragEnter:ke(Z(l,ue)),onDragOver:ke(Z(s,le)),onDragLeave:ke(Z(f,se)),onDrop:ke(Z(p,ye)),role:"string"===typeof r&&""!==r?r:"presentation"},t,P),o||x?{}:{tabIndex:0}),d)}}),[P,De,xe,Ae,je,ue,le,se,ye,x,A,o]),Ce=(0,r.useCallback)((function(e){e.stopPropagation()}),[]),Pe=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,t=void 0===n?"ref":n,r=e.onChange,o=e.onClick,i=de(e,ie),a=pe({accept:k,multiple:u,type:"file",style:{display:"none"},onChange:Oe(Z(r,ye)),onClick:Oe(Z(o,Ce)),tabIndex:-1},t,z);return fe(fe({},a),i)}}),[z,t,u,ye,o]);return fe(fe({},T),{},{isFocused:_&&!o,getRootProps:Se,getInputProps:Pe,rootRef:P,inputRef:z,open:Oe(we)})}function be(e,n){switch(n.type){case"focus":return fe(fe({},e),{},{isFocused:!0});case"blur":return fe(fe({},e),{},{isFocused:!1});case"openDialog":return fe(fe({},ge),{},{isFileDialogActive:!0});case"closeDialog":return fe(fe({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return fe(fe({},e),{},{isDragActive:n.isDragActive,isDragAccept:n.isDragAccept,isDragReject:n.isDragReject});case"setFiles":return fe(fe({},e),{},{acceptedFiles:n.acceptedFiles,fileRejections:n.fileRejections});case"reset":return fe({},ge);default:return e}}function he(){}}}]);
//# sourceMappingURL=532.fc5a292e.chunk.js.map