var lightSwitch = document.getElementById("lightSwitch");
var lightState = document.getElementById("lightState");
if (window.matchMedia('(prefers-color-scheme: dark)').matches)
	{lightSwitch.setAttribute('checked', 'checked');}
lightSwitch.disabled = false;
lightSwitch.oninput = function useDarkMode() {
	if (lightSwitch.checked == true) {
		if (contrastSwitch.checked == true ) {
			setContrast();
		} else {
			ethd.setProperty('--link', '#ff0');
			ethd.setProperty('--ink', '#f0f0f0');
			ethd.setProperty('--deep', '#fff');
			ethd.setProperty('--mid', 'gray');
			ethd.setProperty('--paper', '#111');
		}
		lightState.innerHTML = "";
	} else {
		if (contrastSwitch.checked == true ) {
			setContrast();
		} else {
			ethd.setProperty('--link', '#36c');
			ethd.setProperty('--ink', '#111');
			ethd.setProperty('--deep', '#000');
			ethd.setProperty('--mid', 'gray');
			ethd.setProperty('--paper', '#f0f0f0');
		}
		lightState.innerHTML = "";
	}
};