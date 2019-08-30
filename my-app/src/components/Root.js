import { Router,  Switch, Route} from 'react-router'
import React from 'react'
import Home from '../pages/Home'
import {createBrowserHistory} from 'history'
import { Provider } from 'react-redux'
import {store} from '../reducer'

const history = createBrowserHistory()

const  Root = () => (
    <Provider store ={store}>
        <Router history = { history } >
            <Switch>
                <Route path= "/" component={Home}/>
            </Switch>
        </Router>
    </Provider>
)

export default Root