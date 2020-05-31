// React imports
import React, {
	useState,
	useEffect
} from 'react';
import {
  BrowserRouter as Router,
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
import Home from "./home"
import Header from "./header"

const title = "Ketexon | Zane Clark"

const theme = createMuiTheme({
	palette: {
		type: "dark",
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
				<Header/>
				<Switch>
					<Route exact path="/">
						<Home/>
					</Route>
				</Switch>
			</ThemeProvider>
		</Router>
	);
}