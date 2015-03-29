var template = require('../../../_hbs/links.hbs');

var IntroView = Backbone.View.extend({

	tagName: "article",
	id: "introscherm",
	template: template,
	
	events: {
		'click #goToHome': 'goToHome',
		'click #goToVote1': 'goToVote1',
		'click #goToHVote2': 'goToHVote2'
	},
	goToHome: function(e){
		e.preventDefault();
		window.location.href = '#home';
	},
	goToVote1: function(e){
		e.preventDefault();
		window.location.href = '#humeur';
	},
	goToHVote2: function(e){
		e.preventDefault();
		window.location.href = '#hygiene';
	},
	render: function(){
		this.$el.html(this.template());
		return this;
	}

});

module.exports = IntroView;