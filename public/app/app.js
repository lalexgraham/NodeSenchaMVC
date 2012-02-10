Ext.regApplication({
    name: 'app',
    launch: function() {
        this.launched = true;
        this.mainLaunch();
    },
    mainLaunch: function() {
        this.views.viewport = new this.views.Viewport();
	console.log('launched');
    }
});

