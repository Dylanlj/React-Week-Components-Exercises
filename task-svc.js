/* eslint-disable */
var taskSvc = (function(){
  var tasks = [
    { taskName: 'Walk Dog', finished: true, id: rando() },
    { taskName: 'Buy Bread', finished: false, id: rando() },
  ];

  return {
    // () => Promise<Tasks[]>
    getTasks: function(){ 
      return delay()
        .then(function(){
          return tasks.map(function(task){
            return Object.assign({}, task);
          });
        });
    },

    // (taskName:String) => Promise<Task>
    addTask: function(taskName){
      return delay()
        .then(function(){
          var newTask = {
            taskName: taskName,
            finished: false,
            id: rando(),
          };
          tasks.push(newTask);
          return Object.assign({}, newTask);
        });
    },
    // (id:String) => Promise<Task>
    toggleTask: function(id){ 
      return delay()
        .then(function(){
          const foundTask = tasks.find(function(t){
            return t.id === id;
          });
          if (foundTask !== undefined) {
            foundTask.finished = !foundTask.finished;
          }
          return Object.assign({}, foundTask);
        });
    },
  };

}());
