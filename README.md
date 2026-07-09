# Mohammad Nayem Hossain — Personal Website

[![Deploy site](https://github.com/mdnayemhossain/mdnayemhossain.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/mdnayemhossain/mdnayemhossain.github.io/actions/workflows/deploy.yml)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fmdnayemhossain.github.io)](https://mdnayemhossain.github.io/)

Source for my personal academic portfolio, live at **[mdnayemhossain.github.io](https://mdnayemhossain.github.io/)**.

I'm a graduate student in Electronics at the University of Oulu, Finland, with
interests in VLSI, photonics, and quantum computing. Previously I worked as an
Analog Layout Design Engineer at Quest Global and an Assistant Engineer at
Ulkasemi, and earlier as a research student in the NSU Optics Lab at North South
University.

## What's on the site

- **Home** — short bio and my journey so far
- **Skills** — tools and areas I work in
- **Projects** — selected work
- **Research** — publications and research interests
- **CV** — full curriculum vitae
- **Blog** — occasional writing (including a few Bengali pieces)

## Built with

- [Jekyll](https://jekyllrb.com/) on the [al-folio](https://github.com/alshedivat/al-folio) theme
- Comments via [giscus](https://giscus.app/) (GitHub Discussions)
- Deployed automatically to GitHub Pages by the [`deploy.yml`](.github/workflows/deploy.yml)
  GitHub Actions workflow, which builds the site and publishes it to the
  `gh-pages` branch

## Running locally

Requires Ruby and Bundler.

```bash
bundle install
bundle exec jekyll serve
```

The site is then available at `http://localhost:4000/`.

## Structure

| Path | Contents |
| --- | --- |
| `_pages/` | Top-level pages (about, projects, CV, …) |
| `_posts/` | Blog posts |
| `_bibliography/` | Publications (BibTeX) |
| `_layouts/`, `_includes/` | Page templates and partials |
| `_sass/`, `assets/css/` | Styles |
| `assets/` | Images, JS, and other static files |
| `_config.yml` | Site configuration |

## License

The content of this site (text, images, writing) is © Mohammad Nayem Hossain.

The underlying website is based on the **al-folio** theme by Maruan Al-Shedivat
and contributors, distributed under the [MIT License](LICENSE).
