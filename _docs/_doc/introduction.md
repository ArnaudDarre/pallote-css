---
layout: doc
subtitle: Learn how to get started with Pallote CSS and how to start using it for your project. You can install Pallote CSS in multiple ways.
---

## NPM

If you use NPM and SASS in your project, the easiest way to install Pallote CSS is to first run:

```shell
npm i pallote-css
```

Then import the global style file in your SASS file like this:

```scss
@import '../node_modules/pallote-css/dist/styles/pallote.css';
```

You will then be able to override the different variables to match your own design system. To learn how to do it, go to [Customise]({% link _doc/customise.md %}) page.

<div class="alert alert--info alert--notice">
  <p class="alert__title">Pallote CSS is powered with Sass, a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).</p>
</div>

## CDN

Alternatively, you can access Pallote CSS style files via a CDN. Simply copy/paste this code in between the `head` tag of your website. This is the latest version of Pallote CSS.

```html
<link rel="stylesheet" href="https://cdn.jsdeliver.net/npm/pallote-css@1.0.0/dist/styles/pallote.css">
```

<div class="alert alert--info alert--notice">
  <p class="alert__title">Please note that for now, it is not possible to customise the library when using the CDN.</p>
</div>
