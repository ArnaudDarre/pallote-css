# Pallote CSS

## Release

We use git flow for versioning and version tagging. On branch develop:

- Pull the latest changes

```shell
git pull | git pull origin production
```

- push the changes to the remote `develop` branch, to test on the staging environment

```shell
git push
```

- Once the tests have passed, publish the release (adding the version tag at the end)

```shell
git flow release start x.x.x
git flow release finish x.x.x
```

- push the changes

```shell
git push | git push origin develop | git push --tags
```

Deployment is automated with Netlify. The production environment is deployed automatically when the production branch is pushed.

## Jekyll plugins

Here is a list of Jekyll's plugins and dependencies used in the project.

### Compress

A Jekyll layout that compresses HTML ([documentation](http://jch.penibelst.de/)).

### Jekyll Inline SVG

SVG optimizer and inliner for jekyll ([documentation](https://github.com/sdumetz/jekyll-inline-svg)).

### Liquify

A Jekyll filter that can parse Liquid in front matter ([documentation](https://github.com/gemfarmer/jekyll-liquify)).
