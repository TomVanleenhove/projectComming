var steps = require('../../../_hbs/steps.hbs');
var Sunset = require('./SunsetView.js');
var ImageInput = require("../helpers/ImageInput.js");
var KandidaatCollection = require('../collections/KandidaatCollection.js');

var TutorialView = Backbone.View.extend({

	tagName: "article",
	id: "containerbig2",
	template: steps,
	
	events: {
		'click #scrollto1': 'scroll',
		'click #scrollto2': 'scroll',
		'click #scrollto3': 'scroll',
		'click #scrollto4': 'scroll',
		'click #scrollto5': 'scroll',
		'click #scrollto6': 'scroll',
		'click #scrollto7': 'scroll',
		'click #cLocation': 'fillWithCurrentL'
	},
	initialize: function(){
		this.collection = new KandidaatCollection();
		this.listenTo(	this.collection, 'sync', this.kandidaatToegevoeg);
		this.collection.fetch();
		this.kandidate = {naam:null, adres:null, geslacht:null, groep_id:null, image:null}
	},
	kandidaatToegevoeg: function(something){
		console.log("kandidaat toegevoegd");
	},
	removeSomething: function(something){
		setInterval(function(){something.remove()}, 1000);
	},
	fillWithCurrentL: function(e){
		e.preventDefault();
		if(navigator.geolocation){
       		navigator.geolocation.getCurrentPosition(this.foundLocation, this.errorLocation, {enableHighAccuracy:true,maximumAge:600000});
    	} else { 
       		$(".txtAdres").val("location word niet ondersteund");
    	}
	},
	foundLocation: function(position){
		var geocoder = new google.maps.Geocoder();
		var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		geocoder.geocode({'latLng': latlng}, function(results, status) {
	      if (status == google.maps.GeocoderStatus.OK) {
	        console.log(results);
	        var straat = results[0].address_components[1].long_name;
			var huisnummer = results[0].address_components[0].long_name;
			var gemeente = results[0].address_components[2].long_name;
			var completeString = straat + " " + huisnummer + " " + gemeente;
	        $(".txtAdres").val(completeString);
	      }else{
	        console.log("Geocoder failed due to: " + status);
	      }
	    });
	},
	errorLocation: function(error){
		console.log(error);
	},
	scroll: function(e){
		e.preventDefault();
		switch(e.currentTarget.id.slice(-1)){
	    	case "2":
	    		if($(".txtnaam").val().length === 0 || $('input[name=gender]:checked').val() === undefined){
	    			return
	    		}else{
	    			console.log('niet djensen');
	    			this.kandidate.naam = $(".txtnaam").val();
	    			this.kandidate.geslacht = $('input[name=gender]:checked').val();
	    		}
		        break;
		    case "4":
		    	if($(".txtAdres").val().length === 0){
	    			return
	    		}else{
	    			this.kandidate.adres = $(".txtAdres").val();
	    		}
		        break;
		    case "6":
		    new ImageInput();
		        break;
		    case "7":
		    	if($(".addfoto").val() === ''){
	    			return
	    		}else{
	    			console.log('niet djensen');
	    			var ext = $('.addfoto').val().split('.').pop().toLowerCase();
					if($.inArray(ext, ['png','jpg','jpeg']) == -1){
						console.log("verkeerde file type");
					    return
					}
	    			this.kandidate.image = this.kandidate.naam + new Date().getTime().toString() +"." + ext;
	    			console.log(this.kandidate.image);
	    			this.kandidate.geslacht = $('input[name=gender]:checked').val();
	    		}
	   			this.addKandidate();
		        break;
		}
		this.sunset.changeStep(e.currentTarget.id.slice(-1));
		$(".scrollcontainer").addClass("movebitch" + e.currentTarget.id.slice(-1));
	},
	addKandidate: function(){
		this.collection.create({
			naam: this.kandidate.naam,
			adres: this.kandidate.adres,
			geslacht: this.kandidate.geslacht,
			groep_id: 0,
			image: this.kandidate.image,
		});
	},
	renderSunset: function(){
		this.sunset = new Sunset();
		$('#containerbig2').prepend(this.sunset.render().el);
	},
	render: function(){
		this.$el.html(this.template());
		return this;
	}

});

module.exports = TutorialView;