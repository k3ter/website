import React from "react";

import Box from '@material-ui/core/Box';

import InfoIcon from '@material-ui/icons/Info';

import Body from "../body"
import useTitle from "../useTitle"

import Page from "../page"

function About(props){
	useTitle("About");
	return(
		<Body>
			<Box>
				Bonjour
			</Box>
		</Body>
	)
}

export default new Page({page: About, icon:<InfoIcon/>, href:"/about", title:"About"});
