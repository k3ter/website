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

// Contains transcript data.
import TranscriptTable from "../transcript"

// Contains test data
import TestData from "../testscoredata"

// make url changing easy
const URLs = {
	"rgd":"https://docs.google.com/document/d/1bUfyrT1kGyqet-HN5m6PimhuUdoo5ek678vR2_a13Sw/edit?usp=sharing",
	"rpdf":"https://drive.google.com/file/d/1WbxQcbHNKd7ea6w_ZBZEfDkBFHGx2NsC/view?usp=sharing",
	"utr":"https://drive.google.com/file/d/1057OXYIWbP4ObrubYX_8kvHSrMIm74bq/view?usp=sharing",
	"actusr":"https://drive.google.com/file/d/1G9bvfP24D2plgiPpKU9dPO5xkP4x1hX7/view?usp=sharing",
	"satmiiusr":"https://drive.google.com/file/d/1XmPCG50wtCT0CLx8vfr2LvMdV1h-iq6b/view?usp=sharing",
	"apusr":"https://drive.google.com/file/d/1WJukj-Eq8b5Avz2yhfbLOoP8VVuRLKTj/view?usp=sharing",
	
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
				<Typography variant="h4">Education</Typography>
				<Box className={classes.resumeEducationContainer}>
					<Typography variant="h5">Coronado High School</Typography>
					<Typography variant="h6">Full Transcript and Course List</Typography>
					<Typography variant="subtitle1">GPA W/UW: 4.13/3.81</Typography>
					<Typography variant="subtitle1"><SafeLink blank href={URLs.utr}>Unofficial Transcript PDF</SafeLink></Typography>
					<TranscriptTable/>
					<Typography variant="h6">Test Scores</Typography>
					<Typography variant="subtitle1">ACT</Typography>
					<Typography variant="subtitle1"><SafeLink blank href={URLs.actusr}>Unofficial Score Report</SafeLink></Typography>
					<Paper>
						<TableContainer>
							<Table>
								<TableBody>
									<TableRow>
										<TableCell align="right">Composite</TableCell>
										<TableCell colSpan={3} align="left">{TestData.act.comp}</TableCell>
										<TableCell align="right">English</TableCell>
										<TableCell align="left">{TestData.act.en}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell align="right">Math</TableCell>
										<TableCell align="left">{TestData.act.ma}</TableCell>
										<TableCell align="right">Reading</TableCell>
										<TableCell align="left">{TestData.act.rd}</TableCell>
										<TableCell align="right">Science</TableCell>
										<TableCell align="left">{TestData.act.sc}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell align="right">Writing</TableCell>
										<TableCell align="left">{TestData.act.wr}</TableCell>
										<TableCell align="right">English Language Arts</TableCell>
										<TableCell align="left">{TestData.act.ela}</TableCell>
										<TableCell align="right">STEM</TableCell>
										<TableCell align="left">{TestData.act.stem}</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</TableContainer>
					</Paper>
					<Box className={classes.spacer}/>
					<Typography variant="subtitle1">SAT Math Level II</Typography>
					<Typography variant="subtitle1"><SafeLink blank href={URLs.satmiiusr}>Unofficial Score Report</SafeLink></Typography>
					<Typography variant="body1">Score: {TestData.satmathii}</Typography>
					<Box className={classes.spacer}/>
					<Typography variant="subtitle1">Advanced Placement</Typography>
					<Typography variant="subtitle1"><SafeLink blank href={URLs.apusr}>Unofficial Score Report</SafeLink></Typography>
					
					<Paper>
						<TableContainer>
							<Table>
								<TableBody>
									{
										Object.values(TestData.ap).map((test,index)=>(
											<TableRow key={"ap" + index}>
												<TableCell style={{width:"50%"}} align="right">{test.n}</TableCell>
												<TableCell style={{width:"50%"}} align="left">{test.s}</TableCell>
											</TableRow>
										))
									}
								</TableBody>
							</Table>
						</TableContainer>
					</Paper>
				</Box>
			</Box>
		</Body>
	)
}

export default new Page({page: About, icon:<InfoIcon/>, href:"/about", title:"About"});
