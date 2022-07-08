# Monorepo using NX with Styled Components, TailwindCSS and Twin

The example is a monorepo using Nx, Typescript, Next for the package `ui-web` (the website that can use TailwindCSS) and the components package using Styled Components, TailwindCSS and Twin (npm package called `twin.macro`).

## Steps

### Installation 
1. Install Nx globally with `npm i -g nx@latest` to run the NX scripts for this example.
2. Create a new monorepo project running `npx create-nx-workspace <your_monorepo_name> --preset=ts`
3. Copy the Nx settings (root file called `nx.json`) `workspaceLayout` for creating libraries and applications in the same folder (called `packages`) instead of multiple folders. More on [Nx docs](https://nx.dev/configuration/packagejson#workspace-layout)
4. To remove a package, run `nx g @nrwl/workspace:remove --projectName=<your_package_name>`, because it will also delete the Nx settings for your specific package.
5. Install Nx generator `next` with `npm i -D @nrwl/next`.
6. Create a Next application with `nx g @nrwl/next:app ui-web` and then a library for the components `nx g @nrwl/react:library ui-components --buildable` (you'll need to select Styled Components). Nx console will let you choose which CSS library to use, select Styled Components, of course. Selecting that CSS library, Nx will add it to  Nx Next generator settings in the root `nx.json` with field `style`. You can remove the package `ui-web-e2e` if you're not planning to code end-to-end tests.
7. Install TailwindCSS with `npm install -D tailwindcss postcss autoprefixer`.
8. Install Twin (I'm installing the [latest relesase](https://github.com/ben-rogerson/twin.macro/releases) that is a canditate with `npm i twin.macro@rc`.
9. Install Babel Plugin Macros `npm i -D babel-plugin-macros`.

> All the Nx's npm packages should have the same version.

### Set up Tailwind, Babel and Babel Macros

1. In the root directory of the package `ui-components` (or the name you set up before), you need to copy the next two files: `postcss.config.js` and `tailwind.config.js` that you can find on the example's package.
2. Delete the babel config file `.babelrc` in the package `ui-components` and copy the example file `babel.config.js` of the package `ui-web` to your Next application package.
3. As said on [Twin docs](https://github.com/ben-rogerson/twin.examples/tree/master/cra-styled-components#add-the-twin-config), Twin config can only be set up on `package.json` or `babel-plugin-macros.config.js`. Our example uses the root `package.json`. Copy the same configuration called `babelMacros`.
4. Now it's time to copy the code in `src` folders of the packages `ui-components` and `ui-web`.


### Finish

1. Run the Next application with `nx run ui-web:serve`.
2. You should see a green text.

> You can also add a script on `package.json` (look at the example) to run the local Nx instead of the global Nx installed on your computer.
