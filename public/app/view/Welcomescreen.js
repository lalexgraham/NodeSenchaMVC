Ext.define('Myapp.view.Welcomescreen', {
    extend: 'Ext.Container',
    xtype: 'welcomescreen',
        
    config: {
        defaults: {
            styleHtmlContent: true
        },
        
        items: [
            {
                xtype: 'panel',
                html: '<h2>MVC Demo with two Views, displaying a normal panel and a map through a Viewport</h2>'
            }
        ]
    }
});
