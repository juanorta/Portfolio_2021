import React, { useState } from 'react';
import './Projects.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import cat from '../../../gifs/cat.png';
import GifPlayer from 'react-gif-player';
import covidPreview from '../../../images/covid-preview.png';
import petsPreview from '../../../images/pets-preview.png';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import Modal from '@material-ui/core/Modal';
import ProjectModal from '../../ProjectModal/ProjectModal';

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
	eyeCon: {
		marginRight: '0.5rem',
	},

	workout: {
		height: '8rem',
		width: '8rem',
		marginTop: '10%',
		marginLeft: '-10%',
	},
	AddIcon: {
		fontSize: '40px',
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
		<div className="projects-main-container" id="projects">
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
					Projects
				</h1>
			</Grid>
			<div className="spacer"></div>
			<Grid
				container
				xl={9}
				lg={10}
				md={11}
				className="projects-content"
				style={{ overflowY: 'hidden' }}
				// spacing={0}
			>
				<Grid item lg={4} xs={12} className="project-columns first">
					<div className="project">
						<div className="gif-container">
							<img
								className="picture"
								src={covidPreview}
								style={{ width: '90%' }}
							/>
						</div>
						<div className="info-section">
							<div className="title-description">
								<h2>U.S. COVID-19 Testing Locations</h2>
								<p>
									A React application to help people find a
									COVID-19 testing location anywhere in the
									U.S.
								</p>
							</div>
							<div className="button-group">
								<Button
									className={classes.root}
									onClick={covidHandler}
									// variant="outlined"
									// color="#ff5757"
								>
									<VisibilityIcon
										className={classes.eyeCon}
									/>{' '}
									View Project{' '}
								</Button>
							</div>
						</div>
					</div>
				</Grid>
				<Grid item lg={4} xs={12} className="project-columns second">
					<div className="project">
						<div className="gif-container">
							<img
								className="picture"
								src={petsPreview}
								style={{ width: '90%' }}
							/>
						</div>
						<div className="info-section">
							<div className="title-description">
								<h2>My Pet Family</h2>
								<p>
									A Spring Boot / React application to help
									pet owners keep track of all their pet
									appointments, food, medications, and more.
								</p>
							</div>
							<div className="button-group">
								<Button
									onClick={petHandler}
									className={classes.root}
									// variant="outlined"
									// color="#ff5757"
								>
									<VisibilityIcon
										className={classes.eyeCon}
									/>{' '}
									View Project{' '}
								</Button>
							</div>
						</div>
					</div>
				</Grid>
				<Grid item lg={4} xs={12} className="project-columns third">
					<div className="project">
						<div className="gif-container">
							<FitnessCenterIcon className={classes.workout} />
							{/* <img
								className="picture"
								src={petsPreview}
								style={{ width: '90%' }}
							/> */}
						</div>
						<div className="info-section">
							<div className="title-description">
								<h2>Exercise Web Application</h2>
								<p>Under construction</p>
							</div>
							<div className="button-group">
								<Button
									onClick={exerciseHandler}
									className={classes.root}
									// variant="outlined"
									// color="#ff5757"
								>
									<VisibilityIcon
										className={classes.eyeCon}
									/>{' '}
									View Project{' '}
								</Button>
							</div>
						</div>
					</div>
				</Grid>
			</Grid>

			{viewProjectClicked ? (
				<ProjectModal
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
