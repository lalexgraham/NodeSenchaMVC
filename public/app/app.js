Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'Myapp',
    
    views: [
        'Viewport',
        'Welcomescreen',
        'MyMap'
    ],

    launch: function(){
        Ext.create('Myapp.view.Viewport');
    }    
});
