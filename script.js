//Navbar
document.addEventListener("DOMContentLoaded", function () {
	const customNavbar = document.getElementById("navbar");
	if (customNavbar === null) {
		return;
	}
	customNavbar.innerHTML = `
    <div class="nav">
        <h1 class="name-heading"> Prakhar Gupta </h1>

        <a href="./" class="nav-a"> Home </a>
        <a href="./blog" class="nav-a"> Blog </a>
        <a href="./projects" class="nav-a"> Projects </a>
        <a href="./hireme" class="nav-a"> Hire Me </a>
    </div>
    `;
});

//Inside Folder Navbar
document.addEventListener("DOMContentLoaded", function () {
	const insideFolderNavbar = document.getElementById("inside-folder-navbar");
	if (insideFolderNavbar === null) {
		return;
	}
	insideFolderNavbar.innerHTML = `
    <div class="nav">
        <h1 class="name-heading"> Prakhar Gupta </h1>

        <a href="../" class="nav-a"> Home </a>
        <a href="../blog" class="nav-a"> Blog </a>
        <a href="../projects" class="nav-a"> Projects </a>
        <a href="../hireme" class="nav-a"> Hire Me </a>
    </div>
    `;
});
