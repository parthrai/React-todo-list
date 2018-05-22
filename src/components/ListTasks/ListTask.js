import React from 'react';
import classes from './ListTask.css';

const listTasks =(props) =>{


    return(
        <div>
            <ul className={classes.taskList}>
                {props.tasks.map(ctrl => (
                    <li>
                        <div  className={classes.list}>
                            <div className={classes.box}>

                                <div className="panel-body">
                                    <h2 onClick={props.clicked}> {ctrl} </h2>
                                </div>
                            </div>
                        </div>



                    </li>

                ))}

            </ul>

        </div>

    );

};

export default listTasks;