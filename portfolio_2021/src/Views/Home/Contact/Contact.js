import React from 'react';
import './Contact.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DarkModeToggle from 'react-dark-mode-toggle';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '90%',
			marginTop: '3rem',
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
	const classes = useStyles();
	return (
		<div className="contact-main-container" id="contact">
			<div className="spacer"></div>
			<Grid container lg={4} md={9} className="contact-title">
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
			<Grid container lg={4} md={9} className="form-grid">
				<form className={classes.root}>
					<TextField
						// className={classes.TextField}
						required
						id="standard-required"
						label="Name"
					/>
					<TextField required id="standard-required" label="Email" />
					<TextField
						required
						id="standard-required"
						label="Subject"
					/>
					<TextField
						id="outlined-multiline-static"
						label="Message"
						multiline
						rows={4}
						variant="outlined"
					/>
					<Button
						type="submit"
						variant="contained"
						className={classes.button}
					>
						Submit
					</Button>
				</form>
			</Grid>
		</div>
	);
}
