//@desc   Get wine
//@route  GET /api/goals
//@access Private

const Goal = require('../models/goalModel')

const getWine = async (req, res, next) => {
    console.log('getWine is running');
    const search = req.body;
    Goal.Wine.find(search)
      .then(wine => {
        res.locals.pairing = wine.text
    //     return next();
    //   })
    //   .catch(err => {
    //     return next(err);
    //   });
        console.log("???", wine)
    return res.status(200).json(res.locals.pairing)}
    )
      .catch(err => {
        return next(err);
      })
}

//@desc   set wine
//@route  Post /api/goals
//@access Private

const setWine = (req, res, next) => {
    console.log('setWine is running');
    Goal.Wine.create({
        flavor: req.body.flavor,
        text: req.body.text
    })
      .then(wine => {
    return res.status(200).json(wine)}
    )
      .catch(err => {
        return next(err);
      })

}

//@desc   Update wine
//@route  PUT /api/goals/:id
//@access Private

const updateWine = (req, res) => {
    //req.body vs req.params - through web submission
    console.log('updateWine is running')
    Goal.Wine.findOneAndUpdate(req.body.flavor, {text: req.body.text}, {upsert: true, new: true})
        .then(wine => {
            return res.status(200).json(wine);
        })
        .catch(err => {
            return next(err);
        })
}

//@desc   Delete goals
//@route  DELETE /api/goals/:id
//@access Private

const deleteWine = (req, res) => {
    console.log('deletWine is running')
    Goal.Wine.findOneAndDelete(req.body.flavor)
        .then(wine => {
            return res.status(200).json({message: `Deleted ${wine}` })
        })
        .catch(err => {
            return next(err);
        })
}

module.exports = {
    getWine,
    setWine,
    updateWine,
    deleteWine,
}