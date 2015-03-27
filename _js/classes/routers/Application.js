
var HomeView = require('../views/HomeView.js');
var TutorialView = require('../views/TutorialView.js');

var Application = Backbone.Router.extend({


	routes: {
		//pagina: functie
		"intro": "intro",
		"tutorial": "tutorial",
		"*actions": "default"
	},

	empty: function(){
		//container clearen
		$('#bodywrapper').empty();
	},

	intro: function(){
		this.empty();
		this.home = new HomeView();
		$('#bodywrapper').append(this.home.render().el);
	},
	tutorial: function(){
		this.tutorial = new TutorialView();
		$('#bodywrapper').append(this.tutorial.render().el);
		$("#containerbig1").addClass("moveup");
		this.tutorial.renderSunset();
		if (this.home != null){
			this.home.removeSelf();
		}
	},

	default: function(){
		//this = router
		//trigger om overview functie uit te voeren. eerste argument gaat enkel url wijzigen.
		//tweede moet de functie oproepen
		console.log("where at default again");
		this.navigate("intro", {trigger: true});
	},

});

module.exports = Application;