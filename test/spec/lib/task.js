const assert = require('assert')
const Task = require('../../../lib/task.js')

describe('Task', function() {
  describe('Create', function() {
    const task = Task.create()[0]
  
    it('dateCreated', function() {
      assert.ok(task.dateCreated)
    })
    
    it('title', function() {
      assert.ok(task.title)
    })
    
    it('body', function() {
      assert.ok(task.body)
    })
  })

  describe('Save', function() {
    it('Check if file is saved', function(next){
        const save = Task.save(error => {
          assert.ok(!error)
          next()
        })
        

    })
  })
})