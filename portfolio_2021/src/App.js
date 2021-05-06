import { React, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import BackToTop from './Navbar/BackToTop';
import Home from './Views/Home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CovidProject from './Views/mobile/CovidProject';
import PetProject from './Views/mobile/PetProject';
import ExerciseProject from './Views/mobile/ExerciseProject';
function App() {
	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setIsDarkMode(true);
		}
	}, []);
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggle = () => {
		setIsDarkMode(!isDarkMode);
		document.body.style.background = 'white';
	};

	console.log('darkmode: ' + isDarkMode);

	let App = 'App';

	if (isDarkMode) {
		App = 'App-dark';
		document.body.style.background = '#212121';
	}

	console.log(
		'prefers dark mode = ' +
			window.matchMedia('(prefers-color-scheme: dark)').matches
	);

	return (
		<div className={App}>
			{/* <Home /> */}
			<Router>
				<Navbar toggle={toggle} isDarkMode={isDarkMode} />
				<Route
					exact
					path="/"
					render={(props) => (
						<Home isDarkMode={isDarkMode} {...props} />
					)}
				></Route>
				<Route
					exact
					path="/covidProject"
					render={(props) => (
						<CovidProject isDarkMode={isDarkMode} {...props} />
					)}
				/>
				<Route
					exact
					path="/myPetFamily"
					render={(props) => (
						<PetProject isDarkMode={isDarkMode} {...props} />
					)}
				/>
				<Route exact path="/liftLog" component={ExerciseProject} />
			</Router>
		</div>
	);
}

export default App;
