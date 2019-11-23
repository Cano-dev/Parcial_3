const express = require('express');
const router = express.Router();

const products = [
    {
        masa: "Arroz",
        precio: 0.50,
        especialidad: "Revueltas",
        tamanio: "Grande"
    },
    {
        masa: "Maiz",
        precio: 1.00,
        especialidad: "Loca",
        tamanio: "Grande"
    }
]

router.get('/', function(req, res){
    res.render("products", { products });
});

module.exports = router;

