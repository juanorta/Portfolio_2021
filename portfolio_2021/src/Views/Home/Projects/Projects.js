import React, { useState } from 'react';
import './Projects.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import cat from '../../../gifs/cat.png';
import GifPlayer from 'react-gif-player';
import covidPreview from '../../../images/covid-preview.png';
import covidPreview2 from '../../../images/5-3-covid-ss.png';
import petsPreview from '../../../images/pets-preview.png';
import petsPreview2 from '../../../images/mpf.png';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import Modal from '@material-ui/core/Modal';
import ProjectModal from '../../ProjectModal/ProjectModal';
import Chip from '@material-ui/core/Chip';
import CallMadeIcon from '@material-ui/icons/CallMade';
import CodeIcon from '@material-ui/icons/Code';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
	root: {
		// backgroundColor: '#ff5757',
		// '&:hover': {
		// 	backgroundColor: '#ff5757',
		// },
		fontWeight: '700',
		fontFamily: 'Open Sans',
		color: '#ff5757',
		// marginTop: '0rem',
		// position: 'absolute',

		// margin: '0 auto',
		// borderRadius: 38,
		// height: '4rem',
		// width: '4rem',
	},
	chip: {
		align: 'right',
		borderRadius: '5px',
		margin: '0.25rem',
	},
	button: {
		marginLeft: '0.25rem',
		marginRight: '0.25rem',
		color: '#ff5757',
		fontFamily: 'Open Sans',
		// textDecoration: 'none',
	},
	label: {
		textTransform: 'capitalize',
	},
}));

