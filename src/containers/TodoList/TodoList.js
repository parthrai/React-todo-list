import React,{Component}  from 'react'
import Aux from './../../hoc/a';
import AddTask from './../../components/AddTask/AddTask';
import ListTasks from './../../components/ListTasks/ListTask';
import Layout from './../../components/Layout/Layout';
import NoTasks from './../../components/NoTasks/NoTasks';


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

    check = () =>{
        return "<NoTasks/>"
    }

    deleteTask = (event) =>{

        var array = [...this.state.tasks]; // make a separate copy of the array
        var index = array.indexOf(event.target.innerText)
        array.splice(index, 1);
        this.setState({tasks: array});



    }
    render(){
        let page;

        if(this.state.tasks.length == 0)
            page = <NoTasks/>
        else
            page = <ListTasks tasks={this.state.tasks} clicked={this.deleteTask}/>


        return(
          <Aux>


           <AddTask clicked={this.addTask} totalTasks={this.state.tasks.length}/>
              {page}

          </Aux>
        );
    }
}

export default TodoList;