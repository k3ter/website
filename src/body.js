// React Imports
import React, {
	useState,
	useEffect
} from 'react';

//clsx
import clsx from "clsx";

// Material imports
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

// Custom imports
import useMobile from "./useMobile"

const useStyles = makeStyles((theme)=>({
	bodyContainer:{
		width:"100%",
		display:"flex",
		justifyContent:"center"
	},
	body:{
		paddingTop:theme.spacing(2)
	},
	bodyDesktop:{
		width:"75vh" // Body will be in visible aspect ratio 4:3
	},
	bodyMobile:{
		width:"100%"
	}
}))

export default function Body(props){
	const mobile = useMobile()
	const theme = useTheme();
	const classes = useStyles(theme);
	return(
		<Box className={classes.bodyContainer}>
			<Box className={clsx(classes.body,!mobile && classes.bodyDesktop, mobile && classes.bodyMobile)}>
				{props.children}
			</Box>
		</Box>
	)
}