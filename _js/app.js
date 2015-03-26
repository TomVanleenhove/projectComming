var Handlebars = require("hbsfy/runtime");
var Application = require('./classes/routers/Application.js');

Handlebars.registerHelper("formatDate", function(date) {
	return moment(this.creation_date).format('MMMM, YYYY');
});

function init() {
	Window.Application = new Application();
	Backbone.history.start();

	$("#scrollto1").click(function(e){
		e.preventDefault();

			console.log("test");
			$(".scrollcontainer").addClass("movebitch");
		});
		$("#scrollto2").click(function(e){
		e.preventDefault();

			console.log("test");
			$(".scrollcontainer").addClass("movebitch2");
		});
		$("#scrollto3").click(function(e){
		e.preventDefault();

			console.log("test");
			$(".scrollcontainer").addClass("movebitch3");
		});

}

init();
