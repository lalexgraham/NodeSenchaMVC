Ext.define('Poi.controller.Main', {
    	extend: 'Ext.app.Controller',
	config: {
		refs: {
			main: 'main',
			map: 'mapCard'
		},
		control: {
			'listCard': {
		        	disclose: 'showDetail'
			},
			/*'listCard': {
				initialize: 'showList'
			},*/
			map: {
				maprender: 'putMarker'
			},
			'button[go]': {
				tap: function(btn) {

				    this.getMain().push({
					    xtype: btn.go,
					    title: 'Info'
					})
				}
            		}
		} 
	},
	showDetail: function(list, record) {
		
	 	this.getMain().push({
		    xtype: 'detailCard',
		    data: record.data
		})

    	},
	showList: function(list) {
		list.setTitle('this does not work');
		console.log(list);
	},
	putMarker: function() {
		var markerStore = Ext.getStore('markerStore');
		var poiStore = Ext.getStore('poiStore');
		var map = this.getMap();
		var main = this.getMain(); 

		markerStore.load({
			callback: function(records, operation, success) {
		
				markerStore.each(function(item){
					var lat = item.get('lat');
			         	var long = item.get('long');
			         	var position = new google.maps.LatLng(lat, long); 
				        var marker = new google.maps.Marker({
			             		position: position,
			              		title : item.get('title'),
			              		map: map._map
				  	});
					google.maps.event.addListener(marker, 'mousedown', function() {
						Poi.app.setSelectedMarker(item.get('MarkerID'),item.get('title'));

						poiStore.getProxy().setUrl('/pois/'+Poi.app.selectedMarker['id']);

						poiStore.load();
						
						main.push({
						    xtype: 'listCard'
						})
						markerStore.load();
				 	});
				 });
			}
		});
	}

});
