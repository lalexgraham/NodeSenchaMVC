var position = new google.maps.LatLng(52.477396,-1.89894);
Ext.define('Poi.view.Map', {
	extend: 'Ext.Map',
	xtype: 'mapCard',
	config: {
		useCurrentLocation: false,
		mapOptions: {
			disableDefaultUI: true,
			zoomControl: true,
			zoom: 16,
			center:  position
		},
		title: 'Map'
	}
});
