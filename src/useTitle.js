/*

	function useTitle(title: string):null
	Hook to set the title of the page
	
	args
		title: string - Title to set document.title as

*/

import React, {useEffect} from "react";

export default function useTitle(title){
	useEffect(
		()=>{
			document.title = title;
		}
	);
}