/**
 * Scrolls the window back to the top.
 *
 * Animates unless the visitor has asked for reduced motion, in which case it
 * jumps instantly so the preference is respected.
 */
export function scrollToTop() {
	const prefersReducedMotion =
		typeof window.matchMedia === "function" &&
		window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	window.scrollTo({
		top: 0,
		left: 0,
		behavior: prefersReducedMotion ? "auto" : "smooth",
	});
}
