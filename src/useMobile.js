import {useState, useEffect} from "react";

import useWindowDimensions from "./useWindowDimensions"

const defaultBoundary = 0.75;
// Default boundary between aspect ratio of mobile and desktop. Since the site breaks at 0.75, use that
// NOTE: Mobile is less than OR EQUAL TO the aspect ratio

export default function useMobile(boundary){
	boundary = boundary || defaultBoundary;
	const {height, width} = useWindowDimensions();
	return width/height <= boundary
}