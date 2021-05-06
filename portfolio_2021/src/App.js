import { React, useState } from 'react';
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
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggle = () => {
		setIsDarkMode(!isDarkMode);
	};

	console.log('darkmode: ' + isDarkMode);

	return (
		<div className="App">
			{/* <Home /> */}
			<Router>
				<Navbar toggle={toggle} isDarkMode={isDarkMode} />
				<Route
					exact
					path="/"
					render={(props) => <Home {...props} />}
				></Route>
				<Route
					exact
					path="/covidProject"
					render={(props) => <CovidProject {...props} />}
				/>
				<Route
					exact
					path="/myPetFamily"
					render={(props) => <PetProject {...props} />}
				/>
				<Route exact path="/liftLog" component={ExerciseProject} />
			</Router>
		</div>
	);
}

export default App;
