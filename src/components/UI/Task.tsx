import React from 'react';
interface task {
    index: number,
    text: string,
    onRemove: any
}
const Task = (props: task) => {

    let removeItem = () => {
        props.onRemove(props.index)
    }
    return (
        <li>
            <button className="btn btn-default" onClick={removeItem}>
                <i className="fas fa-trash"></i>
            </button>
            <p>{props.text}</p>
        </li>
    );
}

export default Task;
