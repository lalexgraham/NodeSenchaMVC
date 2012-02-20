var latlng = new google.maps.LatLng(52.4799, -1.9042);

app.controllers.map = new Ext.Controller({

	map_rendered: function(options) {
		
		var marker = new google.maps.Marker({
		position: latlng,
		      map: options.map,
		      title:"Hello World!"
		});
	}



});
