// React imports
import React, {
	useState,
	useEffect
} from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//Classname
import clsx from "clsx"

//Material imports
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import CssBaseline from '@material-ui/core/CssBaseline';

import queryString from "query-string";

// Custom components
// Outer shell
import Header from "./header"
import Device from "./device"

//Pages
import Home from "./home"
import {E404} from "./error"

const headerPages = [
	{title:"about", to:"/about"}
]

const title = "Zane Clark, Ketexon"

const theme = createMuiTheme({
	palette: {
		type: "dark",
	},
	typography:{
		fontSize:16
	}
});

const useStyles = makeStyles((theme) => ({
	
}));
export default function App(props) {
	const getQuery = queryString.parse(window.location.search);
	
	useEffect(
		()=>{
			document.title = title;
		}
	)
	
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Header pages={headerPages} title={title}/>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route component={E404}/>
				</Switch>
			</ThemeProvider>
		</Router>
	);
}