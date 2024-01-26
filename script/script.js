document.addEventListener("DOMContentLoaded", function () {
	const menuMobile = document.querySelector(".mobile-nav");
	const searchInput = document.querySelector("#search-input");
	const listItens = document.querySelectorAll(".course");

	function menuShow() {
		if (menuMobile.classList.contains("open")) {
			menuMobile.classList.remove("open");
		} else {
			menuMobile.classList.add("open");
		}
	}

	searchInput.addEventListener("input", filterList);

	function filterList() {
		let filter = searchInput.value.toLowerCase();

		listItens.forEach((item) => {
			let text = item.textContent;
			if (text.toLowerCase().includes(filter)) {
				item.style.display = "";
			} else {
				item.style.display = "none";
			}
		});
	}
});

// function menuShow() {
// 	let menuMobile = document.querySelector(".mobile-nav");
// 	if (menuMobile.classList.contains("open")) {
// 		menuMobile.classList.remove("open");
// 	} else {
// 		menuMobile.classList.add("open");
// 	}
// }

// document.querySelector("#search-input").addEventListener("input", filterList);

// function filterList() {
// 	const searchInput = document.querySelector("#search-input");
// 	const filter = searchInput.value.toLowerCase();
// 	const listItens = document.querySelectorAll(".course");

// 	listItens.forEach((item) => {
// 		let text = item.textContent;
// 		if (text.toLowerCase().includes(filter.toLowerCase())) {
// 			item.style.display = "";
// 		} else {
// 			item.style.display = "none";
// 		}
// 	});
// }
