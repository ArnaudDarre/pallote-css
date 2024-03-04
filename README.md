# Pallote CSS

Welcome to Pallote CSS! This library is designed to provide a collection of reusable and customizable CSS components to streamline the development of web applications.

## Usage

### Installation

#### NPM

To install Pallote CSS via npm use:

```bash
npm install pallote-css
```

Then import the global style file in your SASS file like this if you are using SASS:

```scss
@import '../node_modules/pallote-css/dist/styles/pallote.scss';
```

Or like this if you are using regular CSS:

```html
<link rel="stylesheet" href="../node_modules/pallote-css/dist/styles/pallote.scss">
```

#### CDN

Alternatively, you can import the CSS file into your HTML via a CDN. Simply copy/paste this code in between the `head` tag of your website.

```html
<link rel="stylesheet" href="https://cdn.jsdeliver.net/npm/pallote-css@1.0.0/dist/styles/pallote.css">
```

### Using Components

Once the CSS file is imported, you can start using the components by adding appropriate class names to your HTML elements. Refer to the [documentation](https://pallote.com) for each component to understand its usage and available customisation options.

```html
<button class="button button--primary">Primary Button</button>
```

### Customisation

Pallote CSS allows for easy customisation of components to match your project's design.

#### Custom variables

The framework has a set of built-in variables that create the design look and feel. To override them, add a variable with the same name in your Sass style file. To see the full list of variables, see [documentation](https://pallote.com).

```scss
$primary: #007A1E;

@import '../node_modules/pallote-css/dist/styles/index.scss';
```

#### Custom components styles

To change a component style, see the documentation for each component and add create an instance of the class with new properties in your style file.

```scss
@import '../node_modules/pallote-css/dist/styles/index.scss';

.button {
  text-decoration: underline;
}
```

You can also override default styles by defining custom CSS rules in your project's stylesheet.

```css
.custom-button {
  text-decoration: underline;
}
```

## Documentation

For detailed documentation on each component and customisation options, please refer to the documentation website: [pallote.com](https://pallote.com).

The documentation is built with Jekyll. For more information on how to run the repo, see README.md file in the `_docs` folder.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
