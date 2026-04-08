# Hamlux — Portfolio Website

A production-ready personal portfolio built with **React 19**, **Tailwind CSS v4**, and **Framer Motion**.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📧 Setting Up the Contact Form (EmailJS)

The contact form uses **EmailJS** — free, no backend required (200 emails/month on free tier).

1. Create a free account at [emailjs.com](https://www.emailjs.com)
2. Go to **Email Services** → Add New Service → connect your Gmail or Outlook
3. Go to **Email Templates** → Create New Template. Use these variables in your template:
   - `{{from_name}}` — Sender's name
   - `{{from_email}}` — Sender's email
   - `{{subject}}` — Subject line
   - `{{message}}` — Message body
4. Go to **Account** → copy your **Public Key**
5. Open `src/sections/Contact.jsx` and replace the three constants at the top:

```js
const EMAILJS_SERVICE_ID = "service_xxxxxxx"; // Your Service ID
const EMAILJS_TEMPLATE_ID = "template_xxxxxxx"; // Your Template ID
const EMAILJS_PUBLIC_KEY = "xxxxxxxxxxxx"; // Your Public Key
```

That's it — no server, no environment variables needed.

## 🌐 Deploying to GitHub Pages

```bash
# 1. In package.json, add:
"homepage": "https://<your-github-username>.github.io/<repo-name>"

# 2. Add deploy scripts to package.json:
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# 3. Deploy:
npm run deploy
```

## 🌐 Deploying to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Or push to GitHub and import the repo at [vercel.com](https://vercel.com) — zero config needed.

## ✏️ Customising Your Content

| File                               | What to update                        |
| ---------------------------------- | ------------------------------------- |
| `src/sections/Home.jsx`            | Hero text, roles for typing effect    |
| `src/sections/About.jsx`           | Bio text, experience timeline, stats  |
| `src/sections/Contact.jsx`         | Email address, location, social links |
| `src/components/layout/navbar.jsx` | Brand name                            |
| `src/components/layout/footer.jsx` | Brand name, social links              |
| `src/data/projects.js`             | Your projects, links, tech tags       |
| `src/data/skills.js`               | Your tech stack                       |
| `public/cv.pdf`                    | Replace with your actual CV           |
| `src/assets/images/`               | Replace with your own photos          |
| `index.html`                       | Page title, meta description          |

## 🗂 Project Structure

```
src/
├── assets/images/       # Project images & image exports
├── components/
│   ├── common/          # Button, ScrollToTop
│   ├── layout/          # Navbar, Footer
│   └── ui/              # ProjectCard, SkillCard
├── context/
│   └── ToastContext.jsx # Global toast notifications
├── data/
│   ├── projects.js      # Project list
│   └── skills.js        # Skills list
├── hooks/
│   ├── useScrollSpy.js      # Active nav section detection
│   └── useTypingEffect.js   # Hero typing animation
├── sections/            # Home, About, Skills, Projects, Contact
├── App.jsx
├── index.css
└── main.jsx
```

## ✅ Features

- ✅ Fully responsive (mobile-first)
- ✅ Smooth scroll + active nav highlighting
- ✅ Typing effect on hero section
- ✅ Skills & Projects category filtering
- ✅ Working contact form with validation + EmailJS
- ✅ Toast notifications for form feedback
- ✅ Scroll-to-top button
- ✅ Experience timeline in About
- ✅ SEO meta tags + Open Graph
- ✅ Custom fonts (Syne + DM Sans)
- ✅ Scroll-triggered animations throughout
- ✅ Keyboard accessible
