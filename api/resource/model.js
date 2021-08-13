const db = require('../../data/dbConfig')

async function get(){
    const rows = await db('resources as r')
        .orderBy('resource_id')
    const projects = rows.map(row => {
        const formattedData = {
            resource_id: row.resource_id,
            resource_name: row.resource_name,
            resource_description: row.resource_description
        }
        return formattedData
    })
    

    return projects
}

async function add(resource){
    await db('resources').insert(resource)

    const newest = await get()
    const id = newest[newest.length -1]


    const formattedData = {
        resource_id: id.resource_id,
        resource_name: id.resource_name,
        resource_description: id.resource_description
    }

    return formattedData
}

module.exports = {
    get,
    add
}