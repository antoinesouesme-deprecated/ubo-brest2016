var mongoose = require('mongoose');

var AnimationsSchema = new mongoose.Schema({
	//id_animation : {type: Number, unique: true},
	libelle: String,
	description: String,
	nom_image : String,
	place_dispo : Number,
	place_max : Number,
	heure_debut : String,
	heure_fin : String, 
	liste_options: [{type: mongoose.Schema.Types.ObjectId, ref: 'Option'}]
});

mongoose.model('Animation', AnimationsSchema);