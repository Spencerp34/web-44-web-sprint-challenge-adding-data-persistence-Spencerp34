const router = require('express').Router()
const Project = require('./model')


router.get('/', async(req, res, next) => {
    try{
        const projects = await Project.get()
        res.status(200).json(projects)
    }catch(err){
        next(err)
    }
})

router.post('/', async(req, res, next) => {
    try{
        const project = req.body
        const newProject = await Project.add(project)
        res.status(201).json(newProject)
    }catch(err){
        next(err)
    }
})


router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'something went wrong in Projects',
        message: err.message
    })
})

module.exports = router