import React from 'react';
import './Home.css';
import Intro from './Intro/Intro';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

export default function Home(props) {
	return (
		<div className="home-main-container">
			<Intro />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
}
