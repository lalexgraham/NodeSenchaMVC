Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'Myapp',
    
    views: [
        'Viewport',
        'Welcomescreen',
        'Map'
    ],
controllers: [
'Map'
],

    launch: function(){
        Ext.create('Myapp.view.Viewport');
    }    
});
