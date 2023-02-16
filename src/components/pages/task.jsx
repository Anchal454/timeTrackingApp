import React, { useEffect, useState } from "react";
import TaskI from "./TaskItem";

const TaskC = (props) => {
  const [items, setItems] = useState([]);
  const [newTask, setnewTask] = useState({});

  useEffect(() => {
    setItems(props.Tasks);
  }, [props]);

  const update =()=>{
    let data = items.map((item) => item.id === newTask.id ? newTask : item);
    setItems(data);
    props.setTasks(data)
  }
  const editTask = (id) => {
    let data = items.find((item) => item.id === id);
    setnewTask(data,'editid');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setnewTask({ ...newTask, [name]: value });
  };
  return (
    <>
      {items && items.length === 0 ? (
        <h4 className="bg-light text-center p-2">
          <i className="fa-solid fa-folder-open"></i> No Task
        </h4>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover table-responsive w-100">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Time</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {items &&
                items.map((item) => {
                  return <TaskI item={item} editTask={editTask} />;
                })}
            </tbody>
          </table>
        </div>
      )}

      <div
        className="modal fade "
        id="editModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update Task
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-start py-3">
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  id="title"
                  name="title"
                  value={newTask.title}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  required
                  rows="3"
                  id="description"
                  name="description"
                  value={newTask.description}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                aria-hidden="true"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={update} data-bs-dismiss="modal" >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskC;
