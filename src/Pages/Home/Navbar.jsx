import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { scrollToTop } from "../../utils/scroll";

function Navbar() {
    const [navActive, setNavActive] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === "/";

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    const closeMenu = () => {
        setNavActive(false);
    };

    const handleNavClick = (sectionId) => {
        closeMenu();
        if (!isHomePage) {
            navigate(`/#${sectionId}`);
        }
    };

    // On the home page there is nothing to navigate to, so animate back up
    // instead of letting the router re-render and snap to the top.
    const handleLogoClick = (event) => {
        closeMenu();
        if (isHomePage) {
            event.preventDefault();
            scrollToTop();
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu();
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu();
        }
    }, [location.pathname]);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div>
                <RouterLink to="/" onClick={handleLogoClick}>
                    <img
                        className="site--logo"
                        src="/img/logo.svg"
                        alt="Antonio Zapata Logo"
                        width="75"
                        height="75"
                    />
                </RouterLink>
            </div>
            <button
                type="button"
                className={`nav__hamburger ${navActive ? "active" : ""}`}
                onClick={toggleNav}
                aria-label="Toggle navigation menu"
            >
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </button>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        {isHomePage ? (
                            <ScrollLink
                                onClick={closeMenu}
                                activeClass="navbar--active-content"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="heroSection"
                                className="navbar--content"
                            >
                                Home
                            </ScrollLink>
                        ) : (
                            <button
                                type="button"
                                onClick={() => handleNavClick("heroSection")}
                                className="navbar--content nav--btn-link"
                            >
                                Home
                            </button>
                        )}
                    </li>
                    <li>
                        {isHomePage ? (
                            <ScrollLink
                                onClick={closeMenu}
                                activeClass="navbar--active-content"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="MyPortfolio"
                                className="navbar--content"
                            >
                                Portfolio
                            </ScrollLink>
                        ) : (
                            <button
                                type="button"
                                onClick={() => handleNavClick("MyPortfolio")}
                                className="navbar--content nav--btn-link"
                            >
                                Portfolio
                            </button>
                        )}
                    </li>
                    <li>
                        {isHomePage ? (
                            <ScrollLink
                                onClick={closeMenu}
                                activeClass="navbar--active-content"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="AboutMe"
                                className="navbar--content"
                            >
                                About Me
                            </ScrollLink>
                        ) : (
                            <button
                                type="button"
                                onClick={() => handleNavClick("AboutMe")}
                                className="navbar--content nav--btn-link"
                            >
                                About Me
                            </button>
                        )}
                    </li>
                </ul>
            </div>
            {isHomePage ? (
                <ScrollLink
                    onClick={closeMenu}
                    activeClass="navbar--active-content"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="Contact"
                    className="btn btn-outline-primary"
                >
                    Contact Me
                </ScrollLink>
            ) : (
                <button
                    type="button"
                    onClick={() => handleNavClick("Contact")}
                    className="btn btn-outline-primary"
                >
                    Contact Me
                </button>
            )}
        </nav>
    );
}

export default Navbar;