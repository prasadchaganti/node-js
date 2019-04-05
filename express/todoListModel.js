var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mysql.model('Tasks', TaskSchema);


module.exports = function(app) {
    var todoList = require('../controllers/todoListController');
  
    // todoList Routes
    app.route('/tasks')
      .get(todoList.list_all_tasks)
      .post(todoList.create_a_task);
  
  
    app.route('/tasks/:taskId')
      .get(todoList.read_a_task)
      .put(todoList.update_a_task)
      .delete(todoList.delete_a_task);
  };