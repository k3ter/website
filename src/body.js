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
import Divider from '@material-ui/core/Divider';

import Typography from '@material-ui/core/Typography';

// Custom components
import Device from "./device"

// Custom hooks
import useMobile from "./useMobile"

const useStyles = makeStyles((theme)=>({
	bodyContainer:{
		width:"100%",
		display:"flex",
		justifyContent:"center"
	},
	body:{
		paddingTop:theme.spacing(2),
		paddingBottom:theme.spacing(4),
	},
	bodyVariant1:{
		"& br":{
			marginBottom:theme.spacing(1)
		},
	},
	bodyDesktop:{
		width:"75vh" // Body will be in visible aspect ratio 4:3
	},
	bodyMobile:{
		width:"100%",
		paddingLeft:theme.spacing(2),
		paddingRight:theme.spacing(2),
	},
	spacer:{
		width:0,
		flexGrow:1
	},
	titleContainer:{
		display:"flex",
		justifyContent:"flex-end",
	},
	titleBox:{
		marginRight:theme.spacing(3),
		marginTop:theme.spacing(1)
	},
	divider:{
		marginBottom:theme.spacing(2)
	}
}))

export default function Body(props){
	const mobile = useMobile()
	const theme = useTheme();
	const classes = useStyles(theme);
	
	let variant = props.variant ? props.variant : (props.variant === undefined ? "Variant1" : null);
	let variantClass = classes["body" + variant] || null;
	
	return(
		<Box className={classes.bodyContainer}>
			{props.title && (
				<Device desktop>
					<Box className={clsx(classes.spacer, classes.titleContainer)}>
					<Box className={classes.titleBox}>
						<Typography variant="h4">{props.title}</Typography>
						<Divider/>
					</Box>
					</Box>
				</Device>
			)}
			
			<Box className={clsx(classes.body,!mobile && classes.bodyDesktop, mobile && classes.bodyMobile, variantClass)}>
				{props.title && (
				<Device mobile>
					<Box>
						<Typography variant="h4">{props.title}</Typography>
						<Divider className={classes.divider}/>
					</Box>
				</Device>
				)}
				{props.children}
			</Box>
			{props.title && (
				<Box className={classes.spacer}>
				</Box>
			)}
		</Box>
	)
}