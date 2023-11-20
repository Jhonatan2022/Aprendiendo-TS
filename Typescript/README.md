# React + TypeScript + Vite

```bash
npm create vite@latest name_app
cd name_app
npm install
npx eslint --init
```

## Expanding the ESLint configuration

- Configure the top-level `parserOptions` property like this:

```js
// .eslintrc.js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },

// tsconfig.json
   "include": ["src", ".eslintrc.cjs"],
```
