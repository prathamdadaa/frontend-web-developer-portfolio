# frontend-web-developer-portfolio# Pratham Dada — Portfolio Website

A personal portfolio website built to showcase my skills, learning journey, and projects as an aspiring frontend developer working toward becoming a full-stack developer.

🔗 **Live demo:** _add your GitHub Pages link here once deployed (see [Deployment](#deployment) below)_

![status](https://img.shields.io/badge/status-active-5fd68a)
![made with](https://img.shields.io/badge/made%20with-HTML%20%7C%20CSS%20%7C%20JS-f2a65a)

---

## 📖 About

This is my personal portfolio site, built from scratch with plain HTML, CSS and JavaScript — no frameworks, no templates. I'm Pratham Dada, currently pursuing a **BCA (Bachelor of Computer Applications)** through **IGNOU** (open university), based in **Dhanbad, Jharkhand, India**. I completed my 12th in Commerce before moving into computer applications.

The site is themed around a terminal / code-editor look, since that's genuinely the environment I work in every day. It includes:

- **About** — who I am, my education path, and my goals
- **Skills** — grouped honestly into *shipped* (what I'm confident in), *learning* (what I'm actively picking up), and *queued* (the backend stack I'm about to start)
- **Journey** — my education and learning milestones, shown as a commit-log timeline, with planned future milestones included
- **Projects** — things I've built while learning
- **Contact** — ways to reach me

## 🛠 Built With

- **HTML5** — semantic structure
- **CSS3** — custom properties (variables), Flexbox, Grid, responsive design, animations
- **Vanilla JavaScript** — scroll-reveal animations using `IntersectionObserver`, no libraries
- **Google Fonts** — [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (display/code) and [Inter](https://fonts.google.com/specimen/Inter) (body)

No build tools, no npm dependencies — open `index.html` and it just works.

## 📁 Project Structure

```
pratham-portfolio/
├── index.html        # Page markup and content
├── css/
│   └── style.css      # All styling, organized into labeled sections
├── js/
│   └── script.js       # Scroll-reveal, footer year, hero animation
├── assets/             # Images / icons (add your own here, e.g. profile photo, favicon)
├── README.md
├── LICENSE
└── .gitignore
```

## 🚀 Getting Started

### Run it locally

No installation needed — it's plain HTML/CSS/JS.

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/pratham-portfolio.git
   cd pratham-portfolio
   ```
2. Open `index.html` directly in your browser, **or** serve it locally (recommended, avoids any file:// quirks):
   ```bash
   python3 -m http.server 8000
   ```
   Then visit `http://localhost:8000` in your browser.

### Customize it

- Edit the content directly in `index.html` (your name, education, skills, projects, etc. are already filled in — update as your real projects/links change)
- Edit colors, fonts, and spacing in `css/style.css` (CSS variables are defined at the top of the file under `:root`)
- Edit interactive behavior in `js/script.js`
- Replace the placeholder email/GitHub/LinkedIn links in the **Contact** section of `index.html` with your real profile URLs

## 🌐 Deployment

The easiest free option is **GitHub Pages**:

1. Push this project to a GitHub repository (see steps below)
2. In your repo, go to **Settings → Pages**
3. Under **Source**, select the `main` branch and `/ (root)` folder
4. Save — GitHub will give you a live URL like `https://your-username.github.io/pratham-portfolio/`

Other free options: [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/) — just drag and drop the folder, or connect your GitHub repo.

## 📤 Uploading to GitHub

If you're doing this for the first time, here's the full sequence:

```bash
# 1. Move into the project folder
cd pratham-portfolio

# 2. Initialize git (only needed once)
git init

# 3. Stage all files
git add .

# 4. Commit
git commit -m "Initial commit: portfolio site"

# 5. Create a new repository on GitHub.com first (don't add a README there,
#    since you already have one), then connect it:
git remote add origin https://github.com/your-username/pratham-portfolio.git

# 6. Push
git branch -M main
git push -u origin main
```

After this, any future changes just need:

```bash
git add .
git commit -m "Describe what you changed"
git push
```

## 🗺 Roadmap

- [ ] Add real project links and screenshots as repos are built
- [ ] Add Node.js / Express / MongoDB section once backend learning starts
- [ ] Add a resume/CV download link
- [ ] Add dark/light theme toggle
- [ ] Replace placeholder contact links with real GitHub/LinkedIn profiles

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋 Contact

**Pratham Dada**
Dhanbad, Jharkhand, India
📧 pratham.dada@example.com *(replace with your real email)*

---

<sub>Built with care while learning to become a full-stack developer.</sub>
