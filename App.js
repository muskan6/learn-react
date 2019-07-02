import React, {Component} from 'react';
import Ninjas from './Ninjas';
import AddNinjas from './AddNinjas';

class App extends Component {
  state = {
    ninjas : [
        {name:'muskan', age:21, gender: 'f', id:1},
        {name:'ujjwal', age:22, gender: 'm', id:2},
        {name:'mallika', age:18, gender: 'f', id:3}
    ]
  }
    render() {
        return (
            <div className="App">
                <h1>My first react app</h1>
                <p>Welcome!!</p>
                {/*<Ninjas name="Muskan" age ="21" gender="female"/>*/}
              <Ninjas ninjas = {this.state.ninjas} />
              <AddNinjas/>
            </div>
        );
    }
}
export default App;
