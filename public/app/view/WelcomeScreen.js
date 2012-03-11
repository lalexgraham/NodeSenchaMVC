Ext.define('Myapp.view.WelcomeScreen', {
    extend: 'Ext.Container',
    xtype: 'welcomeScreen',
        
    config: {
        defaults: {
            styleHtmlContent: true
        },
        
        items: [
            {
                xtype: 'panel',
                html: '<h2>MVC Demo with three Views, displaying a normal panel, then a map and a list dsiplaying the same data through a Viewport</h2>'
            }
        ]
    }
});
