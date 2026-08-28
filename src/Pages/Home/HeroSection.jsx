import { Link } from "react-scroll";

export default function HeroSection() {
	return (
    <section id="heroSection" className="hero--section">
	<div className="hero--section--content--box">
        <div className="hero--section--content">
		<p className="section--title">👋 Hello, I'm Antonio</p>
		<h1 className="hero--section--title">
            <span className="hero--section-title--color">Aspiring IT</span>{" "}
            <br />
            Professional
		</h1>
		<p className="hero--section-description">
            A Computing & Information Technologies student at the Rochester
            Institute of Technology,
            <br /> building practical skills across web development, systems, and IT infrastructure.
		</p>
        </div>
        <Link
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className="btn btn-primary"
        >
        Get In Touch
        </Link>
        </div>
        <div className="hero--section--img">
            <img src="/img/hero_img.png" alt="Antonio Zapata" />
        </div>
    </section>
	);
}