Ext.define('Poi.view.Main', {
	extend: 'Ext.navigation.View',
	xtype:'main',
	requires: [
		'Poi.view.Info',
		'Poi.view.Map',
		'Poi.view.List',
		'Poi.view.Detail'
	],
	config: {
		items: [{
		    xtype: 'mapCard'
		}],
		navigationBar: {
		    items: [
			{
			    xtype: 'button',
			    text: 'info',
			    align: 'right',
				go:'infoCard'
			}
		    ]
		}

	}
});
