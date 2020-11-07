import React from 'react';
import './App.css';
import './style.css';
import ToDoList from "./Shopping/list";
import { Provider } from "react-redux";
import Store from "./store";
import ToInput from './Shopping/input';
import Filter from './Shopping/filter';
import Sorting from './Shopping/sort';

class App extends React.Component{
  render(){
    return (
        <Provider store={Store}>
          <div className="App">
            <ToDoList/>
            <Filter/>
            <Sorting/>
            <ToInput />
          </div>
        </Provider>
    );
  }
}

export default App;
