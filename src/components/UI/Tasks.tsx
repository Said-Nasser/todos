import React from 'react';
import Task from './Task';

const Tasks = (props: { itemsList: string[], onRemove: any }) => {
    return (
        <ul>
            {props.itemsList.map((item, i) => {
                return <Task key={i} index={i} text={item} onRemove={props.onRemove} />
            })}
        </ul>
    );
}

export default Tasks;
