import React from 'react';
import './Intro.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ReactTooltip from 'react-tooltip';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Link, animateScroll as scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
	linkedIn: {
		color: 'black',
		marginTop: '-0.5rem',
		height: '2.5rem',
		width: '2.5rem',
		'&:hover': {
			color: '#2867B2',
		},
	},
	github: {
		color: 'black',
		marginTop: '-0.5rem',
		height: '2.5rem',
		width: '2.5rem',
		'&:hover': {
			backgroundColor: 'black',
			color: '#f5f5f5',
		},
	},
	resume: {
		color: 'black',
		marginTop: '-0.5rem',
		height: '2.5rem',
		width: '2.5rem',
		'&:hover': {
			color: '#ff5757',
		},
	},
}));

export default function Intro(props) {
	const theme = useTheme();
	const classes = useStyles();
	return (
		<div className="intro-main-container" style={{ overflowY: 'hidden' }}>
			<div className="greeting" style={{ overflowX: 'hidden' }}>
				<h1>Hi, I'm Juan</h1>
				<h2>
					Fullstack Software{' '}
					<h2 style={{ color: '#ff5757' }}>Engineer</h2>
				</h2>
				<ReactTooltip id="linkedin" place="top" effect="solid">
					LinkedIn Profile
				</ReactTooltip>
				<ReactTooltip id="git" place="top" effect="solid">
					Github Profile
				</ReactTooltip>
				<ReactTooltip id="resume" place="top" effect="solid">
					View My Resume
				</ReactTooltip>

				<ul className="social-group">
					<li className="line1"></li>
					<li className="link" data-tip data-for="linkedin">
						<a
							href="https://www.linkedin.com/in/juan-orta/"
							target="_blank"
						>
							<LinkedInIcon className={classes.linkedIn} />{' '}
						</a>
					</li>
					<li className="link" data-tip data-for="git">
						<a href="https://github.com/juanorta/" target="_blank">
							<GitHubIcon className={classes.github} />{' '}
						</a>
					</li>
					<li className="link" data-tip data-for="resume">
						<a href="https://www.w3schools.com" target="_blank">
							<FileCopyIcon className={classes.resume} />
						</a>
					</li>
					<li className="line2"></li>
				</ul>
				<div className="arrow-down">
					<Link
						activeClass="active"
						to="skills"
						spy={true}
						smooth={true}
						offset={0}
						duration={500}
					>
						<KeyboardArrowDownIcon
							className="arrow"
							data-tip
							data-for="skills"
							style={{
								height: '5rem',
								width: '5rem',
								color: '#ff5757',
							}}
						/>
					</Link>
				</div>
				{/* <div className="social-group">
					<div className="line1"></div>
					<h3>hey</h3>
				</div> */}
			</div>
		</div>
	);
}
