const router = require('express').Router()
const Resource = require('./model')


router.get('/', async(req, res, next) => {
    try{
        const resource = await Resource.get()
        res.status(200).json(resource)
    }catch(err){
        next(err)
    }
})

router.post('/', async(req, res, next) => {
    try{
        const resource = req.body
        const newResource = await Resource.add(resource)
        res.status(201).json(newResource)
    }catch(err){
        next(err)
    }
})


router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'something went wrong in Resources',
        message: err.message
    })
})

module.exports = router