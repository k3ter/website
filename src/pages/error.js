// React imports
import React from "react";

// Material imports
import { useTheme, makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Body from "../body"
import useTitle from "../useTitle"

import Page from "../page"

const errorInfo = {
	404: {
		errorNumber:404,
		message:"Page not found.",
		desc:"The page directed to is not a registered page."
	}
}

const useStyles = makeStyles(theme=>({
	divider: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
	}
}));


function ErrorPage(props){
	const theme = useTheme();
	const classes = useStyles(theme);
	useTitle(`Error ${props.errorNumber}: Page not found`);
	return(
		<Body>
			<Typography variant="h3" color="error">Error {props.errorNumber}</Typography>
				{
					props.message ? (
					<>
						<Divider className={classes.divider}/>
						<Typography variant="h4">{props.message}</Typography>
					</>
					) : null
				}
				{
					props.desc ? (
					<>
						<Divider className={classes.divider}/>
						<Typography variant="body1">{props.desc}</Typography>
					</>
					) : null
				}
		</Body>
	)
}

function E404(props){
	useTitle("Error 404: Page not found");
	return (
		<ErrorPage {...errorInfo[404]}/>
	)
}
export default {
	404: new Page({
		page: E404,
	}),
};