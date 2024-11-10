const button = document.querySelector("#toggle");
const nav = document.querySelector("#list-nav");

button.addEventListener("click", () => {
	const isActive = nav.getAttribute("data-active");

	if (isActive === "false") {
		nav.setAttribute("data-active", true);
	} else {
		nav.setAttribute("data-active", false);
	}
});
