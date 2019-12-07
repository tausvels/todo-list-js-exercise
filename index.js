console.clear();
// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const newTask = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    //METHODS OF THE TASK OBJECT

    logTaskState: function () {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markComplete: function() {
      this.complete = true;
    }
  }
  return task;
}
/*
// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(taskIndex) {
  taskComplete[taskIndex] = true;
}
*/
// Print the state of a task to the console in a nice readable way
function logTaskState(task) {
  console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
}
function complete (task){
  task.complete = true;
}

// DRIVER CODE BELOW

const task1 = newTask("Shopping", "Weekly shopping at Walmart.");
const task2 = newTask("Coding", "Finish Lighthouse Lab's core material.");
const task = [task1, task2];


task1.logTaskState();
task2.logTaskState();
task1.markComplete();
task1.logTaskState();




/*
newTask("Clean Cat Litter"); // task 0
newTask("Do Laundry"); // task 1

logTaskState(0); // Clean Cat Litter has not been completed
completeTask(0);
logTaskState(0); // Clean Cat Litter has been completed
*/