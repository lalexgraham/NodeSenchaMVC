Ext.define('Poi.store.Pois', {
	extend: "Ext.data.Store",
	config: {
		storeId: 'poiStore',
		model: "Poi.model.Poi",
		proxy: {
        		type: 'ajax',
        		url: '/pois/78',
			reader: {
			    type: 'json',
			    rootProperty: 'data',
			    successProperty: 'success'
			}
  	 	},
   		autoLoad: true
	}
});


