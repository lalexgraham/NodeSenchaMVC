Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
	name: 'Myapp',
	views: [
        	'Viewport',
        	'WelcomeScreen',
        	'Map',
		'MarkerList'
	],
	controllers: [
		'Marker'
	],
	models:[
		'Marker'
	],
	stores:[
		'Marker'
	],
	launch: function(){
       	 Ext.create('Myapp.view.Viewport');
    	}    
});
