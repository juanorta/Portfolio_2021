import { React, useState } from 'react';
import './Home.css';
import Intro from './Intro/Intro';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import { useLocation } from 'react-router';

export default function Home(props) {
	let homeMainContainer = 'home-main-container';

	if (props.isDarkMode) {
		homeMainContainer = 'home-main-container-dark';
	}

	return (
		<div className={homeMainContainer}>
			<Intro isDarkMode={props.isDarkMode} />
			<Projects isDarkMode={props.isDarkMode} />
			<Skills isDarkMode={props.isDarkMode} />

			<Contact isDarkMode={props.isDarkMode} />
		</div>
	);
}
