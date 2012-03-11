Ext.define('Myapp.view.Viewport', {
    extend: 'Ext.tab.Panel',
        
    config: {
        fullscreen: true,
        
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },

        defaults: {
            scrollable: true
        },

        items: [
            {
                title: 'home',
                iconCls: 'home',
                xtype : 'welcomeScreen'                 
            },
            {
                title: 'map',
                iconCls: 'maps',
                xtype: 'MVCmap'
            },
            {
                title: 'marker list',
                iconCls: 'action',
                xtype: 'markerList'
            }
        ]
    }
});
