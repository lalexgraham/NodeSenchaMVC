Ext.define("Poi.model.Poi", {
	extend: "Ext.data.Model",
	config: {
		fields: [
		 {name: "MarkerID", type: "int"},
	       	 {name: "title", type: "string"},
	 	 {name: "image", type: "string"},
	 	 {name: "description", type: "string"}
		]	

	}
});


