function loadMyContent() {
	fetch("http://localhost:3000/my-content.txt", { mode: "cors" })
		.then((response) => response.text())
		.then((data) => {
			// Replace the content inside the Article part with the fetched content
			document.querySelector("article").innerHTML = data;
		})
		.catch((error) => {
			console.error("Error fetching content:", error);
		});
}

function showMyName() {
	alert("My name is Pham Thanh My");
}