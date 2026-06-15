import { use, useState } from "react"

function TaskButton({text, handleClick}) {
 return <button className = "button is-primary" onClick={handleClick}>{text}</button>
}

function TaskModal({handleClose}) {
  return (

    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-content">
        <input  className="input is-large" type="text" placeholder="Text input" />
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={handleClose}></button>
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
         {showModal && <TaskModal handleClose={closeModal}/>}
      <div className="mainFunctionality">
        <h1 className="title is-1 pl-4 pt-4">FlowState</h1>
        <p className="subtitle pl-4 pt-4"> A student's flowchart for tasks</p>
        <div className="buttons  mt-4 ml-4">
        <TaskButton text="Create Task" handleClick={handleShowModal}/>

          <button className="button is-warning">Change Mode</button>
          <button className="button is-success">
            Read Docs
          </button>
        </div>
     
      </div>
    </>
  )
}

export default App
