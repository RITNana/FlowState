import { use, useState } from "react"

function TaskButton({ text, handleClick }) {
  return <button className="button is-primary" onClick={handleClick}>{text}</button>
}

function TaskModal({ name, value, description, clock, handleClose, handleSubmit }) {

    let priorities = ["Urgent", "High", "Medium", "Low"]
    let times = ["30:00", "60:00", "75:00", "90:00", "120:00"]



  return (

    <>
      <div className="taskSection">
        <label className="label ml-4 " >Name</label>
        <input className="input ml-4" type="text" placeholder="Name of Task" value={value}/>
        <label className="label ml-4">Description</label>
        <input className="input ml-4" type="text" placeholder="Description of Task" value={value}/>
        <label className="label ml-4">Priority</label>
        <div className="select ml-4" id="priorities">
        <select>
          <option>Priority</option>
          {priorities.map((priority, index) => {
            return <option key={index}>{priority}</option>
          })}
        </select>
        </div>
          <label className="label ml-4">Clock</label>
         <div className="select ml-4" id="timeSelect">
        <select>
          <option>Select a Time</option>
          {times.map((time, index) => {
            return <option key={index}>{time}</option>
          })}
        </select>
        </div>
      </div>

      <button className="button is-success ml-4 mt-4">Save</button>
      <button className="button is-danger ml-4 mt-4" onClick={handleClose}>Cancel Task</button>
    </>

  )
}

function TaskCard({taskName, taskValue, taskDescription, lengthSelected, priority}) {
  return (
    <div class="card">
  <header class="card-header">
    <p class="card-header-title">{taskName}</p>
    <button class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </header>
  <div class="card-content">
    <div class="content">
      {taskDescription}
      {priority}
      {lengthSelected}
      <br />
      
    </div>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item">Save</a>
    <a href="#" class="card-footer-item">Edit</a>
    <a href="#" class="card-footer-item">Delete</a>
  </footer>
</div>
  )
}

function DocModal(){
  return (
    <div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-content">
    <div className="card">
      <div className="card-content">
        <div className="content">
          Say some
        </div>
      </div>

    </div>
  </div>
  <button class="modal-close is-large" aria-label="close"></button>
</div>

  )
}
  




function App() {


  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }




  return (
    <>

      <div className="mainFunctionality">
        <h1 className="title is-1 pl-4 pt-4">FlowState</h1>
        <p className="subtitle pl-4 pt-4"> A student's flowchart for tasks</p>
        <div className="buttons  mt-4 ml-4">
          <TaskButton text="Create Task" />
          <button className="button is-warning">Change Mode</button>
          <button className="button is-success">
            Read Docs
          </button>
        </div>
      <TaskModal />
        {/* {showModal && <TaskModal handleClose={closeModal} />} */}
      <TaskCard />
      {/* <DocModal /> */}
      </div>
    </>
  )
}

export default App
