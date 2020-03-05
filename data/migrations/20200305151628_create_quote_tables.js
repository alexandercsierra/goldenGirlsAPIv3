
exports.up = function(knex) {
    return knex.schema.createTable('episodes', tbl=>{
        tbl.increments();
        tbl.string('episode_name').notNullable().unique().index();
        tbl.integer('season_number').index();
    })
    
    .createTable('quotes', tbl=>{
        tbl.increments();
        tbl.string('who', 256).notNullable().index();
        tbl.string('quote').notNullable().unique().index();
        
        //foreign key
        tbl.integer('episode_id')
            .unsigned()
            .references('id')
            .inTable('episodes')
            .notNullable()
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    })
    

    

};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('quotes')
    .dropTableIfExists('episodes')

};
