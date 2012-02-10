app.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
    initComponent: function() {
        //put instances of cards into app.views namespace
        Ext.apply(app.views, {
            markersList: new app.views.MarkersList()
        });
        //put instances of cards into viewport
        Ext.apply(this, {
            items: [
                app.views.markersList
            ]
        });
        app.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});
