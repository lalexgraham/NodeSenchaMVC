app.views.MarkersList = Ext.extend(Ext.Panel, {
    dockedItems: [{
        xtype: 'toolbar',
        title: 'Markers'
    }],
    layout: 'fit',
    items: [{
        xtype: 'list',
        store: app.stores.Markers,
        itemTpl: '{title}'
    }],
    initComponent: function() {
        app.stores.Markers.load();
        app.views.MarkersList.superclass.initComponent.apply(this, arguments);
    }
});
