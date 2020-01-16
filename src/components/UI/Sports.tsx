import React from 'react';
import Tasks from './Tasks';

const Sports = (props: { onAddSport: any, onRemoveSport: any, sports: string[] }) => {

    let _newValue: any;


    
    let handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        props.onAddSport(_newValue.value)
        _newValue.value = ''
         
    }

    return (
        <div className="col-md-4 col-sm-6 col-12">
            <div className="sports">

                <header className="p-3">
                    <h3>Sports</h3>
                </header>
                <Tasks itemsList={props.sports} onRemove={props.onRemoveSport} />

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

export default Sports;
