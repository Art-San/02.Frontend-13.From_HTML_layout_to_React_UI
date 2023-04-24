import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Users from './layouts/Users'
import Login from './layouts/Login'
import Main from './layouts/Main'
import NavBar from './components/ui/NavBar'
import { ToastContainer } from 'react-toastify'
import { ProfessionProvider } from './hooks/useProfession'

function App() {
    return (
        <div>
            <NavBar />
            <ProfessionProvider>
                <Switch>
                    <Route path="/users/:userId?/:edit?" component={Users} />
                    <Route path="/login/:type?" component={Login} />
                    <Route path="/" exact component={Main} />
                    <Redirect to="/" />
                </Switch>
            </ProfessionProvider>
            <ToastContainer />
        </div>
    )
}

export default App
