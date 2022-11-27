# emah

The official emah website built in [Next.js](https://nextjs.org/) and [Typescript](https://www.typescriptlang.org/) with [TailwindCSS](https://tailwindcss.com/) for styling.

## Technologies

- [Node.js](https://nodejs.org/) v18.12.1
- [Next.js](https://nextjs.org/) v13.0.4
- [React.js](https://reactjs.org) v18.2.0
- [Typescript](https://www.typescriptlang.org/) v4.9.3
- [TailwindCSS](https://tailwindcss.com/) v3.2.4

## Folder Structure

I'm using the <ins>src</ins> folder for keep code at a different level than configurations and miscellaneous files.

Thi is the structure I use for my Next.js projects:

<img src="/public/images/structure/onion-shape.jpg" alt="Onion-shape structure" />

We can express the above image with the following structure:

```
- src
  - app
  - core
  - components (domain)
  - modules (domain)
  - pages
    - api
```

### App

The router works in a directory named app, by default, components inside app are React Server Components.

We could develop our folder structure in this way:

```
- src
  - app
    - dashboard
      - settings
        - page.tsx
      - page.tsx
      - layout.tsx
    - page.tsx
    - layout.tsx
    - head.tsx
    - ...
```

In the app directory:

- Folders are used to define routes. A route is a single path of nested folders, following the hierarchy from the root folder down to a final leaf folder.

- Files are used to create UI that is shown for the route segment.

#### Core

This layer is used to place all unrelated to our <ins>domain</ins>

The <ins>core</ins> and the <ins>domain</ins> of a project, in my view, should be kept well separate.

Hard rule: **the <ins>core</ins> layer can never import anything from the <ins>domain</ins> layer**.

If something within the <ins>core</ins> layer needs something from the <ins>domain</ins>, it probably does not belong to the <ins>core</ins> layer.

For example:

- The database connector functions
- The utils for authentification
- The email provider
- The reusable UI components not related to any domain (ex. Button, Icons, List)
- And more...

The <ins>core</ins> layer provides the <ins>domain</ins> with the necessary tools for the application to work, for example, authenticating, querying the DB, or sending emails. But does not know how the consumer uses these tools.

We could develop our folder structure in this way:

```
- src
  - core
    - componente
      - input
        - Button.tsx
      - data-display
        - List.tsx
      - ...
    - hooks
      - input
        - useRefMousePosition.ts
      - sizing
        - useDimensions.ts
      - ...
    - database
        - connector.ts
```

#### Domain

The business domain is the area of control or a sphere of knowledge, such as, the group of entities, relationships, and behaviors of the business model, implemented as code.

We can express the <ins>domain</ins> layer with the following structure:

```
- src
  - components
  - modules
  ```

##### Modules

What should add to this folder anything about the <ins>domain</ins> that isn't a component, like:

- Custom hooks
- Configurations
- Contexts
- Global store
- Context
- Queries
- And all utilities related to the domain

We could develop our folder structure in this way:

```
- src
  - modules
    - app
      - context
      - config
    - search
      - hooks
      - config
      - utils
      - ...
    - navigation
      - hooks
      - config
    - ...
```

##### Components

The components that make up our app pages. Furthermore, these components are highly tied to the <ins>domain</ins> and are not supposed to be highly reusable across projects.

They're business-logic rich, and we can build them using the reusable UI components from <ins>core</ins>.

The business-logic side keep a lot of things, such as queries, or functions that mutate data, are all imported from modules so that they can be reusable across components.

We could develop our folder structure in this way:

```
- src
  - components
    - search
      - Search.tsx
      - SearchSuggestions.tsx
    - navigation
      - Navbar.tsx
    - sections
      - Hero.tsx
```

#### Pages

Next.js's router is file-system based, the folder <ins>pages</ins> is a Next-specific directory to place our API.

We could develop our folder structure in this way:

```
- src
  - pages
    - api
      - Search
        - [keyword].ts
      - products
        - [id].tsx
```

### Imports between Layers

Something important to clarify is the rules I have around importing between layers.

Typically, an inner layer cannot import from an outer layer, that means that **<ins>core</ins> cannot import from the <ins>domain</ins> layer, and the latter cannot import from <ins>pages</ins>**.

**Wrong**

<img src="/public/images/structure/onion-shape-flow-wrong.jpg" alt="Onion-shape structure flow wrong" />

**Ok**

<img src="/public/images/structure/onion-shape-flow-ok.jpg" alt="Onion-shape structure flow ok" />

This rule can ensure your <ins>core</ins> is decoupled from the <ins>domain</ins> to avoid cyclical dependencies and keep your architecture untangled.

#### Linting import paths with EsLint

We can ensure that we're using the rules above correctly when importing files in our application.

EsLint can help us by adding the following configuration, can automatically warn you that you're importing from the wrong paths:

```
"rules": {
  "import/no-restricted-paths": [
    "error",
    {
      "zones": [
        {
          "target": "./src/core",
          "from": "./src/components"
        },
        {
          "target": "./src/core",
          "from": "./src/modules"
        },
        {
          "target": "./src/core",
          "from": "./src/pages"
        },
        {
          "target": "./src/modules",
          "from": "./src/pages"
        },
        {
          "target": "./src/components",
          "from": "./src/pages"
        },
        {
          "target": "./src/core",
          "from": "./src/app"
        },
        {
          "target": "./src/modules",
          "from": "./src/app"
        },
        {
          "target": "./src/components",
          "from": "./src/app"
        }
      ]
    }
  ]
}
```

## Getting started

I recommend use [pnpm](https://pnpm.io/) because it hold all the packages at a global (centralized) store and use them if needed by other projects too by creating hard links to it.

1. Clone the project

```
$ git clone https://github.com/saufth/emah.git/
```

2. Install the dependencies:

```
$ pnpm install (recommended)
# or
$ yarn
# or
$ npm install
```

3. Run the development server

```
pnpm dev (recommended)
# or
yarn dev
# or
npm run dev
```

Open [http://localhost:3000/](http://localhost:3000/) with your browser to see the result.

## Credits

* [Fer Torres](http://github.com/saufth/)

## Licence

Copyright © 2022 emah. All rights reserved.
