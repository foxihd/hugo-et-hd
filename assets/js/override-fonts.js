var fontState = document.getElementById("fontState");
var fontSwitch = document.getElementById("fontSwitch");
fontSwitch.checked = false;
fontSwitch.disabled = false;
fontSwitch.oninput = function useOpenDyslexic() {
	if (fontSwitch.checked == true) {
		ethd.setProperty('--rm', 'OpenDyslexic');
		ethd.setProperty('--sf', 'OpenDyslexic');
		fontState.innerHTML = "";
	} else {
		ethd.setProperty('--rm', 'crimson');
		ethd.setProperty('--sf', 'Rosario');
		fontState.innerHTML = "";
	}
};
var fontSizeRange = document.getElementById("fontSizeRange");
var fontSizeState = document.getElementById("fontSizeState");
fontSizeRange.disabled = false;
fontSizeRange.oninput = function setFontSize() {
		fontSizeState.innerHTML = Math.floor(fontSizeRange.value * 100);
		ethd.setProperty('--fontScale', fontSizeRange.value);
};
var baselineStretchRange = document.getElementById("baselineStretchRange");
var baselineStretchState = document.getElementById("baselineStretchState");
baselineStretchRange.disabled = false;
baselineStretchRange.oninput = function setStretch() {
		baselineStretchState.innerHTML = Math.floor(baselineStretchRange.value * 100);
		ethd.setProperty('--baselineStretch', baselineStretchRange.value);
};