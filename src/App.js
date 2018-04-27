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
                    <h1 className="App-title">Events application</h1>
                </header>
                <main className="container">
                    <div className="row">
                        <div className="col s12  l7 ">
                            <h4>Add event</h4>
                            <AddEventContainer/>
                        </div>
                        <div className="col s12 l5 ">
                            <h4>Incoming events</h4>
                            <EventsListContainer/>
                        </div>
                    </div>
                </main>
                <footer className="App-footer">
                    <h3>Mateusz Klinowski</h3>
                </footer>
            </div>
        );
    }
}

export default App;
