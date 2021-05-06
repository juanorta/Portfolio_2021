import { React, useEffect, useState } from 'react';
import './Navbar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { NavLink, useLocation } from 'react-router-dom';
import BackToTop from './BackToTop';
import {
	Container,
	Hidden,
	IconButton,
	List,
	ListItem,
	ListItemText,
	Fab,
} from '@material-ui/core';
import { Home, KeyboardArrowUp } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import SideDrawer from './SideDrawer/SideDrawer';
import JuanLogo from '../Logo/portfoliologo.svg';
import JuanLogoDark from '../Logo/portfoliologo-dark.svg';
import { Link, animateScroll as scroll } from 'react-scroll';
import DarkModeToggle from 'react-dark-mode-toggle';
import resume from '../resume/resume-portfolio.pdf';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
	root: {
		background: 'transparent',
		borderRadius: 3,
		border: 0,
		color: '#1B2737',
		height: 48,
		width: '11rem',
		padding: '0 30px',
		boxShadow: 'none',
		marginTop: '0.45rem',
		'&:hover': {
			// backgroundColor: 'green',
			// color: 'white',
		},

		fontFamily: 'Poppins',
		fontWeight: '600',
	},

	label: {
		textTransform: 'capitalize',
	},
}));

//hides navbar after some scrolling
function HideOnScroll(props) {
	const { children, window } = props;
	let trigger = useScrollTrigger({ target: window ? window() : undefined });
	let appear = false;
	let direction = 'down';
	let inn = !trigger;

	//disables the hide on scroll effect if the user is logged in
	if (props.authenticated === true) {
		appear = true;
		direction = '';
		inn = true;
	}

	return (
		<Slide appear={appear} direction={direction} in={inn}>
			{children}
		</Slide>
	);
}

export default function Navbar(props) {
	const theme = useTheme();
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);
	const [open, setOpen] = useState(false);
	// const [isDarkMode, setIsDarkMode] = useState(props.isDarkMode);
	let menuClass = 'not-mobile';

	let appHeaderWrapper = 'app-header-wrapper';
	let appHeader = 'app-header';
	let appNav = 'app-nav';
	let navlink = 'navlink';

	if (props.isDarkMode) {
		appHeaderWrapper = 'app-header-wrapper-dark';
		appHeader = 'app-header-dark';
		appNav = 'app-nav-dark';
		navlink = 'navlink-dark';
	}

	// console.log(isDarkMode);

	return (
		<div className="navbar-main-container">
			<HideOnScroll {...props}>
				<AppBar
					position="fixed"
					style={{
						background: 'transparent',
						// boxShadow: 'none',
					}}
				>
					<Toolbar
						className={appHeaderWrapper}

						// id="back-to-top-anchor"
					>
						{/* will load 2 different side drawers depending if user is authenticated or not*/}
						<div className="hamburger-menu">
							<SideDrawer
								isDarkMode={props.isDarkMode}
								toggle={props.toggle}
							/>
						</div>

						{/* goes to home when logo is clicked */}
						<div className={appHeader}>
							<ul className="app-branding">
								<li>
									<NavLink to="/" className="navlink">
										<Button
											classes={{
												root: classes.root,
												label: classes.label,
											}}
											style={{ fontSize: '20px' }}
										>
											{/* <PetsIcon
												style={{
													minWidth: '40px',
												}}
											/> */}
											{props.isDarkMode ? (
												<img
													style={{
														backgroundColor:
															'transparent',
														marginTop: '4.25rem',
													}}
													src={JuanLogoDark}
													height="132rem"
												/>
											) : (
												<img
													style={{
														backgroundColor:
															'transparent',
													}}
													src={JuanLogo}
													height="42rem"
												/>
											)}
										</Button>
									</NavLink>
								</li>
							</ul>

							<div className="app-options">
								{/* will load different navbar content depending if user is authenticated */}
								<nav className={appNav}>
									<ul className="menu-items">
										<li>
											<Link
												activeClass="active"
												to="skills"
												spy={true}
												smooth={true}
												offset={0}
												duration={500}
											>
												<a>Skills</a>
											</Link>
										</li>
										<li>
											<Link
												activeClass="active"
												to="projects"
												spy={true}
												smooth={true}
												offset={0}
												duration={500}
											>
												<a>Projects</a>
											</Link>
										</li>
										<li>
											<Link
												activeClass="active"
												to="contact"
												spy={true}
												smooth={true}
												offset={100}
												duration={500}
											>
												<a>Contact Me</a>
											</Link>
										</li>
										<li>
											<a
												className={navlink}
												href={resume}
												target="_blank"
											>
												Resume
											</a>
										</li>

										<li>
											<a
												style={{
													// backgroundColor: 'tr',
													height: '1.5rem',
												}}
											>
												<DarkModeToggle
													onChange={props.toggle}
													checked={props.isDarkMode}
													size={50}
												/>
											</a>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar id="back-to-top-anchor" />

			<BackToTop>
				<Fab
					style={{ backgroundColor: '#FF5757', color: 'white' }}
					size="large"
					aria-label="scroll back to top"
				>
					<KeyboardArrowUp />
				</Fab>
			</BackToTop>
		</div>
	);
}
