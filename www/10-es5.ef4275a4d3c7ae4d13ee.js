!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{ej43:function(n,r,i){"use strict";i.d(r,"a",function(){return s});var a=i("mrSG"),o=i("tk/3"),l=i("fXoL"),c=i("tyNb"),u=i("r4Kj"),h=i("3LUQ"),d=i("b6Qw"),s=function(){var n=function(){function n(t,r,i,a,o){e(this,n),this.http=t,this.router=r,this.config=i,this.alert=a,this.cookieService=o,this.loggedIn=!1,this.JWT="",this.backendUrl=this.config.backend_config.url,this.eventName=this.config.app_config.event_name}return t(n,[{key:"set_jwt",value:function(e){this.JWT=e,this.cookieService.set("Diribitio-Session",this.jwt,2,"/",null,!1,"Strict")}},{key:"async_set_jwt",value:function(e){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:this.JWT=e,this.cookieService.set("Diribitio-Session",this.jwt,2,"/",null,!1,"Strict");case 1:case"end":return n.stop()}},n,this)}))}},{key:"setLoggedIn",value:function(e){this.loggedIn=e,!1===e&&this.cookieService.delete("Diribitio-Session")}},{key:"check_jwt",value:function(e){var n=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+e});return this.http.post(this.backendUrl+"auth/refresh",null,{headers:n})}},{key:"forgotPassword",value:function(e){var n=this,t=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.JWT});this.http.post(this.backendUrl+"auth/password/email",e,{headers:t}).subscribe(function(e){n.alert.alert(e.message),n.router.navigate([n.eventName+"/Anmeldung"])},function(e){n.alert.error("Die E-Mail konnte nicht versandt werden.",e.error)})}},{key:"resetPassword",value:function(e){var n=new o.c({"Content-Type":"application/json"});return this.http.post(this.backendUrl+"auth/password/reset",e,{headers:n})}},{key:"jwt",get:function(){return this.JWT}},{key:"isLoggedIn",get:function(){return this.loggedIn}}]),n}();return n.\u0275fac=function(e){return new(e||n)(l.Qb(o.a),l.Qb(c.g),l.Qb(u.a),l.Qb(h.a),l.Qb(d.a))},n.\u0275prov=l.Fb({token:n,factory:n.\u0275fac,providedIn:"root"}),n}()},hO9l:function(n,r,i){"use strict";i.r(r),i.d(r,"TabsPageModule",function(){return I});var a=i("TEn/"),o=i("ofXK"),l=i("3Pt+"),c=i("tyNb"),u=i("l5mm"),h=i("fXoL"),d=i("uIHg"),s=i("ej43"),b=i("3LUQ"),f=i("r4Kj");function m(e,n){if(1&e&&(h.Mb(0,"ion-tab-button",4),h.Kb(1,"ion-icon",9),h.Mb(2,"ion-label"),h.pc(3,"Anmeldung"),h.Lb(),h.Lb()),2&e){var t=h.Wb(2);h.cc("routerLink","/",t.eventName,"/Anmeldung")}}function p(e,n){if(1&e&&(h.Mb(0,"ion-tab-button",4),h.Kb(1,"ion-icon",10),h.Mb(2,"ion-label"),h.pc(3,"Dashboard"),h.Lb(),h.Lb()),2&e){var t=h.Wb(2);h.cc("routerLink","/",t.eventName,"/Anmeldung")}}function g(e,n){if(1&e&&(h.Mb(0,"ion-tabs"),h.Mb(1,"ion-tab-bar",3),h.Mb(2,"ion-tab-button",4),h.Kb(3,"ion-icon",5),h.Mb(4,"ion-label"),h.pc(5,"Einstellungen"),h.Lb(),h.Lb(),h.Mb(6,"ion-tab-button",4),h.Kb(7,"ion-icon",6),h.Mb(8,"ion-label"),h.pc(9,"Impressum"),h.Lb(),h.Lb(),h.Mb(10,"ion-tab-button",4),h.Kb(11,"ion-icon",7),h.Mb(12,"ion-label"),h.pc(13,"Home"),h.Lb(),h.Lb(),h.oc(14,m,4,1,"ion-tab-button",8),h.oc(15,p,4,1,"ion-tab-button",8),h.Lb(),h.Lb()),2&e){var t=h.Wb();h.yb(2),h.cc("routerLink","/",t.eventName,"/Einstellungen"),h.yb(4),h.cc("routerLink","/",t.eventName,"/Impressum und Datenschutzerkl\xe4rung"),h.yb(4),h.cc("routerLink","/",t.eventName,"/Home"),h.yb(4),h.bc("ngIf",!t.auth.isLoggedIn),h.yb(1),h.bc("ngIf",t.auth.isLoggedIn)}}function P(e,n){if(1&e&&(h.Mb(0,"ion-button",18),h.pc(1," Anmeldung "),h.Lb()),2&e){var t=h.Wb(2);h.cc("routerLink","/",t.eventName,"/Anmeldung")}}function v(e,n){if(1&e&&(h.Mb(0,"ion-button",18),h.pc(1," Dashboard "),h.Lb()),2&e){var t=h.Wb(2);h.cc("routerLink","/",t.eventName,"/Anmeldung")}}function k(e,n){if(1&e){var t=h.Nb();h.Mb(0,"ion-item",24),h.Ub("click",function(){h.lc(t);var e=n.$implicit;return h.Wb(2).fadeOutAlertOrError(e.id)}),h.Mb(1,"ion-label",25),h.pc(2),h.Lb(),h.Lb()}if(2&e){var r=n.$implicit;h.bc("id",r.id)("color","alert"==r.type?"success":"danger"),h.yb(2),h.rc(" ",r.desrc," ")}}function A(e,n){if(1&e&&(h.Mb(0,"div",11),h.Mb(1,"ion-header",12),h.Mb(2,"ion-toolbar",13),h.Mb(3,"ion-row",14),h.Mb(4,"ion-col",15),h.Kb(5,"img",16),h.Lb(),h.Mb(6,"ion-col"),h.Mb(7,"div",17),h.Mb(8,"ion-button",18),h.pc(9," Home "),h.Lb(),h.oc(10,P,2,1,"ion-button",19),h.oc(11,v,2,1,"ion-button",19),h.Mb(12,"ion-button",18),h.pc(13," Hilfe "),h.Lb(),h.Mb(14,"ion-button",18),h.pc(15," Einstellungen "),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Kb(16,"ion-router-outlet",20),h.oc(17,k,3,3,"ion-item",21),h.Mb(18,"ion-footer",22),h.Mb(19,"span"),h.pc(20,"\xa9 Paul Maier | "),h.Mb(21,"a",23),h.pc(22,"Impressum und Datenschutz"),h.Lb(),h.Kb(23,"br"),h.Lb(),h.Lb(),h.Lb()),2&e){var t=h.Wb();h.yb(5),h.cc("routerLink","/",t.eventName,"/Home"),h.yb(3),h.cc("routerLink","/",t.eventName,"/Home"),h.yb(2),h.bc("ngIf",!t.auth.isLoggedIn),h.yb(1),h.bc("ngIf",t.auth.isLoggedIn),h.yb(1),h.cc("routerLink","/",t.eventName,"/Help"),h.yb(2),h.cc("routerLink","/",t.eventName,"/Einstellungen"),h.yb(3),h.bc("ngForOf",t.alertsAndErrors),h.yb(4),h.cc("routerLink","/",t.eventName,"/Impressum und Datenschutzerkl\xe4rung")}}var L,M,j,w,y=((M=function(){function n(t,r,i,a){var o=this;e(this,n),this.screensizeService=t,this.auth=r,this.alertService=i,this.config=a,this.alertsAndErrors=[],this.maxLifetime=1e3*this.config.ui.alert_errors_max_lifetime,this.projectsNoun=this.config.app_config.projects_noun,this.eventName=this.config.app_config.event_name,this.screensizeService.isDesktopView().subscribe(function(e){o.isDesktop&&!e&&window.location.reload(),o.isDesktop=e}),this.alertService.update.subscribe(function(){return o.getAlertsAndErrors()});var l=Object(u.a)(this.maxLifetime/2);this.regularInterval=l.subscribe(function(){return o.deleteOldAlertsAndErrors(o.maxLifetime)})}return t(n,[{key:"getAlertsAndErrors",value:function(){this.alertsAndErrors=this.alertService.alertsAndErrors}},{key:"deleteOldAlertsAndErrors",value:function(e){var n=this,t=(new Date).getTime();this.alertsAndErrors.forEach(function(r){t-r.time>e&&n.fadeOutAlertOrError(r.id)})}},{key:"fadeOutAlertOrError",value:function(e){var n=this,t=document.getElementById(e.toString());t.classList.add("animate__fadeOutLeft"),t.onanimationend=function(){n.deleteAlertOrError(e)}}},{key:"deleteAlertOrError",value:function(e){this.alertService.delete_alert_error(e)}}]),n}()).\u0275fac=function(e){return new(e||M)(h.Jb(d.a),h.Jb(s.a),h.Jb(b.a),h.Jb(f.a))},M.\u0275cmp=h.Db({type:M,selectors:[["app-tabs"]],decls:4,vars:2,consts:[["rel","stylesheet","href","https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"],[4,"ngIf"],["class","desktop",4,"ngIf"],["color","menu","slot","bottom"],["routerDirection","root",3,"routerLink"],["name","settings"],["name","document"],["name","Home"],["routerDirection","root",3,"routerLink",4,"ngIf"],["name","log-in"],["name","person"],[1,"desktop"],["id","navbar"],["color","menu"],[1,"ion-align-items-center"],["size","2"],["src","../../assets/logo/Logo_light.svg",1,"logo","ion-text-left",3,"routerLink"],[1,"ion-text-right"],["color","buttons","fill","clear","routerDirection","root","routerLinkActive","active-link",1,"link",3,"routerLink"],["color","buttons","fill","clear","routerDirection","root","routerLinkActive","active-link","class","link",3,"routerLink",4,"ngIf"],[1,"desktop-wrapper"],["class","animate__animated animate__fadeInDown","button","true",3,"id","color","click",4,"ngFor","ngForOf"],["color","menu",1,"footer"],[3,"routerLink"],["button","true",1,"animate__animated","animate__fadeInDown",3,"id","color","click"],["color","light",1,"ion-text-center"]],template:function(e,n){1&e&&(h.Mb(0,"head"),h.Kb(1,"link",0),h.Lb(),h.oc(2,g,16,5,"ion-tabs",1),h.oc(3,A,24,8,"div",2)),2&e&&(h.yb(2),h.bc("ngIf",!n.isDesktop),h.yb(1),h.bc("ngIf",n.isDesktop))},directives:[o.j,a.M,a.K,a.L,a.Y,c.h,a.u,a.A,a.t,a.R,a.F,a.o,a.h,c.i,a.E,o.i,a.r,c.j,a.x],styles:[""]}),M),N=((L=function(){function n(t,r,i){e(this,n),this.auth=t,this.router=r,this.config=i,this.isLoggedIn=!1,this.eventName=this.config.app_config.event_name,this.redirectUrl=this.eventName+"/Anmeldung"}return t(n,[{key:"canActivate",value:function(e,n){return this.checkLogin()}},{key:"checkLogin",value:function(){return!!this.auth.isLoggedIn||(this.router.navigate([this.eventName+"/Anmeldung"]),!1)}}]),n}()).\u0275fac=function(e){return new(e||L)(h.Qb(s.a),h.Qb(c.g),h.Qb(f.a))},L.\u0275prov=h.Fb({token:L,factory:L.\u0275fac,providedIn:"root"}),L),S=[{path:"Projekttage",component:y,children:[{path:"Help",children:[{path:"",loadChildren:function(){return i.e(11).then(i.bind(null,"7XJi")).then(function(e){return e.HelpPageModule})}}]},{path:"Einstellungen",children:[{path:"",loadChildren:function(){return i.e(46).then(i.bind(null,"7wo0")).then(function(e){return e.SettingsPageModule})}}]},{path:"Impressum und Datenschutzerkl\xe4rung",children:[{path:"",loadChildren:function(){return i.e(13).then(i.bind(null,"z3fI")).then(function(e){return e.ImprintDataProtectionPageModule})}}]},{path:"Home",children:[{path:"",loadChildren:function(){return Promise.all([i.e(0),i.e(12)]).then(i.bind(null,"ct+p")).then(function(e){return e.HomePageModule})}}]},{path:"Anmeldung",children:[{path:"",loadChildren:function(){return Promise.all([i.e(0),i.e(30)]).then(i.bind(null,"S2+d")).then(function(e){return e.LogInPageModule})}}]},{path:"Anmeldung/Passwort vergessen",children:[{path:"",loadChildren:function(){return i.e(23).then(i.bind(null,"xsru")).then(function(e){return e.ForgotPasswordPageModule})}}]},{path:"Anmeldung/Passwort zur\xfccksetzen/:ResetToken",children:[{path:"",loadChildren:function(){return i.e(31).then(i.bind(null,"4SHV")).then(function(e){return e.ResetPasswordPageModule})}}]},{path:"Anmeldung/Admin Registration",children:[{path:"",loadChildren:function(){return Promise.all([i.e(0),i.e(14)]).then(i.bind(null,"4DVB")).then(function(e){return e.AdminGenerationPageModule})}}]},{path:"Anmeldung/Projektleiter Registration",children:[{path:"",loadChildren:function(){return Promise.all([i.e(0),i.e(24)]).then(i.bind(null,"aa1q")).then(function(e){return e.LeaderGenerationPageModule})}}]},{path:"Anmeldung/Sch\xfcler Registration",children:[{path:"",loadChildren:function(){return Promise.all([i.e(0),i.e(32)]).then(i.bind(null,"i/4z")).then(function(e){return e.StudentGenerationPageModule})}}]},{path:"Projektleiter/:LeaderName",canActivate:[N],children:[{path:"",loadChildren:function(){return Promise.all([i.e(0),i.e(26)]).then(i.bind(null,"XF5o")).then(function(e){return e.LeaderPagePageModule})}}]},{path:"Projektleiter/:LeaderName/Projekt erstellen",canActivate:[N],children:[{path:"",loadChildren:function(){return Promise.all([i.e(0),i.e(29)]).then(i.bind(null,"FHDN")).then(function(e){return e.LeaderProjectGenerationPageModule})}}]},{path:"Projektleiter/:LeaderName/Projekt verwalten",canActivate:[N],children:[{path:"",loadChildren:function(){return Promise.all([i.e(0),i.e(27)]).then(i.bind(null,"2a+d")).then(function(e){return e.LeaderProjectAdministrationPageModule})}}]},{path:"Projektleiter/:LeaderName/Projekt verwalten/Projekt bearbeiten",canActivate:[N],children:[{path:"",loadChildren:function(){return Promise.all([i.e(0),i.e(28)]).then(i.bind(null,"eXB2")).then(function(e){return e.LeaderProjectEditPageModule})}}]},{path:"Projektleiter/:LeaderName/Nachricht senden",canActivate:[N],children:[{path:"",loadChildren:function(){return Promise.all([i.e(0),i.e(25)]).then(i.bind(null,"0zAt")).then(function(e){return e.LeaderMessagesPageModule})}}]},{path:"Sch\xfcler/:ParticipantName",canActivate:[N],children:[{path:"",loadChildren:function(){return Promise.all([i.e(0),i.e(41)]).then(i.bind(null,"Xlih")).then(function(e){return e.StudentPagePageModule})}}]},{path:"Sch\xfcler/:ParticipantName/Projekte",canActivate:[N],children:[{path:"",loadChildren:function(){return Promise.all([i.e(0),i.e(37)]).then(i.bind(null,"GoqE")).then(function(e){return e.ProjectsPageModule})}}]},{path:"Sch\xfcler/:ParticipantName/Projekte/:ProjectID",children:[{path:"",loadChildren:function(){return Promise.all([i.e(0),i.e(36)]).then(i.bind(null,"Pe+c")).then(function(e){return e.ProjectDetailPageModule})}}]},{path:"Sch\xfcler/:ParticipantName/Anmeldung",canActivate:[N],children:[{path:"",loadChildren:function(){return Promise.all([i.e(0),i.e(39)]).then(i.bind(null,"1i7b")).then(function(e){return e.RegistrationPageModule})}}]},{path:"Sch\xfcler/:ParticipantName/Tauschanfrage senden",canActivate:[N],children:[{path:"",loadChildren:function(){return Promise.all([i.e(0),i.e(34)]).then(i.bind(null,"67tE")).then(function(e){return e.ExchangeRequestPageModule})}}]},{path:"Sch\xfcler/:ParticipantName/Tauschanfrage best\xe4tigen",canActivate:[N],children:[{path:"",loadChildren:function(){return Promise.all([i.e(0),i.e(33)]).then(i.bind(null,"p+Yt")).then(function(e){return e.ExchangeConfirmPageModule})}}]},{path:"Sch\xfcler/:ParticipantName/Projekt",canActivate:[N],children:[{path:"",loadChildren:function(){return Promise.all([i.e(0),i.e(35)]).then(i.bind(null,"ZITW")).then(function(e){return e.ProjectPageModule})}}]},{path:"Sch\xfcler/:ParticipantName/Projekt erstellen",canActivate:[N],children:[{path:"",loadChildren:function(){return Promise.all([i.e(0),i.e(44)]).then(i.bind(null,"e7et")).then(function(e){return e.StudentProjectGenerationPageModule})}}]},{path:"Sch\xfcler/:ParticipantName/Assistenten verwalten",canActivate:[N],children:[{path:"",loadChildren:function(){return Promise.all([i.e(0),i.e(38)]).then(i.bind(null,"7RaF")).then(function(e){return e.PromoteStudentsPageModule})}}]},{path:"Sch\xfcler/:ParticipantName/Projekt verwalten",canActivate:[N],children:[{path:"",loadChildren:function(){return Promise.all([i.e(0),i.e(42)]).then(i.bind(null,"sWDz")).then(function(e){return e.StudentProjectAdministrationPageModule})}}]},{path:"Sch\xfcler/:ParticipantName/Projekt verwalten/Projekt bearbeiten",canActivate:[N],children:[{path:"",loadChildren:function(){return Promise.all([i.e(0),i.e(43)]).then(i.bind(null,"eHwU")).then(function(e){return e.StudentProjectEditPageModule})}}]},{path:"Sch\xfcler/:ParticipantName/Nachricht senden",canActivate:[N],children:[{path:"",loadChildren:function(){return Promise.all([i.e(0),i.e(40)]).then(i.bind(null,"V6Bk")).then(function(e){return e.StudentMessagesPageModule})}}]},{path:"Admin/:AdminName",canActivate:[N],children:[{path:"",loadChildren:function(){return Promise.all([i.e(0),i.e(18)]).then(i.bind(null,"iKym")).then(function(e){return e.AdminPagePageModule})}}]},{path:"Admin/:AdminName/Projekte",canActivate:[N],children:[{path:"",loadChildren:function(){return Promise.all([i.e(0),i.e(20)]).then(i.bind(null,"gH7Q")).then(function(e){return e.AdminProjectsPageModule})}}]},{path:"Admin/:AdminName/Tauschanfragen",canActivate:[N],children:[{path:"",loadChildren:function(){return Promise.all([i.e(0),i.e(16)]).then(i.bind(null,"aApZ")).then(function(e){return e.AdminExchangesPageModule})}}]},{path:"Admin/:AdminName/Projekte/:ProjectID",canActivate:[N],children:[{path:"",loadChildren:function(){return Promise.all([i.e(0),i.e(19)]).then(i.bind(null,"7RvP")).then(function(e){return e.AdminProjectDetailPageModule})}}]},{path:"Admin/:AdminName/Tauschanfragen/:ExchangeID",canActivate:[N],children:[{path:"",loadChildren:function(){return Promise.all([i.e(0),i.e(15)]).then(i.bind(null,"oKxh")).then(function(e){return e.AdminExchangeDetailPageModule})}}]},{path:"Admin/:AdminName/Zeitplan verwalten",canActivate:[N],children:[{path:"",loadChildren:function(){return Promise.all([i.e(0),i.e(21)]).then(i.bind(null,"qLtw")).then(function(e){return e.AdminSchedulePageModule})}}]},{path:"Admin/:AdminName/Sch\xfcler und Projektleiter verwalten",canActivate:[N],children:[{path:"",loadChildren:function(){return Promise.all([i.e(0),i.e(22)]).then(i.bind(null,"ZReS")).then(function(e){return e.AdminStudentsLeadersPageModule})}}]},{path:"Admin/:AdminName/App verwalten",canActivate:[N],children:[{path:"",loadChildren:function(){return Promise.all([i.e(0),i.e(17)]).then(i.bind(null,"HFXa")).then(function(e){return e.AdminLogsPageModule})}}]},{path:"E-Mail verifizieren/:Status",children:[{path:"",loadChildren:function(){return i.e(45).then(i.bind(null,"QRSX")).then(function(e){return e.VerifyEmailPageModule})}}]},{path:"",redirectTo:"/Projekttage/Home",pathMatch:"full"}]},{path:"",redirectTo:"/Projekttage/Home",pathMatch:"full"}],C=((w=function n(){e(this,n)}).\u0275mod=h.Hb({type:w}),w.\u0275inj=h.Gb({factory:function(e){return new(e||w)},imports:[[c.k.forChild(S)],c.k]}),w),I=((j=function n(){e(this,n)}).\u0275mod=h.Hb({type:j}),j.\u0275inj=h.Gb({factory:function(e){return new(e||j)},imports:[[a.S,o.b,l.a,C]]}),j)}}])}();