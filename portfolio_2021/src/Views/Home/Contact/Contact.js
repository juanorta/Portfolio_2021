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

	const classes = useStyles();
	return (
		<div className="contact-main-container" id="contact">
			<div className="spacer-contact"></div>
			<Grid container lg={3} md={3} className="contact-title">
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
			<Grid container lg={4} md={4} sm={3} className="form-grid">
				<form className={classes.root} onSubmit={sendEmail}>
					<TextField
						// className={classes.TextField}
						required
						id="standard-required"
						label="Name"
						name="name"
					/>
					<TextField
						required
						id="standard-required"
						label="Your Email"
						type="email"
						name="email"
					/>
					<TextField
						required
						id="standard-required"
						label="Subject"
						name="subject"
					/>
					<TextField
						id="outlined-multiline-static"
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
