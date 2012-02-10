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
    },
  autoLoad:true
});

