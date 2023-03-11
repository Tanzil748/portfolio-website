# Portfolio Website

I built this website to introduce myself as well as showcase my favorite & latest projects. My goal is to make this an interactive form of my resume, but more visually appealing.

## Tech Stack

- `React`, `TailwindCSS`, `Framer Motion` (for animation), & `Three.js` (for 3D blob effect)

## Demo

Here's a walkthrough of how the app functions:

## Deployment

Clone this repository and install all dependencies via the terminal:

```bash
  npm install
```

Then, to deploy this project run the following:

```bash
  npm run dev
```

The app will run on port 5173 as below:

```bash
  http://127.0.0.1:5173/portfolio-website/
```

## Project Structure

<pre>
.
├── README.md
├── index.html
├── github/workflows
├── .gitignore
├── package-lock.json
├── package.json
├── postcss.config.cjs
├── tailwind.config.cjs
├── vite.config.js
├── script.js
├── <strong>src</strong>
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── <strong>assets</strong>
│       ├── heroImg.png
│       ├── index.js
│       ├── profile.jpg
│       ├── <strong>projects</strong>
│       └── <strong>techStack</strong>
│   ├── <strong>components</strong>
│       ├── About.jsx
│       ├── Contact.jsx
│       ├── Footer.jsx
│       ├── Header.jsx
│       ├── Hero.jsx
│       ├── ProjectCard.jsx
│       ├── Projects.jsx
│       ├── TechStack.jsx
│       └── pageAnimation.js
│   └── <strong>styles</strong>
├── <strong>public</strong>
│   ├── sampleResume.pdf (will update with latest one)
│   └── vite.svg
└── GIF (not added yet)
</pre>
