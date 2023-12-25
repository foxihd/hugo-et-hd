function useOpenDyslexic() {
	if (fontSwitch.checked == true) {
		ethd.setProperty('--rm', 'OpenDyslexic');
		ethd.setProperty('--sf', 'OpenDyslexic');
		fontState.innerHTML = "";
	} else {
		ethd.setProperty('--rm', 'crimson');
		ethd.setProperty('--sf', 'Rosario');
		fontState.innerHTML = "";
	};
};

if (localStorage.font == "OpenDyslexic") {
	fontSwitch.setAttribute('checked', 'checked');
	useOpenDyslexic();
};

function setFontSize() {
	fontSizeState.innerHTML = Math.floor(fontSize.value * 100);
	ethd.setProperty('--fontScale', fontSize.value);
};

if (localStorage.fontSize !== null) {
	fontSize.value = localStorage.fontSize;
	setFontSize();
};

function setStretch() {
	baselineStretchState.innerHTML = Math.floor(baselineStretch.value * 100);
	ethd.setProperty('--baselineStretch', baselineStretch.value);
};

if (localStorage.stretchSize !== null) {
	baselineStretch.value = localStorage.stretchSize;
	setStretch();
};