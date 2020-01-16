import React from 'react';
import Task from './Task';

interface propsType { itemsList: string[], onRemove: any }
const Tasks = (props: propsType) => {
    return (
        <ul>
            {props.itemsList.map((item, i) => {
                return <Task key={i} index={i} text={item} onRemove={props.onRemove} />
            })}
        </ul>
    );
}

export default Tasks;
