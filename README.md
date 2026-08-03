# Personal Portfolio

A personal portfolio website built to showcase my projects, skills, and background as a Computing & Information Technologies student at RIT.

## 📖 Overview

This site serves as a central hub for my work, including an introduction, a breakdown of my technical skills, featured projects, and a way to get in touch.

## ✨ Features

- **Hero Section** — Landing introduction with a direct link to the contact form
- **My Skills** — Overview of my technical skill set across front-end development, programming languages, tools & platforms, and networking & systems
- **About Me** — Background and experience
- **My Portfolio** — Featured projects, each with an image, description, and link to the GitHub repo
- **Contact** — Working contact form (powered by Formspree) so visitors can reach me directly
- **Footer** — Quick navigation links and GitHub profile link

## 🛠️ Tech Stack

- React (Create React App)
- CSS
- JavaScript (ES6+)
- [react-scroll](https://www.npmjs.com/package/react-scroll) — smooth in-page navigation
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) — routing
- [Formspree](https://formspree.io) — contact form backend
- [gh-pages](https://www.npmjs.com/package/gh-pages) — deployment to GitHub Pages

## 📂 Project Structure

```
src/
├── Pages/Home/
│   ├── Homescreen/
│   │   └── index.jsx
│   ├── AboutMe.jsx
│   ├── ContactMe.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── MyPortfolio.jsx
│   ├── MySkills.jsx
│   └── Navbar.jsx
├── data/
│   └── index.json      # skills & portfolio project data
├── App.js
├── App.css
└── index.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed

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

### Building for Production

```bash
npm run build
```

Bundles the app into the `build` folder, optimized for deployment.

### Deploying to GitHub Pages

```bash
npm run deploy
```

Builds the app and publishes it to the `gh-pages` branch, which GitHub Pages serves at the live site link above.

## 📌 Roadmap

- [ ] Add live deployment link
- [ ] Expand project showcase with additional projects
- [ ] Add dark mode toggle

## 📄 License

This project is open source and available under the [MIT License](LICENSE.md).

## 📬 Contact

Reach out via the contact form on the site (see [Getting Started](#-getting-started) to run it locally), or connect with me on [GitHub](https://github.com/az1213-dev).