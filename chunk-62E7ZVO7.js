import{S as d,Xa as p,m as a}from"./chunk-2ZTQTHCR.js";var r=class{constructor(){this.isLoggedIn=p(!1),this.$isLoggentIn=new a(!1)}};var c=class{get(e){let i=document.cookie.split("; ");for(let t of i){let[o,n]=t.split("=");if(o===e)return JSON.parse(n)}return!1}set(e,i,t=7){let o=new Date;o.setDate(o.getDate()+t);let n=`${e}=${JSON.stringify(i)}; expires=${o.toUTCString()}; path=/; secure`;document.cookie=n}delete(e){let t=`${e}=; expires=${new Date(0).toUTCString()}; path=/`;document.cookie=t}};var S=(()=>{let e=class e extends r{constructor(){super(),this.cookie=new c,this.detectUserState()}detectUserState(){let t=this.cookie.get("user_credentials");this.isLoggedIn.update(()=>!!t),this.$isLoggentIn.next(this.isLoggedIn()),Object.assign(this,t)}updateUser(t){this.cookie.set("user_credentials",t,15),this.detectUserState()}logout(){this.cookie.delete("user_credentials"),this.detectUserState()}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();export{S as a};
