# Website Build

This repository contains a simple, modern website inspired by the design of
[m2‑labs.com](https://www.m2-labs.com).  The goal is to provide a clean,
skeletal structure that you can easily customise and extend.  All of the
markup, styles and scripts live in the top‑level files of this folder:

* **`index.html`** – The main HTML document.  It uses semantic tags
  (`<header>`, `<section>`, `<footer>`) and includes comments to explain
  how each piece should be modified.  This is where you’ll add or
  remove content sections, update navigation links and embed third‑party
  widgets (e.g. for e‑commerce).

* **`style.css`** – Defines the visual appearance of the site using
  CSS variables for colours and fonts.  The layout is responsive and
  mobile‑friendly out of the box.  Adjust the variables at the top of
  the file to tweak the colour scheme or typography.

* **`script.js`** – Houses small JavaScript enhancements such as smooth
  scrolling and newsletter form handling.  Expand this file as you
  introduce new interactive features.  Avoid embedding scripts directly
  in your HTML.

* **`our-story.html`** – A dedicated story page that mirrors the look of
  the homepage while telling the history behind the brand.  The
  narrative draws upon the “Complete Story” published by M2 Labs
  and demonstrates how to structure long‑form content using
  multiple sections.  When adding your own story, keep the
  headings and paragraphs wrapped in the `.story-page-section` class
  for consistent typography.


The default hero background is pulled from Unsplash via an HTTPS link
defined directly in `style.css`.  If you prefer to use a local image,
place it in an `assets` folder and update the `background-image`
property in the `.hero` rule accordingly.

## Extending the Site

The foundation provided here makes it straightforward to add
e‑commerce functionality, content management and more.  Below are a few
suggestions:

* **E‑commerce integration:** Many third‑party platforms (e.g. Shopify,
  Snipcart, WooCommerce) provide JavaScript snippets that you can
  embed into the empty `div#ecommerce-plugin` element in `index.html`.
  Consult your provider’s documentation for the best integration
  practices.  Always load external scripts over HTTPS.

* **Blog or news feed:** If you plan to publish articles, consider
  connecting a headless CMS (Contentful, Sanity, etc.) or using
  Markdown files processed by a static site generator.  The `#news`
  section in the HTML is currently a placeholder.

* **Accessibility:** Semantic tags and alt attributes are already used
  throughout the template.  Continue to add descriptive alt text to
  images and labels to form fields as you expand the site.  Test your
  pages with screen readers to ensure an inclusive experience.

* **Security:** Always serve your site over HTTPS, sanitise any user
  input on the server side and keep dependencies up to date.  If you
  introduce third‑party scripts, verify that they come from trusted
  sources.

## Running Locally

You can preview the site by opening `index.html` directly in your
browser or by serving it with a lightweight web server (e.g. `python -m
http.server`).  No build step is required for this template.

```
python -m http.server --directory /path/to/sitebuild 8080
```

Then navigate to `http://localhost:8080` in your browser.

Feel free to open issues or submit pull requests if you see areas for
improvement.