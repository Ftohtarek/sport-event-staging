import{Q as l,Va as u,k as a}from"./chunk-TKMI5VCA.js";var r=class{constructor(){this.isLoggedIn=u(!1),this.$isLoggentIn=new a(!1)}};var c=class{get(e){let i=document.cookie.split("; ");for(let t of i){let[o,n]=t.split("=");if(o===e)return JSON.parse(n)}return!1}set(e,i,t=7){let o=new Date;o.setDate(o.getDate()+t);let n=`${e}=${JSON.stringify(i)}; expires=${o.toUTCString()}; path=/; secure`;document.cookie=n}delete(e){let t=`${e}=; expires=${new Date(0).toUTCString()}; path=/`;document.cookie=t}};var I=(()=>{let e=class e extends r{constructor(){super(),this.cookie=new c,this.detectUserState(),this.$isLoggentIn.subscribe(t=>{console.log("track state",t)})}detectUserState(){let t=this.cookie.get("user_credentials");this.isLoggedIn.update(()=>!!t),this.$isLoggentIn.next(this.isLoggedIn()),Object.assign(this,t)}updateUser(t){this.cookie.set("user_credentials",t,15),this.detectUserState()}logout(){this.cookie.delete("user_credentials"),this.detectUserState()}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();export{I as a};
