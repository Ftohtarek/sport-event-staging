import{a as o}from"./chunk-YDSWNAA5.js";import{a as c}from"./chunk-R3GRVT3O.js";import{a as g}from"./chunk-NDFKTMS3.js";import{a as l}from"./chunk-CL6Z4AWC.js";import{b as i}from"./chunk-EC3LS454.js";import{b as m,j as f}from"./chunk-RD3IKJRA.js";import{M as r,Q as d,V as p,n as u}from"./chunk-7FQYCJU7.js";var a=class{constructor(t){this.http=t,this.SERVER_URL=l.baseUrl}register(t){return this.http.post(`${this.SERVER_URL}client/register`,t,{headers:{withLoader:"true"}})}verify(t){return this.http.post(`${this.SERVER_URL}client/verify`,t,{headers:{withLoader:"true"}})}resenCode(t){return this.http.post(`${this.SERVER_URL}client/resendCode`,t,{headers:{withLoader:"true"}})}login(t){return this.http.post(`${this.SERVER_URL}client/login`,t,{headers:{withLoader:"true"}})}forgetPassword(t){return this.http.post(`${this.SERVER_URL}client/forgotPassword`,t,{headers:{withLoader:"true"}})}verifyForgetPassword(t){return this.http.post(`${this.SERVER_URL}client/verifyForgetPassword`,t,{headers:{withLoader:"true"}})}resetPassword(t){return this.http.post(`${this.SERVER_URL}client/resetPassword`,t,{headers:{withLoader:"true"}})}};var I=(()=>{let t=class t extends a{constructor(e,s){super(e),this.userState=s,this.authSession=new h,this.router=g.get(f)}register(e){return super.register(e).pipe(r(s=>{[200,201].includes(s.status)&&(this.authSession.openOtpSession(e,"regsiter"),o({message:s.msg}),this.router.navigate([i.auth.otp]))}))}verifyOtp(e){return this.authSession.session.otp_type=="regsiter"?super.verify({code:e,email:this.authSession.session.otp_session?.email}).pipe(r(s=>{s.status==200&&(o({message:s.msg}),this.router.navigate([i.auth.login]))})):super.verifyForgetPassword({code:e,email:this.authSession.session.otp_session?.email}).pipe(r(s=>{s.status==200&&(o({message:s.msg}),this.router.navigate([i.auth.newPassword]))}))}resenCode(){return super.resenCode({email:this.authSession.session.otp_session?.email}).pipe(r(e=>e.status==200?o({message:e.msg}):null))}login(e){return super.login(e).pipe(r(s=>{[200,201].includes(s.status)&&(o({message:s.msg}),this.userState.updateUser(s.data),this.router.navigate([i.home]))}))}forgetPassword(e){return super.forgetPassword(e).pipe(r(s=>{s.status==200&&(this.authSession.openOtpSession(e,"forget_password"),this.router.navigate([i.auth.otp]))}))}newPassword(e){return u(new Error("theres issuse in this option will fix "))}};t.\u0275fac=function(s){return new(s||t)(p(m),p(c))},t.\u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})(),h=class{constructor(){this.session=JSON.parse(sessionStorage.getItem("authSession")),this.session||(this.session={otp_session:void 0,otp_type:void 0})}openOtpSession(t,S){this.session={otp_session:t,otp_type:S},sessionStorage.setItem("authSession",JSON.stringify(this.session))}};export{I as a};
