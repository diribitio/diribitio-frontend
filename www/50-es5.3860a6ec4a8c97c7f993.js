!function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[50,49,51,52],{zbRu:function(t,n,r){"use strict";r.d(n,"a",(function(){return h}));var a=r("fXoL"),i=r("tk/3"),o=r("18Le"),s=r("YdJ5"),c=r("wxHw"),u=r("tyNb"),h=function(){var t=function(){function t(e,n,r,i,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.http=e,this.auth=n,this.alert=r,this.config=i,this.router=o,this.update=new a.n,this.backendUrl=this.config.backend_config.url,this.projectNoun=this.config.app_config.project_noun,this.eventName=this.config.app_config.event_name}var n,r,o;return n=t,(r=[{key:"getAllProjects",value:function(){var e=new i.c({"Content-Type":"application/json"});return this.http.get(this.backendUrl+"projects",{headers:e})}},{key:"getProject",value:function(e){var t=new i.c({"Content-Type":"application/json"});return this.http.get(this.backendUrl+"projects/"+e,{headers:t})}},{key:"getLittleProject",value:function(e){var t=new i.c({"Content-Type":"application/json"});return this.http.get(this.backendUrl+"projects/show_little/"+e,{headers:t})}},{key:"getProjectAdmin",value:function(e){var t=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"admins/project/"+e,{headers:t})}},{key:"getSelfProject",value:function(){var e=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"students/project",{headers:e})}},{key:"getSelfLeadedProject",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"students",t=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+e+"/leaded_project",{headers:t})}},{key:"createProject",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"students",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r={headers:new i.c({Authorization:"Bearer "+this.auth.jwt})},a=new FormData;return a.append("title",t.title),a.append("image",n),a.append("descr",t.descr),a.append("leader_name",t.leader_name),a.append("cost",t.cost),a.append("first_day_begin",t.first_day_begin),a.append("first_day_end",t.first_day_end),a.append("second_day_begin",t.second_day_begin),a.append("second_day_end",t.second_day_end),a.append("min_grade",t.min_grade),a.append("max_grade",t.max_grade),a.append("min_participants",t.min_participants),a.append("max_participants",t.max_participants),this.http.post(this.backendUrl+e+"/store_project",a,r)}},{key:"toogleAuthorizedProject",value:function(e,t){var n=this,r=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+"admins/toogle_authorized/"+e,{authorized:t},{headers:r}).subscribe((function(e){e&&n.alert.alert(e.message),n.update.emit()}),(function(e){n.alert.error("Aktualisierung des Projektes fehlgeschlagen!",e.error)}))}},{key:"toogleEditableProject",value:function(e,t){var n=this,r=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.put(this.backendUrl+"admins/toogle_editable/"+e,{editable:t},{headers:r}).subscribe((function(e){n.alert.alert(e.message),n.update.emit()}),(function(e){n.alert.error("Aktualisierung des Projektes fehlgeschlagen!",e.error)}))}},{key:"putProject",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"students",n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,a=new i.c({Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+t+"/update_project",n,{headers:a}).subscribe((function(n){e.alert.alert(n.message),e.router.navigate("students"===t?[e.eventName+"/Sch\xfcler/"+r]:[e.eventName+"/"+e.projectNoun+"leiter/"+r]),e.update.emit()}),(function(t){e.alert.error("Aktualisierung des Projektes fehlgeschlagen!",t.error)}))}},{key:"touchUpProject",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"students",n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,a=new i.c({Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+t+"/touch_up_project",n,{headers:a}).subscribe((function(n){e.alert.alert(n.message),e.router.navigate("students"===t?[e.eventName+"/Sch\xfcler/"+r]:[e.eventName+"/"+e.projectNoun+"leiter/"+r]),e.update.emit()}),(function(t){e.alert.error("Aktualisierung des Projektes fehlgeschlagen!",t.error)}))}},{key:"deleteProject",value:function(e){var t=this,n=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.delete(this.backendUrl+"admins/destroy_project/"+e,{headers:n}).subscribe((function(e){t.alert.alert(e.message),t.update.emit()}),(function(e){t.alert.error("L\xf6schen des Projektes fehlgeschlagen!",e.error)}))}}])&&e(n.prototype,r),o&&e(n,o),t}();return t.\u0275fac=function(e){return new(e||t)(a.Pb(i.a),a.Pb(o.a),a.Pb(s.a),a.Pb(c.a),a.Pb(u.g))},t.\u0275prov=a.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}])}();