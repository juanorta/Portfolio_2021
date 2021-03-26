import React, { useState } from 'react';
import './ProjectModal.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import covidGif from '../../gifs/covid-portfolio2.gif';
import GifPlayer from 'react-gif-player';
import Chip from '@material-ui/core/Chip';
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

export default function ProjectModal(props) {
	const classes = useStyles();
	// getModalStyle is not a pure function, we roll the style only on the first render
	// const [modalStyle] = React.useState(getModalStyle);
	const [open, setOpen] = useState(props.openModal);
	const [isCovid, setIsCovid] = useState(props.isCovid);
	const [isPet, setIsPet] = useState(props.isPet);
	const [isExercise, setIsExercise] = useState(props.isExercise);

	// const handleOpen = () => {
	// 	setOpen(true);
	// };

	const handleClose = () => {
		props.SetOpenModalToFalse();
	};

	console.log(props);

	return (
		<div>
			{/* <button type="button" onClick={handleOpen}>
				Open Modal
			</button> */}
			<Modal
				className={classes.modal}
				open={true}
				onClose={handleClose}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				<Fade in={open}>
					<div className={classes.project}>
						<div className="gif">
							{isCovid ? (
								<div>
									<h1>U.S. COVID-19 Testing Locations</h1>
									<GifPlayer
										className="project-gif"
										gif={covidGif}
										autoplay
									/>
								</div>
							) : null}
							{isPet ? <h1>My Pet Family</h1> : null}
							{isExercise ? <h1>Lift Log IO</h1> : null}
						</div>
						<div className="description">
							<h2>Technology Stack Used</h2>
							{isCovid ? (
								<div className="tech-stack">
									<Chip
										className={classes.chip}
										variant="outlined"
										label="Java"
										color="primary"
									/>
									<Chip
										className={classes.chip}
										variant="outlined"
										label="HtmlUnit"
										color="primary"
									/>
									<Chip
										className={classes.chip}
										variant="outlined"
										label="NodeJS"
										color="primary"
									/>
									<Chip
										className={classes.chip}
										variant="outlined"
										label="ExpressJS"
										color="primary"
									/>
									<Chip
										className={classes.chip}
										variant="outlined"
										label="ReactJS"
										color="primary"
									/>

									<Chip
										className={classes.chip}
										variant="outlined"
										label="MySQL"
										color="primary"
									/>
									<Chip
										className={classes.chip}
										variant="outlined"
										label="Amazon RDS"
										color="primary"
									/>
									<Chip
										className={classes.chip}
										variant="outlined"
										label="Google Places API"
										color="primary"
									/>
									<Chip
										className={classes.chip}
										variant="outlined"
										label="Google Maps API"
										color="primary"
									/>
									<Chip
										className={classes.chip}
										variant="outlined"
										label="Google Geocoding API"
										color="primary"
									/>
									<Chip
										className={classes.chip}
										variant="outlined"
										label="Digital Ocean"
										color="primary"
									/>
								</div>
							) : null}

							{isCovid ? (
								<div>
									<div className="about">
										{' '}
										<h2>About</h2>
										<p>
											Given a user's location (or a city
											name) and a radius, the user will
											receive search results displayed on
											a map and detailed information on
											the left-hand side
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
											I parsed a public table on
											https://www.goodrx.com/blog/drive-thru-coronavirus-testing-near-me/
											that had COVID-19 testing sites info
											from all over the U.S. with Java,
											HtmlUnit (a GUI-less browser), and
											stored the data in an Amazon RDS
											MySQL database.
										</p>
										<p>
											Once the data was stored, I used
											Express to build URL routes and send
											query data to Node. I used Node to
											retrieve filtered data from the
											database with the query data
											received from Express.
										</p>
										<p>
											Finally, I used React to display the
											map / search results and Digital
											Ocean for server hosting.
										</p>
									</div>
									<div className="project-buttons">
										<a
											href="https://uscovidtestinglocations.com/"
											target="_blank"
										>
											<Button
												className={classes.viewLive}
											>
												<CallMadeIcon
													style={{
														marginRight: '0.5rem',
													}}
												/>{' '}
												View Live
											</Button>
										</a>
										<a
											href="https://github.com/juanorta/COVID-19_Testing_Locations"
											target="_blank"
										>
											<Button
												className={classes.viewCode}
											>
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
							) : null}
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}