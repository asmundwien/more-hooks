function ___$insertStyle(e){if(e&&"undefined"!=typeof window){var t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t),e}}Object.defineProperty(exports,"__esModule",{value:!0});var react=require("react");function __awaiter(a,o,c,i){return new(c=c||Promise)(function(e,t){function n(e){try{u(i.next(e))}catch(e){t(e)}}function r(e){try{u(i.throw(e))}catch(e){t(e)}}function u(t){t.done?e(t.value):new c(function(e){e(t.value)}).then(n,r)}u((i=i.apply(a,o||[])).next())})}function __generator(n,r){var u,a,o,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(u)throw new TypeError("Generator is already executing.");for(;c;)try{if(u=1,a&&(o=2&t[0]?a.return:t[0]?a.throw||((o=a.return)&&o.call(a),0):a.next)&&!(o=o.call(a,t[1])).done)return o;switch(a=0,o&&(t=[2&t[0],o.value]),t[0]){case 0:case 1:o=t;break;case 4:return c.label++,{value:t[1],done:!1};case 5:c.label++,a=t[1],t=[0];continue;case 7:t=c.ops.pop(),c.trys.pop();continue;default:if(!(o=0<(o=c.trys).length&&o[o.length-1])&&(6===t[0]||2===t[0])){c=0;continue}if(3===t[0]&&(!o||t[1]>o[0]&&t[1]<o[3])){c.label=t[1];break}if(6===t[0]&&c.label<o[1]){c.label=o[1],o=t;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(t);break}o[2]&&c.ops.pop(),c.trys.pop();continue}t=r.call(n,c)}catch(e){t=[6,e],a=0}finally{u=o=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}}var useOnMount=function(e){return react.useEffect(function(){e()},[])},useAsync=function(u,e){var t=react.useState(),a=t[0],o=t[1],n=react.useState(!1),r=n[0],c=n[1],i=react.useState(!1),s=i[0],l=i[1],f=react.useState(null),p=f[0],d=f[1],y=react.useState(!1),h=y[0],v=y[1],b=react.useCallback(function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return __awaiter(void 0,void 0,void 0,function(){var t,n;return __generator(this,function(e){switch(e.label){case 0:v(!0),c(!0),l(!1),o(void 0),d(null),e.label=1;case 1:return e.trys.push([1,3,4,5]),[4,u.apply(void 0,r)];case 2:return t=e.sent(),o(t),l(!0),[3,5];case 3:return n=e.sent(),d(n),[3,5];case 4:return c(!1),[2,a];case 5:return[2]}})})},[]);return useOnMount(function(){null!=e&&e.immediate&&b.apply(void 0,null==e?void 0:e.immediateParams)}),{response:a,pending:r,success:s,error:p,call:b,hasBeenCalled:h}};exports.useAsync=useAsync,exports.useOnMount=useOnMount;
//# sourceMappingURL=index.js.map
