Ext.define("Myapp.model.Marker", {
	extend: "Ext.data.Model",
	config: {
		fields: [
		 {name: "MarkerID", type: "int"},
	       	 {name: "title", type: "string"},
	 	 {name: "long", type: "string"},
	 	 {name: "lat", type: "string"},
	 	 {name: "icon", type: "string"},
	 	 {name: "description", type: "string"}
		]	

	}
});

