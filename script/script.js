function menuShow() {
	let menuMobile = document.querySelector(".mobile-nav");
	if (menuMobile.classList.contains("open")) {
		menuMobile.classList.remove("open");
	} else {
		menuMobile.classList.add("open");
	}
}

document.querySelector("#search-input").addEventListener("input", filterList);

function filterList() {
	const searchInput = document.querySelector("#search-input");
	const filter = searchInput.value.toLowerCase();
	const listItens = document.querySelectorAll(".course");

	listItens.forEach((item) => {
		let text = item.textContent;
		if (text.toLowerCase().includes(filter.toLowerCase())) {
			item.style.display = "";
		} else {
			item.style.display = "none";
		}
	});
}
