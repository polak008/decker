# Deployment Guide — Shahirul Islam Polak Portfolio

**Version:** v01
**Branch:** `polak-v01`
**Site:** https://polak008.github.io/decker/
**Source:** https://github.com/polak008/decker

---

## Table of Contents

1. [Overview](#1-overview)
2. [Tech Stack](#2-tech-stack)
3. [Prerequisites](#3-prerequisites)
4. [Clone and Setup](#4-clone-and-setup)
5. [Local Development](#5-local-development)
6. [Project Structure](#6-project-structure)
7. [How the Site Works](#7-how-the-site-works)
8. [Adding Content](#8-adding-content)
   - [Adding a Blog Post](#81-adding-a-blog-post)
   - [Adding a Project](#82-adding-a-project)
   - [Updating Experience](#83-updating-experience)
   - [Updating Education/Certifications](#84-updating-educationcertifications)
   - [Updating Skills & Tools](#85-updating-skills--tools)
   - [Updating Social Links](#86-updating-social-links)
   - [Updating Personal Info](#87-updating-personal-info)
9. [Customizing the Design](#9-customizing-the-design)
10. [Building for Production](#10-building-for-production)
11. [GitHub Pages Deployment](#11-github-pages-deployment)
12. [GitHub Actions CI/CD](#12-github-actions-cicd)
13. [Common Tasks](#13-common-tasks)
14. [Troubleshooting](#14-troubleshooting)
15. [All Commands Reference](#15-all-commands-reference)

---

## 1. Overview

This is a personal portfolio website for **Shahirul Islam Polak** (DevOps Engineer), built with Astro and deployed to GitHub Pages. The site includes:

- **Home page** — introduction, featured projects
- **Projects page** — all DevOps projects with pagination
- **About page** — bio, experience, education/certifications, skills & tools
- **Blog page** — writing/articles (currently empty, ready for content)
- **Contact page** — email and social links

The site uses a retro dark terminal theme with green-tinted colors, pixel fonts (VT323), and monospace body text (JetBrains Mono).

---

## 2. Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| **Node.js** | >=22.12.0 | Runtime |
| **Astro** | ^6.1.6 | Static site generator |
| **Tailwind CSS** | ^4.2.2 | Utility-first CSS |
| **TypeScript** | (via Astro) | Type safety |
| **GitHub Actions** | — | CI/CD pipeline |
| **GitHub Pages** | — | Hosting |

---

## 3. Prerequisites

You need these installed on your machine:

```bash
# Check Node.js version (must be >=22.12.0)
node --version

# Check npm version
npm --version

# Check git
git --version
```

If Node.js is not installed or is an older version:

```bash
# Using nvm (recommended)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.bashrc
nvm install 22
nvm use 22

# Or download from https://nodejs.org
```

---

## 4. Clone and Setup

```bash
# Clone the repo
git clone https://github.com/polak008/decker.git

# Enter the project
cd decker

# Switch to the deployment branch
git checkout polak-v01

# Install all dependencies
npm install

# Start the dev server
npm run dev
```

After `npm install`, the site will be available at `http://localhost:4321/`.

---

## 5. Local Development

### Start dev server

```bash
npm run dev
```

Opens at `http://localhost:4321/`. The server watches for file changes — edit any file and the browser auto-refreshes.

### Start dev server on a specific port

```bash
npx astro dev --host 0.0.0.0 --port 5642
```

- `--host 0.0.0.0` — makes it accessible from other devices on your network
- `--port 5642` — runs on port 5642 instead of default 4321

Access from other devices:
- `http://localhost:5642/`
- `http://<your-local-ip>:5642/`

### Build and preview production

```bash
# Build the site (generates static files in dist/)
npm run build

# Preview the built site locally
npm run preview
```

### Stop the dev server

Press `Ctrl + C` in the terminal where it's running.

---

## 6. Project Structure

```
decker/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD pipeline
├── public/                      # Static assets (copied as-is to output)
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── icons/               # SVG icon components
│   │   │   ├── Calendar.astro
│   │   │   ├── Github.astro
│   │   │   ├── Hourglass.astro
│   │   │   ├── Linkedin.astro
│   │   │   ├── School.astro
│   │   │   ├── Tag.astro
│   │   │   ├── Twitter.astro
│   │   │   └── Website.astro
│   │   └── images/
│   │       ├── decker.jpg       # Profile photo
│   │       └── blog/
│   │           └── 1.jpg
│   ├── components/
│   │   ├── elements/            # Reusable UI building blocks
│   │   │   ├── ArticleCard.astro
│   │   │   ├── EducationCard.astro
│   │   │   ├── ExperienceCard.astro
│   │   │   ├── Heading.astro
│   │   │   ├── Link.astro
│   │   │   ├── Pagination.astro
│   │   │   ├── ProjectCard.astro
│   │   │   ├── Section.astro
│   │   │   ├── SocialLinks.astro
│   │   │   ├── Tag.astro
│   │   │   └── Text.astro
│   │   ├── global/              # Layout-wide components
│   │   │   ├── BaseHead.astro   # <head> tags, SEO, fonts
│   │   │   ├── Footer.astro
│   │   │   ├── Header.astro     # Top header with photo, name, nav
│   │   │   ├── NavBar.astro     # Navigation bar
│   │   │   ├── Seo.astro        # Open Graph, Twitter Cards, JSON-LD
│   │   │   └── Wrapper.astro
│   │   └── sections/            # Page section components
│   │       ├── FeaturedProjects.astro
│   │       ├── Intro.astro
│   │       ├── LatestArticles.astro
│   │       ├── about/
│   │       │   ├── Bio.astro
│   │       │   ├── Education.astro
│   │       │   ├── Experience.astro
│   │       │   └── Skills.astro
│   │       └── contact/
│   │           └── Contact.astro
│   ├── content/                 # Content data (YAML + Markdown)
│   │   ├── blog/                # Blog posts (Markdown)
│   │   ├── projects/            # Projects (Markdown)
│   │   ├── resume/
│   │   │   ├── experience.yaml  # Work experience
│   │   │   └── education.yaml   # Education/certifications
│   │   └── skills-and-tools/
│   │       └── skillsAndTools.yaml  # Skills categories
│   ├── content.config.ts        # Content collection schemas (Zod)
│   ├── layout/
│   │   └── Layout.astro         # Main page layout wrapper
│   ├── pages/                   # File-based routing
│   │   ├── index.astro          # Home page (/)
│   │   ├── about.astro          # About page (/about)
│   │   ├── contact.astro        # Contact page (/contact)
│   │   ├── 404.astro            # 404 page
│   │   ├── robots.txt.ts        # Robots.txt generator
│   │   ├── blog/
│   │   │   ├── [...page].astro  # Blog list (paginated)
│   │   │   └── [page].astro     # Individual blog post
│   │   └── projects/
│   │       └── [...page].astro  # Projects list (paginated)
│   ├── styles/
│   │   ├── global.css           # Tailwind config + theme colors
│   │   └── markdown.css         # Blog post markdown styles
│   └── utils/
│       ├── currentYear.ts       # Returns current year
│       ├── formatDate.ts        # Date formatting
│       └── readingTime.ts       # Blog reading time calculator
├── astro.config.mjs             # Astro configuration
├── package.json                 # Dependencies and scripts
├── package-lock.json            # Locked dependency versions
├── tsconfig.json                # TypeScript config
└── .gitignore                   # Files git ignores
```

---

## 7. How the Site Works

### Routing

Astro uses **file-based routing**. Any file in `src/pages/` becomes a URL:

| File | URL |
|------|-----|
| `src/pages/index.astro` | `/decker/` |
| `src/pages/about.astro` | `/decker/about` |
| `src/pages/contact.astro` | `/decker/contact` |
| `src/pages/blog/[...page].astro` | `/decker/blog` |
| `src/pages/projects/[...page].astro` | `/decker/projects` |

### Content Collections

Content is managed through **Astro Content Collections** defined in `src/content.config.ts`. Each collection has a Zod schema that validates the data:

- **projects** — Markdown files in `src/content/projects/`, each with frontmatter (title, tools, year, description, etc.)
- **blog** — Markdown files in `src/content/blog/`, each with frontmatter (slug, title, date, category)
- **experience** — YAML file at `src/content/resume/experience.yaml`
- **education** — YAML file at `src/content/resume/education.yaml`
- **skillsAndTools** — YAML file at `src/content/skills-and-tools/skillsAndTools.yaml`

### Base Path

The site is deployed under `https://polak008.github.io/decker/`, so `base: "/decker/"` is set in `astro.config.mjs`. All internal links use `import.meta.env.BASE_URL` to automatically prefix with `/decker/`.

### Theme

Colors are defined in `src/styles/global.css` using oklch color space:

```css
--color-base-50:  oklch(0.979 0.044 142.4);  /* lightest */
--color-base-100: oklch(0.951 0.044 142.4);
--color-base-200: oklch(0.870 0.294 142.4);
--color-base-300: oklch(0.780 0.294 142.4);
--color-base-400: oklch(0.660 0.294 142.4);
--color-base-500: oklch(0.550 0.294 142.4);
--color-base-600: oklch(0.470 0.294 142.4);
--color-base-700: oklch(0.400 0.294 142.4);
--color-base-800: oklch(0.330 0.294 142.4);
--color-base-900: oklch(0.216 0.118 142.4);  /* dark background */
--color-base-950: oklch(0.100 0.118 142.4);  /* darkest */
```

---

## 8. Adding Content

### 8.1 Adding a Blog Post

**Step 1:** Create a new Markdown file in `src/content/blog/`:

```bash
touch src/content/blog/4.md
```

**Step 2:** Add frontmatter and content:

```markdown
---
id: 4
slug: "my-new-blog-post"
title: "My New Blog Post"
publishedDate: 2026-07-17
category: "systems"
isDraft: false
---

Your blog post content goes here.

## Section Heading

Write your content using standard Markdown. You can use **bold**, *italic*, `code`, and more.

## Another Section

More content here.
```

**Frontmatter fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | number | Yes | Unique ID (use next number in sequence) |
| `slug` | string | Yes | URL slug (lowercase, hyphens, max 50 chars) |
| `title` | string | Yes | Post title (max 50 chars) |
| `publishedDate` | date | Yes | Publication date (YYYY-MM-DD) |
| `category` | enum | Yes | One of: `"systems"`, `"ai"`, `"productivity"` |
| `readingTime` | number | No | Auto-calculated if omitted |
| `isDraft` | boolean | Yes | Set `true` to hide from the site |

**Valid categories:** To add a new category, edit `src/content.config.ts`:

```ts
category: z.enum(["systems", "ai", "productivity", "devops"]), // added "devops"
```

**To hide a post temporarily:** Set `isDraft: true` in the frontmatter.

### 8.2 Adding a Project

**Step 1:** Create a new Markdown file in `src/content/projects/`:

```bash
touch src/content/projects/6.md
```

**Step 2:** Add frontmatter:

```markdown
---
id: 6
title: "My New Project"
tools: ["Docker", "Kubernetes", "Jenkins"]
year: "2026"
description: "A brief description of the project (max 350 characters)."
isFeatured: true
isDraft: false
---
```

**Frontmatter fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | number | Yes | Unique ID |
| `title` | string | Yes | Project name (max 50 chars) |
| `tools` | array | Yes | Array of tool tags (must match enum) |
| `year` | string | Yes | Year (max 4 chars) |
| `liveSite` | URL | No | Live website URL |
| `github` | URL | No | GitHub repo URL |
| `description` | string | Yes | Description (max 350 chars) |
| `isFeatured` | boolean | Yes | Show on home page if `true` |
| `isDraft` | boolean | Yes | Hide from site if `true` |

**Valid tool tags** (defined in `src/content.config.ts`):

```
EC2, ASG, ALB, Route 53, ACM, Jenkins, Kubernetes, Ansible,
Docker, Helm, VM, GitLab CI/CD, Prometheus, Grafana, Nginx,
SSL/TLS, Linux, Load Balancer
```

**To add a new tool tag:** Edit `src/content.config.ts` and add it to the enum:

```ts
z.array(z.enum([
    "EC2", "ASG", "ALB", "Route 53", "ACM", "Jenkins",
    "Kubernetes", "Ansible", "Docker", "Helm", "VM",
    "GitLab CI/CD", "Prometheus", "Grafana", "Nginx",
    "SSL/TLS", "Linux", "Load Balancer", "Terraform" // added
]))
```

### 8.3 Updating Experience

Edit `src/content/resume/experience.yaml`:

```yaml
- id: 1
  title: "Junior DevOps Engineer — SIMEC System Ltd."
  timeline: "Feb 2025 — Present"
  description: "Your job description here (max 600 chars)."
- id: 2
  title: "Trainee Software Engineer — BJIT Group"
  timeline: "Apr 2023 — Aug 2023"
  description: "Your job description here."
```

**Fields:**

| Field | Max Length | Description |
|-------|-----------|-------------|
| `title` | 100 chars | Job title + company |
| `timeline` | 25 chars | Date range |
| `description` | 600 chars | What you did |

### 8.4 Updating Education/Certifications

Edit `src/content/resume/education.yaml`:

```yaml
- id: 1
  title: "AWS Certified — (In Progress)"
  timeline: "2025"
  school: "Amazon Web Services"
- id: 2
  title: "CKA — (In Progress)"
  timeline: "2025"
  school: "Cloud Native Computing Foundation"
```

**Important:** Quote `timeline` values so they are strings, not numbers:

```yaml
# CORRECT
timeline: "2025"

# WRONG — will cause a build error
timeline: 2025
```

### 8.5 Updating Skills & Tools

Edit `src/content/skills-and-tools/skillsAndTools.yaml`:

```yaml
- id: 1
  title: Cloud & Infrastructure
  items:
    - AWS EC2
    - AWS S3
    - Route 53
- id: 2
  title: IaC & Automation
  items:
    - Terraform
    - Ansible
    - Helm
```

Each entry needs:
- `id` — unique number
- `title` — category name (displayed as section header)
- `items` — list of skill/tool names

### 8.6 Updating Social Links

Edit `src/components/elements/SocialLinks.astro`:

```ts
const socials = [
  { link: "https://github.com/polak008", icon: Github, label: "GitHub" },
  { link: "https://linkedin.com/in/polak008", icon: Linkedin, label: "LinkedIn" },
];
```

To add Twitter/X back:

```ts
import Twitter from "../../assets/icons/Twitter.astro";

const socials = [
  { link: "https://github.com/polak008", icon: Github, label: "GitHub" },
  { link: "https://linkedin.com/in/polak008", icon: Linkedin, label: "LinkedIn" },
  { link: "https://x.com/yourhandle", icon: Twitter, label: "Twitter/X" },
];
```

### 8.7 Updating Personal Info

**Name and role** — Edit `src/components/global/Header.astro`:

```ts
const {
    role = "DevOps Engineer",
    name = "Shahirul Islam Polak",
    status = "Open to opportunities"
} = Astro.props;
```

**Site name and title template** — Edit `src/components/global/BaseHead.astro`:

```ts
const SITE_NAME    = "Shahirul Islam Polak";
const TITLE_TMPL   = "%s | Shahirul Islam Polak";
```

**Email** — Edit `src/components/sections/contact/Contact.astro`:

```astro
<Link variant="inline" href="mailto:sip08101996@gmail.com" text="sip08101996@gmail.com" />
```

**Footer name** — Edit `src/components/global/Footer.astro`:

```ts
const { name = "Shahirul Islam Polak" } = Astro.props;
```

**Intro text** — Edit `src/components/sections/Intro.astro`:

```astro
<Text variant={'normal'} class="text-base-400">Your intro text here.</Text>
```

**Bio text** — Edit `src/components/sections/about/Bio.astro`.

**Profile photo** — Replace `src/assets/images/decker.jpg` with your photo. The component expects a square image.

---

## 9. Customizing the Design

### Change colors

Edit the oklch color values in `src/styles/global.css` under `@theme`:

```css
--color-base-900: oklch(0.216 0.118 142.4);  /* main dark background */
--color-base-950: oklch(0.100 0.118 142.4);  /* deepest background */
--color-base-200: oklch(0.870 0.294 142.4);  /* heading text color */
--color-base-400: oklch(0.660 0.294 142.4);  /* body text color */
```

The three numbers in oklch are: lightness, chroma (saturation), hue (color angle).

### Change fonts

Edit `astro.config.mjs`:

```js
fonts: [
  {
    provider: fontProviders.fontsource(),
    name: "VT323",                    // change font name
    cssVariable: "--font-pixels",     // CSS variable name
    fallbacks: ["monospace"],
  },
  {
    provider: fontProviders.fontsource(),
    name: "JetBrains Mono",           // change font name
    cssVariable: "--font-mono",
    weights: [400, 500, 600, 700, 800],
  }
],
```

Browse fonts at https://fontsource.org.

---

## 10. Building for Production

```bash
npm run build
```

This generates a `dist/` folder containing the final static HTML, CSS, JS, and assets. The build output:

```
dist/
├── 404.html
├── about/index.html
├── blog/index.html
├── contact/index.html
├── projects/index.html
├── index.html
├── robots.txt
├── sitemap-index.xml
├── favicon.ico
├── favicon.svg
└── _astro/
    ├── *.css
    ├── *.js
    └── *.webp
```

To preview the build locally:

```bash
npm run preview
```

---

## 11. GitHub Pages Deployment

### Initial Setup (one-time)

1. Go to your repo: `https://github.com/polak008/decker`

2. Go to **Settings → Pages**

3. Under **Source**, select **Deploy from a branch**

4. Under **Branch**, select **gh-pages** / `/ (root)`

5. Click **Save**

> The `gh-pages` branch is automatically created by GitHub Actions when the workflow runs. You don't need to create it manually.

### How it works

1. You push code to the `polak-v01` branch
2. GitHub Actions triggers the workflow
3. The workflow builds the Astro site
4. The built `dist/` folder is pushed to the `gh-pages` branch
5. GitHub Pages serves the `gh-pages` branch

### Your live URL

```
https://polak008.github.io/decker/
```

---

## 12. GitHub Actions CI/CD

### Workflow file

Located at `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [polak-v01]      # triggers on push to this branch
  workflow_dispatch:            # allows manual trigger from GitHub UI

permissions:
  contents: write               # needed to push to gh-pages branch

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "22"
          cache: npm

      - name: Install dependencies
        run: npm ci              # clean install from lockfile

      - name: Build Astro
        run: npm run build       # generates dist/

      - name: Deploy to gh-pages branch
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: dist/     # pushes dist/ contents to gh-pages
```

### How to trigger a deployment

**Automatic:** Push any commit to `polak-v01`:

```bash
git add -A
git commit -m "your change description"
git push
```

**Manual:** Go to `https://github.com/polak008/decker/actions`, select the workflow, and click **Run workflow**.

### Viewing workflow runs

Go to `https://github.com/polak008/decker/actions` to see all runs, their status, logs, and errors.

### How to add a new workflow (e.g., for testing)

Create a new file at `.github/workflows/test.yml`:

```yaml
name: Tests

on:
  pull_request:
    branches: [polak-v01]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "22"
          cache: npm
      - run: npm ci
      - run: npm run build
```

---

## 13. Common Tasks

### Update content and deploy

```bash
# 1. Make your changes (edit any file)
# 2. Test locally
npm run dev

# 3. Build to verify
npm run build

# 4. Commit and push
git add -A
git commit -m "update: changed experience description"
git push
```

### Add a new blog post

```bash
# 1. Create the file
touch src/content/blog/4.md

# 2. Edit it with your content (see section 8.1)

# 3. Test locally
npm run dev

# 4. Deploy
git add -A
git commit -m "blog: add new post about Docker networking"
git push
```

### Add a new project

```bash
# 1. Create the file
touch src/content/projects/6.md

# 2. Edit it (see section 8.2)

# 3. Test and deploy
npm run dev
npm run build
git add -A
git commit -m "project: add new K8s monitoring project"
git push
```

### Change the profile photo

```bash
# 1. Replace the image file
cp /path/to/your/photo.jpg src/assets/images/decker.jpg

# 2. Deploy
git add -A
git commit -m "update: new profile photo"
git push
```

### Add a new page

```bash
# 1. Create a new page file
touch src/pages/certifications.astro

# 2. Add content (copy from an existing page as template)

# 3. Add a nav link in src/components/global/NavBar.astro:
#    { title: "/certifications", href: base + "certifications" }

# 4. Deploy
git add -A
git commit -m "feat: add certifications page"
git push
```

### Run on a different port

```bash
npx astro dev --port 8080
```

### Run on network (accessible from other devices)

```bash
npx astro dev --host 0.0.0.0 --port 5642
```

Then access from any device: `http://<your-ip>:5642/`

### Find your local IP

```bash
# Linux
hostname -I

# macOS
ipconfig getifaddr en0

# Windows
ipconfig
```

---

## 14. Troubleshooting

### Build error: "timeline: Expected type string, received number"

Your YAML file has an unquoted number. Fix:

```yaml
# WRONG
timeline: 2025

# CORRECT
timeline: "2025"
```

### Build error: "Unterminated string literal"

Check for syntax errors in your `.astro` files. Template literals in JSX should use string concatenation instead:

```astro
<!-- WRONG — may fail with esbuild -->
<a href={`${import.meta.env.BASE_URL}page`}>

<!-- CORRECT -->
<a href={import.meta.env.BASE_URL + "page"}>
```

### 404 errors on navigation links

Ensure `base: "/decker/"` is set in `astro.config.mjs` and all navigation links use `import.meta.env.BASE_URL`.

### Deployment error: "Branch not allowed to deploy"

The `github-pages` environment only allows `main` by default. The workflow uses `peaceiris/actions-gh-pages` which pushes to a `gh-pages` branch, bypassing this restriction. Make sure Pages source is set to **Deploy from a branch → gh-pages**.

### Blog warning: "No files found matching blog"

This is normal if you have no blog posts. It's just a warning, not an error. Add blog posts to `src/content/blog/` to fix.

### Dev server not responding

```bash
# Kill any existing processes on the port
pkill -f "astro dev"

# Or use a different port
npx astro dev --port 8080
```

### Changes not appearing

```bash
# Clear the Astro cache
rm -rf .astro/

# Rebuild
npm run build
```

### Content validation error

If you see a Zod validation error, your content doesn't match the schema. Check:
- Field types (string vs number)
- Max length limits
- Enum values match exactly

---

## 15. All Commands Reference

### Development

| Command | What it does |
|---------|-------------|
| `npm install` | Install all project dependencies |
| `npm run dev` | Start dev server at localhost:4321 |
| `npm run build` | Build static site to `dist/` folder |
| `npm run preview` | Preview the built site locally |
| `npx astro dev --port 8080` | Dev server on port 8080 |
| `npx astro dev --host 0.0.0.0 --port 5642` | Dev server accessible from network on port 5642 |

### Git

| Command | What it does |
|---------|-------------|
| `git status` | See what files have changed |
| `git diff` | See the exact changes in files |
| `git add -A` | Stage all changed files |
| `git commit -m "message"` | Commit with a description |
| `git push` | Push to remote (triggers CI/CD) |
| `git log --oneline -5` | See last 5 commits |
| `git checkout -b branch-name` | Create and switch to a new branch |
| `git checkout branch-name` | Switch to an existing branch |

### Content management

| Command | What it does |
|---------|-------------|
| `touch src/content/blog/N.md` | Create a new blog post |
| `touch src/content/projects/N.md` | Create a new project |
| `cat src/content/resume/experience.yaml` | View experience data |
| `cat src/content/skills-and-tools/skillsAndTools.yaml` | View skills data |

### Cleanup

| Command | What it does |
|---------|-------------|
| `rm -rf dist/` | Delete build output |
| `rm -rf .astro/` | Delete Astro cache |
| `rm -rf node_modules/` | Delete dependencies (run `npm install` after) |
| `npm ci` | Clean install from lockfile (CI use) |

### Debugging

| Command | What it does |
|---------|-------------|
| `npm run build 2>&1` | Build and capture all output including errors |
| `npx astro --help` | Show Astro CLI options |
| `node --version` | Check Node.js version |
| `npm --version` | Check npm version |

---

## Quick Start Summary

```bash
# Clone
git clone https://github.com/polak008/decker.git
cd decker
git checkout polak-v01

# Install
npm install

# Run locally
npm run dev

# Edit content (see section 8)
# ...

# Build
npm run build

# Deploy (push to polak-v01 triggers CI/CD)
git add -A
git commit -m "your changes"
git push

# Site live at: https://polak008.github.io/decker/
```
