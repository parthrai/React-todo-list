import React,{Component}  from 'react'
import Aux from './../../hoc/a';
import AddTask from './../../components/AddTask/AddTask';
import ListTasks from './../../components/ListTasks/ListTask';


class TodoList extends Component{

    state= {

        tasks:['task1','task2','task2'],
        name : ''
    }

    addTask = (event) =>{
        let task = event.target.value;

        if(task === "")
            return;
        if(this.state.tasks.includes(task))
            return;

        {this.setState({tasks:[...this.state.tasks, event.target.value]})}
        event.target.value="";

    }

    deleteTask = (event) =>{

        var array = [...this.state.tasks]; // make a separate copy of the array
        var index = array.indexOf(event.target.innerText)
        array.splice(index, 1);
        this.setState({tasks: array});

        console.log(this.state.tasks.length);
        console.log(this.state.tasks);

    }
    render(){
        return(
          <Aux>

           <AddTask clicked={this.addTask}/>
           <ListTasks tasks={this.state.tasks} clicked={this.deleteTask}/>

          </Aux>
        );
    }
}

export default TodoList;