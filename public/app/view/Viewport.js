Ext.define('app.view.Viewport', {
    extend: 'Ext.Panel',
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
    initComponent: function() {
        //put instances of cards into app.views namespace
        Ext.apply(app.views, {
	//map: new app.views.Map()
          //  markersList: new app.views.MarkersList()
		 
        });
        //put instances of cards into viewport
        Ext.apply(this, {
            items: [
	      //	app.views.map
              // app.views.markersList

            ]
        });
        app.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});
