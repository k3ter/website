//React imports
import React from "react";

import { makeStyles, useTheme } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme=>({
	divider:{
		marginBottom:theme.spacing(1)
	}
}));

export default function DocumentBase(props){
	const theme = useTheme();
	const classes = useStyles(theme);
	return(
		<Box>
			<Typography variant="h4">{props.title}</Typography>
			<Divider className={classes.divider}/>
			{props.children}
		</Box>
	)
}