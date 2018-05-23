import React from 'react';
import classes from './NoTasks.css'

const noTasks =(props) =>{



    return(
        <div className="panel">
            <div  className={classes.list}>
                <div className={classes.box}>

                    <div className="panel-body">
                        <h2 > No Tasks</h2>
                    </div>
                </div>
            </div>
        </div>

    );

};

export default noTasks;