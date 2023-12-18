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


document.addEventListener('DOMContentLoaded', function() {
  const contentDiv = document.getElementById('content');
  const navLinks = document.querySelectorAll('nav a');

  // Load content based on clicked link
  function loadContent(url) {
    fetch(url)
      .then(response => response.text())
      .then(html => {
        contentDiv.innerHTML = html;
        history.pushState({}, '', url.replace('.html', ''));
      })
      .catch(error => console.error('Error fetching content:', error));
  }

  // Handle link clicks
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const url = this.getAttribute('href');
      loadContent(url);
    });
  });

  // Handle back/forward buttons
  window.addEventListener('popstate', function(event) {
    const url = location.pathname;
    loadContent(url + '.html');
  });
});