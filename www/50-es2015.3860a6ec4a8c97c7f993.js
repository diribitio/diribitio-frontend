(window.webpackJsonp=window.webpackJsonp||[]).push([[50,49,51,52],{zbRu:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var s=r("fXoL"),n=r("tk/3"),a=r("18Le"),i=r("YdJ5"),o=r("wxHw"),h=r("tyNb");let c=(()=>{class t{constructor(t,e,r,n,a){this.http=t,this.auth=e,this.alert=r,this.config=n,this.router=a,this.update=new s.n,this.backendUrl=this.config.backend_config.url,this.projectNoun=this.config.app_config.project_noun,this.eventName=this.config.app_config.event_name}getAllProjects(){const t=new n.c({"Content-Type":"application/json"});return this.http.get(this.backendUrl+"projects",{headers:t})}getProject(t){const e=new n.c({"Content-Type":"application/json"});return this.http.get(this.backendUrl+"projects/"+t,{headers:e})}getLittleProject(t){const e=new n.c({"Content-Type":"application/json"});return this.http.get(this.backendUrl+"projects/show_little/"+t,{headers:e})}getProjectAdmin(t){const e=new n.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"admins/project/"+t,{headers:e})}getSelfProject(){const t=new n.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"students/project",{headers:t})}getSelfLeadedProject(t="students"){const e=new n.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+t+"/leaded_project",{headers:e})}createProject(t="students",e,r=null){const s={headers:new n.c({Authorization:"Bearer "+this.auth.jwt})},a=new FormData;return a.append("title",e.title),a.append("image",r),a.append("descr",e.descr),a.append("leader_name",e.leader_name),a.append("cost",e.cost),a.append("first_day_begin",e.first_day_begin),a.append("first_day_end",e.first_day_end),a.append("second_day_begin",e.second_day_begin),a.append("second_day_end",e.second_day_end),a.append("min_grade",e.min_grade),a.append("max_grade",e.max_grade),a.append("min_participants",e.min_participants),a.append("max_participants",e.max_participants),this.http.post(this.backendUrl+t+"/store_project",a,s)}toogleAuthorizedProject(t,e){const r=new n.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+"admins/toogle_authorized/"+t,{authorized:e},{headers:r}).subscribe(t=>{t&&this.alert.alert(t.message),this.update.emit()},t=>{this.alert.error("Aktualisierung des Projektes fehlgeschlagen!",t.error)})}toogleEditableProject(t,e){const r=new n.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.put(this.backendUrl+"admins/toogle_editable/"+t,{editable:e},{headers:r}).subscribe(t=>{this.alert.alert(t.message),this.update.emit()},t=>{this.alert.error("Aktualisierung des Projektes fehlgeschlagen!",t.error)})}putProject(t="students",e,r){const s=new n.c({Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+t+"/update_project",e,{headers:s}).subscribe(e=>{this.alert.alert(e.message),this.router.navigate("students"===t?[this.eventName+"/Sch\xfcler/"+r]:[this.eventName+"/"+this.projectNoun+"leiter/"+r]),this.update.emit()},t=>{this.alert.error("Aktualisierung des Projektes fehlgeschlagen!",t.error)})}touchUpProject(t="students",e,r){const s=new n.c({Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+t+"/touch_up_project",e,{headers:s}).subscribe(e=>{this.alert.alert(e.message),this.router.navigate("students"===t?[this.eventName+"/Sch\xfcler/"+r]:[this.eventName+"/"+this.projectNoun+"leiter/"+r]),this.update.emit()},t=>{this.alert.error("Aktualisierung des Projektes fehlgeschlagen!",t.error)})}deleteProject(t){const e=new n.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.delete(this.backendUrl+"admins/destroy_project/"+t,{headers:e}).subscribe(t=>{this.alert.alert(t.message),this.update.emit()},t=>{this.alert.error("L\xf6schen des Projektes fehlgeschlagen!",t.error)})}}return t.\u0275fac=function(e){return new(e||t)(s.Pb(n.a),s.Pb(a.a),s.Pb(i.a),s.Pb(o.a),s.Pb(h.g))},t.\u0275prov=s.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);