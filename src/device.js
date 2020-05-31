// React imports
import React from "react";

// Custom imports
import useWindowDimensions from "./useWindowDimensions"

const defaultBoundary = 0.75;
// Default boundary between aspect ratio of mobile and desktop. Since the site breaks at 0.75, use that
// NOTE: Mobile is less than OR EQUAL TO the aspect ratio
export default function Device(props){	
	const boundary = props.boundary || defaultBoundary;
	const {height, width} = useWindowDimensions();
	if(props.desktop){ // ONLY RENDER IF DESKTOP
		return width/height > boundary ? props.children : null
	}
	else if(props.mobile){ // ONLY RENDER IF MOBILE
		return width/height <= boundary ? props.children : null
	}
	else{ // ALWAYS RENDER
		return props.children
	}
}