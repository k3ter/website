export default class Page {
	constructor(kwarg){
		this.href = kwarg.href || null;
		this.title = kwarg.title || null;
		this.icon = kwarg.icon || null;
		this.page = kwarg.page || null;
	}
}