
var HomeView = require('../views/HomeView.js');
var TutorialView = require('../views/TutorialView.js');
var EnergieView = require('../views/EnergieView.js');
var HumeurView = require('../views/HumeurView.js');
var HygieneView = require('../views/HygieneView.js');

var Application = Backbone.Router.extend({


	routes: {
		//pagina: functie
		"intro": "intro",
		"tutorial": "tutorial",
		"energie": "energie",
		"humeur": "humeur",
		"hygiene": "hygiene",
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
	energie: function(){
		//this.empty();
		this.energie = new EnergieView();
		$('#bodywrapper').append(this.energie.render().el);
		this.energie.renderInteraction();
	},
	humeur: function(){
		//this.empty();
		this.humeur = new HumeurView();
		$('#bodywrapper').append(this.humeur.render().el);
		this.humeur.renderInteraction();
	},
	hygiene: function(){
		//this.empty();
		this.hygiene = new HygieneView();
		$('#bodywrapper').append(this.hygiene.render().el);
		this.hygiene.renderInteraction();
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