const ethd = document.documentElement.style;
var panelButton= document.getElementById("a11y");
var panelA11ySet = document.getElementById("panelA11y");
	panelA11ySet.disabled = false;
var enabled = document.getElementById("enabled");
	enabled.style.display = "block";
var bionReadState = document.getElementById("bionReadState");
var bionReadSwitch = document.getElementById("bionReadSwitch");
	bionReadSwitch.checked = false;
var fontState = document.getElementById("fontState");
var fontSwitch = document.getElementById("fontSwitch");
var fontSize = document.getElementById("fontSize");
var fontSizeState = document.getElementById("fontSizeState");
var baselineStretch = document.getElementById("baselineStretch");
var baselineStretchState = document.getElementById("baselineStretchState");
var lightState = document.getElementById("lightState");
var lightSwitch = document.getElementById("lightSwitch");
var defaultContrast = document.getElementById("defaultContrast");
var lessContrast = document.getElementById("lessContrast");
var moreContrast = document.getElementById("moreContrast");
var saveButton = document.getElementById("save");
var resetButton = document.getElementById("reset");

panelButton.ontoggle = function expanded() {
	if (panelButton.hasAttribute("open")) {
		panelButton.setAttribute("aria-expanded", "true");
	} else {
		panelButton.setAttribute("aria-expanded", "false");
	};
};

function closePanel() {panelButton.removeAttribute("open");};

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