export default function Projects(props) {
	const classes = useStyles();
	const [openModal, setOpenModal] = useState(false);
	const [viewProjectClicked, setViewProjectClicked] = useState(false);
	const [isCovid, setIsCovid] = useState(false);
	const [isPet, setIsPet] = useState(false);
	const [isExercise, setIsExercise] = useState(false);

	let projectsMainContainer = 'projects-main-container';
	let projectPicture = 'project-picture';
	let projectPicture2 = 'project-picture-2';
	let projectPictureMobile = 'project-picture-mobile';

	if (props.isDarkMode) {
		projectsMainContainer = 'projects-main-container-dark';
		projectPicture = 'project-picture-dark';
		projectPicture2 = 'project-picture-2-dark';
		projectPictureMobile = 'project-picture-mobile-dark';
	}

	const SetOpenModalToFalse = () => {
		setOpenModal(false);
		setViewProjectClicked(false);
	};

	const covidHandler = () => {
		console.log('open');
		setIsCovid(true);
		setIsPet(false);
		setIsExercise(false);
		setViewProjectClicked(true);
		setOpenModal(true);
	};

	const petHandler = () => {
		console.log('open');
		setIsPet(true);
		setIsCovid(false);
		setIsExercise(false);
		setViewProjectClicked(true);
		setOpenModal(true);
	};

	const exerciseHandler = () => {
		console.log('open');
		setIsExercise(true);
		setIsCovid(false);
		setIsPet(false);
		setViewProjectClicked(true);
		setOpenModal(true);
	};

	return (
		<div className={projectsMainContainer} id="projects">
			<div className="spacer"></div>
			<Grid
				container
				xl={8}
				lg={8}
				md={10}
				sm={10}
				className="skills-title"
			>
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

			<div className="projects-content">
				<Fade left>
					<div className="project1-mobile covid">
						<div className="picture-mobile">
							<img
								className={projectPictureMobile}
								src={covidPreview2}
							/>
						</div>
						<div className="home-about-mobile">
							<div className="title-mobile">
								<h3>U.S. COVID-19 Testing Locations</h3>
							</div>
							<div className="about-mobile">
								<p>
									View COVID-19 testing locations accross the
									United States. Given a user's location (or a
									city name) and a radius, the user will
									receive results for all nearby testing
									locations sorted by distance.
								</p>
							</div>
							<div className="buttons mobile">
								<a
									href="https://github.com/juanorta/COVID-19_Testing_Locations"
									target="_blank"
									className="navlink"
								>
									<Button className={classes.button}>
										<CodeIcon
											style={{
												marginRight: '0.5rem',
											}}
										/>{' '}
										Code
									</Button>
								</a>
								<a
									href="https://uscovidtestinglocations.com/"
									target="_blank"
									className="navlink"
								>
									<Button className={classes.button}>
										{' '}
										<CallMadeIcon
											style={{
												marginRight: '0.5rem',
											}}
										/>{' '}
										Live
									</Button>
								</a>
								<NavLink to="/covidProject" className="navlink">
									<Button
										className={classes.button}

										// onClick={covidHandler}
									>
										{' '}
										<VisibilityIcon
											style={{ marginRight: '0.5rem' }}
										/>
										See More
									</Button>
								</NavLink>
							</div>
						</div>
					</div>
				</Fade>
				<Fade right>
					<div className="project1-mobile">
						<div className="picture-mobile">
							<img
								className={projectPictureMobile}
								src={petsPreview2}
							/>
						</div>
						<div className="home-about-mobile">
							<div className="title-mobile">
								<h3>My Pet Family</h3>
							</div>
							<div className="about-mobile">
								<p>
									A pet manager to help keep track of all your
									pet needs. Add multiple pets and their
									respective appointments, food, weights,
									preventatives, medications, and
									veterinarians.
								</p>
							</div>

							<div className="buttons mobile">
								<a
									href="https://github.com/juanorta/My_Pets"
									target="_blank"
									className="navlink"
								>
									<Button className={classes.button}>
										<CodeIcon
											style={{
												marginRight: '0.5rem',
											}}
										/>{' '}
										Code
									</Button>
								</a>

								<a
									href="https://mypetfamily.io/"
									target="_blank"
									className="navlink"
								>
									<Button className={classes.button}>
										{' '}
										<CallMadeIcon
											style={{
												marginRight: '0.5rem',
											}}
										/>{' '}
										Live
									</Button>
								</a>
								<NavLink to="/myPetFamily" className="navlink">
									<Button
										className={classes.button}
										// onClick={petHandler}
									>
										{' '}
										<VisibilityIcon
											style={{ marginRight: '0.5rem' }}
										/>
										See More
									</Button>
								</NavLink>
							</div>
						</div>
					</div>
				</Fade>
				{/* laptop/desktop view */}
				<Fade left>
					<div className="project" style={{ overflowY: 'hidden' }}>
						<div className="picture">
							<img
								className={projectPicture}
								src={covidPreview2}
								// style={{ width: '35rem' }}
							/>
						</div>
						<div className="info">
							<div className="title">
								<h2>US COVID-19 Testing Locations</h2>
							</div>
							<div className="home-about">
								<p>
									View COVID-19 testing locations accross the
									United States. Given a user's location (or a
									city name) and a radius, the user will
									receive results for all nearby testing
									locations sorted by distance.
								</p>
							</div>

							<div className="buttons">
								<a
									className="navlink"
									href="https://github.com/juanorta/COVID-19_Testing_Locations"
									target="_blank"
								>
									<Button className={classes.button}>
										<CodeIcon
											style={{
												marginRight: '0.5rem',
											}}
										/>{' '}
										Code
									</Button>
								</a>
								<a
									className="navlink"
									href="https://uscovidtestinglocations.com/"
									target="_blank"
								>
									<Button className={classes.button}>
										{' '}
										<CallMadeIcon
											style={{
												marginRight: '0.5rem',
											}}
										/>{' '}
										Live
									</Button>
								</a>
								<Button
									className={classes.button}
									onClick={covidHandler}
								>
									{' '}
									<VisibilityIcon
										style={{ marginRight: '0.5rem' }}
									/>
									See More
								</Button>
							</div>
						</div>
					</div>
				</Fade>
				<div
					style={{
						height: '6rem',
					}}
				></div>

				<Fade right>
					<div className="project-2" style={{ overflowY: 'hidden' }}>
						<div className="info-2">
							<div className="title mpf">
								<h2>My Pet Family</h2>
							</div>
							<div className="home-about mpf">
								<p>
									A pet manager to help keep track of all your
									pet needs. Add multiple pets and their
									respective appointments, food, weights,
									preventatives, medications, and
									veterinarians.
								</p>
							</div>

							<div className="buttons mpf">
								<a
									href="https://github.com/juanorta/My_Pets"
									target="_blank"
									className="navlink"
								>
									<Button className={classes.button}>
										<CodeIcon
											style={{
												marginRight: '0.5rem',
											}}
										/>{' '}
										Code
									</Button>
								</a>

								<a
									href="https://mypetfamily.io/"
									target="_blank"
									className="navlink"
								>
									<Button className={classes.button}>
										{' '}
										<CallMadeIcon
											style={{
												marginRight: '0.5rem',
											}}
										/>{' '}
										Live
									</Button>
								</a>
								<Button
									className={classes.button}
									onClick={petHandler}
								>
									{' '}
									<VisibilityIcon
										style={{ marginRight: '0.5rem' }}
									/>
									See More
								</Button>
							</div>
						</div>
						<div className="picture">
							<img
								src={petsPreview2}
								className={projectPicture2}
							/>
						</div>
					</div>
				</Fade>
			</div>

			{/* </Grid>
			</Grid> */}

			{viewProjectClicked ? (
				<ProjectModal
					isDarkMode={props.isDarkMode}
					SetOpenModalToFalse={SetOpenModalToFalse}
					openModal={openModal}
					isCovid={isCovid}
					isPet={isPet}
					isExercise={isExercise}
				/>
			) : null}
		</div>
	);
}
