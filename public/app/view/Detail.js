Ext.define('Poi.view.Detail', {
    extend: 'Ext.Panel',
    xtype: 'detailCard',
    config: {
        title: 'Details',
        styleHtmlContent: true,
        scrollable: 'vertical',
        tpl: [
            'This is some info about {title}!'
        ]
    }
});
