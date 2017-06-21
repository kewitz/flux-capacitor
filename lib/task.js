const fs = require('fs');

const PATH = './.flux.json'

let tasks
if (fs.existsSync(PATH)) tasks = JSON.parse(fs.readFileSync(PATH))
else tasks = []

const create = (args) =>{
  tasks.push(Object.assign({dateCreated: new Date(), dateFinished: null, title: 'New Title', body: 'New Body'}, args))
  return tasks
}
const save = (callback) =>
  fs.writeFile(PATH, JSON.stringify(tasks), callback)
  
module.exports = {
  create, 
  save,
}

