var lightSwitch = document.getElementById("lightSwitch");
var lightState = document.getElementById("lightState");
if (window.matchMedia('(prefers-color-scheme: dark)').matches)
	{lightSwitch.setAttribute('checked', 'checked');}
lightSwitch.disabled = false;
lightSwitch.oninput = function useDarkMode() {
	if (lightSwitch.checked == true) {
		if (contrastSwitch.checked == true ) {
			setContrast();}
		else {
			document.documentElement.style.setProperty('--link', '#ff0');
			document.documentElement.style.setProperty('--ink', '#f0f0f0');
			document.documentElement.style.setProperty('--deep', '#fff');
			document.documentElement.style.setProperty('--mid', 'gray');
			document.documentElement.style.setProperty('--paper', '#111');
		}
		lightState.innerHTML = "🌙";
	} else {
		if (contrastSwitch.checked == true ) {
			setContrast();}
		else {
			document.documentElement.style.setProperty('--link', '#36c');
			document.documentElement.style.setProperty('--ink', '#111');
			document.documentElement.style.setProperty('--deep', '#000');
			document.documentElement.style.setProperty('--mid', 'gray');
			document.documentElement.style.setProperty('--paper', '#f0f0f0');
		}
		lightState.innerHTML = "☀";
	}
};