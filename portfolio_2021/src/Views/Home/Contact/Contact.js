import React from 'react';
import './Contact.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DarkModeToggle from 'react-dark-mode-toggle';
export default function Contact(props) {
	return (
		<div className="contact-main-container" id="contact">
			<div className="spacer"></div>
			<Grid container lg={9} md={9} className="skills-title">
				<h1>
					{' '}
					<h2
						style={{
							display: 'inline',
							color: '#ff5757',
							fontSize: '3.5rem',
						}}
					>
						{' '}
						|{' '}
					</h2>
					Contact Me
				</h1>
			</Grid>
		</div>
	);
}
