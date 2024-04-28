"use strict";(self.webpackChunknew_ngrx_24=self.webpackChunknew_ngrx_24||[]).push([[547],{2547:(R,l,u)=>{u.r(l),u.d(l,{counterModule:()=>w});var m=u(6814),i=u(95),n=u(5879),s=u(4221);const C=(0,s.ZF)("counter"),d=(0,s.P1)(C,t=>t.counter);let h=(()=>{class t{constructor(o){this.Store=o}ngOnInit(){this.counter$=this.Store.select(d)}static#t=this.\u0275fac=function(e){return new(e||t)(n.Y36(s.yh))};static#n=this.\u0275cmp=n.Xpm({type:t,selectors:[["app-counter-output"]],decls:3,vars:3,template:function(e,r){1&e&&(n.TgZ(0,"h4"),n._uU(1),n.ALo(2,"async"),n.qZA()),2&e&&(n.xp6(1),n.hij("Current counter Value is ",n.lcZ(2,1,r.counter$),""))},dependencies:[m.Ov]})}return t})();var c=function(t){return t.IncrementAction="Counter Increment",t.DecrementAction="Counter Decrement",t.CounterResetAction="Counter Reset",t.CounterInputIncrementAction="Counter Input Increment",t}(c||{});class f{constructor(){this.type=c.IncrementAction}}class y{constructor(){this.type=c.DecrementAction}}class I{constructor(){this.type=c.CounterResetAction}}class g{constructor(p){this.payload=p,this.type=c.CounterInputIncrementAction}}let b=(()=>{class t{constructor(o){this.store=o}onIncrement(){this.store.dispatch(new f)}onDecrement(){this.store.dispatch(new y)}onReset(){this.store.dispatch(new I)}static#t=this.\u0275fac=function(e){return new(e||t)(n.Y36(s.yh))};static#n=this.\u0275cmp=n.Xpm({type:t,selectors:[["app-counter-buttons"]],decls:7,vars:0,consts:[["role","group","aria-label","Basic mixed styles example",1,"btn-group"],["type","button",1,"btn","btn-danger",3,"click"],["type","button",1,"btn","btn-warning",3,"click"],["type","button",1,"btn","btn-success",3,"click"]],template:function(e,r){1&e&&(n.TgZ(0,"div",0)(1,"button",1),n.NdJ("click",function(){return r.onIncrement()}),n._uU(2,"Increment"),n.qZA(),n.TgZ(3,"button",2),n.NdJ("click",function(){return r.onDecrement()}),n._uU(4,"Decrment"),n.qZA(),n.TgZ(5,"button",3),n.NdJ("click",function(){return r.onReset()}),n._uU(6,"Reset"),n.qZA()())}})}return t})(),A=(()=>{class t{constructor(o){this.store=o,this.incrementBy=0}ngOnInit(){}IncrementBy(){this.store.dispatch(new g({value:this.incrementBy}))}static#t=this.\u0275fac=function(e){return new(e||t)(n.Y36(s.yh))};static#n=this.\u0275cmp=n.Xpm({type:t,selectors:[["app-counter-input-increment"]],decls:4,vars:1,consts:[[1,"input-group","mb-3"],["type","number","placeholder","Increment counter","aria-label","Recipient's username","aria-describedby","basic-addon2",1,"form-control",3,"ngModel","ngModelChange"],["id","basic-addon2",1,"btn","btn-secondary",3,"click"]],template:function(e,r){1&e&&(n.TgZ(0,"div",0)(1,"input",1),n.NdJ("ngModelChange",function(k){return r.incrementBy=k}),n.qZA(),n.TgZ(2,"button",2),n.NdJ("click",function(){return r.IncrementBy()}),n._uU(3,"Increment Counter By"),n.qZA()()),2&e&&(n.xp6(1),n.Q6J("ngModel",r.incrementBy))},dependencies:[i.Fj,i.wV,i.JJ,i.On]})}return t})(),_=(()=>{class t{constructor(o){this.store=o}ngOnInit(){}static#t=this.\u0275fac=function(e){return new(e||t)(n.Y36(s.yh))};static#n=this.\u0275cmp=n.Xpm({type:t,selectors:[["app-counter"]],decls:3,vars:0,template:function(e,r){1&e&&n._UZ(0,"app-counter-buttons")(1,"app-counter-output")(2,"app-counter-input-increment")},dependencies:[h,b,A]})}return t})();var v=u(2137);const B={counter:999};function Z(t=B,p){switch(p.type){case c.IncrementAction:return{...t,counter:t.counter+1};case c.DecrementAction:return{...t,counter:t.counter-1};case c.CounterResetAction:return{...t,counter:0};case c.CounterInputIncrementAction:return{...t,counter:t.counter+p.payload.value};default:return t}}const T=[{path:"",component:_}];let w=(()=>{class t{static#t=this.\u0275fac=function(e){return new(e||t)};static#n=this.\u0275mod=n.oAB({type:t});static#e=this.\u0275inj=n.cJS({imports:[m.ez,i.u5,v.Bz.forChild(T),s.Aw.forFeature("counter",Z)]})}return t})()}}]);