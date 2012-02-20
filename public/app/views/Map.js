
var latlng = new google.maps.LatLng(52.4799, -1.9042);
/*map = new Ext.Map({
      title: 'ArtsFest 2011',
      mapOptions: {
	     zoom: 16,
		 center: latlng
      }      
});*/

 

/*

function addMarker(thisMarker) {
	
	var image = new google.maps.MarkerImage('images/markers/'+thisMarker['icon']);
        var googleMarker = new google.maps.Marker({
            map: map.map,
            title: thisMarker['title'],
            position: new google.maps.LatLng(thisMarker['lat'], thisMarker['long'])
       	});	
};

var thisMarker = [];
thisMarker['id'] = 14;
thisMarker['title'] = 'test marker';
thisMarker['description'] = 'this is a test';
thisMarker['long'] = '-1.905345';
thisMarker['lat'] = '52.479278';
thisMarker['icon'] = 'artsfest.png';
thisMarker['sortable'] = true;
addMarker(thisMarker);
*/
app.views.Map = Ext.extend(Ext.Panel, {
    dockedItems: [{
        xtype: 'toolbar',
        title: 'Map'
    }],
    layout: 'fit',
items: [{
        xtype: 'map',
        id: 'map',
        mapOptions : {
            center :latlng,
            zoom : 16,
            mapTypeId : google.maps.MapTypeId.ROADMAP,
            navigationControl: true,
            navigationControlOptions: {
                style: google.maps.NavigationControlStyle.DEFAULT
            }
        },
        listeners : {
            'maprender' : function(comp, map){
                Ext.dispatch({
                    controller: app.controllers.map,
                    action: 'map_rendered',
                    map: map
                });
            }
        }
    }]

   // items: [map],
/*listeners: {
        render: function(panel) {
		 Ext.dispatch({
                    controller: app.controllers.map,
			action: 'map_rendered',
                    map: map
                });
        }
      }*/
});


