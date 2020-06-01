import {useState, useEffect} from "react";

import useWindowDimensions from "./useWindowDimensions"

const defaultBoundary = 1;
// Default boundary between aspect ratio of mobile and desktop. Using a default of 1 due to compatability
// NOTE: Mobile is less than OR EQUAL TO the aspect ratio

export default function useMobile(boundary){
	boundary = boundary || defaultBoundary;
	const {height, width} = useWindowDimensions();
	return width/height <= boundary
}