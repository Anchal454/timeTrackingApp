import React from 'react'

const TaskI = ({ item, editTask }) => {
    // console.log(item);
    return (
        <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td> <span>{(item.time.h >= 10) ? item.time.h : "0" + item.time.h}</span>&nbsp; :&nbsp;
                <span>{(item.time.m >= 10) ? item.time.m : "0" + item.time.m}</span>&nbsp;:&nbsp;
                <span>{(item.time.s >= 10) ? item.time.s : "0" + item.time.s}</span></td>
            <td ><i class="fa fa-pencil-square-o mx-3" aria-hidden="true" onClick={()=>editTask(item.id)} data-bs-toggle="modal" data-bs-target="#editModal"></i></td>
        </tr>

    )
}

export default TaskI