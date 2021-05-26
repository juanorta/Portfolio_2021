import React, { Component, useState } from 'react';
import './SideDrawer.css';
import { NavLink, useLocation } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { Link, animateScroll as scroll } from 'react-scroll';
import DarkModeToggle from 'react-dark-mode-toggle';
import resume from '../../resume/resume-portfolio-current.pdf';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
	label: {
		textTransform: 'capitalize',
	},

	menuButton: {
		zIndex: 999,
		// marginRight: theme.spacing(7),
		// marginLeft: '-2rem',
		marginRight: '1rem',
		backgroundColor: 'transparent',
		'&:hover': {
			backgroundColor: '#FF5757',
		},
	},
	menuIcon: {
		color: 'black',
		'&:hover': {
			color: 'white',
		},
	},
	menuIconDark: {
		color: 'white',
		'&:hover': {
			color: 'black',
		},
	},
	contentsActive: {
		color: 'white',
		backgroundColor: '#ff5757',
	},

	listItemStyle: {},

	closeMenuButton: {
		marginRight: '1rem',
		'&:hover': {
			backgroundColor: '#FF5757',
		},
	},
	menuContents: {
		color: 'white',
		'&:hover': {
			backgroundColor: '#FF5757',
		},
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		fontFamily: 'Open Sans',
	},
	drawerPaper: {
		width: drawerWidth,
		backgroundColor: '#191919',
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
}));

export default function SideDrawerNotLoggedIn(props) {
	//gettting styles
	const theme = useTheme();
	const classes = useStyles();

	const [open, setOpen] = useState(false);
	const [skillsStyle, setSkillsStyle] = useState(classes.listItemStyle);
	const [projectsStyle, setProjectsStyle] = useState(classes.listItemStyle);
	const [contactStyle, setContactStyle] = useState(classes.listItemStyle);
	const [listItemStyle, setListItemStyle] = useState(classes.listItemStyle);
	// const [isDarkMode, setIsDarkMode] = useState(() => false);
	let location = useLocation().pathname;
	// console.log('current location: ' + location);

	//functions to handle drawer open/close
	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	let menuIcon = classes.menuIcon;

	if (props.isDarkMode) {
		menuIcon = classes.menuIconDark;
	}

	return (
		<div>
			<IconButton
				style={{ color: '#1B2737' }}
				aria-label="open drawer"
				onClick={handleDrawerOpen}
				edge="start"
				className={clsx(classes.menuButton, open && classes.hide)}
				// className={clsx(classes.menuButton, open && classes.hide)}
			>
				<MenuIcon className={menuIcon} />
			</IconButton>

			{/* side drawer */}
			<Drawer
				className={classes.drawer}
				anchor="right"
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton
						onClick={handleDrawerClose}
						style={{ color: 'white' }}
						className={clsx(classes.closeMenuButton)}
					>
						{theme.direction === 'rtl' ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
				</div>

				<List>
					<div className="drawer-list-items">
						{location == '/' ? (
							<div>
								<Link
									activeClass="active"
									to="skills"
									spy={true}
									smooth={true}
									offset={0}
									duration={500}
									onSetActive={() => {
										console.log('heyt');
									}}
									// onSetActive={() => {
									// 	console.log('active');
									// 	// setSkillsStyle(classes.contentsActive);
									// }}
									// onSetInactive={() => {
									// 	setSkillsStyle(classes.listItemStyle);
									// }}
								>
									<Link
										activeClass="active"
										to="projects"
										spy={true}
										smooth={true}
										offset={0}
										duration={500}
									>
										<ListItem
											className={projectsStyle}
											button
											onClick={handleDrawerClose}
											style={{
												color: 'white',
												height: '4rem',
											}}
										>
											<ListItemIcon
												style={{
													color: 'white',
													height: '4rem',
												}}
											></ListItemIcon>
											Projects
										</ListItem>
									</Link>
									<ListItem
										className={skillsStyle}
										button
										onClick={handleDrawerClose}
										style={{
											color: 'white',
											// backgroundColor: '#ff5757',
											height: '4rem',
										}}
									>
										<ListItemIcon
											style={{
												color: 'white',
												height: '4rem',
												marginLeft: '-0.5rem',
											}}
										></ListItemIcon>
										<p>Skills</p>
									</ListItem>
								</Link>

								<Link
									activeClass="active"
									to="contact"
									spy={true}
									smooth={true}
									offset={0}
									duration={500}
								>
									<ListItem
										className={contactStyle}
										button
										onClick={handleDrawerClose}
										style={{
											color: 'white',
											height: '4rem',
										}}
									>
										<ListItemIcon
											style={{
												color: 'white',
												height: '4rem',
											}}
										></ListItemIcon>
										Contact Me
									</ListItem>
								</Link>
							</div>
						) : (
							<NavLink to="/" className="navlink">
								<ListItem
									button
									onClick={handleDrawerClose}
									style={{
										color: 'white',
										height: '4rem',
									}}
								>
									<ListItemIcon
										style={{
											color: 'white',
											height: '4rem',
										}}
									></ListItemIcon>
									Home
								</ListItem>
							</NavLink>
						)}
						<a href={resume} target="_blank" className="navlink">
							<ListItem
								button
								onClick={handleDrawerClose}
								style={{
									color: 'white',
									height: '4rem',
								}}
							>
								<ListItemIcon
									style={{
										color: 'white',
										height: '4rem',
									}}
								></ListItemIcon>
								Resume
							</ListItem>
						</a>

						<ListItem
							button
							// onClick={handleDrawerClose}
							style={{
								color: 'white',
								height: '4rem',
							}}
						>
							<ListItemIcon
								style={{
									color: 'white',
									height: '4rem',
								}}
							></ListItemIcon>
							<DarkModeToggle
								onChange={props.toggle}
								checked={props.isDarkMode}
								size={50}
							/>
						</ListItem>
					</div>
				</List>
			</Drawer>
		</div>
	);
}
