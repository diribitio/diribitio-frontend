(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"S2+d":function(e,n,t){"use strict";t.r(n),t.d(n,"LogInPageModule",function(){return w});var i=t("ofXK"),o=t("3Pt+"),r=t("tyNb"),s=t("TEn/"),c=t("fXoL"),b=t("ej43"),a=t("ZvwH"),d=t("OeS+"),u=t("PO/Q"),l=t("uVPj"),h=t("3LUQ"),g=t("r4Kj");const m=function(){return["./Sch\xfcler Registration"]};function L(e,n){1&e&&(c.Mb(0,"ion-button",25),c.Kb(1,"ion-icon",26),c.pc(2," Account erstellen"),c.Lb()),2&e&&c.bc("routerLink",c.fc(1,m))}function p(e,n){if(1&e&&(c.Mb(0,"ion-button",25),c.Kb(1,"ion-icon",26),c.pc(2," Account erstellen"),c.Lb()),2&e){const e=c.Wb();c.cc("routerLink","./",e.projectNoun,"leiter Registration")}}const M=function(){return["./Admin Registration"]};function f(e,n){1&e&&(c.Mb(0,"ion-button",25),c.Kb(1,"ion-icon",26),c.pc(2," Account erstellen"),c.Lb()),2&e&&c.bc("routerLink",c.fc(1,M))}const y=function(){return["../../Help"]},k=function(){return["./Passwort vergessen"]},v=[{path:"",component:(()=>{class e{constructor(e,n,t,i,o,r,s,c){this.auth=e,this.router=n,this.studentsService=t,this.scheduleService=i,this.leadersService=o,this.adminsService=r,this.alert=s,this.config=c,this.subscriptions=[],this.formType="student",this.StudentCredentials={email:"",password:""},this.LeaderCredentials={email:"",password:""},this.AdminCredentials={email:"",password:""},this.tries=0,this.schedule={id:1,begin:null,control:null,registration:null,sort_students:null,exchange:null,projects:null,end:null},this.projectNoun=this.config.app_config.project_noun,this.eventName=this.config.app_config.event_name}ngOnInit(){this.currentDate=Object(i.n)(new Date,"yyyy-MM-dd","en"),this.getSchedule(),this.subscriptions.push(this.scheduleService.update.subscribe(()=>this.getSchedule()))}ionViewWillEnter(){this.log_in_from_storage()}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}getSchedule(){this.scheduleService.getSchedule().subscribe(e=>{this.schedule=e.data})}keyPressEventHandler(e,n="students",t){13===e&&("students"===n?this.LogInStudent(t):"leaders"===n?this.LogInLeader(t):"admins"===n&&this.LogInAdmin(t))}nextInput(e,n){13===e&&n.setFocus()}log_in_from_storage(){if(localStorage.getItem("jwt")){const e=localStorage.getItem("jwt");this.auth.check_jwt(e).subscribe(e=>{const n=e.auth;this.auth.set_jwt(e.token),this.auth.setLoggedIn(!0),"admins"===n?this.router.navigate([this.eventName+"/Admin/"+e.user_name]):"leaders"===n?this.router.navigate([this.eventName+"/"+this.projectNoun+"leiter/"+e.user_name]):"students"===n&&this.router.navigate([this.eventName+"/Sch\xfcler/"+e.user_name])},e=>{this.alert.error("Die Sitzung ist bereits abgelaufen!",e),this.auth.setLoggedIn(!1)})}}LogInStudent(e){this.studentsService.logInStudent(this.StudentCredentials).subscribe(n=>{n.token&&(this.auth.set_jwt(n.token),this.router.navigate([this.eventName+"/Sch\xfcler/"+n.user_name]),this.auth.setLoggedIn(!0),e.reset())},e=>{this.alert.error("Anmeldung fehlgeschlagen!",e.error),this.wrongPassword()})}LogInLeader(e){this.leadersService.logInLeader(this.LeaderCredentials).subscribe(n=>{n.token&&(this.auth.set_jwt(n.token),this.router.navigate([this.eventName+"/"+this.projectNoun+"leiter/"+n.user_name]),this.auth.setLoggedIn(!0),e.reset())},e=>{this.alert.error("Anmeldung fehlgeschlagen!",e.error),this.wrongPassword()})}LogInAdmin(e){this.adminsService.logInAdmin(this.AdminCredentials).subscribe(n=>{n.token&&(this.auth.set_jwt(n.token),this.router.navigate([this.eventName+"/Admin/"+n.user_name]),this.auth.setLoggedIn(!0),e.reset())},e=>{this.alert.error("Anmeldung fehlgeschlagen!",e.error),this.wrongPassword()})}wrongPassword(){this.tries+=1,this.tries>=5&&this.alert.wrongPassword(3e3*this.tries,this.tries)}}return e.\u0275fac=function(n){return new(n||e)(c.Jb(b.a),c.Jb(r.g),c.Jb(a.a),c.Jb(d.a),c.Jb(u.a),c.Jb(l.a),c.Jb(h.a),c.Jb(g.a))},e.\u0275cmp=c.Db({type:e,selectors:[["app-log-in"]],decls:83,vars:26,consts:[["color","menu"],["color","buttons","slot","end",3,"routerLink"],["name","help-circle"],["data-ng-controller","myCtrl","data-ng-init","log_in_from_storage()"],["color","background"],["color","background",1,"content"],["color","buttons",3,"ngModel","ngModelChange"],["value","student"],["value","leader"],["value","admin"],["name","LogInForm",1,"content",3,"hidden","ngSubmit"],["studentLoginForm","ngForm"],["color","items"],["name","email","required","","type","email","placeholder","E-Mail","color","text",3,"ngModel","ngModelChange","keypress"],["name","password","required","","minlength","8","type","password","placeholder","Passwort","color","text",3,"ngModel","ngModelChange","keypress"],["nextStudentField",""],[3,"routerLink"],["color","buttons",3,"routerLink",4,"ngIf"],[1,"ion-padding"],["name","login","type","submit","expand","block","color","buttons",1,"ion-no-margin",3,"disabled"],["leaderLoginForm","ngForm"],["nextLeaderField",""],["id","Formular",1,"content",3,"hidden","ngSubmit"],["adminLoginForm","ngForm"],["nextAdminField",""],["color","buttons",3,"routerLink"],["name","add-circle-outline","slot","start"]],template:function(e,n){if(1&e){const e=c.Nb();c.Mb(0,"ion-header"),c.Mb(1,"ion-toolbar",0),c.Mb(2,"ion-title"),c.pc(3,"Anmeldung"),c.Lb(),c.Mb(4,"ion-button",1),c.Kb(5,"ion-icon",2),c.Lb(),c.Lb(),c.Kb(6,"div",3),c.Lb(),c.Mb(7,"ion-content",4),c.Mb(8,"ion-card",5),c.Mb(9,"ion-card-header"),c.Mb(10,"ion-card-title"),c.pc(11,"Einloggen"),c.Lb(),c.Lb(),c.Mb(12,"ion-card-content"),c.Mb(13,"ion-segment",6),c.Ub("ngModelChange",function(e){return n.formType=e}),c.Mb(14,"ion-segment-button",7),c.Mb(15,"ion-label"),c.pc(16,"Sch\xfcler"),c.Lb(),c.Lb(),c.Mb(17,"ion-segment-button",8),c.Mb(18,"ion-label"),c.pc(19),c.Lb(),c.Lb(),c.Mb(20,"ion-segment-button",9),c.Mb(21,"ion-label"),c.pc(22,"Admin"),c.Lb(),c.Lb(),c.Lb(),c.Mb(23,"form",10,11),c.Ub("ngSubmit",function(){c.lc(e);const t=c.jc(24);return n.LogInStudent(t)}),c.Mb(25,"ion-card",4),c.Mb(26,"ion-card-header"),c.Mb(27,"ion-card-title"),c.pc(28,"Sch\xfcler"),c.Lb(),c.Lb(),c.Mb(29,"ion-card-content"),c.Mb(30,"ion-list"),c.Mb(31,"ion-item",12),c.Mb(32,"ion-input",13),c.Ub("ngModelChange",function(e){return n.StudentCredentials.email=e})("keypress",function(t){c.lc(e);const i=c.jc(35);return n.nextInput(t.keyCode,i)}),c.Lb(),c.Lb(),c.Mb(33,"ion-item",12),c.Mb(34,"ion-input",14,15),c.Ub("ngModelChange",function(e){return n.StudentCredentials.password=e})("keypress",function(t){c.lc(e);const i=c.jc(24);return n.keyPressEventHandler(t.keyCode,"students",i)}),c.Lb(),c.Lb(),c.Lb(),c.Mb(36,"a",16),c.pc(37,"Passwort vergessen?"),c.Lb(),c.Kb(38,"br"),c.oc(39,L,3,2,"ion-button",17),c.Mb(40,"div",18),c.Mb(41,"ion-button",19),c.pc(42,"Anmelden"),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Mb(43,"form",10,20),c.Ub("ngSubmit",function(){c.lc(e);const t=c.jc(44);return n.LogInLeader(t)}),c.Mb(45,"ion-card",4),c.Mb(46,"ion-card-header"),c.Mb(47,"ion-card-title"),c.pc(48),c.Lb(),c.Lb(),c.Mb(49,"ion-card-content"),c.Mb(50,"ion-list"),c.Mb(51,"ion-item",12),c.Mb(52,"ion-input",13),c.Ub("ngModelChange",function(e){return n.LeaderCredentials.email=e})("keypress",function(t){c.lc(e);const i=c.jc(55);return n.nextInput(t.keyCode,i)}),c.Lb(),c.Lb(),c.Mb(53,"ion-item",12),c.Mb(54,"ion-input",14,21),c.Ub("ngModelChange",function(e){return n.LeaderCredentials.password=e})("keypress",function(t){c.lc(e);const i=c.jc(44);return n.keyPressEventHandler(t.keyCode,"leaders",i)}),c.Lb(),c.Lb(),c.Lb(),c.Mb(56,"a",16),c.pc(57,"Passwort vergessen?"),c.Lb(),c.Kb(58,"br"),c.oc(59,p,3,1,"ion-button",17),c.Mb(60,"div",18),c.Mb(61,"ion-button",19),c.pc(62,"Anmelden"),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Mb(63,"form",22,23),c.Ub("ngSubmit",function(){c.lc(e);const t=c.jc(64);return n.LogInAdmin(t)}),c.Mb(65,"ion-card",4),c.Mb(66,"ion-card-header"),c.Mb(67,"ion-card-title"),c.pc(68,"Admin"),c.Lb(),c.Lb(),c.Mb(69,"ion-card-content"),c.Mb(70,"ion-list"),c.Mb(71,"ion-item",12),c.Mb(72,"ion-input",13),c.Ub("ngModelChange",function(e){return n.AdminCredentials.email=e})("keypress",function(t){c.lc(e);const i=c.jc(75);return n.nextInput(t.keyCode,i)}),c.Lb(),c.Lb(),c.Mb(73,"ion-item",12),c.Mb(74,"ion-input",14,24),c.Ub("ngModelChange",function(e){return n.AdminCredentials.password=e})("keypress",function(t){c.lc(e);const i=c.jc(64);return n.keyPressEventHandler(t.keyCode,"admins",i)}),c.Lb(),c.Lb(),c.Lb(),c.Mb(76,"a",16),c.pc(77,"Passwort vergessen?"),c.Lb(),c.Kb(78,"br"),c.oc(79,f,3,2,"ion-button",17),c.Mb(80,"div",18),c.Mb(81,"ion-button",19),c.pc(82,"Anmelden"),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb()}if(2&e){const e=c.jc(24),t=c.jc(44),i=c.jc(64);c.yb(4),c.bc("routerLink",c.fc(22,y)),c.yb(9),c.bc("ngModel",n.formType),c.yb(6),c.rc("",n.projectNoun,"leiter"),c.yb(4),c.bc("hidden","student"!=n.formType),c.yb(9),c.bc("ngModel",n.StudentCredentials.email),c.yb(2),c.bc("ngModel",n.StudentCredentials.password),c.yb(2),c.bc("routerLink",c.fc(23,k)),c.yb(3),c.bc("ngIf",n.currentDate>n.schedule.begin&&n.currentDate<=n.schedule.control),c.yb(2),c.bc("disabled",e.invalid),c.yb(2),c.bc("hidden","leader"!=n.formType),c.yb(5),c.rc("",n.projectNoun,"leiter"),c.yb(4),c.bc("ngModel",n.LeaderCredentials.email),c.yb(2),c.bc("ngModel",n.LeaderCredentials.password),c.yb(2),c.bc("routerLink",c.fc(24,k)),c.yb(3),c.bc("ngIf",n.currentDate>n.schedule.begin&&n.currentDate<=n.schedule.control),c.yb(2),c.bc("disabled",t.invalid),c.yb(2),c.bc("hidden","admin"!=n.formType),c.yb(9),c.bc("ngModel",n.AdminCredentials.email),c.yb(2),c.bc("ngModel",n.AdminCredentials.password),c.yb(2),c.bc("routerLink",c.fc(25,k)),c.yb(3),c.bc("ngIf",n.currentDate>n.schedule.begin&&n.currentDate<=n.schedule.sort_students),c.yb(2),c.bc("disabled",i.invalid)}},directives:[s.t,s.R,s.P,s.h,s.Y,r.h,s.u,s.p,s.j,s.l,s.n,s.k,s.G,s.Z,o.f,o.i,s.H,s.A,o.k,o.g,o.h,s.B,s.x,s.w,s.ab,o.j,o.c,r.j,i.j],styles:[""]}),e})()}];let w=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(n){return new(n||e)},imports:[[i.b,o.a,s.S,r.k.forChild(v)]]}),e})()}}]);