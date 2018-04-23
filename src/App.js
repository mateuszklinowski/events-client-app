import React, {Component} from 'react';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import './App.css';

import {EventsListContainer} from './components/Events';
import {AddEventContainer} from './components/AddEvent'


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <main className="container">
                    <div className="row">
                        <div className="col s12  l6 ">
                            <AddEventContainer/>
                        </div>
                        <div className="col s12 l6 ">
                            <EventsListContainer/>
                        </div>
                    </div>
                </main>
                <footer>

                </footer>
            </div>
        );
    }
}

export default App;
