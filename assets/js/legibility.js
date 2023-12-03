var toolbar = document.getElementById("toolbar");
toolbar.addEventListener("toggle", function() {
	if (toolbar.hasAttribute("open")) {
		toolbar.setAttribute("aria-expanded", "true");
	} else {
		toolbar.setAttribute("aria-expanded", "false");
	};
});
let ethd = document.documentElement.style;
function closeToolbar() {document.getElementById("toolbar").removeAttribute("open");};