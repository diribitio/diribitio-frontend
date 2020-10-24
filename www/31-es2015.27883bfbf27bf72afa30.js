(window.webpackJsonp=window.webpackJsonp||[]).push([[31,30,42,43],{"9pHg":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var s=n("fXoL"),i=n("tk/3"),r=n("18Le"),a=n("wxHw");let o=(()=>{class t{constructor(t,e,n){this.http=t,this.auth=e,this.config=n,this.update=new s.n,this.backendUrl=this.config.backend_config.url}getSchedule(){const t=new i.c({"Content-Type":"application/json"});return this.http.get(this.backendUrl+"schedule/1",{headers:t})}putSchedule(t){const e=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.put(this.backendUrl+"admins/update_schedule",t,{headers:e})}}return t.\u0275fac=function(e){return new(e||t)(s.Pb(i.a),s.Pb(r.a),s.Pb(a.a))},t.\u0275prov=s.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},kXZ0:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var s=n("fXoL"),i=n("tk/3"),r=n("18Le"),a=n("YdJ5"),o=n("wxHw"),h=n("tyNb");let c=(()=>{class t{constructor(t,e,n,i,r){this.http=t,this.auth=e,this.alert=n,this.config=i,this.router=r,this.update=new s.n,this.backendUrl=this.config.backend_config.url,this.eventName=this.config.app_config.event_name}signUpAdmin(t,e){const n=new i.c({"Content-Type":"application/json"});this.http.post(this.backendUrl+"admins/register",t,{headers:n}).subscribe(t=>{t.token&&(this.auth.set_jwt(t.token),this.auth.setLoggedIn(!0),this.router.navigate([this.eventName+"/Anmeldung"])),this.alert.alert("Dein Account wurde erfolgreich erstellt!"),this.sendAuthentificationEmail(),this.update.emit(),e.reset()},t=>{this.alert.error("Accounterstellung fehlgeschlagen!",t.error)})}sendAuthentificationEmail(){const t=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.post(this.backendUrl+"admins/email/resend",null,{headers:t}).subscribe(t=>{this.alert.alert(t.message)},t=>{this.alert.error("Verifizierungs E-Mail konnte nicht versandt werden!",t.error)})}sendAuthentificationEmailSubscribe(){const t=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.post(this.backendUrl+"admins/email/resend",null,{headers:t})}logInAdmin(t){const e=new i.c({"Content-Type":"application/json"});return this.http.post(this.backendUrl+"admins/login",t,{headers:e})}logOutAdmin(){const t=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.post(this.backendUrl+"admins/logout",null,{headers:t}).subscribe(t=>{this.alert.alert(t.message),this.auth.setLoggedIn(!1),this.router.navigate([this.eventName+"/Anmeldung"])},t=>{this.alert.error("Logout fehlgeschlagen!",t.error)})}getSelfAdmin(){const t=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"admins/self",{headers:t})}getAdmin(t){const e=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"admins/"+t,{headers:e})}getAllTokens(){const t=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"sign_up_tokens",{headers:t})}createTokens(t){const e=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.post(this.backendUrl+"sign_up_tokens",{count:t},{headers:e})}deleteAllTokens(){const t=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.delete(this.backendUrl+"sign_up_tokens",{headers:t})}getAllSignUpEmails(){const t=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"sign_up_emails",{headers:t})}createSignUpEmail(t){const e=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.post(this.backendUrl+"sign_up_emails",t,{headers:e})}deleteSignUpEmail(t){const e=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.delete(this.backendUrl+"sign_up_emails/"+t,{headers:e}).subscribe(t=>{this.alert.alert(t.message),this.update.emit()},t=>{this.alert.error("Entfernen der E-mail fehlgeschlagen!",t.error)})}createSortingProposal(){const t=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.post(this.backendUrl+"admins/create_sorting_proposal",null,{headers:t})}requestSortingProposal(){const t=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"admins/request_sorting_proposal",{headers:t})}editSortingProposal(t){const e=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.post(this.backendUrl+"admins/edit_sorting_proposal",t,{headers:e}).subscribe(t=>{this.alert.alert(t.message)},t=>{this.alert.error("Erstellung eines Backups fehlgeschlagen!",t.error)})}applySortingProposal(){const t=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.post(this.backendUrl+"admins/apply_sorting_proposal",null,{headers:t}).subscribe(t=>{this.alert.alert(t.message)},t=>{this.alert.error("Erstellung eines Backups fehlgeschlagen!",t.error)})}}return t.\u0275fac=function(e){return new(e||t)(s.Pb(i.a),s.Pb(r.a),s.Pb(a.a),s.Pb(o.a),s.Pb(h.g))},t.\u0275prov=s.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);