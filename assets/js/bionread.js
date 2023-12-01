var bionReadSwitch = document.getElementById("bionReadSwitch");
var bionReadState = document.getElementById("bionReadState");
var bionReadRestore = document.querySelector("#content") ;
var bionReadSnapshot = document.getElementById("bionReadSnapshot") ;
bionReadSwitch.checked = false;
bionReadSwitch.disabled = false;
bionReadSwitch.oninput = function bionRead() {
  	if (bionReadSwitch.checked == true) {
		if (lightSwitch.checked == true) {
			document.documentElement.style.setProperty('--ink', '#ccc');
		} else {
			document.documentElement.style.setProperty('--ink', '#333');
		}
		document.documentElement.style.setProperty('--bionic', '0.02em');
		bionReadState.innerHTML = "";
		bionReadSnapshot.innerHTML = bionReadRestore.innerHTML;
		(() => {
			function i() {
				let r = [...document.querySelectorAll("[data-bionRead-safe]")];
				r.length && r.forEach(l => {
					[...l.querySelectorAll("h1, h2, h3, h4, h5, p, a, li, blockquote")].forEach(e => {
						let a = e.innerText.split(" ").map(t => {
							let n = t.length;
							if (n === 1) return `<b class=k>${t}</b>`;
							let c = Math.ceil(n / 2);
							return t.split("").map((o, s) => s < c ? `<b class=k>${o}</b>` : o).join("")
						});
						e.innerHTML = a.join(" ")
					})
				})
			}
			document.addEventListener("DOMContentLoaded", i());
		})();
	} else {
		setContrast();
		bionReadState.innerHTML = "";
		bionReadRestore.innerHTML = bionReadSnapshot.innerHTML;
		document.documentElement.style.setProperty('--bionic', '0');
		bionReadSnapshot.innerHTML = "";
		localStorage.clear();}
};