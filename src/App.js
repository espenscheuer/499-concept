import React from 'react';
import './App.css';
import Helmet from 'react-helmet';
import Home from './home.js'
import About from './about.js'

import {BrowserRouter, Route} from 'react-router-dom'


function App() {

	return (
    <BrowserRouter>
        <Helmet>
          <html lang="en" />
          <title>Quote Disguiser</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div className = 'content'>
          <div className = "header">
            <h1>
              Quote Disguiser
            </h1>
            <div className = "link-wrap">
              
            </div>
          </div>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </div>
    </BrowserRouter>
	);
}

export default App;
