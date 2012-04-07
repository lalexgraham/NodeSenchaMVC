Ext.define("Poi.store.Markers", {
	extend: "Ext.data.Store",
	config: {
		storeId: 'markerStore',
		proxy: {
			model: "Poi.model.Marker",
        		type: 'ajax',
        		url: '/markers',
			reader: {
			    type: 'json',
			    rootProperty: 'data',
			    successProperty: 'success'
			}
  	 	}
	}
});
