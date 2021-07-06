import React from 'react';
import MinimizableWebChat from './MinimizableWebChat';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }


  render() {
    return (
        <div className="App">
          <MinimizableWebChat />
        </div>
    )
  }
}
export default App;
