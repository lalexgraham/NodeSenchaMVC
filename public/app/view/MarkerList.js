//an example just to check that the markers can be read from the store - this is left in for reference
Ext.define('Myapp.view.MarkerList', {
	extend: 'Ext.Panel',
	xtype: 'markerList', 
	initialize: function(){
			// ensuring the store is loaded before the list is rendered
			//maybe this isn't required as a list will not render before store is loaded automatically
			var myStore = Ext.getStore('markerStore');
			myStore.load({
			    callback: function(records, operation, success) {
				// the operation object contains all of the details of the load operation
				console.log(records);
			    },
			    scope: this
			});
	},
	config: {
		layout: 'fit',
		    items: [{
			xtype: 'list',
			store: 'markerStore',
			itemTpl: '{title}'
		    }]
		   
		
	}
});
