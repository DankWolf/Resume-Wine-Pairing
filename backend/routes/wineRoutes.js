const express = require('express')
const router = express.Router()
const { getWine, setWine, updateWine, deleteWine } = require('../controllers/wineController')


router.get('/:flavor', getWine, (req, res) => {
    console.log("res.locals", res.locals.pairing);
    res.status(200).json(res.locals.pairing)
});

router.post('/:flavor', setWine, (req, res) => {
    res.status(200).json(wine)
});

router.put('/update', updateWine, (req, res) => {
    res.status(200).json(wine)
});


router.delete('/delete', deleteWine, (req, res) => {
    res.status(200).json({message: `Deleted ${wine}` })
});


module.exports = router