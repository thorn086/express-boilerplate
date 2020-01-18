const FoldersService = {
    getAllFolders(knex) {
      return knex.select('*').from('folders')
    },
    
    addFolder(knex, newFolder) {
      return knex
        .insert(newFolder)
        .into('folders')
        .returning('*')
        .then(rows => {
          return rows[0]
        })
    },
    
    getById(knex, id) {
      return knex('folders')
        .select('*')
        .where('id', id)
        .first()
    },
  
    deleteFolder(knex, id) {
      return knex('folders')
        .where('id', id)
        .delete()
    },
  
    updateFolder(knex, id, newFolderFields) {
      return knex('folders')
      .where('id', id)
      .update(newFolderFields)
    }
  }
  
  module.exports = FoldersService