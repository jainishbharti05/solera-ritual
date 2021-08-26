import React from 'react';
import LandingPage from './LandingPage';
import { BrowserRouter, Route, } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path="/" component={LandingPage}/>
            
            </BrowserRouter>
        </div>
    );
};

export default App;