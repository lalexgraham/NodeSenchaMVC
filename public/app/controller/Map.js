var latlng = new google.maps.LatLng(52.477056,-1.901021);

Ext.define('Myapp.controller.Map', {
    extend: 'Ext.app.Controller',
	config: {
		control: {
		    map: {
		        maprender: 'putMarkers'
		    }
		},

		refs: {
		    map: 'MVCmap'
		}
	 },
    putMarkers: function() {
	//console.info(this.getMap());
	var map = this.getMap();
	//console.info(map);
		var marker = new google.maps.Marker({
		position: latlng,
		      map: map._map,
		      title:"This marker was put here by the controller(!)"
		});
    }
});
