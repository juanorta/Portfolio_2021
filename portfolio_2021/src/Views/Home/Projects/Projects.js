import React from 'react';
import './Projects.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function Projects(props) {
	return (
		<div className="projects-main-container" id="projects">
			<div className="spacer"></div>
			<Grid container lg={7} md={9} className="skills-title">
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
					Projects
				</h1>
			</Grid>

			<Grid
				container
				lg={7}
				md={9}
				className="projects-content"
				style={{ overflowY: 'hidden' }}
				// spacing={0}
			>
				<Grid
					item
					lg={4}
					xs={10}
					className="project-columns first"
				></Grid>
				<Grid
					item
					lg={4}
					xs={12}
					className="project-columns second"
				></Grid>
				<Grid
					item
					lg={4}
					xs={12}
					className="project-columns third"
				></Grid>
			</Grid>
		</div>
	);
}
