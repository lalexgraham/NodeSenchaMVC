var latlng = new google.maps.LatLng(52.477527, -1.898789);

Ext.define('Myapp.view.MyMap',{
	extend: 'Ext.Map',
	xtype: 'myMap',
	config : {
		mapOptions: {
		zoom: 15,
		center: latlng
		}
	}
});

