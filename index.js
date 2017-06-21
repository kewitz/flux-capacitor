const task = require('./lib/task.js')

const new_task = (argv) => {
  const title = [argv.name, ... argv._].join(" ")
  var task_op = task.create({ title })
  console.log(task_op)
  }

require('yargs')
  .usage('$0 <cmd> [args]')
  .command('n [name]', 'Create new Task', {}, new_task)
  .help()
  .argv

module.exports = { new_task }