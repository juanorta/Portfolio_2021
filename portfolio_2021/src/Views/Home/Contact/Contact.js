import React from 'react';
import './Contact.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DarkModeToggle from 'react-dark-mode-toggle';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import emailjs from 'emailjs-com';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '90%',
			marginTop: '2rem',
			'& label.Mui-focused': {
				color: 'black',
			},
			'& .MuiInput-underline:after': {
				borderBottomColor: 'black',
			},
		},
	},
	input: {
		color: 'black',
		'& .MuiInput-underline:before': {
			borderBottom: `1px solid black`,
		},
	},
	inputDark: {
		color: 'white',
		'& .MuiInput-underline:before': {
			borderBottom: `0.5px solid white`,
		},
		'& .MuiInput-underline:hover': {
			borderBottom: `0.5px solid white`,
		},
		// '& .MuiOutlinedInput-outlined-multiline-static': {
		// 	color: 'white',
		// },
		// '& .MuiInputBase-root': {
		// 	color: 'white',
		// },
	},

	cssLabel: {
		color: 'white',
	},
	notchedOutline: {
		borderWidth: '0.5px',
		borderColor: 'white !important',
	},

	rootDark: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '90%',
			marginTop: '2rem',

			'& label.Mui-focused': {
				color: 'white',
			},

			'& .MuiInput-underline:after': {
				borderBottomColor: 'white',
			},
		},
	},

	button: {
		'&:hover': {
			backgroundColor: '#ff5757',
		},
		backgroundColor: '#ff5757',
		color: 'white',
		marginTop: '3rem',
		height: '3rem',
		width: '7rem',
		fontFamily: 'Open Sans',
		fontWeight: 600,
	},

	// TextField: {
	// 	width: '10rem',
	// },
}));

export default function Contact(props) {
	const classes = useStyles();
	let contactMainContainer = 'contact-main-container';
	let root = classes.root;
	let input = classes.input;

	if (props.isDarkMode) {
		contactMainContainer = 'contact-main-container-dark';
		root = classes.rootDark;
		input = classes.inputDark;
	}
	function sendEmail(e) {
		e.preventDefault();
		Alert.closeAll();

		emailjs
			.sendForm(
				'service_7lvgwlb',
				'template_2zg10ud',
				e.target,
				'user_CoRSUTJDMq4T954sjdrmm'
			)
			.then(
				(result) => {
					console.log(result.text);
					Alert.success('Your message is sent!');
				},
				(error) => {
					console.log(error.text);
					Alert.error('Unable to send message');
				}
			);

		e.target.reset();
	}

	return (
		<div className={contactMainContainer} id="contact">
			<div className="spacer-contact"></div>
			<Grid container lg={3} md={8} className="contact-title">
				<h1>
					{/* {' '}
					<h2
						style={{
							display: 'inline',
							color: '#ff5757',
							fontSize: '3.5rem',
						}}
					>
						{' '}
						|{' '}
					</h2> */}
					Contact Me
				</h1>
			</Grid>
			<Grid container lg={4} md={8} sm={8} className="form-grid">
				<form className={root} onSubmit={sendEmail}>
					<TextField
						className={input}
						InputLabelProps={{
							className: input,
						}}
						InputProps={{
							className: input,
						}}
						required
						id="standard-required"
						label="Name"
						name="name"
					/>
					<TextField
						className={input}
						InputLabelProps={{
							className: input,
						}}
						InputProps={{
							className: input,
						}}
						required
						id="standard-required"
						label="Your Email"
						type="email"
						name="email"
					/>
					<TextField
						className={input}
						InputLabelProps={{
							className: input,
						}}
						InputProps={{
							className: input,
						}}
						required
						id="standard-required"
						label="Subject"
						name="subject"
					/>
					<TextField
						className={input}
						InputLabelProps={{
							classes: {
								root: classes.cssLabel,
							},
						}}
						InputProps={{
							className: input,
							classes: {
								notchedOutline: classes.notchedOutline,
							},
						}}
						// id="outlined-multiline-static"
						label="Message"
						multiline
						rows={4}
						variant="outlined"
						name="message"
					/>
					<Button
						type="submit"
						variant="contained"
						className={classes.button}
					>
						Send
					</Button>
				</form>
			</Grid>
			<Alert
				stack={{ limit: 3 }}
				timeout={3000}
				position="top-right"
				effect="slide"
				offset={65}
			/>
		</div>
	);
}
