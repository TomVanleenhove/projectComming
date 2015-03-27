var Handlebars = require("hbsfy/runtime");
var Application = require('./classes/routers/Application.js');

Handlebars.registerHelper("formatDate", function(date) {
	return moment(this.creation_date).format('MMMM, YYYY');
});

function init() {
	Window.Application = new Application();
	Backbone.history.start();
}

init();
