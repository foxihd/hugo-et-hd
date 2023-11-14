var fontState = document.getElementById("fontState");
var fontSwitch = document.getElementById("fontSwitch");
fontSwitch.checked = false;
fontSwitch.disabled = false;
fontSwitch.oninput = function useOpenDyslexic() {
	let ethd = document.documentElement.style;
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
fontSizeState.innerHTML = fontSizeRange.value * 10;
fontSizeRange.oninput = function setFontSize() {
		fontSizeState.innerHTML = fontSizeRange.value * 10 ;
		ethd.setProperty('--fontScale', fontSizeRange.value / 10);
};
var baselineStretchRange = document.getElementById("baselineStretchRange");
var baselineStretchState = document.getElementById("baselineStretchState");
baselineStretchRange.disabled = false;
baselineStretchState.innerHTML = baselineStretchRange.value * 10;
baselineStretchRange.oninput = function setStretch() {
		baselineStretchState.innerHTML = baselineStretchRange.value * 10;
		ethd.setProperty('--baselineStretch', baselineStretchRange.value / 10);
};