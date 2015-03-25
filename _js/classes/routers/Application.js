
var HomeView = require('../views/HomeView.js');

var Application = Backbone.Router.extend({


	routes: {
		//pagina: functie
		"home": "home",
		"*actions": "default"
	},

	empty: function(){
		//container clearen
		$('.container').empty();
	},

	home: function(){
		this.empty();
		this.home = new HomeView();
		$('.container').append(this.home.render().el);
	},

	default: function(){
		//this = router
		//trigger om overview functie uit te voeren. eerste argument gaat enkel url wijzigen.
		//tweede moet de functie oproepen
		this.navigate("home", {trigger: true});
		
	},

});

module.exports = Application;