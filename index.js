const revealGroups = [
	".craft-topline, .craft-heading, .craft-intro, .craft-note",
	".craft-main-image, .craft-card",
	".collection-header, .product-card, .collection-bottom",
	".brand-strip > *"
];

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
	const revealObserver = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) return;

			entry.target.classList.add("is-visible");
			observer.unobserve(entry.target);
		});
	}, {
		threshold: 0.12,
		rootMargin: "0px 0px -40px 0px"
	});

	document.documentElement.classList.add("motion-ready");

	revealGroups.forEach((selector) => {
		document.querySelectorAll(selector).forEach((element, index) => {
			element.classList.add("scroll-reveal");
			element.style.transitionDelay = `${Math.min(index * 100, 300)}ms`;
			revealObserver.observe(element);
		});
	});
}
