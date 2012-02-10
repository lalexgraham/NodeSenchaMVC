var latlng = new google.maps.LatLng(52.4799, -1.9042);

map = new Ext.Map({
      title: 'ArtsFest 2011',
      mapOptions: {
	     zoom: 16,
		 center: latlng
      }
});

app.views.Map = Ext.extend(Ext.Panel, {
    dockedItems: [{
        xtype: 'toolbar',
        title: 'Map'
    }],
    layout: 'fit',
    items: [map]
});
