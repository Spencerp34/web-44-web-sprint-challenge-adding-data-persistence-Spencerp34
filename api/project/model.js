const db = require('../../data/dbConfig')

async function getProjects(){
    const rows = await db('projects as p')
        .leftJoin('tasks as t', 'p.project_id', 't.project_id')
        .leftJoin('project_resources as pr', 't.task_id', 'pr.task_id')
        .leftJoin('resources as r', 'pr.resource_id', 'r.resource_id')
        .select('p.project_id',  't.task_id', 'p.project_name', 'p.project_description', 'p.project_completed', 'r.resource_name', 'r.resource_description', 't.task_description', 't.task_notes', 't.task_completed')
        .orderBy(['p.project_id', 't.task_id']) //Maybe wrong syntax.
        .groupBy('p.project_id')


    const projects = rows.map(row => {
        const formattedData = {
            project_id: row.project_id,
            project_name: row.project_name,
            project_description: row.project_description,
            project_completed: (row.project_completed === null ||  row.project_completed=== 0 ? false : true)
        }
        return formattedData
    })
    

    return projects
}

async function addProject(project){
    await db('projects').insert(project)

    const newest = await getProjects()
    const id = newest[newest.length -1]

    // console.log(id)

    const formattedData = {
        project_id: id.project_id,
        project_name: id.project_name,
        project_description: id.project_description,
        project_completed: id.project_completed
    }

    // console.log(formattedData)
    return formattedData
}

module.exports = {
    getProjects,
    addProject
}