// Contains transcript data and table, as they are relatively large
import React, {useState} from "react";

import { makeStyles, useTheme } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';

import Paper from '@material-ui/core/Paper';

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

export default function TranscriptTable(props){
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