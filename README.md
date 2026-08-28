# Personal Portfolio

A personal portfolio website built to showcase my projects, skills, and background as a Computing & Information Technologies student at RIT.

## 📖 Overview

This site serves as a central hub for my work, including an introduction, a breakdown of my technical skills, featured projects, dedicated legal pages, and ways to get in touch.

## ✨ Features

- **Hero Section** — Landing introduction with a direct link to the contact form
- **My Skills** — Standardized overview of my technical skill set across front-end development, programming languages, tools & platforms, and networking & systems
- **About Me** — Background, experience, and custom systems illustration
- **My Portfolio** — Featured projects (such as Tideway), each with descriptions and GitHub repo links
- **Contact** — Working contact form (powered by Formspree) so visitors can reach me directly
- **Legal & Policy Pages** — Dedicated Privacy Policy and Terms of Service pages written in first person
- **Interactive Footer** — Quick navigation links, social profile, legal links, and an interactive Cookie Settings preferences modal
- **Responsive & Accessible** — Mobile-first responsive layouts with smooth scrolling and route transitions

## 🛠️ Tech Stack

- React (Create React App)
- CSS3
- JavaScript (ES6+)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) — multi-page client routing
- [react-scroll](https://www.npmjs.com/package/react-scroll) — smooth in-page section navigation
- [Formspree](https://formspree.io) — contact form backend
- [Jest & React Testing Library](https://testing-library.com/) — unit testing suite
- [GitHub Actions](https://github.com/features/actions) — CI/CD automated test & build pipeline

## 📂 Project Structure

```
react-portfolio-site/
├── .github/
│   └── workflows/
│       └── ci.yml               # GitHub Actions CI/CD workflow
├── public/
│   ├── img/
│   │   ├── about-me.png         # About Me section illustration
│   │   ├── desktop-cleaner.png  # Skills & tool asset
│   │   ├── frontend.png         # Front-end skill icon
│   │   ├── hero_img.png         # Hero section profile portrait
│   │   ├── languages.png        # Programming languages icon
│   │   ├── logo.png             # Portfolio brand logo
│   │   ├── networking.png       # Networking & systems icon
│   │   ├── tideway.svg          # Tideway project logo
│   │   └── tools.png            # Tools & platforms icon
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── Components/
│   │   └── ScrollToTop.jsx      # Route transition scroll handler
│   ├── Pages/
│   │   ├── Home/
│   │   │   ├── Homescreen/
│   │   │   │   └── index.jsx    # Home page assembly
│   │   │   ├── AboutMe.jsx      # About Me component
│   │   │   ├── ContactMe.jsx    # Contact form component
│   │   │   ├── Footer.jsx       # Global footer with Cookie modal
│   │   │   ├── HeroSection.jsx  # Hero landing section
│   │   │   ├── MyPortfolio.jsx  # Featured projects showcase
│   │   │   ├── MySkills.jsx     # Skills container grid
│   │   │   └── Navbar.jsx       # Responsive header navigation
│   │   ├── NotFound.jsx         # 404 Page Not Found
│   │   ├── Pages.test.js        # Page unit tests
│   │   ├── PrivacyPolicy.jsx    # Privacy Policy page
│   │   └── TermsOfService.jsx   # Terms of Service page
│   ├── data/
│   │   └── index.json           # Skills & portfolio project data
│   ├── App.css                  # Global styles & responsive rules
│   ├── App.js                   # Application root & router configuration
│   ├── App.test.js              # App component tests
│   ├── index.js                 # React DOM entry point
│   └── setupTests.js            # Jest test environment polyfills
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+) and npm installed

### Installation

```bash
git clone https://github.com/az1213-dev/react-portfolio-site
cd react-portfolio-site
npm install
```

### Running Locally

```bash
npm start
```

Runs the app at [http://localhost:3000](http://localhost:3000)

### Running Tests

```bash
npm test
```

### Building for Production

```bash
npm run build
```

Bundles the app into the `build` folder, optimized for deployment.

## 📌 Roadmap

- [ ] Add live deployment link
- [ ] Expand project showcase with additional projects
- [ ] Add dark mode toggle

## 📄 License

This project is open source and available under the [MIT License](LICENSE.md).

## 📬 Contact

Reach out via the contact form on the site (see [Getting Started](#-getting-started) to run it locally), or connect with me on [GitHub](https://github.com/az1213-dev).