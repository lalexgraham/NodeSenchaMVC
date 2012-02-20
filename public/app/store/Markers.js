app.stores.Markers = new Ext.data.Store({
            model  : 'app.models.Marker',
             proxy: {
        type: 'ajax',
        url: '/markers',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }/*,  
	listeners: {
                'load': function () {
                        this.each(function(r) {
								thisMarker = [];
								
								thisMarker['id'] = r.data['id'];
                               
								markerInfos.push(thisMarker);
								
								  
                        });
		}
		} */
	});


  autoLoad:true
});

