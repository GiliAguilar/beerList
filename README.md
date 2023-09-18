# beerslist

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## FAQs

---

1. **Where can I change the API Url? and its request limits?**
   _you can change both in .env.development .env.production and .env.test; this will affect all components of the app_
2. **Can I add more information in beer overview?**
   _yes, you can add more information, in the component AboutBeer.vue you can add as more information as you want using the prefixed "data."_

## Known Issues

---

- When the user make a search, the first 10 values (beer) are always showing
- text of the search bar is not centered
- text of every card is not vertical centered in his own columns
- beer image in list view are not centered in his own column
- weird issue in beer overview trying to find data
