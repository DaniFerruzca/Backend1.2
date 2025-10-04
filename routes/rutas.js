import {Router} from "express"
const router = Router()

var artista = ["Bethoven", "Van Gog", "Mozart", "Picasso"]

router.get("/", function(req, res){
	res.render("Home", {artista})
})

router.get("/contactanos", function(req, res){
	res.render("contactanos")
})
router.get("/info/:c", function (req, res){
	var c = req.params.c
	console.log(c)
	res.render("info", {c})
})
router.post("/contactanos", function(req, res){
		var nombre = req.body.nombre
		var edad = req.body.edad
		console.log("nombre: " +nombre+ "Edad:" +edad)
		res.render("respuesta",{nombre, edad})
})

export default router