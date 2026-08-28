import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

function Footer() {
    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === "/";

    const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);
    const [cookiePreferences, setCookiePreferences] = useState({
        necessary: true,
        analytics: true,
        functional: true,
    });
    const [savedMessage, setSavedMessage] = useState(false);

    const handleNavClick = (sectionId) => {
        if (!isHomePage) {
            navigate(`/#${sectionId}`);
        }
    };

    const handleSaveCookies = () => {
        setSavedMessage(true);
        setTimeout(() => {
            setSavedMessage(false);
            setIsCookieModalOpen(false);
        }, 800);
    };

    return (
        <>
            <footer className="footer--container">
                <div className="footer--link--container">
                    <div>
                        <RouterLink to="/" onClick={() => window.scrollTo(0, 0)}>
                            <img src="/img/logo.png" alt="Antonio Zapata Logo" />
                        </RouterLink>
                    </div>
                    <div className="footer--items">
                        <ul>
                            <li>
                                {isHomePage ? (
                                    <ScrollLink
                                        activeClass="navbar--active-content"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        to="heroSection"
                                        className="text-md footer--link-text"
                                    >
                                        Home
                                    </ScrollLink>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={() => handleNavClick("heroSection")}
                                        className="text-md footer--btn-link footer--link-text"
                                    >
                                        Home
                                    </button>
                                )}
                            </li>
                            <li>
                                {isHomePage ? (
                                    <ScrollLink
                                        activeClass="navbar--active-content"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        to="MyPortfolio"
                                        className="text-md footer--link-text"
                                    >
                                        Portfolio
                                    </ScrollLink>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={() => handleNavClick("MyPortfolio")}
                                        className="text-md footer--btn-link footer--link-text"
                                    >
                                        Portfolio
                                    </button>
                                )}
                            </li>
                            <li>
                                {isHomePage ? (
                                    <ScrollLink
                                        activeClass="navbar--active-content"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        to="AboutMe"
                                        className="text-md footer--link-text"
                                    >
                                        About Me
                                    </ScrollLink>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={() => handleNavClick("AboutMe")}
                                        className="text-md footer--btn-link footer--link-text"
                                    >
                                        About Me
                                    </button>
                                )}
                            </li>
                            <li>
                                {isHomePage ? (
                                    <ScrollLink
                                        activeClass="navbar--active-content"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        to="Contact"
                                        className="text-md footer--link-text"
                                    >
                                        Contact
                                    </ScrollLink>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={() => handleNavClick("Contact")}
                                        className="text-md footer--btn-link footer--link-text"
                                    >
                                        Contact
                                    </button>
                                )}
                            </li>
                        </ul>
                    </div>
                    <div className="footer--social--icon">
                        <ul>
                            <li>
                                <a
                                    href="https://github.com/az1213-dev"
                                    className="navbar--content"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Antonio Zapata on GitHub"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="divider" />
                <div className="footer--content--container">
                    <p className="footer--content">Made with 💖 by Antonio</p>
                    <div className="footer--social--icon">
                        <ul>
                            <li>
                                <RouterLink
                                    to="/privacy-policy"
                                    className="text-sm footer--link-text"
                                >
                                    Privacy Policy
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink
                                    to="/terms-of-service"
                                    className="text-sm footer--link-text"
                                >
                                    Terms of Service
                                </RouterLink>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    onClick={() => setIsCookieModalOpen(true)}
                                    className="text-sm footer--btn-link footer--link-text"
                                >
                                    Cookies Settings
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>

            {/* Cookies Settings Modal */}
            {isCookieModalOpen && (
                <div
                    className="modal--overlay"
                    onClick={() => setIsCookieModalOpen(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="cookie-modal-title"
                >
                    <div
                        className="cookie--modal-box"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="cookie--modal-header">
                            <h3 id="cookie-modal-title">Cookie Preferences</h3>
                            <button
                                type="button"
                                className="cookie--modal-close"
                                onClick={() => setIsCookieModalOpen(false)}
                                aria-label="Close cookie settings"
                            >
                                &times;
                            </button>
                        </div>
                        <div className="cookie--modal-body">
                            <p className="text-sm">
                                I use cookies and similar technologies to enhance your experience, analyze website traffic, and maintain site performance. You can manage your preferences below:
                            </p>

                            <div className="cookie--option-row">
                                <div>
                                    <h4>Essential Cookies</h4>
                                    <p className="text-sm">Required for basic site navigation and core functionality. Always enabled.</p>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={cookiePreferences.necessary}
                                    disabled
                                    aria-label="Essential Cookies"
                                />
                            </div>

                            <div className="cookie--option-row">
                                <div>
                                    <h4>Analytics Cookies</h4>
                                    <p className="text-sm">Help me understand how visitors interact with my portfolio and identify errors.</p>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={cookiePreferences.analytics}
                                    onChange={(e) =>
                                        setCookiePreferences({
                                            ...cookiePreferences,
                                            analytics: e.target.checked,
                                        })
                                    }
                                    aria-label="Analytics Cookies"
                                />
                            </div>

                            <div className="cookie--option-row">
                                <div>
                                    <h4>Functional Preferences</h4>
                                    <p className="text-sm">Remember your custom UI preferences and interaction state.</p>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={cookiePreferences.functional}
                                    onChange={(e) =>
                                        setCookiePreferences({
                                            ...cookiePreferences,
                                            functional: e.target.checked,
                                        })
                                    }
                                    aria-label="Functional Preferences"
                                />
                            </div>

                            {savedMessage && (
                                <div className="cookie--saved-alert">
                                    ✓ Preferences saved successfully!
                                </div>
                            )}
                        </div>

                        <div className="cookie--modal-footer">
                            <button
                                type="button"
                                className="btn btn-outline-primary"
                                onClick={() => setIsCookieModalOpen(false)}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleSaveCookies}
                            >
                                Save Preferences
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Footer;