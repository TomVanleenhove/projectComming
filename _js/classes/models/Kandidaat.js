var Kandidaat = Backbone.Model.extend({

	defaults: {
		naam: "voornaam",
		adres: "adres",
		geslacht: "geslacht",
		groep_id: "1",
		image: "image",
	},

	urlRoot: '/devine3/major4/projectComming/api/kandidaten',

	
	sync: function(method, model, options) {
		if(model.methodUrl && model.methodUrl(method.toLowerCase())) {
			options = options || {};
			options.url = model.methodUrl(method.toLowerCase());
		}
    Backbone.Collection.prototype.sync.apply(this, arguments);
	}

});

module.exports = Kandidaat;