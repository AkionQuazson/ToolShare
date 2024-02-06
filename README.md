# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Toolshare

## Available Scripts

In the project directory, you can run:

### `npm run dev`

This command starts the Vite development server. Vite provides a faster and leaner development experience for modern web projects. The server will typically be available at `http://localhost:3000`.

### `npm run build`

This command uses Vite to build your application for production. It will create an optimized version of your app, ready for deployment.

### `npm run lint`

This command runs ESLint, a tool for identifying and reporting on patterns in JavaScript. It checks your code for any style issues or deviations from the coding standards you've set for your project. The `--ext js,jsx` option tells ESLint to check all JavaScript and JSX files. The `--report-unused-disable-directives` option reports errors when eslint-disable comments (used to ignore potential issues in a line of code) are unnecessary. The `--max-warnings 0` option treats warnings as errors.

### `npm run preview`

This command runs the Vite preview server on the production build. It's useful for previewing the build locally without a full server setup.

### `npm run server`

This command starts a Node.js server from the `server/server.js` file. The purpose of this is to serve API endpoints, static files, etc.

### `npm start`

This command runs the `dev` and `server` scripts concurrently, meaning it will start both the Vite development server and your Node.js server at the same time. This is useful for development, as you can work on your front-end and back-end simultaneously.