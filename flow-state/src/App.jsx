import { use, useState } from "react";

function TaskButton({ text, handleClick }) {
  return (
    <button className="button is-primary" onClick={handleClick}>
      {text}
    </button>
  );
}

function TaskModal({
  value,
  name, // task name
  description, // task description
  handleClose,
  handleSubmit,
  onNameChange,
  onDescripChange,
  onPriorityChange,
  onTimeChange,
}) {
  let priorities = ["Urgent", "High", "Medium", "Low"];
  let times = ["30:00", "60:00", "75:00", "90:00", "120:00"];

  return (
    <>
      <div className="taskSection">
        <label className="label ml-4 ">Name</label>
        <input
          className="input ml-4"
          type="text"
          placeholder="Name of Task"
          value={value}
          onChange={onNameChange}
        />
        <label className="label ml-4">Description</label>
        <input
          className="input ml-4"
          type="text"
          placeholder="Description of Task"
          value={value}
          onChange={onDescripChange}
        />
        <label className="label ml-4">Priority</label>
        <div className="select ml-4" id="priorities">
          <select onChange={onPriorityChange}>
            <option>Priority</option>
            {priorities.map((priority, index) => {
              return <option key={index}>{priority}</option>;
            })}
          </select>
        </div>
        <label className="label ml-4">Clock</label>
        <div className="select ml-4" id="timeSelect">
          <select onChange={onTimeChange}>
            <option>Select a Time</option>
            {times.map((time, index) => {
              return <option key={index}>{time}</option>;
            })}
          </select>
        </div>
      </div>

      <button className="button is-success ml-4 mt-4" onClick={handleSubmit}>
        Save
      </button>
      <button className="button is-danger ml-4 mt-4" onClick={handleClose}>
        Cancel Task
      </button>
    </>
  );
}

function TaskCard({
  taskName,
  taskDescription,
  lengthSelected,
  priority,
}) {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">{taskName}</p>
        <button className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </header>
      <div className="card-content">
        <div className="content">
          {taskDescription}
          {priority}
          {lengthSelected}
          <br />
        </div>
      </div>
      <footer className="card-footer">
        {/* <a href="#" className="card-footer-item">Save</a> */}
        <a href="#" className="card-footer-item">
          Edit
        </a>
        <a href="#" className="card-footer-item">
          Delete
        </a>
      </footer>
    </div>
  );
}

// function DocModal() {
//   return (
//     <div className="modal is-active">
//       <div className="modal-background"></div>
//       <div className="modal-content">
//         <div className="card">
//           <div className="card-content">
//             <div className="content">
//               Say some
//             </div>
//           </div>

//         </div>
//       </div>
//       <button className="modal-close is-large" aria-label="close"></button>
//     </div>

//   )
// }

// List of Tasks
//  let taskList = [];

function App() {


  const [createTask, setCreateTask] = useState(false);
  const [task, setTask] = useState({ name: "", description: "", priority: "", time: "" });
  const [taskList, setTaskList] = useState([])
  const [key, setKey] = useState(0)

  const handleCreateTask = () => {
    setCreateTask(true);
  };

  const deleteCreateTask = () => {
    setCreateTask(false);
  };

  const updateNameField = (e) => {
    const newTask = { ...task, name: e.target.value }
    setTask(newTask)
  }

  const updateDescField = (e) => {
    const newTask = { ...task, description: e.target.value }
    setTask(newTask)
  }


  const updatePriorityField = (e) => {
    const newTask = { ...task, priority: e.target.value }
    setTask(newTask)
  }


  const updateTimeField = (e) => {
    const newTask = { ...task, time: e.target.value }
    setTask(newTask)
  }

  // For checking 
  // const submitTask = () => {
  //    taskList.push(task)
  //    console.log(task)
  //    console.log(taskList)
  // }

  

  const submitTask = () => {
    const newTask = {...task, id: crypto.randomUUID()}
    const newTasks = [...taskList, newTask]
    setTaskList(newTasks)
    console.log(newTasks)


  }


  return (
    <>
      <div className="mainFunctionality">
        <h1 className="title is-1 pl-4 pt-4">FlowState</h1>
        <p className="subtitle pl-4 pt-4"> A student's flowchart for tasks</p>
        <div className="buttons  mt-4 ml-4">
          <TaskButton text="Create Task" handleClick={handleCreateTask} />
          <button className="button is-warning">Change Mode</button>
          <button className="button is-success">Read Docs</button>
        </div>
        {/* <TaskModal /> */}
        {createTask
          &&
          <TaskModal
            onNameChange={updateNameField}
            onDescripChange={updateDescField}
            onPriorityChange={updatePriorityField}
            onTimeChange={updateTimeField}
            handleClose={deleteCreateTask}
            handleSubmit={submitTask}
          />}

        {taskList.map((task) => {
          return <TaskCard 
          key={task.id}
          taskName={task.name} 
          taskDescription={task.description} 
          lengthSelected={task.time} 
          priority={task.priority}> 
          </TaskCard>

        })}
        {/* <DocModal /> */}
      </div>
    </>
  );
}

export default App;
