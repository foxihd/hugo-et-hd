function setColor() {
	if (lightSwitch.checked == true) {
		lightState.innerHTML = "";
		if (lessContrast.checked == true) {
			ethd.setProperty('--deep', '#fff');
			ethd.setProperty('--ink', '#e7e2e2');
			ethd.setProperty('--mid', '#7d8490');
			ethd.setProperty('--link', '#ff0');
			ethd.setProperty('--paper', '#13253d');
		} else if (moreContrast.checked == true) {
			ethd.setProperty('--deep', '#fff');
			ethd.setProperty('--ink', '#fff');
			ethd.setProperty('--mid', 'gray');
			ethd.setProperty('--link', '#ff0');
			ethd.setProperty('--paper', '#000');
		} else {
			ethd.setProperty('--deep', '#fff');
			ethd.setProperty('--ink', '#f0f0f0');
			ethd.setProperty('--mid', 'gray');
			ethd.setProperty('--link', '#ff0');
			ethd.setProperty('--paper', '#111');	
		};
	} else {
		lightState.innerHTML = "";
		if (lessContrast.checked == true) {
			ethd.setProperty('--deep', '#000');
			ethd.setProperty('--ink', '#13253d');
			ethd.setProperty('--mid', '#7d8490');
			ethd.setProperty('--link', '#36c');
			ethd.setProperty('--paper', '#e7e2e2');
		} else if (moreContrast.checked == true) {
			ethd.setProperty('--deep', '#000');
			ethd.setProperty('--ink', '#000');
			ethd.setProperty('--mid', 'gray');
			ethd.setProperty('--link', '#36c');
			ethd.setProperty('--paper', '#fff');
		} else {
			ethd.setProperty('--deep', '#000');
			ethd.setProperty('--ink', '#111');
			ethd.setProperty('--mid', 'gray');
			ethd.setProperty('--link', '#36c');
			ethd.setProperty('--paper', '#f0f0f0');
		};
	};
};

if (window.matchMedia('(prefers-color-scheme: dark)').matches || localStorage.scheme == "dark") {
	lightSwitch.setAttribute('checked', 'checked');
};

if (window.matchMedia('(prefers-contrast: more)').matches || localStorage.contrast == "more") {
	moreContrast.setAttribute('checked', 'checked');
} else if (window.matchMedia('(prefers-contrast: less)').matches || localStorage.contrast == "less") {
	lessContrast.setAttribute('checked', 'checked');
} else {
	defaultContrast.setAttribute('checked', 'checked');
};

if (localStorage.contrast !== null || localStorage.scheme !== null) {
	setColor();
};