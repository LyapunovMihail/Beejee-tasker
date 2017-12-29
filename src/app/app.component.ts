import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	constructor(
    private appService: AppService) { 
  }

  view = {currentView: "taskList"};

	get = {
		data: {sort_field: "id", sort_direction: "desc", page: 1},
		response: {status: "", message: {}}
	};

	post = {
		data: {image: null, username: "", email: "", text: ""},
		response: {status: "", message: {}}
	};

	user = {
		data: {username: "", password: "", isAdmin: false},
		response: {status: "", message: {}}
	};

  currentPage = 1;
  startPage = 1;
  lastPage = 1;
  pageCapacity = 3;

  adminEdit = false;

  ngOnInit() {
    this.getTasks();
  }

  changeView(view) {
		this.post.data = {image: null, username: "", email: "", text: ""};
		this.post.response = {status: "", message: {}};
		this.adminEdit = false;
  	this.toPage(1);
  	this.view.currentView = view;
  }

  getTasks() {
  	let self = this;
    this.appService
    	.getTasks(this.get.data)
    	.done(function (response) {
    		self.setLastPage(response.message.total_task_count);
    		self.get.response = response;
			});
  }

  postTask() {
  	let self = this;
  	this.appService
    	.postTask(this.post.data)
    	.done(function (response) {
			  if (response.status == 'ok') {
			  	self.changeView('taskList');	
			  } else {
			  	self.post.response = response;
			  }
			});
  }
  
  updateTask() {
  	let self = this;
  	this.appService.updateTask(this.post.data)
  		.done(function (response) {
			  self.changeView('taskList');
			});
  }

  editTask(task) {
  	this.changeView('taskEdit');
  	this.adminEdit = true;
  	this.post.data = task;
  }	

  authorize(username, password) {
  	let message = {username: "", password: ""};
  	let status = "";
  	if (username !== 'admin' ) {
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
  }

  unAuthorize() {
  	this.user = {
			data: {username: "", password: "", isAdmin: false},
			response: {status: "", message: {}}
		}
		this.changeView('taskList');
  }

  //File upload and image preview

  fileUpload(imageFile, previewImg) {
  	let file = imageFile.files[0];
  	let self = this;

  	var reader = new FileReader();
  	reader.readAsDataURL(file);
  	reader.onload = (function(file) {        
      return function(e) {
      	previewImg.src = e.target.result;
	      previewImg.onload = function() {
	      	 self.post.data.image= self.getResizedImageFile(previewImg);
	      };      		       
    	}
	  })(file);
  }

  private getResizedImageFile(img) {
  	var MAX_WIDTH = 320;
		var MAX_HEIGHT = 240;
		var width = img.width;
		var height = img.height;
		 
		if (width > height) {
		  if (width > MAX_WIDTH) {
		    height *= MAX_WIDTH / width;
		    width = MAX_WIDTH;
		  }
		} else {
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
		for(var i = 0; i < blobBin.length; i++) {
		    array.push(blobBin.charCodeAt(i));
		}
		var resizedImagefile = new Blob([new Uint8Array(array)], {type: 'image/png'});
		return resizedImagefile;
  }

  //Pagination methods

  toFirstPage() {
    this.startPage = 1;
    this.currentPage = this.startPage;
    this.get.data.page = this.currentPage;
    this.getTasks();
  }

  prevPages() {
    this.startPage = this.startPage != 1 ? 
    this.startPage-5 : this.startPage;
    this.currentPage = this.startPage;
    this.get.data.page = this.currentPage;
    this.getTasks();
  }

  nextPages() {
    this.currentPage = this.lastPage >= this.startPage+5 ? 
    this.startPage+5 : this.lastPage;
    this.startPage = this.lastPage >= this.startPage+5 ? 
    this.startPage+5 : this.startPage;
    this.get.data.page = this.currentPage;
    this.getTasks();
  }

  toLastPage() {
    this.startPage = this.lastPage%5 !== 0 ? 
    this.lastPage+1 - this.lastPage%5 : this.lastPage-4;
    this.currentPage = this.lastPage;
    this.get.data.page = this.currentPage;
    this.getTasks();
  }

  toPage(page) {
    this.currentPage = page;
    this.get.data.page = this.currentPage;
    this.getTasks();
  }

  setLastPage(tasksCount) {
    this.lastPage = Math.ceil(tasksCount/this.pageCapacity);
  }

}
