import React, { Fragment } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './pages/home';
import Sample from './pages/sample';


export default function AppRouter() {

    return (
        <Fragment>
            <BrowserRouter>
                <Link to="/">Home</Link>
                <Link to="/sample/">Sample</Link>
            

                <Route path="/" exact component={Home} />
                <Route path="/sample/"  component={Sample} />
            </BrowserRouter>
        </Fragment>
    )
}