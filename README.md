# Pallote CSS

Welcome to Pallote CSS! Pallote CSS is an open-source CSS library aimed at providing developers with a collection of reusable and customisable components and styles streamline the development of web projects.

- [Usage](#usage)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Methodology](#methodology)
- [License](#license)

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

Alternatively, you can import the CSS file into your HTML via a CDN. Simply copy/paste this code in between the `head` tag of your website. Make sure to add the version number, as next version could introduce breaking changes.

```html
<link rel="stylesheet" href="https://cdn.jsdeliver.net/npm/pallote-css@1.0.0/dist/styles/pallote.css">
```

### Using Components

Once the library is imported, start using the components by adding appropriate class names to your HTML elements. Refer to the [documentation](https://pallote.com) for each component to understand its usage and available customisation options.

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

The documentation is built with Jekyll. For more information on how to run the repo and contribute, see section below.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for new features, feel free to open an issue or submit a pull request. This documentation serves as a guide for contributors on how to effectively contribute to the project.

### Run the project locally

- Fork the repository and clone it
- Install [Jekyll](https://jekyllrb.com/); Jekyll is a Ruby Gem that can be installed on most systems ([installation manual](https://jekyllrb.com/docs/installation/)).
- Install dependencies

```shell
npm install
```

- Start a localhost server

```shell
npm run dev
```

### Make changes

- Checkout to `develop` branch
- Create a new branch on which to write your code

```shell
git checkout -b feature-name-of-branch
```

> Make sure to add the prefix `feature-` to the name of your branch

- Write your code. There are two locations for the style files:
  - `dist/styles` folder, which are the core styles of the library
  - `assets/styles` folder, which are the documentation website specific styles

> You don't need to run any additional command to compile sass files, it does it automatically with `npm run dev`

> Remember to add any new class or property to the doc

### Submit your code

- Before submitting a pull request, make sure to test your changes thoroughly. Ensure that your changes do not break any existing functionality and that they are compatible with different browsers.
- Once the changes are made and tested, submit a pull request to the main repository. Be sure to include a clear description of all the changes you've made.
- When changes are approved, they will be merged into the develop branch for testing, and will be published to the master branch on the next release.

### Reporting Issues

If you encounter any issues while using Pallote CSS, please report them by opening an issue on the GitHub repository. Be sure to include a detailed description of the problem and steps to reproduce it.

## Methodology

Pallote CSS is based on an adapted version of BEM terminology (for Block Element Modifier). More information on naming conventions and methodology is in progress.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
