// React imports
import React from "react";

// Material Imports
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import InfoIcon from '@material-ui/icons/Info';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper';

// Custom components
import Body from "../body"

// Custom hooks
import useTitle from "../useTitle"

// Page 
import Page from "../page"

// Custom components
import SafeLink from "../safelink"

// Contains all data needed.
import {TestReports, TranscriptTable, AwardReport} from "../resumedata"


// make url changing easy
const URLs = {
	"rgd":"https://docs.google.com/document/d/1bUfyrT1kGyqet-HN5m6PimhuUdoo5ek678vR2_a13Sw/edit?usp=sharing",
	"rpdf":"https://drive.google.com/file/d/1WbxQcbHNKd7ea6w_ZBZEfDkBFHGx2NsC/view?usp=sharing",
	"utr":"https://drive.google.com/file/d/1057OXYIWbP4ObrubYX_8kvHSrMIm74bq/view?usp=sharing"
	
}

const useStyles = makeStyles(theme=>({
	spacer:{
		height:theme.spacing(1)
	},
	spacer:{
		height:theme.spacing(2),
		minHeight:theme.spacing(2)
	},
	divider:{
		marginBottom:theme.spacing(2),
	},
	resumeContainer:{
	},
	resumeSubTitleContainer:{
		display:"flex"
	},
	resumeSubTitleElementContainer:{
		width:0,
		flexGrow:1,
		"&:not(:last-child)":{
			marginRight:theme.spacing(1)
		},
		"&:last-child":{
			marginLeft:theme.spacing(1)
		},
	},
	resumeBodyP:{
		textIndent:theme.spacing(4),
		wordBreak:"break-all",
		hyphens:"auto",
	}
}));

function About(props){
	const theme = useTheme();
	const classes = useStyles(theme);
	
	useTitle("About");
	return(
		<Body title="About">
			<Typography variant="body1">Hello! My name is Zane Clark, also known by the internet usernames Ketexon and occasionally Keter.<br/>
			At the time of writing, I am a high-school student aspring to enter the fields of physics, mathematics, computer science, music, linguistics, and philosophy! It will be hard to major in all of those subjects, but, nevertheless, all of life intrigues me!<br/>
			Below will be a pretty large resumé of myself. A shorter, page-length document resumé can be found as a <SafeLink blank href={URLs.rgd}>Google Document</SafeLink> and a less-frequently-updated <SafeLink blank href={URLs.rpdf}>PDF</SafeLink>.
			</Typography>
			<Box className={classes.spacer}/>
			<Typography variant="h4">
			Resumé
			</Typography>
			<Divider className={classes.divider}/>
			<Box className={classes.resumeContainer}>
				<Typography variant="h3" align="center">Zane Clark</Typography>
				<Box className={classes.resumeSubTitleContainer}>
					<Box className={classes.resumeSubTitleElementContainer}>
						<Typography variant="h6" align="right">zane.a.s.clark@gmail.com</Typography>
					</Box>
					<Divider orientation="vertical" flexItem/>
					<Box className={classes.resumeSubTitleElementContainer}>
						<Typography variant="h6">ketexon.xyz</Typography>
					</Box>
				</Box>
				<Typography variant="h4">Academia</Typography>
				<Box className={classes.resumeEducationContainer}>
					<Typography variant="h5">Coronado High School</Typography>
					<Typography variant="h6">Full Transcript and Course List</Typography>
					<Typography variant="subtitle1">GPA W/UW: 4.13/3.81</Typography>
					<Typography variant="subtitle1"><SafeLink blank href={URLs.utr}>Unofficial Transcript PDF</SafeLink></Typography>
					<TranscriptTable/>
					<Typography variant="h6">Test Scores</Typography>
					{
						TestReports.map((Component, index)=>(
							<Component key={"tt" + index}/>
						)).reduce(
							(prev, curr)=>[prev, <Box key={"sp" + curr.props.index} className={classes.spacer}/>, curr]
						)
					}	
					<Typography variant="h6">Awards</Typography>		
					<AwardReport/>
				</Box>
			</Box>
		</Body>
	)
}

export default new Page({page: About, icon:<InfoIcon/>, href:"/about", title:"About"});
