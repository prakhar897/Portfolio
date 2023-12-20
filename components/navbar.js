class MyComponent extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<div class="nav">
			<h1 class="name-heading"> Prakhar Gupta </h1>
	
			<a href="/" class="nav-a"> Home </a>
			<a href="/blog" class="nav-a"> Blog </a>
			<a href="/projects" class="nav-a"> Projects </a>
			<a href="/hireme" class="nav-a"> Hire Me </a>
		</div>
		`;
	}
}

customElements.define("my-navbar", MyComponent);
