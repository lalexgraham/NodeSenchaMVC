Ext.define('Poi.controller.Main', {
    	extend: 'Ext.app.Controller',
	config: {
		refs: {
			main: 'main',
			map: 'mapCard',
			mapOneMarker: 'mapOneMarkerCard',
			searchPois: 'searchfield',
			listOfEventsButton: 'button[go=listCard]',
			infoButton: 'button[go=infoCard]'
		},
		control: {
			main : {
				pop: 'popView',
				push: 'pushView'
			},
			'listCard': {
		        	disclose: 'showDetail'
			},
			map: {
				maprender: 'putMarkers'
			},
			mapOneMarker: {
				maprender: 'putMarker'
			},
			'button[go]': {
				tap: function(btn) {
					
					if (btn.go == 'infoCard') {
						this.hideInfoButton();
					}else {
						// flush the poi store here
						// as we may be showing a list of all Pois
						// for the listCard	
						
						var poiStore = Ext.getStore('poiStore');
						poiStore.getProxy().setUrl('/pois');
						poiStore.load();
					}
					
					this.getMain().push({
					    xtype: btn.go,
					    title: btn.cardTitle
					})
					
				}
            		},
			'searchPois':{
				keyup: 'filterPoiList'
			}
		} 
	},
	showDetail: function(list, record) {
		var app = this;
		var markerStore = Ext.getStore('markerStore');
		var markerRecord;
		markerStore.clearFilter();
		markerStore.load({
			callback: function(records, operation, success) {
			markerRecord = markerStore.getAt(markerStore.findExact('MarkerID', record.data['MarkerID'])).getData();
			Poi.app.setSelectedMarker(markerRecord.MarkerID,markerRecord.title);

			app.getMain().push({
				xtype: 'detailCard',
				data: record.data,
				title: record.data['title'],
				tpl: [
				    record.data['description'] + '. This is located at '+Poi.app.selectedMarker['title']
				],
				items: [{
					xtype: 'button',
					text: 'Show me where this is',
					align: 'right',
					docked:'bottom',
					style: 'background: green',
					go:'mapOneMarkerCard',
					cardTitle: Poi.app.selectedMarker['title']
				}]
			})

		}});
	},	
	putMarkers: function() {

		var image = new google.maps.MarkerImage(
		'images/markers/artsfest.png',
		new google.maps.Size(32, 31),
		new google.maps.Point(0, 0),
		new google.maps.Point(16, 31)
		);

		/*var shadow = new google.maps.MarkerImage(
		'images/markers/sight.png',
		new google.maps.Size(64, 52),
		new google.maps.Point(0, 0),
		new google.maps.Point(-5, 42)
		);*/

		var markerStore = Ext.getStore('markerStore');
		var poiStore = Ext.getStore('poiStore');
		var map = this.getMap();
		var main = this.getMain(); 

		markerStore.clearFilter();
		markerStore.load({
			callback: function(records, operation, success) {
				markerStore.each(function(item){
					var lat = item.get('lat');
			         	var long = item.get('long');
			         	var position = new google.maps.LatLng(lat, long); 
				        var marker = new google.maps.Marker({
			             		position: position,
			              		title : item.get('title'),
			              		map: map.getMap(),
						icon: image
				  	});
					
					google.maps.event.addListener(marker, 'mousedown', function() {
						poiStore.getProxy().setUrl('/pois/'+item.get('MarkerID'));

						poiStore.load();
						
						main.push({
						    xtype: 'listCard',
						    title:item.get('title')
						});
						
					})
				 });
			}
		});
	},
	//renders just one marker for the "show me where"
	putMarker: function() {

		var image = new google.maps.MarkerImage(
		'images/markers/artsfest.png',
		new google.maps.Size(32, 31),
		new google.maps.Point(0, 0),
		new google.maps.Point(16, 31)
		);

		var markerStore = Ext.getStore('markerStore');
		var poiStore = Ext.getStore('poiStore');
		var map = this.getMapOneMarker();
		var markerRecord;

		markerStore.clearFilter();
		markerStore.load({
			callback: function(records, operation, success) {
		
			markerRecord = markerStore.getAt(markerStore.findExact('MarkerID', Poi.app.selectedMarker['id'])).getData();
						
			         	var position = new google.maps.LatLng(markerRecord.lat, markerRecord.long); 
				
				        var marker = new google.maps.Marker({
			             		position: position,
			              		title : markerRecord.title,
			              		map: map.getMap(),
						icon: image
				  	});

						/* don't allow to click the marker
					google.maps.event.addListener(marker, 'mousedown', function() {
						//Poi.app.setSelectedMarker(item.get('MarkerID'),item.get('title'));

						poiStore.getProxy().setUrl('/pois/'+Poi.app.selectedMarker['id']);

						poiStore.load();
						
						main.push({
						    xtype: 'listCard',
						    title:Poi.app.selectedMarker['title']
						})
				 	});*/

				

		}});

	},
	filterPoiList: function(field) {
		var store = Ext.getStore('poiStore');
		store.clearFilter();
		store.filter('title', field.getValue());
	},
	popView: function(view, mix,eOpts) {
		console.log('view count: '+ view.getItems().length);
		if (view.getItems().length == 2) {
			this.showListOfEventsButton();
		} 
		this.showInfoButton();
	},
	pushView: function(view, mix,eOpts) {
		console.log('view count: '+ view.getItems().length);
		if (view.getItems().length > 2) {
			this.hideListOfEventsButton();
		}
	},
	hideListOfEventsButton: function(){
		var listOfEventsButton = this.getListOfEventsButton();
		if(listOfEventsButton.isHidden()){
		    return;
		}
		listOfEventsButton.hide();
	},
	showListOfEventsButton: function(){
		var listOfEventsButton = this.getListOfEventsButton();
		listOfEventsButton.show();
	},
	hideInfoButton: function(){
		var infoButton = this.getInfoButton();
		if(infoButton.isHidden()){
		    return;
		}
		infoButton.hide();
	},
	showInfoButton: function(){
		var infoButton = this.getInfoButton();
		infoButton.show();
	}


});
