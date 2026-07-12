# Zhenqin Li Academic Homepage

[![Website](https://img.shields.io/badge/Website-zqinli.github.io-blue)](https://zqinli.github.io)
[![Jekyll](https://img.shields.io/badge/Built%20with-Jekyll-red)](https://jekyllrb.com/)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-black)](https://pages.github.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Personal academic homepage for Zhenqin Li, built with Jekyll and deployed through GitHub Pages.

## Features

- Displays profile information, contact links, and academic navigation.
- Shows recent news from `_data/news.yml`.
- Lists publications from the `_publications/` collection.
- Supports publication buttons for PDF, BibTeX, and code links.
- Supports light/dark mode switching.
- Keeps content editable through Markdown, YAML, Liquid includes, CSS, and JavaScript.

## Repository Structure

- Profile: `_data/profile.yml`
- News: `_data/news.yml`
- Publications: `_publications/*.md`
- Homepage: `index.md`
- About page: `about.md`
- Publications page: `publications.md`
- Page templates: `_layouts/`
- Reusable components: `_includes/`
- Styles: `assets/css/main.css`
- Scripts: `assets/js/main.js`
- Images: `assets/images/`

## Clone

```bash
git clone https://github.com/zqinli/zqinli.github.io.git homepage
cd homepage
```

For the existing local checkout:

```bash
cd /home/zhenqinli/homepage
```

## Requirements

- Git
- Ruby
- Bundler
- Jekyll dependencies from the repository `Gemfile`

This machine uses a Conda environment named `homepage`:

```bash
conda activate homepage
ruby --version
bundle --version
```

On a fresh machine, install Ruby first, then Bundler:

```bash
gem install bundler
```

## Install

```bash
cd /home/zhenqinli/homepage
conda activate homepage
bundle _2.5.22_ install --local
```

In a normal Ruby environment:

```bash
bundle install
```

## Preview

```bash
cd /home/zhenqinli/homepage
conda activate homepage
bundle _2.5.22_ exec jekyll serve
```

Open:

```text
http://127.0.0.1:4000
```

## Build

```bash
cd /home/zhenqinli/homepage
conda activate homepage
bundle _2.5.22_ exec jekyll build
```

The generated site is written to `_site/`.

## Update Flow

1. Edit content files such as `_data/profile.yml`, `_data/news.yml`, `index.md`, or `_publications/*.md`.
2. Build locally:

```bash
bundle _2.5.22_ exec jekyll build
```

3. Preview locally:

```bash
bundle _2.5.22_ exec jekyll serve
```

4. Commit and push:

```bash
git status
git add -A
git commit -m "update homepage"
git push origin main
```

Deployment is handled by GitHub Pages from the `main` branch.

## Publication Entry Format

Each publication lives in `_publications/`:

```yaml
---
title: "Paper Title"
authors: "Author A, Author B"
venue: "Venue"
year: 2026
teaser: "/assets/images/example.png"
paper: ""
show_pdf: true
show_code: true
code: "https://github.com/zqinli/DiFRa"
bibtex: ""
show_bibtex: true
selected: true
---
```

Use empty `paper` or `bibtex` values as placeholders until final files or citations are ready.
