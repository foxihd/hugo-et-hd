const ethd = document.documentElement.style;
var panel = document.getElementById("a11y");
var enabled = document.getElementById("enabled");
	enabled.style.display = "block";
var bionReadState = document.getElementById("bionReadState");
var bionReadSwitch = document.getElementById("bionReadSwitch");
	bionReadSwitch.checked = false;
	bionReadSwitch.disabled = false;
var fontState = document.getElementById("fontState");
var fontSwitch = document.getElementById("fontSwitch");
	fontSwitch.disabled = false;
var fontSize = document.getElementById("fontSize");
var fontSizeState = document.getElementById("fontSizeState");
	fontSize.disabled = false;
var baselineStretch = document.getElementById("baselineStretch");
var baselineStretchState = document.getElementById("baselineStretchState");
	baselineStretch.disabled = false;
var lightState = document.getElementById("lightState");
var lightSwitch = document.getElementById("lightSwitch");
	lightSwitch.disabled = false;
var defaultContrast = document.getElementById("defaultContrast");
var lessContrast = document.getElementById("lessContrast");
	lessContrast.disabled = false;
var moreContrast = document.getElementById("moreContrast");
	moreContrast.disabled = false;
var saveButton = document.getElementById("save");
var resetButton = document.getElementById("reset");

panel.ontoggle = function expanded() {
	if (panel.hasAttribute("open")) {
		panel.setAttribute("aria-expanded", "true");
	} else {
		panel.setAttribute("aria-expanded", "false");
	};
};

function closePanel() {panel.removeAttribute("open");};

localStorage.is = "enable";

if (localStorage.is == "enable") {
	saveButton.disabled = false;
	resetButton.disabled = false;
	function reset() {
		localStorage.clear();
		window.location.reload();
	};

	function save() {
		if (lightSwitch.checked == true) {
			localStorage.scheme = "dark";
		} else {
			localStorage.scheme = "light";
		};

		if (defaultContrast.checked == true) {
			localStorage.contrast = "default";
		} else if (lessContrast.checked == true) {
			localStorage.contrast = "less";
		} else if (moreContrast.checked == true) {
			localStorage.contrast = "less";
		};

		if (fontSwitch.checked == true) {
			localStorage.font = "OpenDyslexic";
		};

		localStorage.fontSize = fontSize.value;

		localStorage.stretchSize = baselineStretch.value;

		closePanel();
	};
};
