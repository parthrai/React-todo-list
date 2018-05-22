import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

import Layout from './components/Layout/Layout';
import Aux from './hoc/a';
import TodoList from './containers/TodoList/TodoList';

class App extends Component {
  render() {
    return (

        <Aux>
          <div>
            <Layout>

              <TodoList/>

            </Layout>

          </div>
        </Aux>
    );
  }
}

export default App;
