Ext.define('Poi.view.Main', {
	extend: 'Ext.navigation.View',
	xtype:'main',
	requires: [
		'Poi.view.Info',
		'Poi.view.Map',
		'Poi.view.List',
		'Poi.view.Detail',
		'Poi.view.MapOneMarker'
	],
	config: {
		items: [{
		    xtype: 'mapCard'
		}],
		navigationBar: {
		    items: [
			{
			    xtype: 'button',
			    text: 'Info',
			    align: 'right',
				go:'infoCard',
				cardTitle:'Info'
			},
			{
			    xtype: 'button',
				id:'listOfEvents',
			    text: 'List of Events',
			    align: 'left',
				go:'listCard',
				cardTitle:'List Of Events'
				
			}

		    ]//,
		//	 docked: 'bottom'
		}

	}
});
