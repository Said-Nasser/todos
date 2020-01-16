import React from 'react';
import Tasks from './Tasks';

interface propsType { onAddEntertainment: any, onRemoveEntertainment: any, entertainment: string[] }

const Entertainment = (props: propsType) => {

    let _newValue: any;

    let handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        props.onAddEntertainment(_newValue.value)
        _newValue.value = ''
    }

    return (
        <div className="col-md-4 col-sm-6 col-12">
            <div className="sports">

                <header className="p-3">
                    <h3>Entertainment</h3>
                </header>
                <Tasks itemsList={props.entertainment} onRemove={props.onRemoveEntertainment} />

                <form className="add-todo" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="col-12">
                            <div className="input-group">
                                <input className="form-control rounded-0 border-right-0 font-weight-lighter p-4"
                                    type="text" placeholder="Add New Item"
                                    ref={input => _newValue = input}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );

}
export default Entertainment;
