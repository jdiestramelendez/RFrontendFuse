import FuseAnimate from '@fuse/core/FuseAnimate';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth0LoginTab from './tabs/Auth0LoginTab';
import FirebaseLoginTab from './tabs/FirebaseLoginTab';
import JWTLoginTab from './tabs/JWTLoginTab';

const useStyles = makeStyles(theme => ({
	root: {
		background: `linear-gradient(to left, ${theme.palette.primary.dark} 0%, ${darken(
			theme.palette.primary.dark,
			0.5
		)} 100%)`,
		color: theme.palette.primary.contrastText
	},
	leftSection: {},
	rightSection: {
		background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${darken(
			theme.palette.primary.dark,
			0.5
		)} 100%)`,
		color: theme.palette.primary.contrastText
	}
}));

function Login() {
	const classes = useStyles();
	const [selectedTab, setSelectedTab] = useState(0);

	function handleTabChange(event, value) {
		setSelectedTab(value);
	}

	return (
		<div
			className={clsx(
				classes.root,
				'flex flex-col flex-auto items-center justify-center flex-shrink-0 p-16 md:p-24'
			)}
		>
			<FuseAnimate animation="transition.expandIn">
				<div className="flex w-full max-w-400 md:max-w-3xl rounded-12 shadow-2xl overflow-hidden">
					<Card
						className={clsx(
							classes.leftSection,
							'flex flex-col w-full max-w-sm items-center justify-center shadow-0'
						)}
						square
					>
						<CardContent className="flex flex-col items-center justify-center w-full py-96 max-w-320">
							<FuseAnimate delay={300}>
								<div className="flex items-center mb-32">
									<img className="logo-icon  " src="https://www.bnc.ca/content/dam/bnc/commun/logo/logo-bnc-155x50.svg" alt="logo" />
								</div>
							</FuseAnimate>
						  <JWTLoginTab /> 
						</CardContent>

						<div className="flex flex-col items-center justify-center pb-32"> 
						BANQUE NATIONALE DU CANADA. Tous droits r??serv??s 2021.
						 
						</div>
					</Card>

					<div className={clsx(classes.rightSection, 'hidden md:flex flex-1 items-center justify-center p-64')}>
						<div className="max-w-320">
							<FuseAnimate animation="transition.slideUpIn" delay={400}>
								<Typography variant="h3" color="inherit" className="font-800 leading-tight">
									Welcome <br />
									to the <br />
									RIB Application!
								</Typography>
							</FuseAnimate>
							<FuseAnimate delay={500}>
								<Typography variant="subtitle1" color="inherit" className="mt-32">
									Powerful and professional admin template for Web Applications, CRM, CMS, Admin
									Panels and more.
								</Typography>
							</FuseAnimate>
						</div>
					</div>
				</div>
			</FuseAnimate>
		</div>
	);
}

export default Login;
