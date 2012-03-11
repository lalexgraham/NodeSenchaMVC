Ext.define('Myapp.controller.Marker', {
    extend: 'Ext.app.Controller',
	init: function() {
       		var myStore = Ext.getStore('markerStore');
	},
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
		var myStore = Ext.getStore('markerStore');
		//console.debug(myStore);
		var map = this.getMap();
		//console.debug(map);
		myStore.load({
		    callback: function(records, operation, success) {
			//	console.log(records);
				myStore.each(function(item){
				 var lat = item.get('lat');
		                 var long = item.get('long');
		                 var position = new google.maps.LatLng(lat, long); 
			//	console.log(position);
				
		                 var marker = new google.maps.Marker({
		                      position: position,
		                      title : item.get('title'),
		                      map: map._map
				   });
				 });
			}
		});
	}
	
	   
});
