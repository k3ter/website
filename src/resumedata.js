// Contains transcript data and table, as they are relatively large
import React, {useState} from "react";

// MUI Imports
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';

import Paper from '@material-ui/core/Paper';

// Custom components
import SafeLink from "./safelink"

/*
	SECTION 1: Transcript
*/
const transcript = [
	{cn: "AP Calculus BC", gr: 12, g1: null, g2: null },
	{cn: "AP Statistics", gr: 12, g1: null, g2: null },
	{cn: "AP Environmental Science", gr: 12, g1: null, g2: null },
	{cn: "AP Biology", gr: 12, g1: null, g2: null },
	{cn: "AP Psychology", gr: 12, g1: null, g2: null },
	{cn: "AP Government", gr: 12, g1: null, g2: null },
	{cn: "AP English Literature", gr: 12, g1: null, g2: null },
	{cn: "AP French Language", gr: 11, g1: "A+", g2: "A+" },
	{cn: "AP Chemistry", gr: 11, g1: "A+", g2: "A+" },
	{cn: "AP Physics 2", gr: 11, g1: "A", g2: "A+" },
	{cn: "AP Music Theory", gr: 11, g1: "A+", g2: "A+" },
	{cn: "AP English Language", gr: 11, g1: "A", g2: "A" },
	{cn: "AP Calculus AB", gr: 11, g1: "A+", g2: "A+" },
	{cn: "English 10", gr: 10, g1: "B+", g2: "B-" },
	{cn: "World History", gr: 10, g1: "A+", g2: "A+" },
	{cn: "Weight Training", gr: 10, g1: "A", g2: "A-" },
	{cn: "Chemistry", gr: 10, g1: "A+", g2: "A+" },
	{cn: "AP Physics 1", gr: 10, g1: "A+", g2: "A" },
	{cn: "Honors Integrated 3 Math", gr: 10, g1: "A+", g2: "A" },
	{cn: "French 3", gr: 10, g1: "A", g2: "A" },
	{cn: "English 9", gr: 9, g1: "C", g2: "A" },
	{cn: "Biology", gr: 9, g1: "A-", g2: "A+" },
	{cn: "Honors Integrated Math 2", gr: 9, g1: "B", g2: "A+" },
	{cn: "French 1", gr: 9, g1: "A+", g2: "A+" },
	{cn: "ROTC", gr: 9, g1: "B+", g2: "A-" },
	{cn: "AP Computer Science A", gr: 9, g1: "A", g2: "A" },
]

const useStyles = makeStyles(theme=>({
	row:{
		height:56
	}
}))

function TranscriptTable(props){
	const theme = useTheme();
	const classes = useStyles(theme);
	
	const [page, setPage] = useState(0)
	const [rowsPerPage, setRowsPerPage] = useState(10);
	
	const handleChangePage = (event, newPage) => {
		setPage(newPage)
	}
	
	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};
	
	const emptyRows = rowsPerPage - Math.min(rowsPerPage, transcript.length - page * rowsPerPage);
	
	return(
		<Paper>
			<TableContainer>
				<Table aria-label="transcript">
					<TableHead>
						<TableRow>
							<TableCell>Course Name</TableCell>
							<TableCell>Year</TableCell>
							<TableCell>Sem. 1 Grade</TableCell>
							<TableCell>Sem. 2 Grade</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
					{
						transcript.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
						.map((row, index)=>(
							<TableRow
								className={classes.row}
								key={index}
							>
								<TableCell>{row.cn}</TableCell>
								<TableCell>{row.gr}</TableCell>
								<TableCell>{row.g1 || "N/A"}</TableCell>
								<TableCell>{row.g2 || "N/A"}</TableCell>
							</TableRow>
						))
					}
					{
						Array.from({length:emptyRows},(v,k)=>k+1).map((row,index)=>(
						<TableRow className={classes.row} key={"er" + index}>
							<TableCell colSpan={6}/>
						</TableRow>
					))}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[5,10,15]}
				component="div"
				count={transcript.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
		</Paper>
	)
}

const TestData = {
	"act": {
		"sr":"https://drive.google.com/file/d/1G9bvfP24D2plgiPpKU9dPO5xkP4x1hX7/view?usp=sharing",
		"comp":34,
		"en":34, "ma": 35, "rd": 32, "ela":31, "sc": 33, "wr":9, "stem":34
	},
	"satmathii":{
		"sr":"https://drive.google.com/file/d/1XmPCG50wtCT0CLx8vfr2LvMdV1h-iq6b/view?usp=sharing",
		"s":800
	},
	"ap":{
		"sr":"https://drive.google.com/file/d/1WJukj-Eq8b5Avz2yhfbLOoP8VVuRLKTj/view?usp=sharing",
		"s":[
			{"n":"Computer Science A", "s":5},
			{"n":"Physics 1", "s":5}
		]
	}
}

function ActReport(props){
	const theme = useTheme()
	return(
		<Box>
		<Typography variant="subtitle1">ACT</Typography>
		<Typography variant="subtitle1"><SafeLink blank href={TestData.act.sr}>Unofficial Score Report</SafeLink></Typography>
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
		</Box>
	)
}

function SATMIIReport(props){
	const theme = useTheme()
	return(
		<Box>
		<Typography variant="subtitle1">SAT Math Level II</Typography>
		<Typography variant="subtitle1"><SafeLink blank href={TestData.satmathii.sr}>Unofficial Score Report</SafeLink></Typography>
		<Typography variant="body1">Score: {TestData.satmathii.s}</Typography>
	</Box>
	)
}

function APReport(props){
	const theme = useTheme();
	return(
	<Box>
		<Typography variant="subtitle1">Advanced Placement</Typography>
		<Typography variant="subtitle1"><SafeLink blank href={TestData.ap.sr}>Unofficial Score Report</SafeLink></Typography>
		
		<Paper>
			<TableContainer>
				<Table>
					<TableBody>
						{
							TestData.ap.s.map((test,index)=>(
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
	);
}

const TestReports = [
	ActReport,
	SATMIIReport,
	APReport
];

const AwardData = [
	{
		title:"Coronado Islander Awards",
		awards:{
			2018:["Certificate for Mathematics"],
			2019:["Certificate for Foreign Language", "Certificate for Science"],
			2020:["Medallion for Foreign Language", "Certificate for Science", "Certificate for Mathematics", "Certificate for English"],
		}
	},
	{
		title:"George Washington University Book Award",
		awards:{
			2020:null
		}
	}
]

function AwardReport(props){
	const theme = useTheme();
	return(
		<Box>
		{
			AwardData.map((awardMeta,index)=>(
				<Box style={{marginBottom:theme.spacing(2)}}>
					<Typography key={"at" + index} variant="subtitle1">{awardMeta.title}</Typography>
					{
						Object.keys(awardMeta.awards).map((awardYear, index2)=>(
							<Box key={"ac" + index2} style={{marginBottom:theme.spacing(1)}}>
								<Typography key={"a" + index2} style={{fontStyle:"italic"}} variant="body1">
									{awardYear}
								</Typography>
								{
									awardMeta.awards[awardYear] && awardMeta.awards[awardYear].join(", ")
								}
							</Box>
						))
					}
				</Box>
			))
		}
		</Box>
	);
}

function WorkExperienceReport(props){
	const theme = useTheme();
	return(
		<Box>
		
		</Box>
	)
}

export {TestData, TranscriptTable, transcript as Transcript, AwardData, TestReports, AwardReport}