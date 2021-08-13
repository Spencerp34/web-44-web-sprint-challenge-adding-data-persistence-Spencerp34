const db = require('../../data/dbConfig')

async function get(){
    const rows = await db('tasks as t')
        .leftJoin('projects as p', 'p.project_id', 't.project_id')
        .select('t.*', 'p.project_name', 'p.project_description')
        .orderBy('task_id')
    const tasks = rows.map(row => {
        const formattedData = {
            task_id: row.task_id,
            task_description: row.task_description,
            task_completed: (row.task_completed === null || row.task_completed === 0 ? false : true),
            task_notes: row.task_notes,
            project_name: row.project_name,
            project_description: row.project_description
        }
        return formattedData
    })
    

    return tasks
}

async function add(task){
    await db('tasks').insert(task)

    const newest = await get()
    const id = newest[newest.length -1]


    const formattedData = {
        task_id: id.task_id,
        task_description: id.task_description,
        task_notes: id.task_notes,
        task_completed: id.task_completed,
        project_id: id.project_id
    }

    return formattedData
}

module.exports = {
    get,
    add
}