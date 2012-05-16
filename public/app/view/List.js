Ext.define('Poi.view.List', {
    extend: 'Ext.List',
    xtype: 'listCard',
    requires: ['Poi.store.Pois'],    
    config: {
        title: 'List Title',
        itemTpl: '{title}',

        store: 'poiStore',
  grouped: true,
	indexBar: true,
        onItemDisclosure: true,
	  items: [
        {
            xtype: 'fieldset',
            docked: 'top',
            items: [
                {
                    xtype: 'searchfield',
                    label: 'Find',
                    name: 'query'
                }
            ]
        }
    ]
    }
});



