import React, { useEffect, useState } from 'react'
let init = {
	title: '',
	description:''
}
export const Timmer = ({ setTasks, Tasks }) => {
	const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
	const [interv, setInterv] = useState();
	const [status, setStatus] = useState('');
	const [Task, setTask] = useState(init);

	const start = () => {
		run();
		setStatus('start');
		setInterv(setInterval(run, 10));
	};

	var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

	const run = () => {
		if (updatedM === 60) {
			updatedH++;
			updatedM = 0;
		}
		if (updatedS === 60) {
			updatedM++;
			updatedS = 0;
		}
		if (updatedMs === 100) {
			updatedS++;
			updatedMs = 0;
		}
		updatedMs++;
		return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
	};

	const pause = () => {
		if (status === 'pause') {
			start()
			setStatus('start');
		} else {
			clearInterval(interv);
			setStatus('pause');
		}
	};

	const reset = () => {
		clearInterval(interv);
		setStatus('');
		setTime({ ms: 0, s: 0, m: 0, h: 0 })
	};

	const save = () => {
		setTasks([...Tasks, { ...Task, id: Tasks.length + 1, time: time }])
		setTask(init)
		reset()
	}

	
  return (
	  <>
		  <div className='timmer text-center'>
			  <div className='clock'>
				 <h1> <span>{(time.h >= 10) ? time.h : "0" + time.h}</span>&nbsp; :&nbsp;
				  <span>{(time.m >= 10) ? time.m : "0" + time.m}</span>&nbsp;:&nbsp;
					  <span>{(time.s >= 10) ? time.s : "0" + time.s}</span></h1>
				  
			  </div>
			  <div className='btn-block pt-4'>
				  <button className='btn btn-primary rounded-pill mx-md-2 mx-1 px-md-4 px-3' disabled={status === 'start'?true:false} onClick={start} > Start </button>
				  <button className='btn btn-warning rounded-pill mx-md-2 mx-1 px-md-4 px-3' disabled={status === '' ? true : false}  onClick={pause}> Pause </button>
				  <button className='btn btn-success rounded-pill mx-md-2 mx-1 px-md-4 px-3' disabled={status === '' ? true : false} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={pause}> Save </button>
			  </div>

			  
			  <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				  <div className="modal-dialog modal-lg">
					  <div className="modal-content">
						  <div className="modal-header">
							  <h5 className="modal-title" id="exampleModalLabel">Save Task</h5>
							  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={pause}></button>
						  </div>
						  <div className="modal-body text-start py-3">

								  <div className="mb-3">
									  <label htmlFor="title" className="form-label">Title</label>
								  <input type="text" required className="form-control" id="title" name='title' value={Task.title} onChange={(e)=>setTask({...Task,['title']:e.target.value})}/>
								  </div>
								  <div className="mb-3">
									  <label htmlFor="description" className="form-label">Description</label>
								  <textarea required className="form-control" rows='3' id="description" name='description' value={Task.description} onChange={(e) => setTask({ ...Task, ['description']: e.target.value })} />
								  </div>
							
						  </div>
						  <div className="modal-footer">
							  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={pause} aria-hidden="true">Close</button>
							  <button type="button" className="btn btn-primary" onClick={save} data-bs-dismiss="modal">Save</button>
						  </div>
					  </div>
				  </div>
			  </div>

		  </div>
	  </>
  )
}
