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
	return (
		<div className="App">
			{/* <Home /> */}
			<Router>
				<Navbar />
				<Route exact path="/" component={Home}></Route>
				<Route exact path="/covidProject" component={CovidProject} />
				<Route exact path="/myPetFamily" component={PetProject} />
				<Route exact path="/liftLog" component={ExerciseProject} />
			</Router>
		</div>
	);
}

export default App;
