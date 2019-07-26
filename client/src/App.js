import React from 'react'
import Navbar from './components/layout/Navbar'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/pages/Home'
import About from './components/pages/About'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Alerts from './components/layout/Alerts'

import ContactState from './context/contact/ContactState'
import AuthState from './context/auth/AuthState'
import AlertState from './context/alerts/AlertState'
import setAuthToken from './utils/setAuthToken'

if (localStorage.token) {
	setAuthToken(localStorage.token)
}

const App = () => {
	return (
		<AlertState>
			<AuthState>
				<ContactState>
					<Router>
						<>
							<Navbar />
							<div className="container">
								<Alerts />
								<Switch>
									<Route exact path="/" component={Home} />
									<Route exact path="/about" component={About} />
									<Route exact path="/register" component={Register} />
									<Route exact path="/login" component={Login} />
								</Switch>
							</div>
						</>
					</Router>
				</ContactState>
			</AuthState>
		</AlertState>
	)
}

export default App
