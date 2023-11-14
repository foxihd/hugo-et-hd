var contrastSwitch = document.querySelector("input[name=contrast]");
var contrastState = document.getElementById("contrastState");
var defaultContrast = document.getElementById("defaultContrast");
var lessContrast = document.getElementById("lessContrast");
var moreContrast = document.getElementById("moreContrast");
let ethd = document.documentElement.style;
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
			ethd.setProperty('--deep', '#fff');
			ethd.setProperty('--ink', '#f0f0f0');
			ethd.setProperty('--mid', 'gray');
			ethd.setProperty('--link', '#ff0');
			ethd.setProperty('--paper', '#111');
		} else {
			ethd.setProperty('--deep', '#000');
			ethd.setProperty('--ink', '#111');
			ethd.setProperty('--mid', 'gray');
			ethd.setProperty('--link', '#36c');
			ethd.setProperty('--paper', '#f0f0f0');
		}
	} else if (lessContrast.checked == true) {
		if (lightSwitch.checked == true) {
			ethd.setProperty('--deep', '#fff');
			ethd.setProperty('--ink', '#e7e2e2');
			ethd.setProperty('--mid', '#7d8490');
			ethd.setProperty('--link', '#ff0');
			ethd.setProperty('--paper', '#13253d');
		} else {
			ethd.setProperty('--deep', '#000');
			ethd.setProperty('--ink', '#13253d');
			ethd.setProperty('--mid', '#7d8490');
			ethd.setProperty('--link', '#36c');
			ethd.setProperty('--paper', '#e7e2e2');
		}
	} else if (moreContrast.checked == true) {
		if (lightSwitch.checked == true) {
			ethd.setProperty('--deep', '#fff');
			ethd.setProperty('--ink', '#fff');
			ethd.setProperty('--mid', 'gray');
			ethd.setProperty('--link', '#ff0');
			ethd.setProperty('--paper', '#000');
		} else {
			ethd.setProperty('--deep', '#000');
			ethd.setProperty('--ink', '#000');
			ethd.setProperty('--mid', 'gray');
			ethd.setProperty('--link', '#36c');
			ethd.setProperty('--paper', '#fff');
		}
	}
};