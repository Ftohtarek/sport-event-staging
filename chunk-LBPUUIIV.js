import{a as W}from"./chunk-R6OHW5JP.js";import{b as z}from"./chunk-23SNOJPT.js";import"./chunk-GJXIODBU.js";import{a as U,b as v,c as q,e as G,f as _,i as H,m as Z,n as J,o as Q}from"./chunk-BZ65BSL6.js";import"./chunk-6TSQ3CWB.js";import"./chunk-DMBEBI46.js";import"./chunk-6WC44PLZ.js";import"./chunk-CL6Z4AWC.js";import{j}from"./chunk-R4HFWR2Y.js";import{d as K,k as A,l as B,m as L,n as R}from"./chunk-3I5E6KI3.js";import{$ as x,Fb as P,Ja as h,Jb as T,Ka as c,Kb as E,Q as N,_ as g,_a as C,ab as p,ba as O,cb as M,eb as I,ha as m,ia as d,jb as u,kb as f,lb as S,mb as k,nb as y,oa as F,ob as a,rb as D,xb as w}from"./chunk-6GN7ROPZ.js";function tt(r,i){if(r&1){let t=k();u(0,"input",4,0),y("paste",function(e){m(t);let o=a(2);return d(o.handlePaste(e))})("keyup",function(e){let o=m(t).index,s=a(2);return d(s.onKeyUp(e,o))})("input",function(e){m(t);let o=a(2);return d(o.onInput(e))})("keydown",function(e){let o=m(t).index,s=a(2);return d(s.onKeyDown(e,o))}),f()}if(r&2){let t=i.$implicit,n=i.index,e=a(2);I("otp-input ",e.config.inputClass,""),p("pattern",e.config.allowNumbersOnly?"\\d*":"")("type",e.inputType)("placeholder",(e.config==null?null:e.config.placeholder)||"")("ngStyle",e.config.inputStyles)("formControl",e.otpForm.controls[t])("id",e.getBoxId(n))}}function et(r,i){if(r&1&&(u(0,"div",2),C(1,tt,2,9,"input",3),T(2,"keys"),f()),r&2){let t=a();I("ng-otp-input-wrapper wrapper ",t.config.containerClass,""),D("id","c_",t.componentKey,""),p("ngStyle",t.config.containerStyles),h(),p("ngForOf",E(2,7,t.otpForm==null?null:t.otpForm.controls))}}var l=class{static ifTab(i){return this.ifKey(i,"Tab")}static ifDelete(i){return this.ifKey(i,"Delete;Del")}static ifBackspace(i){return this.ifKey(i,"Backspace")}static ifRightArrow(i){return this.ifKey(i,"ArrowRight;Right")}static ifLeftArrow(i){return this.ifKey(i,"ArrowLeft;Left")}static ifSpacebar(i){return this.ifKey(i,"Spacebar; ")}static ifKey(i,t){return t.split(";").some(e=>e===i.key)}},b=(()=>{class r{transform(t){return Object.keys(t)}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275pipe=O({name:"keys",type:r,pure:!0}),r})(),X=(()=>{class r{constructor(t,n){this.keysPipe=t,this.document=n,this.config={length:4},this.onInputChange=new F,this.inputControls=new Array(this.config.length),this.componentKey=Math.random().toString(36).substring(2)+new Date().getTime().toString(36)}get inputType(){return this.config?.isPasswordInput?"password":this.config?.allowNumbersOnly?"tel":"text"}ngOnInit(){this.otpForm=new G({});for(let t=0;t<this.config.length;t++)this.otpForm.addControl(this.getControlName(t),new _);this.otpForm.valueChanges.subscribe(t=>{this.keysPipe.transform(this.otpForm.controls).forEach(n=>{var e=this.otpForm.controls[n].value;e&&e.length>1&&(e.length>=this.config.length?this.setValue(e):this.rebuildValue())})})}ngAfterViewInit(){if(!this.config.disableAutoFocus){let t=this.document.getElementById(`c_${this.componentKey}`);if(t){let n=t.getElementsByClassName("otp-input")[0];n&&n.focus&&n.focus()}}}getControlName(t){return`ctrl_${t}`}onKeyDown(t,n){let e=this.getBoxId(n-1),o=this.getBoxId(n);if(l.ifSpacebar(t))return t.preventDefault(),!1;if(l.ifBackspace(t)){t.target.value?this.clearInput(o,n):(this.clearInput(e,n-1),this.setSelected(e)),this.rebuildValue();return}}onInput(t){let n=this.currentVal?`${this.currentVal}${t.target.value}`:t.target.value;if(this.config.allowNumbersOnly&&!this.validateNumber(n)){t.target.value="",t.stopPropagation(),t.preventDefault();return}}onKeyUp(t,n){l.ifTab(t)&&(n-=1);let e=this.getBoxId(n+1),o=this.getBoxId(n-1),s=this.getBoxId(n);if(l.ifRightArrow(t)){t.preventDefault(),this.setSelected(e);return}if(l.ifLeftArrow(t)){t.preventDefault(),this.setSelected(o);return}if(l.ifDelete(t)){t.target.value?this.clearInput(s,n):(this.clearInput(o,n-1),this.setSelected(o)),this.rebuildValue();return}t.target.value&&(this.ifValidKeyCode(t)&&this.setSelected(e),this.rebuildValue())}validateNumber(t){return t&&/^[0-9]+$/.test(t)}getBoxId(t){return`otp_${t}_${this.componentKey}`}clearInput(t,n){let e=this.getControlName(n);this.otpForm.controls[e]?.setValue(null);let o=this.document.getElementById(t);o&&o instanceof HTMLInputElement&&(o.value=null)}setSelected(t){this.focusTo(t);let n=this.document.getElementById(t);n&&n.setSelectionRange&&setTimeout(()=>{n.setSelectionRange(0,1)},0)}ifValidKeyCode(t){let n=t.key;return/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||/[a-zA-Z0-9-_]/.test(n)}focusTo(t){let n=this.document.getElementById(t);n&&n.focus()}setValue(t){if(!(this.config.allowNumbersOnly&&isNaN(t))){if(this.otpForm.reset(),!t){this.rebuildValue();return}if(t=t.toString().replace(/\s/g,""),Array.from(t).forEach((e,o)=>{this.otpForm.get(this.getControlName(o))&&this.otpForm.get(this.getControlName(o)).setValue(e)}),!this.config.disableAutoFocus){let e=this.document.getElementById(`c_${this.componentKey}`);var n=t.length<this.config.length?t.length:this.config.length-1;let o=e.getElementsByClassName("otp-input")[n];o&&o.focus&&o.focus()}this.rebuildValue()}}rebuildValue(){let t="";this.keysPipe.transform(this.otpForm.controls).forEach(n=>{if(this.otpForm.controls[n].value){let e=this.otpForm.controls[n].value,o=e.length>1,s=!this.config.allowNumbersOnly&&this.config.letterCase&&(this.config.letterCase.toLocaleLowerCase()=="upper"||this.config.letterCase.toLocaleLowerCase()=="lower");e=e[0];let V=s?this.config.letterCase.toLocaleLowerCase()=="upper"?e.toUpperCase():e.toLowerCase():e;s&&V==e?s=!1:e=V,t+=e,(o||s)&&this.otpForm.controls[n].setValue(e)}}),this.formCtrl?.setValue&&this.formCtrl.setValue(t),this.onInputChange.emit(t),this.currentVal=t}handlePaste(t){let n=t.clipboardData||window.clipboardData;if(n)var e=n.getData("Text");t.stopPropagation(),t.preventDefault(),!(!e||this.config.allowNumbersOnly&&!this.validateNumber(e))&&this.setValue(e)}}return r.\u0275fac=function(t){return new(t||r)(c(b),c(K))},r.\u0275cmp=g({type:r,selectors:[["ng-otp-input"]],inputs:{config:"config",formCtrl:"formCtrl"},outputs:{onInputChange:"onInputChange"},decls:1,vars:1,consts:[["inp",""],[3,"class","id","ngStyle",4,"ngIf"],[3,"id","ngStyle"],["autocomplete","one-time-code",3,"pattern","type","placeholder","ngStyle","class","formControl","id","paste","keyup","input","keydown",4,"ngFor","ngForOf"],["autocomplete","one-time-code",3,"paste","keyup","input","keydown","pattern","type","placeholder","ngStyle","formControl","id"]],template:function(t,n){t&1&&C(0,et,3,9,"div",1),t&2&&p("ngIf",n.otpForm==null?null:n.otpForm.controls)},dependencies:[B,L,A,U,Z,q,H,b],styles:[".otp-input[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:4px;border:solid 1px #c5c5c5;text-align:center;font-size:32px}.ng-otp-input-wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}@media screen and (max-width: 767px){.otp-input[_ngcontent-%COMP%]{width:40px;font-size:24px;height:40px}}@media screen and (max-width: 420px){.otp-input[_ngcontent-%COMP%]{width:30px;font-size:18px;height:30px}}"]}),r})(),Y=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=x({type:r}),r.\u0275inj=N({providers:[b],imports:[[R,J,Q]]}),r})();var Ct=(()=>{let i=class i{constructor(n,e){this.authOperation=n,this.router=e,this.otpValue=new _(null,[v.required,v.minLength(4)]),n.authSession.session.otp_session||e.navigate([z.auth.login])}confirm(){this.otpValue.markAllAsTouched(),this.otpValue.valid&&this.authOperation.verifyOtp(Number(this.otpValue.value)).subscribe()}};i.\u0275fac=function(e){return new(e||i)(c(W),c(j))},i.\u0275cmp=g({type:i,selectors:[["app-otp"]],standalone:!0,features:[P],decls:6,vars:3,consts:[[1,"otp-form","grid-sm","align-items-center","mt-lg-5","mt-3"],[3,"formCtrl"],[1,"btn","btn-primary","d-block","mt-4","p-2","w-50",3,"click"]],template:function(e,o){e&1&&(u(0,"div",0)(1,"h3"),w(2,"Enter Verification code "),f(),S(3,"ng-otp-input",1),u(4,"button",2),y("click",function(){return o.confirm()}),w(5,"confirm"),f()()),e&2&&(M("invalid",o.otpValue.invalid&&o.otpValue.touched),h(3),p("formCtrl",o.otpValue))},dependencies:[Y,X],styles:[".otp-form[_ngcontent-%COMP%]  input{outline:none}.otp-form[_ngcontent-%COMP%]  .invalid input{border-color:red}"]});let r=i;return r})();export{Ct as OtpComponent};
