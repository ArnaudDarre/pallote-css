---
layout: doc
subtitle: Learn here how to override the different styles of Pallote CSS to suit your own design system.
---

## Sass variables

The framework has a set of built-in variables that create the design look and feel. To override them, add a variable with the same name in your Sass style file. To see details of each variable, see [Color palette]({% link _variables/color-palette.html %}) and [Typography]({% link _variables/typography.html %}) pages.

```scss
$primary: #007A1E;

@import '../node_modules/pallote-css/dist/styles/index.scss';
```

<div class="alert alert--warning alert--notice">
  <p class="alert__title">The code must be placed above any import of Pallote CSS.</p>
</div>

## Component styles

To change a component style, see the documentation for each component and add create an instance of the class with new properties in your style file.

```scss
@import '../node_modules/pallote-css/dist/styles/index.scss';

.link {
  text-decoration: none;
}
```

<div class="alert alert--warning alert--notice">
  <p class="alert__title">The class must be placed below any import of Pallote CSS.</p>
</div>
