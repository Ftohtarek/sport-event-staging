import{S as s,X as o,Xa as c}from"./chunk-2ZTQTHCR.js";var l=(()=>{let t=class t{constructor(){this.systemLang=["en","ar"],this.currentlang=c("en")}set(e){let n=e=="ar"?"rtl":"ltr";this.currentlang.update(()=>e),document.body.style.direction=n,document.body?.style?.setProperty("--dir",n),document.body.lang=e}get isEn(){return this.currentlang()=="en"}get isAr(){return this.currentlang()=="ar"}getLanguage(){return this.currentlang}changeLanguage(e){location.href=this.replaceLang(e)}replaceLang(e){let n=/\/([a-z]{1,})\//,r=location.href.match(n);return r?location.href.replace(r[0],`/${e}/`):location.href}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=s({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var a={},f={home:"home",projects:{index:"projects",details:"details"},auth:{index:"auth",login:"login",regsiter:"regsiter",forgetPassword:"forget-password",newPassword:"new-password",otp:"otp"},account:{index:"account",profile:"profile",myTickets:{index:"my-tickets",details:"details"},saved:"saved"},events:{index:"events",details:"details"},checkout:"checkout",success:"success",about:"about-us",contactUs:"contact-us",categories:"categories"},h=(()=>{let t=class t{constructor(e){this.lang=e}fire(){a=JSON.parse(JSON.stringify(f)),a=this.recursiveMap(a)}recursiveMap(e,n){for(let r in e)typeof e[r]=="string"?n?r==="index"?e[r]=`${n}/${e[r]}`:e[r]=`${e.index}/${e[r]}`:e.index&&r!=="index"?e[r]=`${e.index}/${e[r]}`:e[r]=`/${this.lang.currentlang()}/${e[r]}`:this.recursiveMap(e[r],e.index);return e}};t.\u0275fac=function(n){return new(n||t)(o(l))},t.\u0275prov=s({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();export{l as a,a as b,f as c,h as d};
