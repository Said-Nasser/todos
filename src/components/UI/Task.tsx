import React from 'react';
interface propsType {
    index: number,
    text: string,
    onRemove: any
}
const Task = (props: propsType) => {

    let removeItem = () => {
        props.onRemove(props.index)
    }
    return (
        <li>
            <button className="btn btn-default" onClick={removeItem}>
                {/* <i className="fas fa-trash"></i> */}
                &#10007;
            </button>
            <p>{props.text}</p>
        </li>
    );
}

export default Task;
