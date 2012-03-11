Ext.define("Myapp.store.Marker", {
	extend: "Ext.data.Store",
	config: {
		storeId: 'markerStore',
		proxy: {
			model: "Myapp.model.Marker",
        		type: 'ajax',
        		url: '/markers',
			reader: {
			    type: 'json',
			    rootProperty: 'data',
			    successProperty: 'success'
			}
  	 	}/*,
		// not employing a listener as the Marker controller will react to load event		
		listeners: {
			load : function(){
				myStore.each(function(item){
					var lat = item.get('lat');
		                	var long = item.get('long');
		                	var position = new google.maps.LatLng(lat, long); 
			               	console.log(position);
				 });
			}
		},
		autoLoad:true*/
	}
});
