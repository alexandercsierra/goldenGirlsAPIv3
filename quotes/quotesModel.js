module.exports = {
    getAll,
    getByWho,
    getById,
    getAllRandom,
    add,
    update,
    remove
}

const db = require('../data/db-config');

function getAll(){
    return db('quotes');
}

function getByWho(who){
    return db('quotes').where({who});
}

function getById(id){
    return db('quotes').where({id});
}

function getAllRandom(who){
    let random = Math.floor(Math.random() * 4);
    const girls = ['dorothy', 'blanche', 'sophia', 'rose'];
    if(who !== 'random'){
        return db('quotes').where({who});
    } else {
        return db('quotes').where({who: girls[random]});
    }
}

function add(quote){
    return db('quotes').insert(quote).returning('*');
}

function update(id, quote){
    return db('quotes').where({id}).update(quote).returning('*');
}

function remove(id){
    return db('quotes').where({id}).del().returning('*');
}