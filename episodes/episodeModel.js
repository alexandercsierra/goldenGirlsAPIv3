module.exports = {
    getAll,
    add,
    update,
    remove
}

const db = require('../data/db-config');

function getAll(){
    return db('episodes');
}

function add(episode){
    return db('episodes').insert(episode).returning('*');
}

function update(id, episode){
    return db('episodes').where({id}).update(episode).returning('*');
}

function remove(id){
    return db('episodes').where({id}).del().returning('*');
}