// React imports
import React, {
	useState,
	useEffect
} from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

//clsx
import clsx from "clsx";

// Material imports
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';

// Custom components
import Device from "./device";
import useMobile from "./useMobile";

const useStyles = makeStyles((theme) => ({
	leftAppbarContainer:{
		width:0,
		display:"flex",
		flexGrow:1
	},
	leftAppbarContainerMobile:{
		justifyContent:"Center",
		"& h1,h2,h3,h4,h5,h6,p":{
			textAlign:"center"
		}
	},
	leftAppbarContainerDesktop:{
		justifyContent:"flex-end",
		"& h1,h2,h3,h4,h5,h6,p":{
			textAlign:"right"
		}
	},
	centralDivider:{
		marginLeft:theme.spacing(1),
	},
	rightAppbarContainer:{
		width:0,
		display:"flex",
		justifyContent:"flex-start",
		flexGrow:1,
		alignSelf:"stretch"
	},
	toolbar:{
		justifyContent:"center"
	},
	appbarTitle:{
		margin:theme.spacing(1)
	},
	appbarButtonGroup:{
		height:"inherit"
	},
	//Drawer
	drawerListContainer:{
		width:"20rem",
		"& span":{
			fontSize:"2rem"
		}
	}
}));

/* Header URLs to be passed using props.pages in the Page format:
	{
		href: string - url of page
		title: string - title of page
		icon: component - Icon to render
		page: component - Component of page
	}
*/	

function DrawerItem(props){
	return(
		<ListItem button disabled={props.disabled} component={Link} to={props.to} key={props.text} onClick={props.toggleDrawer(false)}>
			<ListItemIcon>{props.icon}</ListItemIcon>
			<ListItemText primary={props.text}/>
		</ListItem>
	)
}

export default function Header(props){
	// Hook: true if mobile, false if desktop
	const mobile = useMobile();
	if(!props.pages)
		throw "props.pages must be defined, even if empty."
	let pages = props.pages;
	const theme = useTheme();
	const classes = useStyles(theme, mobile);
	
	const [drawerOpen, setDrawerOpen] = useState(false);

	const toggleDrawer = open=>event=>{
		if(event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		setDrawerOpen(open);
	}

	const DrawerItems = (
		<Box className={classes.drawerListContainer}>
			<List>
			<DrawerItem to="/" icon={<HomeIcon fontSize="large"/>} toggleDrawer={toggleDrawer} text="HOME"/>
			<Divider/>
			{
				pages.map((page,index)=>(
					<DrawerItem key={index} icon={page.icon || false} to={page.href} toggleDrawer={toggleDrawer} text={page.title.toUpperCase()}/>
				))
			}
			</List>
		</Box>
	)
	
	return(
		<AppBar color="inherit" position="static">
			<Toolbar className={classes.toolbar} variant="dense" color="inherit">
				<Device mobile>
					<SwipeableDrawer
						disableBackdropTransition
						disableDiscovery
						open={drawerOpen}
						onOpen={toggleDrawer(true)}
						onClose={toggleDrawer(false)}>
					{DrawerItems}
					</SwipeableDrawer>
				</Device>
				<Device desktop>
					<IconButton
						component={Link}
						to={(location)=>({...location,pathname: "/"})}
						edge="start" className={classes.homeIcon}
						color="inherit"
						aria-label="home">
						<HomeIcon />
					</IconButton>
				</Device>
				<Device mobile>
					<IconButton
						onClick={toggleDrawer(true)}
						edge="start" className={classes.homeIcon}
						color="inherit"
						aria-label="menu">
						<MenuIcon fontSize="large" />
					</IconButton>
				</Device>
				<Box className={clsx(classes.leftAppbarContainer, mobile && classes.leftAppbarContainerMobile, !mobile && classes.leftAppbarContainerDesktop)}>
					<Typography variant="h2" className={classes.appbarTitle}>{props.title}</Typography>
				</Box>
				<Device desktop>
					<Divider className={classes.centralDivider} orientation="vertical" flexItem />
					<Box className={classes.rightAppbarContainer}>
						<ButtonGroup
							size="large"
							className={classes.appbarButtonGroup}
							variant="text" 
							aria-label="page select button group"
							fullWidth={true}>
								{
									pages.map(
										(page, index)=>(
											<Button component={Link} key={index} to={location=>({...location, pathname:page.href})}>{page.title}</Button>
										)
									)
								}
						</ButtonGroup>
					</Box>
				</Device>
			</Toolbar>
		</AppBar>
	)
}