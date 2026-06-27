# Zhenqin Li Academic Homepage

[![Website](https://img.shields.io/badge/Website-zqinli.github.io-blue)](https://zqinli.github.io)
[![Jekyll](https://img.shields.io/badge/Built%20with-Jekyll-red)](https://jekyllrb.com/)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-black)](https://pages.github.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Personal academic homepage for Zhenqin Li. The site is built with Jekyll and is designed for GitHub Pages deployment.

## What It Does

- Displays profile information, contact links, and research homepage navigation.
- Shows recent news from `_data/news.yml`.
- Lists publications from the `_publications/` collection.
- Supports light/dark mode switching.
- Keeps content editable through Markdown, YAML, HTML includes, and local CSS.

## What To Update

- Profile: `_data/profile.yml`
- News: `_data/news.yml`
- Publications: `_publications/*.md`
- Homepage text: `index.md`
- Navigation/sidebar layout: `_includes/`
- Page templates: `_layouts/`
- Styles: `assets/css/main.css`
- Scripts: `assets/js/main.js`
- Images: `assets/images/`

## Clone

```bash
git clone https://github.com/zqinli/zqinli.github.io.git homepage
cd homepage
```

If the repository is already available locally:

```bash
cd /home/zhenqinli/homepage
```

## Environment

Required tools:

- Git
- Ruby
- Bundler
- Jekyll

This local setup uses the existing Conda environment named `homepage`:

```bash
conda activate homepage
ruby --version
bundle --version
```

Expected local commands in this repository use Bundler `2.5.22`:

```bash
bundle _2.5.22_ --version
```

For a fresh machine without the Conda environment, install Ruby first, then install Bundler:

```bash
gem install bundler
```

## Install

```bash
cd /home/zhenqinli/homepage
conda activate homepage
bundle _2.5.22_ install --local
```

If running in a normal Ruby environment, this is usually enough:

```bash
bundle install
```

If Bundler reports missing gems, install them through the active Ruby environment and run `bundle install` again.

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

## Common Update Flow

1. Edit content files such as `_data/profile.yml`, `_data/news.yml`, `index.md`, or `_publications/*.md`.
2. Run a local build:

```bash
bundle _2.5.22_ exec jekyll build
```

3. Preview locally:

```bash
bundle _2.5.22_ exec jekyll serve
```

4. Commit the update:

```bash
git status
git add -A
git commit -m "update homepage"
```

## Update Main

```bash
cd /home/zhenqinli/homepage
git status
git add -A
git commit -m "update homepage"
git branch -M main
```

If a GitHub remote is configured later, deployment can be handled separately through GitHub Pages.

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
code: "https://github.com/zqinli/DiFRa"
bibtex: ""
show_bibtex: true
selected: true
---
```

Use empty `paper` or `bibtex` values as placeholders until final files or citations are ready.

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=zqinli/zqinli.github.io&type=Date)](https://www.star-history.com/#zqinli/zqinli.github.io&Date)
