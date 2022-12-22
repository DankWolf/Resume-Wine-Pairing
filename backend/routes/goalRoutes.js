const express = require('express')
const router = express.Router()
const { getWine, setWine, updateWine, deleteWine } = require('../controllers/goalController')


router.get('/', getWine, (req, res) => {
    res.status(200).json(wine)
});

router.post('/', setWine, (req, res) => {
    res.status(200).json(wine)
});

router.put('/:id', updateWine, (req, res) => {
    res.status(200).json(wine)
});


router.delete('/:id', deleteWine, (req, res) => {
    res.status(200).json({message: `Deleted ${wine}` })
});


module.exports = router