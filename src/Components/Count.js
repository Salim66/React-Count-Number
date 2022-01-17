import React, { useState } from 'react';
import './Count.css';

const Count = () => {

    const [count, setcount] = useState(0)

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mx-auto my-5">
                        <div className="card text-center">
                            <div className="card-body">
                                <h1>{ count }</h1>
                                <div>
                                    <button onClick={ () => {

                                        if( count > 19 ){
                                            setcount( 0 )
                                        }else {
                                            setcount( count + 1 )
                                        }

                                    } } class="btn btn-primary">++</button>
                                    <button onClick={ () => {

                                        if( count < 1 ){
                                            setcount( 0 )
                                        }else {
                                            setcount( count - 1 )
                                        }

                                    } } class="btn btn-warning">--</button>
                                    <button onClick={ () => setcount( 0 ) } class="btn btn-danger">Reset</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Count;
