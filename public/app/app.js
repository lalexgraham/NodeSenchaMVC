Ext.application({
    name: 'app',
    views: ['Viewport'],
    launch: function() {
        Ext.create('Ext.Panel', {
            fullscreen: true,
            html: 'Hello World'
        });
    }
});

