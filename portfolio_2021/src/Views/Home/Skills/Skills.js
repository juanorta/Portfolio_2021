import React from 'react';
import './Skills.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function Skills(props) {
	return (
		<div
			className="skills-main-container"
			id="skills"
			style={{
				overflowY: 'hidden',
			}}
		>
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
					Skills
				</h1>
			</Grid>
			<Grid container lg={9} md={9} className="skills-description">
				<Grid item lg={5}>
					<p>
						Through my studies, I've gained a solid understanding of
						computer science and web development concepts, and have
						dedicated a lot of my free time to apply these concepts
						to real-world scenarios and applications.
					</p>
				</Grid>
			</Grid>
			<Grid
				container
				lg={9}
				md={9}
				className="skills-content"
				style={{ overflowY: 'hidden' }}
			>
				<Grid item lg={4} xs={10} className="columns languages">
					{' '}
					<h2>
						{' '}
						<h2
							style={{
								display: 'inline',
								color: '#ff5757',
								fontSize: '1.75rem',
							}}
						>
							{' '}
							|{' '}
						</h2>
						Languages
					</h2>
					<ul>
						<li>C</li>
						<li>C++</li>
						<li>Java</li>
						<li>JavaScript</li>
						<li>HTML / CSS</li>
						<li>SQL</li>
					</ul>
				</Grid>
				<Grid item lg={4} xs={12} className="columns libraries">
					{' '}
					<h2>
						{' '}
						<h2
							style={{
								display: 'inline',
								color: '#ff5757',
								fontSize: '1.75rem',
							}}
						>
							{' '}
							|{' '}
						</h2>
						Libraries & Frameworks
					</h2>
					<ul className="libraries-ul">
						<li>Spring Boot</li>
						<li>React</li>
						<li>Node</li>
						{/* <li>Express</li> */}
						<li>Material-UI</li>
						<li>MySQL</li>
						<li>REST</li>
					</ul>
				</Grid>
				<Grid item lg={4} xs={12} className="columns tools">
					{' '}
					<h2>
						{' '}
						<h2
							style={{
								display: 'inline',
								color: '#ff5757',
								fontSize: '1.75rem',
							}}
						>
							{' '}
							|{' '}
						</h2>
						Tools & Microservices
					</h2>
					<ul className="tools-ul">
						<li>Amazon Web Services</li>
						<li>Google Cloud</li>
						<li>Digital Ocean</li>
						<li>Docker</li>
						<li>Git</li>
						<li>Postman</li>
					</ul>
				</Grid>
			</Grid>
		</div>
	);
}
