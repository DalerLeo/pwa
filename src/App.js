import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import modules from './modules'
function App() {

  return (
    <div className="App">
      <Router  basename={process.env.PUBLIC_URL}>
        {modules.map((module, key) => {
          return (
             <Route
              key={key}
              {...module}
              exact={true}
            />
          )
        })}
      </Router>
    </div>
  );
}

export default App;
