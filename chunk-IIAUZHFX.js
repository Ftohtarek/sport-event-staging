import{a as c}from"./chunk-CL6Z4AWC.js";import{b as h}from"./chunk-F6FMRNE2.js";import{P as o,U as s}from"./chunk-GD5HRVBO.js";var p=(()=>{let e=class e{constructor(t){this.http=t,this.SERVER_URL=c.baseUrl}book(t){return this.http.post(`${this.SERVER_URL}client/bookTicket`,t,{headers:{withLoader:"true"}})}get(){return this.http.get(`${this.SERVER_URL}client/tickets`,{headers:{withLoader:"true"}})}details(t){return this.http.get(`${this.SERVER_URL}client/ticketDetails?barcode=${t}`,{headers:{withLoader:"true"}})}summary(t){return this.http.post(`${this.SERVER_URL}client/summary`,t)}check(t,i){return this.http.get(`${this.SERVER_URL}client/checkTicket?barcode=${t}&num_of_ticket=${i}`)}};e.\u0275fac=function(i){return new(i||e)(s(h))},e.\u0275prov=o({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();export{p as a};
