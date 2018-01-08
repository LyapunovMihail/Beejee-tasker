webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".valign-middle {\r\n  padding-top: 15%;\r\n  padding-bottom: 15%;\r\n}\r\n\r\n.card-size {\r\n\twidth: 55rem; \r\n\theight: 21rem\r\n}\r\n\r\n.img-wrapper {\r\n\tmax-width: 320px; \r\n\tmax-height: 240px; \r\n\tmin-width: 80px; \r\n\tmin-height: 60px;\r\n\toverflow: hidden; \r\n\tmargin-right: 20px\r\n}\r\n\r\n.max-width-100 {\r\n\tmax-width: 100%\r\n}\r\n\r\n.max-width-70 {\r\n\tmax-width: 70%\r\n}\r\n\r\na {\r\n\tcursor: pointer;\r\n}\r\n\r\nli.active a { \r\n\tcursor: auto;\r\n}\r\n\r\n.error-feedback {\r\n  margin-top: .25rem;\r\n  font-size: .875rem;\r\n  color: #dc3545;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"dropdown mt-5 mb-5\" *ngIf=\"user.response.status!=='ok'\">\n    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"auth\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n      Войти\n    </button>\n    <form class=\"dropdown-menu p-4\">\n      <div class=\"form-group\">\n        <label for=\"authEmail\">Логин</label>\n        <input type=\"text\" class=\"form-control\" \n        [class.is-invalid]=\"(authName.touched && authName.invalid) || user.response.message.username\" \n        id=\"authName\" name=\"authName\" placeholder=\"Введите имя\" \n        [(ngModel)]=\"user.data.username\" #authName=\"ngModel\" \n        (input)=\"user.response.message.username = ''\" required>\n        <div class=\"invalid-feedback\" *ngIf=\"(authName.touched && authName.invalid) || user.response.message.username\">Неверный логин</div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"authPassword\">Пароль</label>\n        <input type=\"password\" class=\"form-control\" \n        [class.is-invalid]=\"(authPass.touched && authPass.invalid) || user.response.message.password\" \n        id=\"authPass\" name=\"authPass\" placeholder=\"Введите пароль\" \n        [(ngModel)]=\"user.data.password\" #authPass=\"ngModel\" \n        (input)=\"user.response.message.password = ''\" required> \n        <div class=\"invalid-feedback\" *ngIf=\"(authPass.touched && authPass.invalid) || user.response.message.password\">Неверный пароль</div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"authorize(user.data.username, user.data.password)\">Войти</button>\n    </form>\n  </div>\n\n  <div class=\"mt-5 mb-5\" *ngIf=\"user.response.status==='ok'\">\n    <button type=\"button\" class=\"btn btn-dark\" (click)=\"unAuthorize()\">Выход админа</button>\n  </div>\n\n  <div class=\"alert alert-danger mb-3\" role=\"alert\"*ngIf=\"get.response.status=='error'\">\n    Ошибка. {{get.response.message}}\n  </div>\n\n  <div *ngIf=\"view.currentView=='taskList' && get.response.status=='ok'\">\n    <div class=\"row ml-1 mb-4\">\n      <div class=\"mr-3\">\n        <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"changeView('taskEdit')\">Создать задачу +</button>\n      </div>\n      <div class=\"dropdown\">\n        <button class=\"btn btn-secondary btn-sm dropdown-toggle\" type=\"button\" id=\"sortMenu\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Сортировать по</button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"sortMenu\">\n          <button class=\"dropdown-item\" type=\"button\" (click)=\"get.data.sort_field='username'; toPage(1)\">Имени пользователя</button>\n          <button class=\"dropdown-item\" type=\"button\" (click)=\"get.data.sort_field='email'; toPage(1)\">Email</button>\n          <button class=\"dropdown-item\" type=\"button\" (click)=\"get.data.sort_field='status'; toPage(1)\">Статусу</button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row ml-1 mr-1\">\n      <div class=\"card bg-light border-secondary mb-3 card-size\" *ngFor=\"let task of get.response.message.tasks\">\n        <h5 class=\"card-header\">{{task.username}} \n          <span class=\"text-muted\">({{task.email}}) </span>\n          <span class=\"badge badge-info\" *ngIf=\"!task.status\">Не выполнено</span>\n          <span class=\"badge badge-dark\" *ngIf=\"task.status\">Выполнено</span> \n          <button type=\"button\" class=\"btn btn-sm btn-link float-right\" *ngIf=\"user.data.isAdmin\" (click)=\"editTask(task)\">Редактировать</button>\n        </h5>         \n        <div class=\"card-body\" style=\"overflow: auto\">\n          <div class=\"max-width-100\" style=\"display: inline-flex\" >\n            <div class=\"img-wrapper\">\n              <img [src]=\"task.image_path\" class=\"rounded img-fluid img-thumbnail\" alt=\"...\">\n            </div>\n            <div class=\"max-width-70\">\n              <p class=\"card-text\">{{task.text}}</p>\n            </div>\n          </div>\n        </div>  \n      </div>  \n    </div>\n\n    <nav class=\"mb-5\" *ngIf=\"get.response.message.total_task_count > 3\">\n      <ul class=\"pagination\">\n        <li class=\"page-item\">\n          <a class=\"page-link\" (click)=\"toFirstPage()\">&lsaquo;&lsaquo;&lsaquo;</a>\n        </li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" (click)=\"prevPages()\">&laquo;</a>\n        </li>\n        <li class=\"page-item\" *ngIf=\"lastPage >= startPage\" [class.active]=\"currentPage===startPage\"><a class=\"page-link\" (click)=\"toPage(startPage)\">{{startPage}}</a></li>\n        <li class=\"page-item\" *ngIf=\"lastPage >= startPage+1\" [class.active]=\"currentPage===startPage+1\"><a class=\"page-link\" (click)=\"toPage(startPage+1)\">{{startPage+1}}</a></li>\n        <li class=\"page-item\" *ngIf=\"lastPage >= startPage+2\" [class.active]=\"currentPage===startPage+2\"><a class=\"page-link\" (click)=\"toPage(startPage+2)\">{{startPage+2}}</a></li>\n        <li class=\"page-item\" *ngIf=\"lastPage >= startPage+3\" [class.active]=\"currentPage===startPage+3\"><a class=\"page-link\" (click)=\"toPage(startPage+3)\">{{startPage+3}}</a></li>\n        <li class=\"page-item\" *ngIf=\"lastPage >= startPage+4\" [class.active]=\"currentPage===startPage+4\"><a class=\"page-link\"(click)=\"toPage(startPage+4)\">{{startPage+4}}</a></li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" (click)=\"nextPages()\">&raquo;</a>\n        </li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" (click)=\"toLastPage()\">&rsaquo;&rsaquo;&rsaquo;</a>\n        </li>\n      </ul>\n    </nav>\n  </div>    \n\n  <div *ngIf=\"view.currentView=='taskEdit'\">\n    <form class=\"col-md-8\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <label for=\"username\">Имя пользователя</label>\n          <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" [(ngModel)]=\"post.data.username\" #username=\"ngModel\" (input)=\"post.response.message.username = ''\" required [disabled]=\"adminEdit\">\n          <div class=\"error-feedback\" *ngIf=\"(username.touched && username.invalid) || post.response.message.username\">Поле является обязательным для заполнения</div>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label for=\"email\">Email</label>\n          <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"post.data.email\" #email=\"ngModel\" (input)=\"post.response.message.email = ''\" pattern=\"[a-zA-Z_]+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}\" required [disabled]=\"adminEdit\">\n          <div class=\"error-feedback\" *ngIf=\"(email.touched && email.invalid) || post.response.message.email\">Неверный имэйл</div>\n        </div>\n      </div>\n      \n      <div class=\"form-group\">\n        <label for=\"text\">Текст задачи</label>\n        <textarea class=\"form-control\" id=\"text\" name=\"text\" rows=\"3\" [(ngModel)]=\"post.data.text\" #text=\"ngModel\" (input)=\"post.response.message.text = ''\" required></textarea>\n        <div class=\"error-feedback\" *ngIf=\"(text.touched && text.invalid) || post.response.message.text\">Поле является обязательным для заполнения</div>\n      </div>\n\n      <div class=\"form-group\" *ngIf=\"!adminEdit\">    \n        <label for=\"exampleFormControlFile1\">Выберите изображение</label>\n        <input type=\"file\" class=\"form-control-file\" id=\"exampleFormControlFile1\" (change)=\"fileUpload(imageFile, previewImg); post.response.message.image = ''\" accept=\"image/jpeg,image/png,image/gif\" #imageFile>\n        <div class=\"error-feedback\" *ngIf=\"post.response.message.image\">Не загружено изображение</div>\n      </div>\n\n      <div class=\"form-group\" *ngIf=\"adminEdit\">\n        <div class=\"form-check\">\n          <label class=\"form-check-label\">\n            <input class=\"form-check-input\" type=\"checkbox\" name=\"status\" [checked]=\"post.data.status===10\" (change)=\"post.data.status = post.data.status===10 ? 0 : 10\"> Задача выполнена\n          </label>\n        </div>\n      </div>\n\n      <button type=\"button\" class=\"btn btn-primary float-left\" data-toggle=\"modal\" data-target=\".bd-example-modal-lg\" *ngIf=\"!adminEdit\">Предварительный просмотр</button>\n\n      <div class=\"modal fade bd-example-modal-lg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-lg\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-body\">\n              <div class=\"row ml-1 mr-1\">\n                <div class=\"card bg-light mb-3 card-size\">\n                  <h5 class=\"card-header\">{{post.data.username}} <span class=\"text-muted\" *ngIf=\"post.data.email\">({{post.data.email}}) </span></h5>  \n                  <div class=\"card-body\" style=\"overflow: auto\">\n                    <div class=\"max-width-100\" style=\"display: inline-flex\">\n                      <div class=\"img-wrapper\" [style.visibility]=\"post.data.image ? 'visible': 'hidden'\">\n                        <img [src]=\"\" class=\"rounded img-fluid img-thumbnail\" alt=\"Image\" #previewImg>\n                      </div>\n                      <div class=\"max-width-70\">\n                        <p class=\"card-text\">{{post.data.text}}</p>\n                      </div>\n                    </div>\n                  </div> \n                </div> \n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-row float-right\">\n        <button type=\"button\" class=\"btn btn-light mr-2\" (click)=\"changeView('taskList')\">Назад</button>\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"postTask()\" *ngIf=\"!adminEdit\">Сохранить</button>\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"updateTask()\" *ngIf=\"adminEdit\">Редактировать</button>\n      </div>\n    </form>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(appService) {
        this.appService = appService;
        this.view = { currentView: "taskList" };
        this.get = {
            data: { sort_field: "id", sort_direction: "desc", page: 1 },
            response: { status: "", message: {} }
        };
        this.post = {
            data: { image: null, username: "", email: "", text: "" },
            response: { status: "", message: {} }
        };
        this.user = {
            data: { username: "", password: "", isAdmin: false },
            response: { status: "", message: {} }
        };
        this.currentPage = 1;
        this.startPage = 1;
        this.lastPage = 1;
        this.pageCapacity = 3;
        this.adminEdit = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getTasks();
    };
    AppComponent.prototype.changeView = function (view) {
        this.post.data = { image: null, username: "", email: "", text: "" };
        this.post.response = { status: "", message: {} };
        this.adminEdit = false;
        this.toPage(1);
        this.view.currentView = view;
    };
    AppComponent.prototype.getTasks = function () {
        var self = this;
        this.appService
            .getTasks(this.get.data)
            .done(function (response) {
            self.setLastPage(response.message.total_task_count);
            self.get.response = response;
        });
    };
    AppComponent.prototype.postTask = function () {
        var self = this;
        this.appService
            .postTask(this.post.data)
            .done(function (response) {
            if (response.status == 'ok') {
                self.changeView('taskList');
            }
            else {
                self.post.response = response;
            }
        });
    };
    AppComponent.prototype.updateTask = function () {
        var self = this;
        this.appService.updateTask(this.post.data)
            .done(function (response) {
            self.changeView('taskList');
        });
    };
    AppComponent.prototype.editTask = function (task) {
        this.changeView('taskEdit');
        this.adminEdit = true;
        this.post.data = task;
    };
    AppComponent.prototype.authorize = function (username, password) {
        var message = { username: "", password: "" };
        var status = "";
        if (username !== 'admin') {
            status = "error";
            message.username = "Неверный логин";
        }
        if (password !== '123') {
            status = "error";
            message.password = "Неверный пароль";
        }
        if (status !== "error") {
            status = "ok";
            this.user.data.isAdmin = true;
        }
        this.user.response.status = status;
        this.user.response.message = message;
        this.changeView('taskList');
    };
    AppComponent.prototype.unAuthorize = function () {
        this.user = {
            data: { username: "", password: "", isAdmin: false },
            response: { status: "", message: {} }
        };
        this.changeView('taskList');
    };
    //File upload and image preview
    AppComponent.prototype.fileUpload = function (imageFile, previewImg) {
        var file = imageFile.files[0];
        var self = this;
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (function (file) {
            return function (e) {
                previewImg.src = e.target.result;
                previewImg.onload = function () {
                    self.post.data.image = self.getResizedImageFile(previewImg);
                };
            };
        })(file);
    };
    AppComponent.prototype.getResizedImageFile = function (img) {
        var MAX_WIDTH = 320;
        var MAX_HEIGHT = 240;
        var width = img.width;
        var height = img.height;
        if (width > height) {
            if (width > MAX_WIDTH) {
                height *= MAX_WIDTH / width;
                width = MAX_WIDTH;
            }
        }
        else {
            if (height > MAX_HEIGHT) {
                width *= MAX_HEIGHT / height;
                height = MAX_HEIGHT;
            }
        }
        img.width = width;
        img.height = height;
        var canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        var dataURL = canvas.toDataURL("image/png");
        var blobBin = atob(dataURL.split(',')[1]);
        var array = [];
        for (var i = 0; i < blobBin.length; i++) {
            array.push(blobBin.charCodeAt(i));
        }
        var resizedImagefile = new Blob([new Uint8Array(array)], { type: 'image/png' });
        return resizedImagefile;
    };
    //Pagination methods
    AppComponent.prototype.toFirstPage = function () {
        this.startPage = 1;
        this.currentPage = this.startPage;
        this.get.data.page = this.currentPage;
        this.getTasks();
    };
    AppComponent.prototype.prevPages = function () {
        this.startPage = this.startPage != 1 ?
            this.startPage - 5 : this.startPage;
        this.currentPage = this.startPage;
        this.get.data.page = this.currentPage;
        this.getTasks();
    };
    AppComponent.prototype.nextPages = function () {
        this.currentPage = this.lastPage >= this.startPage + 5 ?
            this.startPage + 5 : this.lastPage;
        this.startPage = this.lastPage >= this.startPage + 5 ?
            this.startPage + 5 : this.startPage;
        this.get.data.page = this.currentPage;
        this.getTasks();
    };
    AppComponent.prototype.toLastPage = function () {
        this.startPage = this.lastPage % 5 !== 0 ?
            this.lastPage + 1 - this.lastPage % 5 : this.lastPage - 4;
        this.currentPage = this.lastPage;
        this.get.data.page = this.currentPage;
        this.getTasks();
    };
    AppComponent.prototype.toPage = function (page) {
        this.currentPage = page;
        this.get.data.page = this.currentPage;
        this.getTasks();
    };
    AppComponent.prototype.setLastPage = function (tasksCount) {
        this.lastPage = Math.ceil(tasksCount / this.pageCapacity);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_md5__ = __webpack_require__("../../../../md5/md5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_md5__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = (function () {
    function AppService() {
        this.onPageChange$ = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.onReceiveTotalTaskCount$ = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    AppService.prototype.onPageChange = function (pageInfo) {
        this.onPageChange$.emit(pageInfo);
    };
    AppService.prototype.onReceiveTotalTaskCount = function (count) {
        this.onReceiveTotalTaskCount$.emit(count);
    };
    AppService.prototype.getTasks = function (query) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://uxcandy.com/~shapoval/test-task-backend/?developer=Mihail&sort_field=" + query.sort_field + "&sort_direction=" + query.sort_direction + "&page=" + query.page,
            "method": "GET",
            "contentType": false,
            "processData": false
        };
        return $.ajax(settings);
    };
    AppService.prototype.postTask = function (data) {
        var form = new FormData();
        form.append("username", data.username);
        form.append("email", data.email);
        form.append("text", data.text);
        form.append("image", data.image);
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://uxcandy.com/~shapoval/test-task-backend/create?developer=Mihail",
            "method": "POST",
            "mimeType": "multipart/form-data",
            "contentType": false,
            "processData": false,
            "dataType": "json",
            "data": form
        };
        return $.ajax(settings);
    };
    AppService.prototype.updateTask = function (data) {
        var masText = data.text.split("");
        masText.sort(function (a, b) {
            if (a < b)
                return 1;
            if (a > b)
                return -1;
            return 0;
        });
        var dataText = masText.join("");
        var params_string = "status=" + data.status + "&token=beejee";
        var form = new FormData();
        form.append("status", data.status);
        form.append("token", "beejee");
        form.append("signature", __WEBPACK_IMPORTED_MODULE_1_md5__(params_string));
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://uxcandy.com/~shapoval/test-task-backend/edit/" + data.id + "?developer=Mihail",
            "method": "POST",
            "mimeType": "multipart/form-data",
            "contentType": false,
            "processData": false,
            "dataType": "json",
            "data": form
        };
        return $.ajax(settings);
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map