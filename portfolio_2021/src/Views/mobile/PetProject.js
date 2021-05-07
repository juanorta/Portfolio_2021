import React from 'react';
import './CovidProject.css';
import GifPlayer from 'react-gif-player';
import petGif from '../../gifs/pet-tour.gif';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import CallMadeIcon from '@material-ui/icons/CallMade';
import CodeIcon from '@material-ui/icons/Code';

const useStyles = makeStyles((theme) => ({
	paper: {
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
	project: {
		backgroundColor: theme.palette.background.paper,
		border: '2px solid none',
		outline: 'none',
		borderRadius: '10px',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		height: '45rem',
		width: '85rem',
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		// border: 'none',
	},

	chip: {
		borderRadius: '5px',
		margin: '0.5rem',
		borderColor: '#212121',
		color: '#212121',
		// backgroundColor: 'red',
	},
	chipDark: {
		borderRadius: '5px',
		margin: '0.5rem',
		borderColor: '#ff5757',
		color: '#ff5757',
	},
	viewLive: {
		marginRight: '1rem',
		color: '#ff5757',
	},
	viewCode: {
		marginLeft: '1rem',
		color: '#ff5757',
	},
}));

export default function PetProject(props) {
	const classes = useStyles();
	let covidMainContainer = 'covid-main-container';
	let gif = 'project-gif-mobile';
	let chip = classes.chip;
	if (props.isDarkMode) {
		covidMainContainer = 'covid-main-container-dark';
		gif = 'project-gif-mobile-dark';
		chip = classes.chipDark;
	}
	return (
		<div className={covidMainContainer}>
			<h1>My Pet Family</h1>

			<div className="mobile-sub-container">
				<GifPlayer className={gif} gif={petGif} autoplay />
				<div className="mobile-description">
					<h2>Technology Stack Used</h2>
					<div className="mobile-tech-stack">
						<Chip
							className={chip}
							variant="outlined"
							label="Java"
							color="primary"
						/>
						<Chip
							className={chip}
							variant="outlined"
							label="Spring Boot"
							color="primary"
						/>
						<Chip
							className={chip}
							variant="outlined"
							label="Spring Security"
							color="primary"
						/>
						<Chip
							className={chip}
							variant="outlined"
							label="Spring JPA"
							color="primary"
						/>

						<Chip
							className={chip}
							variant="outlined"
							label="MySQL"
							color="primary"
						/>
						<Chip
							className={chip}
							variant="outlined"
							label="Amazon RDS"
							color="primary"
						/>

						<Chip
							className={chip}
							variant="outlined"
							label="Digital Ocean"
							color="primary"
						/>
						<Chip
							className={chip}
							variant="outlined"
							label="ReactJS"
							color="primary"
						/>
						<Chip
							className={chip}
							variant="outlined"
							label="Material-UI"
							color="primary"
						/>
					</div>

					<div className="mobile-about">
						{' '}
						<h2>About</h2>
						<p>
							My Pet Family is a pet manager to help keep track of
							all your pet needs. Add multiple pets, appointments,
							food, weights, preventatives, medications, and
							veterinarians.
						</p>
						{/* <p>
									At the time, there weren't any online maps
									that showed country-wide COVID-19 testing
									sites. The only maps that existed were on
									the local/state level. In an effort to help
									people out from all over the country, I took
									it upon myself to build one.
								</p> */}
						<p>
							I built the back-end system with Spring Boot
							framework due to its flexibility and 'out of the
							box' features. The authentication system was built
							with Spring Security and JSON Web Token (JWT).
						</p>
						<p>
							Object models were made in Java and used Jackson
							annotations to create entity relationships and JPA
							repository to aid in CRUD operations. Additionally,
							I created REST API controllers to handle all
							front-end requests.
						</p>
						<p>
							Finally, I used React and Material-UI to create the
							user interface. Async/await functions were used to
							communicate with the backend.
						</p>
						<div className="mobile-project-buttons">
							<a
							// href="https://uscovidtestinglocations.com/"
							// target="_blank"
							>
								<Button className={classes.viewLive}>
									<CallMadeIcon
										style={{
											marginRight: '0.5rem',
										}}
									/>{' '}
									View Live
								</Button>
							</a>
							<a
								href="https://github.com/juanorta/My_Pets"
								target="_blank"
							>
								<Button className={classes.viewCode}>
									<CodeIcon
										style={{
											marginRight: '0.5rem',
										}}
									/>{' '}
									View Code
								</Button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
