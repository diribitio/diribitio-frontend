(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"i/4z":function(n,e,t){"use strict";t.r(e),t.d(e,"StudentGenerationPageModule",function(){return g});var o=t("ofXK"),i=t("3Pt+"),a=t("tyNb"),r=t("TEn/"),s=t("fXoL"),b=t("ZvwH"),c=t("r4Kj");function l(n,e){if(1&n&&(s.Mb(0,"ion-card-content"),s.Mb(1,"ion-label",15),s.pc(2),s.Lb(),s.Lb()),2&n){const n=s.Wb();s.yb(2),s.rc(" ",n.text," ")}}const d=[{path:"",component:(()=>{class n{constructor(n,e,t){this.alertCtrl=n,this.studentsService=e,this.config=t,this.subscriptions=[],this.signUpData={user_name:"",email:"",password:"",password_confirmation:""},this.text=this.config.get_content("user-generation"),this.eventName=this.config.app_config.event_name}ngOnInit(){}ngOnDestroy(){this.subscriptions.forEach(n=>n.unsubscribe())}signUpAsStudent(n){this.signUpData.password===this.signUpData.password_confirmation?this.studentsService.signUpStudent(this.signUpData,n):this.alertCtrl.create({header:"Fehler",message:"Das best\xe4tigte Passwort entspricht nicht dem anfangs eingegebenen!",buttons:[{text:"Ok",role:"cancel"}]}).then(n=>{n.present()})}}return n.\u0275fac=function(e){return new(e||n)(s.Jb(r.a),s.Jb(b.a),s.Jb(c.a))},n.\u0275cmp=s.Db({type:n,selectors:[["app-user-generation"]],decls:27,vars:7,consts:[["color","menu"],["color","buttons","slot","start"],["icon","arrow-back",3,"defaultHref"],["color","background"],["name","LeaderForm",1,"content",3,"submit"],["signUpStudentForm","ngForm"],["text-wrap",""],[4,"ngIf"],["color","items"],["name","user_name","required","","minlength","5","maxlength","50","type","text","placeholder","Benutzername","color","text",3,"ngModel","ngModelChange"],["name","email","required","","maxlength","50","type","email","placeholder","E-Mail","color","text",3,"ngModel","ngModelChange"],["name","password","required","","minlength","8","type","password","placeholder","Passwort","color","text",3,"ngModel","ngModelChange"],["name","password_confirmation","required","","minlength","8","type","password","placeholder","Passwort best\xe4tigen","color","text",3,"ngModel","ngModelChange"],[1,"ion-padding"],["name","submit","type","submit","expand","block","color","buttons",1,"ion-no-margin",3,"disabled"],["color","text"]],template:function(n,e){if(1&n){const n=s.Nb();s.Mb(0,"ion-header"),s.Mb(1,"ion-toolbar",0),s.Mb(2,"ion-button",1),s.Kb(3,"ion-back-button",2),s.Lb(),s.Mb(4,"ion-title"),s.pc(5,"Als Sch\xfcler registrieren"),s.Lb(),s.Lb(),s.Lb(),s.Mb(6,"ion-content",3),s.Mb(7,"form",4,5),s.Ub("submit",function(){s.lc(n);const t=s.jc(8);return e.signUpAsStudent(t)}),s.Mb(9,"ion-card",3),s.Mb(10,"ion-card-header"),s.Mb(11,"ion-card-title",6),s.pc(12,"Sch\xfcler-Account erstellen"),s.Lb(),s.Lb(),s.oc(13,l,3,1,"ion-card-content",7),s.Mb(14,"ion-card-content"),s.Mb(15,"ion-list"),s.Mb(16,"ion-item",8),s.Mb(17,"ion-input",9),s.Ub("ngModelChange",function(n){return e.signUpData.user_name=n}),s.Lb(),s.Lb(),s.Mb(18,"ion-item",8),s.Mb(19,"ion-input",10),s.Ub("ngModelChange",function(n){return e.signUpData.email=n}),s.Lb(),s.Lb(),s.Mb(20,"ion-item",8),s.Mb(21,"ion-input",11),s.Ub("ngModelChange",function(n){return e.signUpData.password=n}),s.Lb(),s.Lb(),s.Mb(22,"ion-item",8),s.Mb(23,"ion-input",12),s.Ub("ngModelChange",function(n){return e.signUpData.password_confirmation=n}),s.Lb(),s.Lb(),s.Lb(),s.Mb(24,"div",13),s.Mb(25,"ion-button",14),s.pc(26,"Registrieren"),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb()}if(2&n){const n=s.jc(8);s.yb(3),s.cc("defaultHref","",e.eventName,"/Anmeldung"),s.yb(10),s.bc("ngIf",e.text),s.yb(4),s.bc("ngModel",e.signUpData.user_name),s.yb(2),s.bc("ngModel",e.signUpData.email),s.yb(2),s.bc("ngModel",e.signUpData.password),s.yb(2),s.bc("ngModel",e.signUpData.password_confirmation),s.yb(2),s.bc("disabled",n.invalid)}},directives:[r.t,r.R,r.h,r.e,r.f,r.P,r.p,i.k,i.g,i.h,r.j,r.l,r.n,o.j,r.k,r.B,r.x,r.w,r.ab,i.j,i.c,i.b,i.f,i.i,r.A],styles:[""]}),n})()}];let g=(()=>{class n{}return n.\u0275mod=s.Hb({type:n}),n.\u0275inj=s.Gb({factory:function(e){return new(e||n)},imports:[[o.b,i.a,r.S,a.k.forChild(d)]]}),n})()}}]);