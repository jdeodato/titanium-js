Titanium.Model = Titanium.Model || Backbone.Model.extend({
	getID: function(){
		return this.get('id');
	},

	reset: function(){
		this.clear().setDefaults();
		return this;
	}

});