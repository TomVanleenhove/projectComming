var KandidaatCollection = require('../collections/KandidaatCollection.js');
var KandidaatView = require('./KandidaatView.js');
var template = require('../../../_hbs/home.hbs');

var HomeView = Backbone.View.extend({


	template: template,
	
	events: {
		'click .tweet': 'addKandidaat'
	},

	addKandidaat: function(e){
		e.preventDefault();

		

		this.collection.create({
     		 text: "test"
		});

	
	},

	initialize: function(){
		this.collection = new KandidaatCollection();
		this.listenTo(	this.collection, 'sync', this.renderKandidaten);
		this.collection.fetch();
	},

	renderKandidaten: function(){
		this.$tweets.empty();
		this.collection.sort();
		this.collection.forEach(this.renderKandidaat, this);
	},

	renderKandidaat: function(model){
		var view = new KandidaatView({
			model: model
		});

		this.$tweets.append(view.render().el);
	},

	render: function(){
		this.$el.html(this.template());
		this.$tweets = this.$el.find('.tweets');

		return this;

	}

});

module.exports = HomeView;