import{S as c,X as d,a}from"./chunk-2ZTQTHCR.js";var r=class{constructor(t,l,e,s){this.message=t,this.header=l,this.type=e,this.config=s,this.root=document.getElementById("toaster-container"),this.bulidToasterComponent=()=>{if(this.toaster=document.createElement("div"),this.toaster.classList.add("toaster"),this.toaster.classList.add(this.type),this.toasterContent=document.createElement("div"),this.toasterContent.classList.add("toaster-content"),this.root.classList.add(this.config.position?.horizontal||"end"),this.root.classList.add(this.config.position?.vertical||"top"),this.header){let n=document.createElement("div");n.classList.add("header"),n.textContent=this.header,this.toasterContent.appendChild(n)}let i=document.createElement("div");if(i.classList.add("body"),i.textContent=this.message,this.toasterContent.appendChild(i),this.toaster.appendChild(this.toasterContent),this.config.timeOut){let n=document.createElement("div");n.classList.add("time-out"),n.style.setProperty("--animation-time",` ${this.config.duration}ms`),this.toaster.appendChild(n)}this.toaster.addEventListener("click",this.close),this.root.appendChild(this.toaster),setTimeout(()=>{this.toaster.classList.add("open")},10),setTimeout(()=>{this.close()},this.config.duration)},this.close=()=>{this.toaster.classList.add("close"),setTimeout(()=>{this.toaster.remove()},700)},this.bulidToasterComponent()}};var h=(()=>{let t=class t{constructor(){this.duration=3e3,this.timeOut=!0,this.position={horizontal:"end",vertical:"top"}}};t.\u0275fac=function(s){return new(s||t)},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let o=t;return o})();var C=(()=>{let t=class t{constructor(e){this.defaultConfig=e}success(e,s="",i){new r(e,s,"success",a(a({},this.defaultConfig),i))}error(e,s="",i){new r(e,s,"error",a(a({},this.defaultConfig),i))}warning(e,s="",i){new r(e,s,"warning",a(a({},this.defaultConfig),i))}};t.\u0275fac=function(s){return new(s||t)(d(h))},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let o=t;return o})();export{h as a,C as b};
