(window.webpackJsonp=window.webpackJsonp||[]).push([[44,45],{"F1+/":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("fXoL"),s=n("tk/3"),i=n("18Le"),a=n("YdJ5"),o=n("wxHw"),h=n("tyNb");let l=(()=>{class e{constructor(e,t,n,s,i){this.http=e,this.auth=t,this.alert=n,this.config=s,this.router=i,this.update=new r.n,this.backendUrl=this.config.backend_config.url,this.projectNoun=this.config.app_config.project_noun,this.eventName=this.config.app_config.event_name}signUpLeader(e,t){const n=new s.c({"Content-Type":"application/json"});this.http.post(this.backendUrl+"leaders/register",e,{headers:n}).subscribe(e=>{e.token&&(this.auth.set_jwt(e.token),this.auth.setLoggedIn(!0),this.router.navigate([this.eventName+"/Anmeldung"])),this.alert.alert("Dein Account wurde erfolgreich erstellt!"),this.sendAuthentificationEmail(),this.update.emit(),t.reset()},e=>{this.alert.error("Accounterstellung fehlgeschlagen!",e.error)})}sendAuthentificationEmail(){const e=new s.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.post(this.backendUrl+"leaders/email/resend",null,{headers:e}).subscribe(e=>{this.alert.alert(e.message)},e=>{this.alert.error("Verifizierungs E-Mail konnte nicht versandt werden!",e.error)})}sendAuthentificationEmailSubscribe(){const e=new s.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.post(this.backendUrl+"leaders/email/resend",null,{headers:e})}logInLeader(e){const t=new s.c({"Content-Type":"application/json"});return this.http.post(this.backendUrl+"leaders/login",e,{headers:t})}logOutLeader(){const e=new s.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.post(this.backendUrl+"leaders/logout",null,{headers:e}).subscribe(e=>{this.alert.alert(e.message),this.auth.setLoggedIn(!1),this.router.navigate([this.eventName+"/Anmeldung"])},e=>{this.alert.error("Logout fehlgeschlagen!",e.error)})}getSelfLeader(){const e=new s.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"leaders/self",{headers:e})}getAllLeaders(){const e=new s.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"admins/index_leaders",{headers:e})}deleteLeader(e){const t=new s.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.delete(this.backendUrl+"admins/destroy_leader/"+e,{headers:t}).subscribe(e=>{this.alert.alert(e.message),this.update.emit()},e=>{this.alert.error("L\xf6schung des "+this.projectNoun+"leiters fehlgeschlagen!",e.error)})}}return e.\u0275fac=function(t){return new(t||e)(r.Pb(s.a),r.Pb(i.a),r.Pb(a.a),r.Pb(o.a),r.Pb(h.g))},e.\u0275prov=r.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);