var contrastSwitch = document.querySelector("input[name=contrast]");
var contrastState = document.getElementById("contrastState");
var defaultContrast = document.getElementById("defaultContrast");
var lessContrast = document.getElementById("lessContrast");
var moreContrast = document.getElementById("moreContrast");
if (window.matchMedia('(prefers-contrast: more)').matches) {
	moreContrast.setAttribute('checked', 'checked');}
else if (window.matchMedia('(prefers-contrast: less)').matches) {
	lessContrast.setAttribute('checked', 'checked');}
else {defaultContrast.setAttribute('checked', 'checked');};
lessContrast.disabled = false;
moreContrast.disabled = false;
function setContrast() {
	if (defaultContrast.checked == true) {
		if (lightSwitch.checked == true) {
			document.documentElement.style.setProperty('--deep', '#fff');
			document.documentElement.style.setProperty('--ink', '#f0f0f0');
			document.documentElement.style.setProperty('--mid', 'gray');
			document.documentElement.style.setProperty('--link', '#ff0');
			document.documentElement.style.setProperty('--paper', '#111');
		} else {
			document.documentElement.style.setProperty('--deep', '#000');
			document.documentElement.style.setProperty('--ink', '#111');
			document.documentElement.style.setProperty('--mid', 'gray');
			document.documentElement.style.setProperty('--link', '#36c');
			document.documentElement.style.setProperty('--paper', '#f0f0f0');
		}
	} else if (lessContrast.checked == true) {
		if (lightSwitch.checked == true) {
			document.documentElement.style.setProperty('--deep', '#fff');
			document.documentElement.style.setProperty('--ink', '#e7e2e2');
			document.documentElement.style.setProperty('--mid', '#7d8490');
			document.documentElement.style.setProperty('--link', '#ff0');
			document.documentElement.style.setProperty('--paper', '#13253d');
		} else {
			document.documentElement.style.setProperty('--deep', '#000');
			document.documentElement.style.setProperty('--ink', '#13253d');
			document.documentElement.style.setProperty('--mid', '#7d8490');
			document.documentElement.style.setProperty('--link', '#36c');
			document.documentElement.style.setProperty('--paper', '#e7e2e2');
		}
	} else if (moreContrast.checked == true) {
		if (lightSwitch.checked == true) {
			document.documentElement.style.setProperty('--deep', '#fff');
			document.documentElement.style.setProperty('--ink', '#fff');
			document.documentElement.style.setProperty('--mid', 'gray');
			document.documentElement.style.setProperty('--link', '#ff0');
			document.documentElement.style.setProperty('--paper', '#000');
		} else {
			document.documentElement.style.setProperty('--deep', '#000');
			document.documentElement.style.setProperty('--ink', '#000');
			document.documentElement.style.setProperty('--mid', 'gray');
			document.documentElement.style.setProperty('--link', '#36c');
			document.documentElement.style.setProperty('--paper', '#fff');
		}
	}
};