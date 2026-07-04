<img width="623" height="253" alt="image" src="https://github.com/user-attachments/assets/6abc39b7-ddaf-4b98-96d3-09ec56bbba18" />

# ds.css

A css framework recreating parts of the DS / DS Lite's UI. Preview what's included [here](https://css.ds.dreamyard.xyz)!

the fastest way to use it is to import from unpkg

```html
<!-- in your html's <head> -->
<link rel="stylesheet" href="https://unpkg.com/@spiritov/ds.css" />
```

if you'd rather download it, or want to stay on a specific version, you can do so by copying the contents of `/dist`

```html
<link href="./ds.css" rel="stylesheet" />
```

or, install with npm

```sh
npm i @spiritov/ds.css
```

## using widgets (web components)

included web components can also be imported from unpkg. for example, to import the calendar..

```html
<!-- in your html's <head> -->
<script type="module" src="https://unpkg.com/@spiritov/ds.css/dist/widgets/ds-calendar.js" />

<!-- in your html -->
<ds-calendar></ds-calendar>
```

you can also download and import them manually
```html
<script type="module" src="./widgets/ds-calendar.js" />
```


or, install with npm for use in a web framework. with Svelte, this could look like
```html
<script>
  import { onMount } from 'svelte';
  onMount(async () => {
    await import("@spiritov/ds.css/dist/widgets/ds-calendar.js");
  });
</script>

<ds-calendar></ds-calendar>
```

## todo

- provide a way to use ds.css nested / scoped within a page
- clock web component ([like here](https://ds.dreamyard.xyz/))
- more pictochat components(?)
- extra ds-inspired components(?)
