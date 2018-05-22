import React from 'react';
import classes from './AddTask.css';


const addTask =(props) =>{



    return(
    <div className={classes.add}>
        <form>
            <input type='text' placeholder="Task" onBlur={props.clicked}/>



        </form>
    </div>

    );

};

export default addTask;