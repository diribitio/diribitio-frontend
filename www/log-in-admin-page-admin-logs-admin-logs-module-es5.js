(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-admin-page-admin-logs-admin-logs-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-logs/admin-logs.page.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-logs/admin-logs.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLogInAdminPageAdminLogsAdminLogsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"Projekttage/Admin/{{ adminUrl }}\"></ion-back-button>\n    </ion-button>\n    <ion-title>Appverwaltung</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\"class=\"content\">\n    <ion-card-header>\n      <ion-card-title>\n        E-Mails für Admin-Accounts verwalten\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"text\">\n      <ion-label color=\"text\">\n        {{ text }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card-content *ngIf=\"SignUpEmails.length\">\n      <ion-item color=\"items\" lines=\"none\" *ngFor=\"let SignUpEmail of SignUpEmails\">\n        <ion-card color=\"background\">\n          <ion-card-content>\n            <ion-text color=\"text\">{{ SignUpEmail.email }}</ion-text>\n          </ion-card-content>\n        </ion-card>\n        <ion-buttons (click)=\"deleteSignUpEmail(SignUpEmail.id)\"><ion-icon color=\"danger\" name=\"close\"></ion-icon></ion-buttons>\n      </ion-item>\n    </ion-card-content>\n    <ion-card-content>\n      <form #signUpEmail=\"ngForm\" name=\"SignUpEmailForm\" (ngSubmit)=\"postSignUpEmail()\" class=\"content\">\n        <ion-card color=\"background\"color=\"background\">\n          <ion-card-content>\n            <ion-list>\n              <ion-item color=\"items\">\n                <ion-input color=\"text\" [(ngModel)]=\"SignUpEmail.email\" name=\"Email\" placeholder=\"E-mail\" required type=\"email\"></ion-input>\n              </ion-item>\n              <ion-item color=\"items\">\n                <ion-input color=\"text\" [(ngModel)]=\"SignUpEmail.email_confirmation\" name=\"Email\" placeholder=\"E-mail-Bestätigung\" required type=\"email\"></ion-input>\n              </ion-item>\n            </ion-list>\n            <div class=\"ion-padding\">\n              <ion-button color=\"buttons\" [disabled]=\"signUpEmail.invalid || currentDate <= schedule.begin && currentDate > schedule.sort_students\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\">Freigeben</ion-button>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/log-in/admin-page/admin-logs/admin-logs.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/log-in/admin-page/admin-logs/admin-logs.module.ts ***!
      \*******************************************************************/

    /*! exports provided: AdminLogsPageModule */

    /***/
    function srcAppLogInAdminPageAdminLogsAdminLogsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminLogsPageModule", function () {
        return AdminLogsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _admin_logs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./admin-logs.page */
      "./src/app/log-in/admin-page/admin-logs/admin-logs.page.ts");

      var routes = [{
        path: '',
        component: _admin_logs_page__WEBPACK_IMPORTED_MODULE_6__["AdminLogsPage"]
      }];

      var AdminLogsPageModule = function AdminLogsPageModule() {
        _classCallCheck(this, AdminLogsPageModule);
      };

      AdminLogsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_admin_logs_page__WEBPACK_IMPORTED_MODULE_6__["AdminLogsPage"]]
      })], AdminLogsPageModule);
      /***/
    },

    /***/
    "./src/app/log-in/admin-page/admin-logs/admin-logs.page.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/log-in/admin-page/admin-logs/admin-logs.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLogInAdminPageAdminLogsAdminLogsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-col {\n  height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nLWluL2FkbWluLXBhZ2UvYWRtaW4tbG9ncy9hZG1pbi1sb2dzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2xvZy1pbi9hZG1pbi1wYWdlL2FkbWluLWxvZ3MvYWRtaW4tbG9ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29sIHtcclxuICAgIGhlaWdodDogODBweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/log-in/admin-page/admin-logs/admin-logs.page.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/log-in/admin-page/admin-logs/admin-logs.page.ts ***!
      \*****************************************************************/

    /*! exports provided: AdminLogsPage */

    /***/
    function srcAppLogInAdminPageAdminLogsAdminLogsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminLogsPage", function () {
        return AdminLogsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/config.service */
      "./src/app/config.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var src_app_schedule_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/schedule.service */
      "./src/app/schedule.service.ts");
      /* harmony import */


      var src_app_admins_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/admins.service */
      "./src/app/admins.service.ts");
      /* harmony import */


      var src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/alert.service */
      "./src/app/alert.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var AdminLogsPage = /*#__PURE__*/function () {
        function AdminLogsPage(activatedRoute, scheduleService, adminsService, alertCtrl, alert, config) {
          _classCallCheck(this, AdminLogsPage);

          this.activatedRoute = activatedRoute;
          this.scheduleService = scheduleService;
          this.adminsService = adminsService;
          this.alertCtrl = alertCtrl;
          this.alert = alert;
          this.config = config;
          this.SignUpEmails = [];
          this.SignUpEmail = {
            id: 0,
            email: '',
            email_confirmation: ''
          };
          this.schedule = {
            id: 1,
            begin: null,
            control: null,
            registration: null,
            sort_students: null,
            exchange: null,
            projects: null,
            end: null
          };
        }

        _createClass(AdminLogsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.text = this.config.get_content('admin-logs');
            this.currentDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
            this.scheduleService.getSchedule().subscribe(function (data) {
              _this.schedule = data.data;
            });
            this.activatedRoute.paramMap.subscribe(function (paramMap) {
              _this.adminUrl = paramMap.get('AdminName');
            });
            this.getSignUpemails();
          }
        }, {
          key: "getSignUpemails",
          value: function getSignUpemails() {
            var _this2 = this;

            this.adminsService.getAllSignUpEmails().subscribe(function (data) {
              _this2.SignUpEmails = data.data;
            });
          }
        }, {
          key: "postSignUpEmail",
          value: function postSignUpEmail() {
            var _this3 = this;

            this.adminsService.createSignUpEmail(this.SignUpEmail).subscribe(function (data) {
              _this3.SignUpEmails.push(data.data);

              _this3.alert.alert(data.message);

              _this3.adminsService.update.emit();
            }, function (error) {
              _this3.alert.error('Freigeben der E-mail fehlgeschlagen!', error.error);
            });
          }
        }, {
          key: "deleteSignUpEmail",
          value: function deleteSignUpEmail(emailID) {
            var _this4 = this;

            this.alertCtrl.create({
              header: 'Sind sie sicher?',
              message: 'Wollen sie diese E-Mail wirklich sperren?',
              buttons: [{
                text: 'Abbrechen',
                role: 'cancel'
              }, {
                text: 'Löschen',
                handler: function handler() {
                  if (_this4.SignUpEmail.email === _this4.SignUpEmail.email_confirmation) {
                    _this4.SignUpEmails = _this4.SignUpEmails.filter(function (filterEmail) {
                      return emailID !== filterEmail.id;
                    });

                    _this4.adminsService.deleteSignUpEmail(emailID);
                  } else {
                    _this4.alert.error('Die angegebenen E-mails stimmen nicht überein.');
                  }
                }
              }]
            }).then(function (alertEl) {
              alertEl.present();
            });
          }
        }]);

        return AdminLogsPage;
      }();

      AdminLogsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_schedule_service__WEBPACK_IMPORTED_MODULE_5__["ScheduleService"]
        }, {
          type: src_app_admins_service__WEBPACK_IMPORTED_MODULE_6__["AdminsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
        }, {
          type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }, {
          type: src_app_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
        }];
      };

      AdminLogsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-logs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./admin-logs.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-logs/admin-logs.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./admin-logs.page.scss */
        "./src/app/log-in/admin-page/admin-logs/admin-logs.page.scss"))["default"]]
      })], AdminLogsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=log-in-admin-page-admin-logs-admin-logs-module-es5.js.map