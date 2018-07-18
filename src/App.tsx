import * as React from 'react';
import {Provider} from 'react-redux';
import Post from './components/post';
import {Istate} from './interfaces/state_interface';

import store from '../src/store';
import Showtasks from './showtask';


class App extends React.Component<{},Istate> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentTask: '',
      tasks: [],
    }
  }
  public submitfordata = (e: any) => {
    e.preventDefault();
    this.setState({
      currentTask: '',
      tasks:[
        ...this.state.tasks, this.state.currentTask
      ]
     })
  }
  
  public updatedata = (e: any) => {
    this.setState({
      currentTask: e.target.value
    })
  }
  public render() {
    // tslint:disable-next-line:no-console

    
    return (
    <Provider store={store}>
        <div>
        <Post/>
        <h1>
          My Type script react application
        </h1>
        <form onSubmit={this.submitfordata}>
          <input type="text" value ={this.state.currentTask} onChange={this.updatedata}/>
          <button type="submit">Add todo task</button>
        </form>
       <Showtasks data={this.state.tasks}/>
      </div>
      </Provider>
    );
  }
}

export default App;
