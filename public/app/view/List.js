Ext.define('Poi.view.List', {
    extend: 'Ext.List',
    xtype: 'listCard',
    requires: ['Poi.store.Pois'],    
    config: {
        title: 'List Title',
        itemTpl: '{title}',
        store: 'poiStore',
        onItemDisclosure: true
    }
});



