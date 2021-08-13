const router = require('express').Router()
const Task = require('./model')


router.get('/', async(req, res, next) => {
    try{
        const task = await Task.get()
        res.status(200).json(task)
    }catch(err){
        next(err)
    }
})

router.post('/', async(req, res, next) => {
    try{
        const task = req.body
        const newTask = await Task.add(task)
        res.status(201).json(newTask)
    }catch(err){
        next(err)
    }
})


router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'something went wrong in Tasks',
        message: err.message
    })
})

module.exports = router