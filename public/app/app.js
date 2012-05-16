Ext.application({
	name: 'Poi',

	views: ['Main'],
	controllers:['Main'],
	stores:['Pois', 'Markers'],
	models:['Poi','Marker'],

	selectedMarker: [],

	setSelectedMarker: function(id,title) {
		this.selectedMarker['id'] = id;
		this.selectedMarker['title'] = title;
    	},

	launch: function(){
		Ext.Viewport.add({
			xclass: 'Poi.view.Main'
		});
	}  
});
