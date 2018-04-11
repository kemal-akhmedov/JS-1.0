class options{
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height
		this.width = width
		this.bg = bg
		this.fontSize = textAlign
		this.textAlign = fontSize
	}

	createDiv(text) {
		let div = document.createElement('div');
		div.style.cssText = `width: ${this.width}; height: ${this.height}; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.fontSize};`
		document.body.appendChild(div); div.innerHTML = text;
	}

}

let styleDiv = new options('200px', '200px', 'red', '32px', 'center');
styleDiv.createDiv('Hello World');
console.log(styleDiv);
