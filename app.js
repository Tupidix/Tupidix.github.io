// document.querySelector(`main section.active`)?.classList.remove("active");
// 	if (hashSplited[0] == "#search") {
// 		document.querySelector(`#search-input`).classList.add("active");
// 	} else {
// 		document.querySelector(`#search-input`)?.classList.remove("active");
// 	}

const themeSwitch = document.getElementById("theme-switch");
const body = document.getElementById("body");
const normal = document.getElementById("defaut");
const special = document.getElementById("special");

themeSwitch.addEventListener("click", () => {
    if (normal.className === "active"){
        normal.className = "inactive";
    } else {
        normal.className = "active";
    }

    if (special.className === "active"){
        special.className = "inactive";
    } else {
        special.className = "active";
    }

	if (body.className === "light") {
		body.className = "dark";
	} else if (body.className === "dark") {
		body.className = "light";
	}
});