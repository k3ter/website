/*
	
	This file manages pages so that pages can be dynamically added (as long as they are added here)
	
*/

import Errors from "./pages/error";
import Home from "./pages/home";
import About from "./pages/about";

const PageList = {
	"index": Home,
	"pages": [About],
	"errors": Errors
}

export default PageList;