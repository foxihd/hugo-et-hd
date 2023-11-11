document.addEventListener("DOMContentLoaded", function() {
	renderMathInElement(document.body, {
			delimiters: [
			{left: '$', right: '$', display: false},
			{left: '$$', right: '$$', display: true},
			{left: '\(', right: '\)', display: false},
			{left: '\[', right: '\]', display: true},
			{left: '\\(', right: '\\)', display: false},
			{left: '\\[', right: '\\]', display: true},
			{left: "\begin{equation}", right: "\end{equation}", display: true},
			{left: "\begin{align}", right: "\end{align}", display: true},
		],
		throwOnError : false
	});
});