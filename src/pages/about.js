import React from "react";

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import InfoIcon from '@material-ui/icons/Info';

// Custom components
import Body from "../body"
import DocumentBase from "../documentbase"

// Custom hooks
import useTitle from "../useTitle"

// Page 
import Page from "../page"

// Custom components
import SafeA from "../safelink"

// make url changing easy
const URLs = {
	"rgd":"https://docs.google.com/document/d/1bUfyrT1kGyqet-HN5m6PimhuUdoo5ek678vR2_a13Sw/edit?usp=sharing"
}

function About(props){
	useTitle("About");
	return(
		<Body title="About">
			<Typography variant="body1">Hello! My name is Zane Clark, also known by the internet usernames Ketexon and occasionally Keter.<br/>
			At the time of writing, I am a high-school student aspring to enter the fields of physics, mathematics, computer science, music, linguistics, and philosophy! It will be hard to major in all of those subjects, but, nevertheless, all of life intrigues me!<br/>
			Below will be a pretty large resumé of myself. A shorter, page-length document resumé can be found as a <SafeA blank href={URLs.rgd}>Google Document</SafeA> and a less-frequently-updated PDF.
			</Typography>
		</Body>
	)
}

export default new Page({page: About, icon:<InfoIcon/>, href:"/about", title:"About"});
