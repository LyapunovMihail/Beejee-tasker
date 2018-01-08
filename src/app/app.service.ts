import { Injectable } from '@angular/core';
declare var $:any;
import * as md5 from 'md5';

@Injectable()
export class AppService {

  constructor() { }

  getTasks(query) {
  	var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": `https://uxcandy.com/~shapoval/test-task-backend/?developer=Mihail&sort_field=${query.sort_field}&sort_direction=${query.sort_direction}&page=${query.page}`,
		  "method": "GET",
		  "contentType": false,
  		"processData": false
		}
  	return $.ajax(settings)
  }

  postTask(data) {
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
		}

		return $.ajax(settings);
  }

  updateTask(data) {
		var params_string = `status=${data.status}&text=${data.text}&token=beejee`;
    params_string = encodeURI(params_string);
    
  	var form = new FormData();     
      form.append("status", data.status);
      form.append("text", data.text);
      form.append("token", "beejee"); 
      form.append("signature", md5(params_string));

    var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": `https://uxcandy.com/~shapoval/test-task-backend/edit/${data.id}?developer=Mihail`,
		  "method": "POST",
		  "mimeType": "multipart/form-data",
		  "contentType": false,
  		"processData": false,
  		"dataType": "json",
  		"data": form
		}

		return $.ajax(settings);
  }

}
