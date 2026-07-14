[![NPM Version](https://img.shields.io/npm/v/%40spiritov%2Fds.css)](https://www.npmjs.com/package/@spiritov/ds.css)
[![npm package minimized gzipped size](https://img.shields.io/bundlejs/size/%40spiritov%2Fds.css)](https://www.npmjs.com/package/@spiritov/ds.css)
<img width="975" height="263" alt="image" src="https://github.com/user-attachments/assets/822901ff-153d-4154-89c4-ebee430d809a" />


# ds.css

A css framework recreating parts of the DS / DS Lite's UI. Preview what's included [on the docs site!](https://css.ds.dreamyard.xyz)

the fastest way to use it is to import from unpkg

```html
<!-- in your html's <head> -->
<link rel="stylesheet" href="https://unpkg.com/@spiritov/ds.css" />
```

you can also [download a release](https://github.com/spiritov/ds.css/releases)

```html
<link href="./dist/ds.css" rel="stylesheet" />
```

or, install with npm

```sh
npm i @spiritov/ds.css
```

## scoped styles
if you'd like to only use ds.css in specific parts of your html, you can import `ds-scoped.css` instead, and use it inside a parent div with `class="ds-css"`

```html
<!-- in your html's <head> -->
<link rel="stylesheet" href="https://unpkg.com/@spiritov/ds.css/dist/ds-scoped.css" />

<!-- in your html -->
<button>a standard button</button>

<div class="ds-css">
  <button>a DS button!</button>
</div>
```

<img width="176" height="73" alt="image" src="https://github.com/user-attachments/assets/a4a536ba-6099-4aa9-b0f7-7185967ded8f" />

## using widgets (web components)
> [web components source code](https://github.com/spiritov/ds.css-showcase/tree/main/src/routes/widgets)

included web components can also be imported from unpkg. for example, to import the calendar..

```html
<!-- in your html's <head> -->
<script type="module" src="https://unpkg.com/@spiritov/ds.css/dist/widgets/ds-calendar.js"></script>

<!-- in your html -->
<ds-calendar></ds-calendar>
```

they're also included in the [releases page](https://github.com/spiritov/ds.css/releases)

```html
<script type="module" src="./dist/widgets/ds-calendar.js"></script>
```

or, install with npm for use in a web framework. with Svelte, this could look like

```html
<script>
  import { onMount } from 'svelte';
  onMount(async () => {
    await import('@spiritov/ds.css/dist/widgets/ds-calendar.js');
  });
</script>

<ds-calendar></ds-calendar>
```

## issues
feel free to report any bugs in the [issues page](https://github.com/spiritov/ds.css/issues), or to post suggestions and ideas in the [discussions page!](https://github.com/spiritov/ds.css/discussions)

## todo
- more pictochat components(?)
- extra ds-inspired components(?)
