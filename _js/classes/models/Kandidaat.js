var Kandidaat = Backbone.Model.extend({

	defaults: {
		voornaam: "voornaam",
		achternaam: "achternaam",
		adres: "adres",
		groep_id: "1",
		image: "image",
	},

	urlRoot: '/Maart_2015_Major_IV/projectComming/api/kandidaten',

	
	sync: function(method, model, options) {
		if(model.methodUrl && model.methodUrl(method.toLowerCase())) {
			options = options || {};
			options.url = model.methodUrl(method.toLowerCase());
		}
    Backbone.Collection.prototype.sync.apply(this, arguments);
	}

});

module.exports = Kandidaat;