import{a as $}from"./chunk-4NDSMFUZ.js";import"./chunk-BDYQIMGW.js";import{a as H,b as V,c as Z,e as J,f as I,i as Q,m as W,n as X,o as Y}from"./chunk-UW56FJ2H.js";import"./chunk-QBNXAGIW.js";import"./chunk-SD2EQTYV.js";import"./chunk-CHFGLFWH.js";import"./chunk-CL6Z4AWC.js";import{b as q}from"./chunk-ZYLKLJZY.js";import{c as G}from"./chunk-LFWANRLE.js";import{j as U}from"./chunk-32VKKQHO.js";import{d as A,k as L,l as R,m as j,n as z}from"./chunk-2AUJZBLV.js";import{$ as _,$a as w,Ab as E,Hb as K,Ka as c,La as u,Lb as h,Mb as y,R as O,aa as F,bb as l,ca as M,db as k,fb as v,ia as d,ja as g,kb as f,lb as m,mb as P,nb as T,ob as C,pa as S,pb as a,sb as D,yb as b,zb as B}from"./chunk-TKMI5VCA.js";function nt(r,n){if(r&1){let t=T();f(0,"input",4,0),C("paste",function(e){d(t);let o=a(2);return g(o.handlePaste(e))})("keyup",function(e){let o=d(t).index,s=a(2);return g(s.onKeyUp(e,o))})("input",function(e){d(t);let o=a(2);return g(o.onInput(e))})("keydown",function(e){let o=d(t).index,s=a(2);return g(s.onKeyDown(e,o))}),m()}if(r&2){let t=n.$implicit,i=n.index,e=a(2);v("otp-input ",e.config.inputClass,""),l("pattern",e.config.allowNumbersOnly?"\\d*":"")("type",e.inputType)("placeholder",(e.config==null?null:e.config.placeholder)||"")("ngStyle",e.config.inputStyles)("formControl",e.otpForm.controls[t])("id",e.getBoxId(i))}}function ot(r,n){if(r&1&&(f(0,"div",2),w(1,nt,2,9,"input",3),h(2,"keys"),m()),r&2){let t=a();v("ng-otp-input-wrapper wrapper ",t.config.containerClass,""),D("id","c_",t.componentKey,""),l("ngStyle",t.config.containerStyles),c(),l("ngForOf",y(2,7,t.otpForm==null?null:t.otpForm.controls))}}var p=class{static ifTab(n){return this.ifKey(n,"Tab")}static ifDelete(n){return this.ifKey(n,"Delete;Del")}static ifBackspace(n){return this.ifKey(n,"Backspace")}static ifRightArrow(n){return this.ifKey(n,"ArrowRight;Right")}static ifLeftArrow(n){return this.ifKey(n,"ArrowLeft;Left")}static ifSpacebar(n){return this.ifKey(n,"Spacebar; ")}static ifKey(n,t){return t.split(";").some(e=>e===n.key)}},x=(()=>{class r{transform(t){return Object.keys(t)}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275pipe=M({name:"keys",type:r,pure:!0}),r})(),tt=(()=>{class r{constructor(t,i){this.keysPipe=t,this.document=i,this.config={length:4},this.onInputChange=new S,this.inputControls=new Array(this.config.length),this.componentKey=Math.random().toString(36).substring(2)+new Date().getTime().toString(36)}get inputType(){return this.config?.isPasswordInput?"password":this.config?.allowNumbersOnly?"tel":"text"}ngOnInit(){this.otpForm=new J({});for(let t=0;t<this.config.length;t++)this.otpForm.addControl(this.getControlName(t),new I);this.otpForm.valueChanges.subscribe(t=>{this.keysPipe.transform(this.otpForm.controls).forEach(i=>{var e=this.otpForm.controls[i].value;e&&e.length>1&&(e.length>=this.config.length?this.setValue(e):this.rebuildValue())})})}ngAfterViewInit(){if(!this.config.disableAutoFocus){let t=this.document.getElementById(`c_${this.componentKey}`);if(t){let i=t.getElementsByClassName("otp-input")[0];i&&i.focus&&i.focus()}}}getControlName(t){return`ctrl_${t}`}onKeyDown(t,i){let e=this.getBoxId(i-1),o=this.getBoxId(i);if(p.ifSpacebar(t))return t.preventDefault(),!1;if(p.ifBackspace(t)){t.target.value?this.clearInput(o,i):(this.clearInput(e,i-1),this.setSelected(e)),this.rebuildValue();return}}onInput(t){let i=this.currentVal?`${this.currentVal}${t.target.value}`:t.target.value;if(this.config.allowNumbersOnly&&!this.validateNumber(i)){t.target.value="",t.stopPropagation(),t.preventDefault();return}}onKeyUp(t,i){p.ifTab(t)&&(i-=1);let e=this.getBoxId(i+1),o=this.getBoxId(i-1),s=this.getBoxId(i);if(p.ifRightArrow(t)){t.preventDefault(),this.setSelected(e);return}if(p.ifLeftArrow(t)){t.preventDefault(),this.setSelected(o);return}if(p.ifDelete(t)){t.target.value?this.clearInput(s,i):(this.clearInput(o,i-1),this.setSelected(o)),this.rebuildValue();return}t.target.value&&(this.ifValidKeyCode(t)&&this.setSelected(e),this.rebuildValue())}validateNumber(t){return t&&/^[0-9]+$/.test(t)}getBoxId(t){return`otp_${t}_${this.componentKey}`}clearInput(t,i){let e=this.getControlName(i);this.otpForm.controls[e]?.setValue(null);let o=this.document.getElementById(t);o&&o instanceof HTMLInputElement&&(o.value=null)}setSelected(t){this.focusTo(t);let i=this.document.getElementById(t);i&&i.setSelectionRange&&setTimeout(()=>{i.setSelectionRange(0,1)},0)}ifValidKeyCode(t){let i=t.key;return/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||/[a-zA-Z0-9-_]/.test(i)}focusTo(t){let i=this.document.getElementById(t);i&&i.focus()}setValue(t){if(!(this.config.allowNumbersOnly&&isNaN(t))){if(this.otpForm.reset(),!t){this.rebuildValue();return}if(t=t.toString().replace(/\s/g,""),Array.from(t).forEach((e,o)=>{this.otpForm.get(this.getControlName(o))&&this.otpForm.get(this.getControlName(o)).setValue(e)}),!this.config.disableAutoFocus){let e=this.document.getElementById(`c_${this.componentKey}`);var i=t.length<this.config.length?t.length:this.config.length-1;let o=e.getElementsByClassName("otp-input")[i];o&&o.focus&&o.focus()}this.rebuildValue()}}rebuildValue(){let t="";this.keysPipe.transform(this.otpForm.controls).forEach(i=>{if(this.otpForm.controls[i].value){let e=this.otpForm.controls[i].value,o=e.length>1,s=!this.config.allowNumbersOnly&&this.config.letterCase&&(this.config.letterCase.toLocaleLowerCase()=="upper"||this.config.letterCase.toLocaleLowerCase()=="lower");e=e[0];let N=s?this.config.letterCase.toLocaleLowerCase()=="upper"?e.toUpperCase():e.toLowerCase():e;s&&N==e?s=!1:e=N,t+=e,(o||s)&&this.otpForm.controls[i].setValue(e)}}),this.formCtrl?.setValue&&this.formCtrl.setValue(t),this.onInputChange.emit(t),this.currentVal=t}handlePaste(t){let i=t.clipboardData||window.clipboardData;if(i)var e=i.getData("Text");t.stopPropagation(),t.preventDefault(),!(!e||this.config.allowNumbersOnly&&!this.validateNumber(e))&&this.setValue(e)}}return r.\u0275fac=function(t){return new(t||r)(u(x),u(A))},r.\u0275cmp=_({type:r,selectors:[["ng-otp-input"]],inputs:{config:"config",formCtrl:"formCtrl"},outputs:{onInputChange:"onInputChange"},decls:1,vars:1,consts:[["inp",""],[3,"class","id","ngStyle",4,"ngIf"],[3,"id","ngStyle"],["autocomplete","one-time-code",3,"pattern","type","placeholder","ngStyle","class","formControl","id","paste","keyup","input","keydown",4,"ngFor","ngForOf"],["autocomplete","one-time-code",3,"paste","keyup","input","keydown","pattern","type","placeholder","ngStyle","formControl","id"]],template:function(t,i){t&1&&w(0,ot,3,9,"div",1),t&2&&l("ngIf",i.otpForm==null?null:i.otpForm.controls)},dependencies:[R,j,L,H,W,Z,Q,x],styles:[".otp-input[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:4px;border:solid 1px #c5c5c5;text-align:center;font-size:32px}.ng-otp-input-wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}@media screen and (max-width: 767px){.otp-input[_ngcontent-%COMP%]{width:40px;font-size:24px;height:40px}}@media screen and (max-width: 420px){.otp-input[_ngcontent-%COMP%]{width:30px;font-size:18px;height:30px}}"]}),r})(),et=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=F({type:r}),r.\u0275inj=O({providers:[x],imports:[[z,X,Y]]}),r})();var bt=(()=>{let n=class n{constructor(i,e){this.authOperation=i,this.router=e,this.otpValue=new I(null,[V.required,V.minLength(4)]),i.authSession.session.otp_session||e.navigate([q.auth.login])}confirm(){this.otpValue.markAllAsTouched(),this.otpValue.valid&&this.authOperation.verifyOtp(Number(this.otpValue.value)).subscribe()}};n.\u0275fac=function(e){return new(e||n)(u($),u(U))},n.\u0275cmp=_({type:n,selectors:[["app-otp"]],standalone:!0,features:[K],decls:8,vars:9,consts:[[1,"otp-form","grid-sm","align-items-center","mt-lg-5","mt-3"],[3,"formCtrl"],[1,"btn","btn-primary","d-block","mt-4","p-2","w-50",3,"click"]],template:function(e,o){e&1&&(f(0,"div",0)(1,"h3"),b(2),h(3,"translate"),m(),P(4,"ng-otp-input",1),f(5,"button",2),C("click",function(){return o.confirm()}),b(6),h(7,"translate"),m()()),e&2&&(k("invalid",o.otpValue.invalid&&o.otpValue.touched),c(2),E("",y(3,5,"auth.enterVerificationCode")," "),c(2),l("formCtrl",o.otpValue),c(2),B(y(7,7,"auth.confirm")))},dependencies:[et,tt,G],styles:[".otp-form[_ngcontent-%COMP%]  input{outline:none}.otp-form[_ngcontent-%COMP%]  .invalid input{border-color:red}"]});let r=n;return r})();export{bt as OtpComponent};
