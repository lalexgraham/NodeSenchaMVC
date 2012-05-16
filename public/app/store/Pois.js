Ext.define('Poi.store.Pois', {
	extend: "Ext.data.Store",
	config: {
		storeId: 'poiStore',
		model: "Poi.model.Poi",
		  grouper : function(record) {
            return record.get('title')[0];
        },
		proxy: {
        		type: 'ajax',
        		url: '/pois',
			reader: {
			    type: 'json',
			    rootProperty: 'data',
			    successProperty: 'success'
			}
  	 	},
   		autoLoad: true
	}
});


