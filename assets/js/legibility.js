var toolbar = document.getElementById("a11y");
toolbar.addEventListener("toggle", function() {
	if (toolbar.hasAttribute("open")) {
		toolbar.setAttribute("aria-expanded", "true");
	} else {
		toolbar.setAttribute("aria-expanded", "false");
	};
});
var enabled = document.getElementById("enabled");
enabled.style.display = 'block';
let ethd = document.documentElement.style;
function closeA11y() {document.getElementById("a11y").removeAttribute("open");};