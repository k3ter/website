// React imports
import React, {
	useState,
	useEffect
} from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

// Material imports
import { makeStyles, useTheme } from '@material-ui/core/styles';


import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import HomeIcon from '@material-ui/icons/Home';


const useStyles = makeStyles((theme) => ({
	leftAppbarContainer:{
		width:0,
		display:"flex",
		justifyContent:"flex-end",
		flexGrow:1
	},
	rightAppbarContainer:{
		width:0,
		display:"flex",
		justifyContent:"flex-start",
		flexGrow:1,
		alignSelf:"stretch"
	},
	toolbar:{
		justifyContent:"center"
	},
	appbarTitle:{
		margin:theme.spacing(1)
	},
	appbarButtonGroup:{
		height:"inherit"
	}
}));

export default function Header(props){
	const theme = useTheme();
	const classes = useStyles(theme);
	
	return(
		<AppBar color="inherit" position="static">
			<Toolbar className={classes.toolbar} variant="dense" color="inherit">
				<IconButton component={Link} to={(location)=>({...location,pathname: "/"})} edge="start" className={classes.homeIcon} color="inherit" aria-label="home">
					<HomeIcon />
				</IconButton>
				<Box className={classes.leftAppbarContainer}>
					<Typography variant="h2" className={classes.appbarTitle}>Zane Clark, Ketexon</Typography>
				</Box>
				<Divider orientation="vertical" flexItem />
				<Box className={classes.rightAppbarContainer}>
					<ButtonGroup
						size="large"
						className={classes.appbarButtonGroup}
						variant="text" 
						aria-label="page select button group"
						fullWidth={true}>
						<Button>One</Button>
						<Button>Two</Button>
						<Button>Three</Button>
					</ButtonGroup>
				</Box>
			</Toolbar>
		</AppBar>
	)
}