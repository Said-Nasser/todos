import React from 'react';
import Tasks from './Tasks';

const Work = (props: { onAddWork: any, onRemoveWork: any, work: string[] }) => {

    let _newValue: any;



    let handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        props.onAddWork(_newValue.value)
        _newValue.value = ''
    }

    return (
        <div className="col-md-4 col-sm-6 col-12">
            <div className="sports">

                <header className="p-3">
                    <h3>Work</h3>
                </header>
                <Tasks itemsList={props.work} onRemove={props.onRemoveWork} />

                <form className="add-todo" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="col-12">
                            <div className="input-group">
                                <input className="form-control rounded-0 border-right-0 font-weight-lighter p-4"
                                    type="text" placeholder="Add New Item"
                                    ref={input => _newValue = input} />

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default Work;
