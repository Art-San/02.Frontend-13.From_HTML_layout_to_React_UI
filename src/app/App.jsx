import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Users from './layouts/Users'
import Login from './layouts/Login'
import Main from './layouts/Main'
import NavBar from './components/ui/NavBar'
// Ветки 14-25 -- 14-28 для перехода к 15 разделу 2ого модуля
// 14-25.Adding_an_HTTP_Service
// 14-27.useProfessions
// 14-28.useQualities_D-z

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/users/:userId?/:edit?" component={Users} />
                {/* <Route path="/users/:userId?" component={Users} /> */}
                <Route path="/login/:type?" component={Login} />
                <Route path="/" exact component={Main} />
                <Redirect to="/" />
            </Switch>
        </div>
    )
}

export default App
