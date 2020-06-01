import React from "react";

import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';

import HomeIcon from '@material-ui/icons/Home';

import Body from "../body"
import useTitle from "../useTitle"

import Page from "../page"

function Home(props){
	useTitle("Home");
	return(
		<Body>
			<Box>
				<Typography variant="body1">Hello</Typography>
			</Box>
		</Body>
	)
}

export default new Page({page: Home, icon:<HomeIcon/>, href:"/", title:"Home"});