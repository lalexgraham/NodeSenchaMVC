// is this why the map won't center properly? : http://www.sencha.com/forum/showthread.php?182854-Ext.Map-mapOptions-don-t-work-when-passed-in-config&p=743354
Ext.define('Myapp.view.Map', {
	extend: 'Ext.Map',
	id:'MVCmap',
	xtype: 'MVCmap',
	config: {
		mapOptions: {
			disableDefaultUI: true,
			zoomControl: true,
			zoom: 10,
			center:  new google.maps.LatLng(52.477056,-1.901021)
		}/*,
		useCurrentLocation: true*/
		,listeners: {
			// render markers in the controller instead	
			/* maprender: function(comp, map) {
		            var marker = new google.maps.Marker({
		                position: new google.maps.LatLng(52.477056,-1.901021),
		                title : 'New St. Station',
		                map: map
		            });
			}*/
		}
	}
});



