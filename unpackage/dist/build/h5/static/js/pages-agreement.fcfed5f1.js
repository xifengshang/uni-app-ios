(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-agreement"],{"11eb":function(t,n,r){var e=r("f691");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=r("4f06").default;a("e1cc734c",e,!0,{sourceMap:!1,shadowMode:!1})},"151f":function(t,n,r){"use strict";var e;r.d(n,"b",(function(){return a})),r.d(n,"c",(function(){return i})),r.d(n,"a",(function(){return e}));var a=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("v-uni-view",{class:(t.selectable?"_select ":"")+"_root",attrs:{id:"_root"}},[t.nodes[0]?r("node",{attrs:{childs:t.nodes,opts:[t.lazyLoad,t.loadingImg,t.errorImg,t.showImgMenu]}}):t._t("default")],2)},i=[]},"1edb":function(t,n,r){"use strict";r("99af"),r("caad"),r("c975"),r("baa5"),r("a434"),r("d3b7"),r("acd8"),r("e25e"),r("ac1f"),r("25f0"),r("2532"),r("5319"),r("1276"),r("498a");var e=r("ded3"),a={trustTags:l("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,ruby,rt,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),blockTags:l("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),ignoreTags:l("area,base,canvas,embed,frame,head,iframe,input,link,map,meta,param,rp,script,source,style,textarea,title,track,wbr"),voidTags:l("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),entities:{lt:"<",gt:">",quot:'"',apos:"'",ensp:" ",emsp:" ",nbsp:" ",semi:";",ndash:"–",mdash:"—",middot:"·",lsquo:"‘",rsquo:"’",ldquo:"“",rdquo:"”",bull:"•",hellip:"…"},tagStyle:{address:"font-style:italic",big:"display:inline;font-size:1.2em",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",mark:"background-color:yellow",pre:"font-family:monospace;white-space:pre",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"}},i=uni.getSystemInfoSync(),s=i.windowWidth,o=l(" ,\r,\n,\t,\f"),c=0;function l(t){for(var n=Object.create(null),r=t.split(","),e=r.length;e--;)n[r[e]]=!0;return n}function d(t,n){var r=t.indexOf("&");while(-1!=r){var e=t.indexOf(";",r+3),i=void 0;if(-1==e)break;"#"==t[r+1]?(i=parseInt(("x"==t[r+2]?"0":"")+t.substring(r+2,e)),isNaN(i)||(t=t.substr(0,r)+String.fromCharCode(i)+t.substr(e+1))):(i=t.substring(r+1,e),(a.entities[i]||"amp"==i&&n)&&(t=t.substr(0,r)+(a.entities[i]||"&")+t.substr(e+1))),r=t.indexOf("&",r+1)}return t}function h(t){this.options=t||{},this.tagStyle=Object.assign(a.tagStyle,this.options.tagStyle),this.imgList=t.imgList||[],this.plugins=t.plugins||[],this.attrs=Object.create(null),this.stack=[],this.nodes=[]}function u(t){this.handler=t}a.ignoreTags.iframe=void 0,a.trustTags.iframe=!0,a.ignoreTags.embed=void 0,a.trustTags.embed=!0,h.prototype.parse=function(t){for(var n=this.plugins.length;n--;)this.plugins[n].onUpdate&&(t=this.plugins[n].onUpdate(t,a)||t);new u(this).parse(t);while(this.stack.length)this.popNode();return this.nodes},h.prototype.expose=function(){for(var t=this.stack.length;t--;){var n=this.stack[t];if("a"==n.name||n.c)return;n.c=1}},h.prototype.hook=function(t){for(var n=this.plugins.length;n--;)if(this.plugins[n].onParse&&0==this.plugins[n].onParse(t,this))return!1;return!0},h.prototype.getUrl=function(t){var n=this.options.domain;return"/"==t[0]?"/"==t[1]?t="".concat(n?n.split("://")[0]:"http",":").concat(t):n&&(t=n+t):!n||t.includes("data:")||t.includes("://")||(t="".concat(n,"/").concat(t)),t},h.prototype.parseStyle=function(t){var n=t.attrs,r=(this.tagStyle[t.name]||"").split(";").concat((n.style||"").split(";")),e={},a="";n.id&&(this.options.useAnchor?this.expose():"img"!=t.name&&"a"!=t.name&&"video"!=t.name&&"audio"!=t.name&&(n.id=void 0)),n.width&&(e.width=parseFloat(n.width)+(n.width.includes("%")?"%":"px"),n.width=void 0),n.height&&(e.height=parseFloat(n.height)+(n.height.includes("%")?"%":"px"),n.height=void 0);for(var i=0,c=r.length;i<c;i++){var l=r[i].split(":");if(!(l.length<2)){var d=l.shift().trim().toLowerCase(),h=l.join(":").trim();if("-"==h[0]&&h.lastIndexOf("-")>0||h.includes("safe"))a+=";".concat(d,":").concat(h);else if(!e[d]||h.includes("import")||!e[d].includes("import")){if(h.includes("url")){var u=h.indexOf("(")+1;if(u){while('"'==h[u]||"'"==h[u]||o[h[u]])u++;h=h.substr(0,u)+this.getUrl(h.substr(u))}}else h.includes("rpx")&&(h=h.replace(/[0-9.]+\s*rpx/g,(function(t){return"".concat(parseFloat(t)*s/750,"px")})));e[d]=h}}}return t.attrs.style=a,e},h.prototype.onTagName=function(t){this.tagName=this.xml?t:t.toLowerCase(),"svg"==this.tagName&&(this.xml=!0)},h.prototype.onAttrName=function(t){t=this.xml?t:t.toLowerCase(),"data-"==t.substr(0,5)?"data-src"!=t||this.attrs.src?"img"==this.tagName||"a"==this.tagName?this.attrName=t:this.attrName=void 0:this.attrName="src":(this.attrName=t,this.attrs[t]="T")},h.prototype.onAttrVal=function(t){var n=this.attrName||"";"style"==n||"href"==n?this.attrs[n]=d(t,!0):n.includes("src")?this.attrs[n]=this.getUrl(d(t,!0)):n&&(this.attrs[n]=t)},h.prototype.onOpenTag=function(t){var n=Object.create(null);n.name=this.tagName,n.attrs=this.attrs,this.attrs=Object.create(null);var r=n.attrs,e=this.stack[this.stack.length-1],i=e?e.children:this.nodes,o=this.xml?t:a.voidTags[n.name];if("embed"==n.name&&this.expose(),"video"!=n.name&&"audio"!=n.name||("video"!=n.name||r.id||(r.id="v".concat(c++)),r.controls||r.autoplay||(r.controls="T"),n.src=[],r.src&&(n.src.push(r.src),r.src=void 0),this.expose()),o){if(!this.hook(n)||a.ignoreTags[n.name])return void("base"!=n.name||this.options.domain?"source"==n.name&&e&&("video"==e.name||"audio"==e.name)&&r.src&&e.src.push(r.src):this.options.domain=r.href);var l=this.parseStyle(n);if("img"==n.name){if(r.src&&(r.src.includes("webp")&&(n.webp="T"),r.src.includes("data:")&&!r["original-src"]&&(r.ignore="T"),!r.ignore||n.webp||r.src.includes("cloud://"))){for(var d=this.stack.length;d--;){var h=this.stack[d];if("a"==h.name){n.a=h.attrs;break}h.c=1}r.i=this.imgList.length.toString();var u=r["original-src"]||r.src;this.imgList.push(u),this.options.lazyLoad&&(r["data-src"]=r.src,r.src=void 0)}"inline"==l.display&&(l.display=""),r.ignore&&(l["max-width"]=l["max-width"]||"100%",r.style+=";-webkit-touch-callout:none"),parseInt(l.width)>s&&(l.height=void 0),l.width&&(l.width.includes("auto")?l.width="":(n.w="T",l.height&&!l.height.includes("auto")&&(n.h="T")))}else if("svg"==n.name)return i.push(n),this.stack.push(n),void this.popNode();for(var p in l)l[p]&&(r.style+=";".concat(p,":").concat(l[p].replace(" !important","")));r.style=r.style.substr(1)||void 0}else("pre"==n.name||(r.style||"").includes("white-space")&&r.style.includes("pre"))&&(this.pre=n.pre=!0),n.children=[],this.stack.push(n);i.push(n)},h.prototype.onCloseTag=function(t){var n;for(t=this.xml?t:t.toLowerCase(),n=this.stack.length;n--;)if(this.stack[n].name==t)break;if(-1!=n)while(this.stack.length>n)this.popNode();else if("p"==t||"br"==t){var r=this.stack.length?this.stack[this.stack.length-1].children:this.nodes;r.push({name:t,attrs:{}})}},h.prototype.popNode=function(){var t=this.stack.pop(),n=t.attrs,r=t.children,i=this.stack[this.stack.length-1],o=i?i.children:this.nodes;if(!this.hook(t)||a.ignoreTags[t.name])return"title"==t.name&&r.length&&"text"==r[0].type&&this.options.setTitle&&uni.setNavigationBarTitle({title:r[0].text}),void o.pop();if(t.pre){t.pre=this.pre=void 0;for(var c=this.stack.length;c--;)this.stack[c].pre&&(this.pre=!0)}var l={};if("svg"==t.name){var d="",h=n,u=h.style;return n.style="",n.xmlns="http://www.w3.org/2000/svg",function t(n){for(var r in d+="<".concat(n.name),n.attrs){var e=n.attrs[r];e&&("viewbox"==r&&(r="viewBox"),d+=" ".concat(r,'="').concat(e,'"'))}if(n.children){d+=">";for(var a=0;a<n.children.length;a++)t(n.children[a]);d+="</".concat(n.name,">")}else d+="/>"}(t),t.name="img",t.attrs={src:"data:image/svg+xml;utf8,".concat(d.replace(/#/g,"%23")),style:u,ignore:"T"},t.children=void 0,void(this.xml=!1)}if(n.align&&("table"==t.name?"center"==n.align?l["margin-inline-start"]=l["margin-inline-end"]="auto":l.float=n.align:l["text-align"]=n.align,n.align=void 0),"font"==t.name&&(n.color&&(l.color=n.color,n.color=void 0),n.face&&(l["font-family"]=n.face,n.face=void 0),n.size)){var p=parseInt(n.size);isNaN(p)||(p<1?p=1:p>7&&(p=7),l["font-size"]=["xx-small","x-small","small","medium","large","x-large","xx-large"][p-1]),n.size=void 0}if((n.class||"").includes("align-center")&&(l["text-align"]="center"),Object.assign(l,this.parseStyle(t)),parseInt(l.width)>s&&(l["max-width"]="100%",l["box-sizing"]="border-box"),a.blockTags[t.name]?t.name="div":a.trustTags[t.name]||this.xml||(t.name="span"),"a"==t.name||"ad"==t.name||"iframe"==t.name)this.expose();else if("ul"!=t.name&&"ol"!=t.name||!t.c){if("table"==t.name){var f=parseFloat(n.cellpadding),v=parseFloat(n.cellspacing),m=parseFloat(n.border);if(t.c&&(isNaN(f)&&(f=2),isNaN(v)&&(v=2)),m&&(n.style+=";border:".concat(m,"px solid gray")),t.flag&&t.c){l.display="grid",v?(l["grid-gap"]="".concat(v,"px"),l.padding="".concat(v,"px")):m&&(n.style+=";border-left:0;border-top:0");var g=[],y=[],b=[],x={};(function t(n){for(var r=0;r<n.length;r++)"tr"==n[r].name?y.push(n[r]):t(n[r].children||[])})(r);for(var w=1;w<=y.length;w++){for(var _=1,k=0;k<y[w-1].children.length;k++,_++){var T=y[w-1].children[k];if("td"==T.name||"th"==T.name){while(x["".concat(w,".").concat(_)])_++;var O=T.attrs.style||"",N=O.indexOf("width")?O.indexOf(";width"):0;if(-1!=N){var $=O.indexOf(";",N+6);-1==$&&($=O.length),T.attrs.colspan||(g[_]=O.substring(N?N+7:6,$)),O=O.substr(0,N)+O.substr($)}if(O+=(m?";border:".concat(m,"px solid gray")+(v?"":";border-right:0;border-bottom:0"):"")+(f?";padding:".concat(f,"px"):""),T.attrs.colspan&&(O+=";grid-column-start:".concat(_,";grid-column-end:").concat(_+parseInt(T.attrs.colspan)),T.attrs.rowspan||(O+=";grid-row-start:".concat(w,";grid-row-end:").concat(w+1)),_+=parseInt(T.attrs.colspan)-1),T.attrs.rowspan){O+=";grid-row-start:".concat(w,";grid-row-end:").concat(w+parseInt(T.attrs.rowspan)),T.attrs.colspan||(O+=";grid-column-start:".concat(_,";grid-column-end:").concat(_+1));for(var I=1;I<T.attrs.rowspan;I++)x["".concat(w+I,".").concat(_)]=1}O&&(T.attrs.style=O),b.push(T)}}if(1==w){for(var j="",C=1;C<_;C++)j+="".concat(g[C]?g[C]:"auto"," ");l["grid-template-columns"]=j}}t.children=b}else t.c&&(l.display="table"),isNaN(v)||(l["border-spacing"]="".concat(v,"px")),(m||f)&&function t(n){for(var r=0;r<n.length;r++){var e=n[r];"th"==e.name||"td"==e.name?(m&&(e.attrs.style="border:".concat(m,"px solid gray;").concat(e.attrs.style||"")),f&&(e.attrs.style="padding:".concat(f,"px;").concat(e.attrs.style||""))):e.children&&t(e.children)}}(r);if(this.options.scrollTable&&!(n.style||"").includes("inline")){var S=e({},t);t.name="div",t.attrs={style:"overflow:auto"},t.children=[S],n=S.attrs}}else if("td"!=t.name&&"th"!=t.name||!n.colspan&&!n.rowspan){if("ruby"==t.name){t.name="span";for(var L=0;L<r.length-1;L++)"text"==r[L].type&&"rt"==r[L+1].name&&(r[L]={name:"div",attrs:{style:"display:inline-block"},children:[{name:"div",attrs:{style:"font-size:50%;text-align:start"},children:r[L+1].children},r[L]]},r.splice(L+1,1))}else if(t.c){t.c=2;for(var P=t.children.length;P--;)t.children[P].c&&"table"!=t.children[P].name||(t.c=1)}}else for(var z=this.stack.length;z--;)if("table"==this.stack[z].name){this.stack[z].flag=1;break}}else{var A={a:"lower-alpha",A:"upper-alpha",i:"lower-roman",I:"upper-roman"};A[n.type]&&(n.style+=";list-style-type:".concat(A[n.type]),n.type=void 0);for(var E=r.length;E--;)"li"==r[E].name&&(r[E].c=1)}if((l.display||"").includes("flex")&&!t.c)for(var M=r.length;M--;){var V=r[M];V.f&&(V.attrs.style=(V.attrs.style||"")+V.f,V.f=void 0)}var q=i&&(i.attrs.style||"").includes("flex")&&!t.c;for(var B in q&&(t.f=";max-width:100%"),l)if(l[B]){var R=";".concat(B,":").concat(l[B].replace(" !important",""));q&&(B.includes("flex")&&"flex-direction"!=B||"align-self"==B||"-"==l[B][0]||"width"==B&&R.includes("%"))?(t.f+=R,"width"==B&&(n.style+=";width:100%")):n.style+=R}n.style=n.style.substr(1)||void 0},h.prototype.onText=function(t){if(!this.pre){for(var n,r="",e=0,a=t.length;e<a;e++)o[t[e]]?(" "!=r[r.length-1]&&(r+=" "),"\n"!=t[e]||n||(n=!0)):r+=t[e];if(" "==r&&n)return;t=r}var i=Object.create(null);if(i.type="text",i.text=d(t),this.hook(i)){var s=this.stack.length?this.stack[this.stack.length-1].children:this.nodes;s.push(i)}},u.prototype.parse=function(t){this.content=t||"",this.i=0,this.start=0,this.state=this.text;for(var n=this.content.length;-1!=this.i&&this.i<n;)this.state()},u.prototype.checkClose=function(t){var n="/"==this.content[this.i];return!!(">"==this.content[this.i]||n&&">"==this.content[this.i+1])&&(t&&this.handler[t](this.content.substring(this.start,this.i)),this.i+=n?2:1,this.start=this.i,this.handler.onOpenTag(n),"script"==this.handler.tagName?(this.i=this.content.indexOf("</",this.i),-1!=this.i&&(this.i+=2,this.start=this.i),this.state=this.endTag):this.state=this.text,!0)},u.prototype.text=function(){if(this.i=this.content.indexOf("<",this.i),-1!=this.i){var t=this.content[this.i+1];if(t>="a"&&t<="z"||t>="A"&&t<="Z")this.start!=this.i&&this.handler.onText(this.content.substring(this.start,this.i)),this.start=++this.i,this.state=this.tagName;else if("/"==t||"!"==t||"?"==t){this.start!=this.i&&this.handler.onText(this.content.substring(this.start,this.i));var n=this.content[this.i+2];if("/"==t&&(n>="a"&&n<="z"||n>="A"&&n<="Z"))return this.i+=2,this.start=this.i,this.state=this.endTag;var r="--\x3e";"!"==t&&"-"==this.content[this.i+2]&&"-"==this.content[this.i+3]||(r=">"),this.i=this.content.indexOf(r,this.i),-1!=this.i&&(this.i+=r.length,this.start=this.i)}else this.i++}else this.start<this.content.length&&this.handler.onText(this.content.substring(this.start,this.content.length))},u.prototype.tagName=function(){if(o[this.content[this.i]]){this.handler.onTagName(this.content.substring(this.start,this.i));while(o[this.content[++this.i]]);this.i<this.content.length&&!this.checkClose()&&(this.start=this.i,this.state=this.attrName)}else this.checkClose("onTagName")||this.i++},u.prototype.attrName=function(){var t=this.content[this.i];if(o[t]||"="==t){this.handler.onAttrName(this.content.substring(this.start,this.i));var n="="==t,r=this.content.length;while(++this.i<r)if(t=this.content[this.i],!o[t]){if(this.checkClose())return;if(n)return this.start=this.i,this.state=this.attrVal;if("="!=this.content[this.i])return this.start=this.i,this.state=this.attrName;n=!0}}else this.checkClose("onAttrName")||this.i++},u.prototype.attrVal=function(){var t=this.content[this.i],n=this.content.length;if('"'==t||"'"==t){if(this.start=++this.i,this.i=this.content.indexOf(t,this.i),-1==this.i)return;this.handler.onAttrVal(this.content.substring(this.start,this.i))}else for(;this.i<n;this.i++){if(o[this.content[this.i]]){this.handler.onAttrVal(this.content.substring(this.start,this.i));break}if(this.checkClose("onAttrVal"))return}while(o[this.content[++this.i]]);this.i<n&&!this.checkClose()&&(this.start=this.i,this.state=this.attrName)},u.prototype.endTag=function(){var t=this.content[this.i];if(o[t]||">"==t||"/"==t){if(this.handler.onCloseTag(this.content.substring(this.start,this.i)),">"!=t&&(this.i=this.content.indexOf(">",this.i),-1==this.i))return;this.start=++this.i,this.state=this.text}else this.i++},t.exports=h},2034:function(t,n,r){"use strict";var e=r("4ea4");r("99af"),r("d3b7"),r("e25e"),r("ac1f"),r("5319"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e(r("2f5d")),i=e(r("d6ee")),s=[],o=r("1edb"),c={name:"mp-html",data:function(){return{nodes:[]}},mixins:[a.default],components:{node:i.default},watch:{content:function(t){this.setContent(t)}},created:function(){this.plugins=[];for(var t=s.length;t--;)this.plugins.push(new s[t](this))},mounted:function(){this.content&&!this.nodes.length&&this.setContent(this.content)},beforeDestroy:function(){this._hook("onDetached"),clearInterval(this._timer)},methods:{in:function(t,n,r){t&&n&&r&&(this._in={page:t,selector:n,scrollTop:r})},navigateTo:function(t,n){var r=this;return new Promise((function(e,a){if(!r.useAnchor)return a("Anchor is disabled");n=n||parseInt(r.useAnchor)||0;var i=" ",s=uni.createSelectorQuery().in(r._in?r._in.page:r).select((r._in?r._in.selector:"._root")+(t?"".concat(i,"#").concat(t):"")).boundingClientRect();r._in?s.select(r._in.selector).scrollOffset().select(r._in.selector).boundingClientRect():s.selectViewport().scrollOffset(),s.exec((function(t){if(!t[0])return a("Label not found");var i=t[1].scrollTop+t[0].top-(t[2]?t[2].top:0)+n;r._in?r._in.page[r._in.scrollTop]=i:uni.pageScrollTo({scrollTop:i,duration:300}),e()}))}))},getText:function(){var t="";return function n(r){for(var e=0;e<r.length;e++){var a=r[e];if("text"==a.type)t+=a.text.replace(/&amp;/g,"&");else if("br"==a.name)t+="\n";else{var i="p"==a.name||"div"==a.name||"tr"==a.name||"li"==a.name||"h"==a.name[0]&&a.name[1]>"0"&&a.name[1]<"7";i&&t&&"\n"!=t[t.length-1]&&(t+="\n"),a.children&&n(a.children),i&&"\n"!=t[t.length-1]?t+="\n":"td"!=a.name&&"th"!=a.name||(t+="\t")}}}(this.nodes),t},getRect:function(){var t=this;return new Promise((function(n,r){uni.createSelectorQuery().in(t).select("#_root").boundingClientRect().exec((function(t){return t[0]?n(t[0]):r("Root label not found")}))}))},setContent:function(t,n){var r=this;n&&this.imgList||(this.imgList=[]);var e,a=new o(this).parse(t);this.$set(this,"nodes",n?(this.nodes||[]).concat(a):a),this._videos=[],this.$nextTick((function(){r._hook("onLoad"),r.$emit("load")})),clearInterval(this._timer),this._timer=setInterval((function(){r.getRect().then((function(t){t.height==e&&(r.$emit("ready",t),clearInterval(r._timer)),e=t.height})).catch((function(){}))}),350)},_hook:function(t){for(var n=s.length;n--;)this.plugins[n][t]&&this.plugins[n][t]()}}};n.default=c},"24e1":function(t,n,r){"use strict";r.r(n);var e=r("35d5"),a=r.n(e);for(var i in e)"default"!==i&&function(t){r.d(n,t,(function(){return e[t]}))}(i);n["default"]=a.a},"25c0":function(t,n,r){"use strict";r.r(n);var e=r("660e"),a=r("96d2");for(var i in a)"default"!==i&&function(t){r.d(n,t,(function(){return a[t]}))}(i);r("f027");var s,o=r("f0c5"),c=Object(o["a"])(a["default"],e["b"],e["c"],!1,null,"0cf68784",null,!1,e["a"],s);n["default"]=c.exports},"2f5d":function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={props:{content:String,copyLink:{type:Boolean,default:uni.$u.props.parse.copyLink},domain:String,errorImg:{type:String,default:uni.$u.props.parse.errorImg},lazyLoad:{type:Boolean,default:uni.$u.props.parse.lazyLoad},loadingImg:{type:String,default:uni.$u.props.parse.loadingImg},pauseVideo:{type:Boolean,default:uni.$u.props.parse.pauseVideo},previewImg:{type:Boolean,default:uni.$u.props.parse.previewImg},scrollTable:Boolean,selectable:Boolean,setTitle:{type:Boolean,default:uni.$u.props.parse.setTitle},showImgMenu:{type:Boolean,default:uni.$u.props.parse.showImgMenu},tagStyle:Object,useAnchor:null}};n.default=e},"35d5":function(t,n,r){"use strict";var e=r("4ea4");r("caad"),r("e25e"),r("2532"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e(r("d6ee")),i={name:"node",data:function(){return{ctrl:{}}},props:{name:String,attrs:{type:Object,default:function(){return{}}},childs:Array,opts:Array},components:{node:a.default},mounted:function(){var t=this;for(this.root=this.$parent;"mp-html"!=this.root.$options.name;this.root=this.root.$parent);if(this.opts[0]){for(var n=this.childs.length;n--;)if("img"==this.childs[n].name)break;-1!=n&&(this.observer=uni.createIntersectionObserver(this).relativeToViewport({top:500,bottom:500}),this.observer.observe("._img",(function(n){n.intersectionRatio&&(t.$set(t.ctrl,"load",1),t.observer.disconnect())})))}},beforeDestroy:function(){this.observer&&this.observer.disconnect()},methods:{play:function(t){if(this.root.pauseVideo){for(var n=!1,r=t.target.id,e=this.root._videos.length;e--;)this.root._videos[e].id==r?n=!0:this.root._videos[e].pause();if(!n){var a=uni.createVideoContext(r,this);a.id=r,this.root._videos.push(a)}}},imgTap:function(t){var n=this.childs[t.currentTarget.dataset.i];if(n.a)return this.linkTap(n.a);n.attrs.ignore||(n.attrs.src=n.attrs.src||n.attrs["data-src"],this.root.$emit("imgtap",n.attrs),this.root.previewImg&&uni.previewImage({current:parseInt(n.attrs.i),urls:this.root.imgList}))},imgLongTap:function(t){},imgLoad:function(t){var n=t.currentTarget.dataset.i;(this.opts[1]&&!this.ctrl[n]||-1==this.ctrl[n])&&this.$set(this.ctrl,n,1)},linkTap:function(t){var n=t.currentTarget?this.childs[t.currentTarget.dataset.i].attrs:t,r=n.href;this.root.$emit("linktap",n),r&&("#"==r[0]?this.root.navigateTo(r.substring(1)).catch((function(){})):r.includes("://")?this.root.copyLink&&window.open(r):uni.navigateTo({url:r,fail:function(){uni.switchTab({url:r,fail:function(){}})}}))},mediaError:function(t){var n=t.currentTarget.dataset.i,r=this.childs[n];if("video"==r.name||"audio"==r.name){var e=(this.ctrl[n]||0)+1;if(e>r.src.length&&(e=0),e<r.src.length)return this.$set(this.ctrl,n,e)}else"img"==r.name&&this.opts[2]&&this.$set(this.ctrl,n,-1);this.root&&this.root.$emit("error",{source:r.name,attrs:r.attrs,errMsg:t.detail.errMsg})}}};n.default=i},"3dd4":function(t,n,r){"use strict";var e=r("11eb"),a=r.n(e);a.a},"660e":function(t,n,r){"use strict";r.d(n,"b",(function(){return a})),r.d(n,"c",(function(){return i})),r.d(n,"a",(function(){return e}));var e={uParse:r("aa21").default},a=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("v-uni-view",{staticClass:"agreement"},[r("u-parse",{attrs:{html:t.content}})],1)},i=[]},8984:function(t,n,r){"use strict";var e=r("b236"),a=r.n(e);a.a},"908a":function(t,n,r){var e=r("24fb");n=e(!1),n.push([t.i,"\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* 根节点样式 */._root[data-v-3186dbb4]{overflow:auto;-webkit-overflow-scrolling:touch}\r\n/* 长按复制 */._select[data-v-3186dbb4]{-webkit-user-select:text;user-select:text}\r\n",""]),t.exports=n},"96d2":function(t,n,r){"use strict";r.r(n);var e=r("9e1f"),a=r.n(e);for(var i in e)"default"!==i&&function(t){r.d(n,t,(function(){return e[t]}))}(i);n["default"]=a.a},"9e1f":function(t,n,r){"use strict";var e=r("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,r("96cf");var a=e(r("1da1")),i={data:function(){return{content:void 0}},created:function(){},mounted:function(){},onReady:function(){},onLoad:function(t){this.commonPageContent(t.key)},onShow:function(){},onShareAppMessage:function(t){return{title:"",path:""}},methods:{commonPageContent:function(t){var n=this;return(0,a.default)(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,n.$api.commonPageContent(t);case 2:e=r.sent,0==e.code&&(uni.setNavigationBarTitle({title:e.data.info.title}),n.content=e.data.info.content);case 4:case"end":return r.stop()}}),r)})))()}}};n.default=i},aa21:function(t,n,r){"use strict";r.r(n);var e=r("151f"),a=r("eab5");for(var i in a)"default"!==i&&function(t){r.d(n,t,(function(){return a[t]}))}(i);r("8984");var s,o=r("f0c5"),c=Object(o["a"])(a["default"],e["b"],e["c"],!1,null,"3186dbb4",null,!1,e["a"],s);n["default"]=c.exports},ab9e:function(t,n,r){var e=r("da0b");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=r("4f06").default;a("2eedb620",e,!0,{sourceMap:!1,shadowMode:!1})},b236:function(t,n,r){var e=r("908a");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=r("4f06").default;a("5d495e13",e,!0,{sourceMap:!1,shadowMode:!1})},baa5:function(t,n,r){var e=r("23e7"),a=r("e58c");e({target:"Array",proto:!0,forced:a!==[].lastIndexOf},{lastIndexOf:a})},d6ee:function(t,n,r){"use strict";r.r(n);var e=r("ec48"),a=r("24e1");for(var i in a)"default"!==i&&function(t){r.d(n,t,(function(){return a[t]}))}(i);r("3dd4");var s,o=r("f0c5"),c=r("f002"),l=Object(o["a"])(a["default"],e["b"],e["c"],!1,null,"dca96ec8",null,!1,e["a"],s);"function"===typeof c["a"]&&Object(c["a"])(l),n["default"]=l.exports},da0b:function(t,n,r){var e=r("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.agreement[data-v-0cf68784]{padding:%?32?%}',""]),t.exports=n},ded3:function(t,n,r){r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");var e=r("9523");function a(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function i(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){e(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}t.exports=i},eab5:function(t,n,r){"use strict";r.r(n);var e=r("2034"),a=r.n(e);for(var i in e)"default"!==i&&function(t){r.d(n,t,(function(){return e[t]}))}(i);n["default"]=a.a},ec48:function(t,n,r){"use strict";var e;r.d(n,"b",(function(){return a})),r.d(n,"c",(function(){return i})),r.d(n,"a",(function(){return e}));var a=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("v-uni-view",{class:"_"+t.name+" "+t.attrs.class,style:t.attrs.style,attrs:{id:t.attrs.id}},[t._l(t.childs,(function(n,e){return["img"==n.name&&(t.opts[1]&&!t.ctrl[e]||t.ctrl[e]<0)?r("v-uni-image",{key:e+"_0",staticClass:"_img",style:n.attrs.style,attrs:{src:t.ctrl[e]<0?t.opts[2]:t.opts[1],mode:"widthFix"}}):t._e(),"img"==n.name?r("img",{key:e+"_1",class:"_img "+n.attrs.class,style:(-1==t.ctrl[e]?"display:none;":"")+n.attrs.style,attrs:{id:n.attrs.id,src:n.attrs.src||(t.ctrl.load?n.attrs["data-src"]:""),"data-i":e},on:{load:function(n){arguments[0]=n=t.$handleEvent(n),t.imgLoad.apply(void 0,arguments)},error:function(n){arguments[0]=n=t.$handleEvent(n),t.mediaError.apply(void 0,arguments)},longpress:function(n){arguments[0]=n=t.$handleEvent(n),t.imgLongTap.apply(void 0,arguments)},click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.imgTap.apply(void 0,arguments)}}}):"text"==n.type?r("v-uni-text",{attrs:{decode:!0}},[t._v(t._s(n.text))]):"br"==n.name?r("v-uni-text",[t._v("\\n")]):"a"==n.name?r("v-uni-view",{class:(n.attrs.href?"_a ":"")+n.attrs.class,style:"display:inline;"+n.attrs.style,attrs:{id:n.attrs.id,"hover-class":"_hover","data-i":e},on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.linkTap.apply(void 0,arguments)}}},[r("node",{staticStyle:{display:"inherit"},attrs:{name:"span",childs:n.children,opts:t.opts}})],1):"video"==n.name?r("v-uni-video",{class:n.attrs.class,style:n.attrs.style,attrs:{id:n.attrs.id,autoplay:n.attrs.autoplay,controls:n.attrs.controls,loop:n.attrs.loop,muted:n.attrs.muted,poster:n.attrs.poster,src:n.src[t.ctrl[e]||0],"data-i":e},on:{play:function(n){arguments[0]=n=t.$handleEvent(n),t.play.apply(void 0,arguments)},error:function(n){arguments[0]=n=t.$handleEvent(n),t.mediaError.apply(void 0,arguments)}}}):"iframe"==n.name?r("iframe",{style:n.attrs.style,attrs:{allowfullscreen:n.attrs.allowfullscreen,frameborder:n.attrs.frameborder,src:n.attrs.src}}):"embed"==n.name?r("embed",{style:n.attrs.style,attrs:{src:n.attrs.src}}):"audio"==n.name?r("v-uni-audio",{class:n.attrs.class,style:n.attrs.style,attrs:{id:n.attrs.id,author:n.attrs.author,controls:n.attrs.controls,loop:n.attrs.loop,name:n.attrs.name,poster:n.attrs.poster,src:n.src[t.ctrl[e]||0],"data-i":e},on:{play:function(n){arguments[0]=n=t.$handleEvent(n),t.play.apply(void 0,arguments)},error:function(n){arguments[0]=n=t.$handleEvent(n),t.mediaError.apply(void 0,arguments)}}}):"table"==n.name&&n.c||"li"==n.name?r("v-uni-view",{class:"_"+n.name+" "+n.attrs.class,style:n.attrs.style,attrs:{id:n.attrs.id}},["li"==n.name?r("node",{attrs:{childs:n.children,opts:t.opts}}):t._l(n.children,(function(n,e){return r("v-uni-view",{key:e,class:"_"+n.name+" "+n.attrs.class,style:n.attrs.style},["td"==n.name||"th"==n.name?r("node",{attrs:{childs:n.children,opts:t.opts}}):t._l(n.children,(function(n,e){return["td"==n.name||"th"==n.name?r("v-uni-view",{key:e+"_0",class:"_"+n.name+" "+n.attrs.class,style:n.attrs.style},[r("node",{attrs:{childs:n.children,opts:t.opts}})],1):r("v-uni-view",{class:"_"+n.name+" "+n.attrs.class,style:n.attrs.style},t._l(n.children,(function(n,e){return r("v-uni-view",{key:e,class:"_"+n.name+" "+n.attrs.class,style:n.attrs.style},[r("node",{attrs:{childs:n.children,opts:t.opts}})],1)})),1)]}))],2)}))],2):t.handler.use(n)?r("v-uni-rich-text",{style:n.f,attrs:{id:n.attrs.id,nodes:[n]}}):2==n.c?r("v-uni-view",{class:"_"+n.name+" "+n.attrs.class,style:n.f+";"+n.attrs.style,attrs:{id:n.attrs.id}},t._l(n.children,(function(n,e){return r("node",{key:e,style:n.f,attrs:{name:n.name,attrs:n.attrs,childs:n.children,opts:t.opts}})})),1):r("node",{style:n.f,attrs:{name:n.name,attrs:n.attrs,childs:n.children,opts:t.opts}})]}))],2)},i=[]},f002:function(t,n,r){"use strict";var e=function(t){(t.options.wxs||(t.options.wxs={}))["handler"]=function(t){var n={abbr:!0,b:!0,big:!0,code:!0,del:!0,em:!0,i:!0,ins:!0,label:!0,q:!0,small:!0,span:!0,strong:!0,sub:!0,sup:!0};return t.exports={use:function(t){return!n[t.name]&&-1==(t.attrs.style||"").indexOf("display:inline")&&!t.c}},t.exports}({exports:{}})};n["a"]=e},f027:function(t,n,r){"use strict";var e=r("ab9e"),a=r.n(e);a.a},f691:function(t,n,r){var e=r("24fb");n=e(!1),n.push([t.i,"\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* a 标签默认效果 */._a[data-v-dca96ec8]{padding:1.5px 0 1.5px 0;color:#366092;word-break:break-all}\r\n/* a 标签点击态效果 */._hover[data-v-dca96ec8]{text-decoration:underline;opacity:.7}\r\n/* 图片默认效果 */._img[data-v-dca96ec8]{max-width:100%;-webkit-touch-callout:none}\r\n/* 内部样式 */._b[data-v-dca96ec8],\r\n._strong[data-v-dca96ec8]{font-weight:700}._code[data-v-dca96ec8]{font-family:monospace}._del[data-v-dca96ec8]{text-decoration:line-through}._em[data-v-dca96ec8],\r\n._i[data-v-dca96ec8]{font-style:italic}._h1[data-v-dca96ec8]{font-size:2em}._h2[data-v-dca96ec8]{font-size:1.5em}._h3[data-v-dca96ec8]{font-size:1.17em}._h5[data-v-dca96ec8]{font-size:.83em}._h6[data-v-dca96ec8]{font-size:.67em}._h1[data-v-dca96ec8],\r\n._h2[data-v-dca96ec8],\r\n._h3[data-v-dca96ec8],\r\n._h4[data-v-dca96ec8],\r\n._h5[data-v-dca96ec8],\r\n._h6[data-v-dca96ec8]{display:block;font-weight:700}._image[data-v-dca96ec8]{height:1px}._ins[data-v-dca96ec8]{text-decoration:underline}._li[data-v-dca96ec8]{display:list-item}._ol[data-v-dca96ec8]{list-style-type:decimal}._ol[data-v-dca96ec8],\r\n._ul[data-v-dca96ec8]{display:block;padding-left:40px;margin:1em 0}._q[data-v-dca96ec8]::before{content:'\"'}._q[data-v-dca96ec8]::after{content:'\"'}._sub[data-v-dca96ec8]{font-size:smaller;vertical-align:sub}._sup[data-v-dca96ec8]{font-size:smaller;vertical-align:super}._thead[data-v-dca96ec8],\r\n._tbody[data-v-dca96ec8],\r\n._tfoot[data-v-dca96ec8]{display:table-row-group}._tr[data-v-dca96ec8]{display:table-row}._td[data-v-dca96ec8],\r\n._th[data-v-dca96ec8]{display:table-cell;vertical-align:middle}._th[data-v-dca96ec8]{font-weight:700;text-align:center}._ul[data-v-dca96ec8]{list-style-type:disc}._ul ._ul[data-v-dca96ec8]{margin:0;list-style-type:circle}._ul ._ul ._ul[data-v-dca96ec8]{list-style-type:square}._abbr[data-v-dca96ec8],\r\n._b[data-v-dca96ec8],\r\n._code[data-v-dca96ec8],\r\n._del[data-v-dca96ec8],\r\n._em[data-v-dca96ec8],\r\n._i[data-v-dca96ec8],\r\n._ins[data-v-dca96ec8],\r\n._label[data-v-dca96ec8],\r\n._q[data-v-dca96ec8],\r\n._span[data-v-dca96ec8],\r\n._strong[data-v-dca96ec8],\r\n._sub[data-v-dca96ec8],\r\n._sup[data-v-dca96ec8]{display:inline}\r\n\r\n",""]),t.exports=n}}]);