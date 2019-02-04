import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/general.css';

class App extends Component {
    render() {
        return (<div>Starter Page Text</div>)
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('electron-root'));