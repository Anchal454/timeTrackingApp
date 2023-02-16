import React, {useState }  from 'react'
import TaskC from './task';
import { Timmer } from './timmer';

const Home = () => {
	const [Tasks, setTasks] = useState([]);
	// console.log(Tasks);
	return (
		<>
			<div className="container">
				<div className="row main-content">
					<div className="col-12 col-lg-4 pt-2 border-end">
						<div className='main-bg m-3 text-center mt-4 rounded p-2 shadow '>
							<span className='fs-3'>Timmer</span>
						</div>

						<div className="container p-md-5 pt-4">
							<Timmer setTasks={setTasks} Tasks={Tasks} />
						</div>
					</div>
					<div className="col-12 col-lg-8 pt-2">
						<div className='main-bg m-3 text-center mt-4 rounded p-2 shadow'>
							<span className='fs-3'>Task</span>
						</div>

						<div className="container p-md-5 pt-4" >
							<TaskC Tasks={Tasks} setTasks={setTasks}/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
