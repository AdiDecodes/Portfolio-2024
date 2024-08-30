import React from 'react';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Notfound from './Pages/Notfound';
import './Styles/Fonts/Fonts.scss';
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const AppRoutes = () => {
	return (
		<>
			<Toaster />
			<Router>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/contact'
						element={<Contact />}
					/>
					<Route
						path='*'
						element={<Notfound />}
					/>
				</Routes>
			</Router>
		</>
	);
};

export default AppRoutes;
