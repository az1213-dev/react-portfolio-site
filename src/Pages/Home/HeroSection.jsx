export default function HeroSection() {
	return (
		<section id="heroSection" className="hero-section">
			<div className="hero--section-content-box">
				<div className="hero--section-content">
					<p className="section--title">Hello, I'm Antonio</p>
					<h1 className="hero--section-title">
						<span className="hero--section-title-color">Full Stack</span>{" "}
						<br />
						Developer
					</h1>
					<p className="hero--section-description">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						<br /> Dolorum, quas. Amet soluta assumenda cum?
					</p>
					<button className="btn btn-primary">Get In Touch</button>
				</div>
				<div className="hero--section-img">
					<img src="https://placehold.co/600x400" alt="Hero Section" />
				</div>
			</div>
		</section>
	);
}