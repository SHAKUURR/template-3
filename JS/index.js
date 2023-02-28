document.querySelector(".barLink").addEventListener("click", function () {
	const sidebar = document.querySelector(".side-bar");
	const menu = document.getElementById("menu");
	if (sidebar.classList.contains("sidebarHidden")) {
		sidebar.classList.remove("sidebarHidden");
		menu.classList.toggle("active");
	} else {
		sidebar.classList.add("sidebarHidden");
		menu.classList.toggle("active");
	}
});
