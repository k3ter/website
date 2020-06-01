// React imports
import React from "react";

// Custom imports
import useMobile from "./useMobile"

export default function Device(props){	
	const mobile = useMobile();
	if(props.desktop){ // ONLY RENDER IF DESKTOP
		return !mobile ? props.children || null : null
	}
	else if(props.mobile){ // ONLY RENDER IF MOBILE
		return mobile ? props.children || null : null
	}
	else{ // ALWAYS RENDER
		return props.children || null
	}
}