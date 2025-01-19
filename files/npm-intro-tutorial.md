# A Beginner’s Guide to Getting Started with npm



#### [**#**](#what_is_npm) What is npm?
<div id='what_is_npm'>
npm (Node Package Manager) is the default package manager for the JavaScript runtime environment Node.js. It allows developers to share, download, and manage libraries (also called packages) that can be easily incorporated into their projects.

<img class='blog-c' src='https://res.cloudinary.com/benjamincrozat-com/image/fetch/c_scale,f_webp,q_auto,w_1200/https://github.com/benjamincrozat/content/assets/3613731/527efaf4-30dd-4066-8f8b-1012c05f904d' alt='reading_a_file_nodejs'>

This guide will help you set up npm and cover the basics for beginners.
</div>

### [**#**](#install_node.js_and_npm) Step 1: Install Node.js and npm

<div id='install_node.js_and_npm'>
npm is bundled with Node.js, so by installing Node.js, you’ll automatically get npm. Follow these steps:

1. **Download Node.js**:
   - Go to the [official Node.js website](https://nodejs.org/).
   - Download the recommended LTS (Long Term Support) version.
   
2. **Install Node.js**:
   - Run the installer and follow the installation steps.
   - After installation, verify the versions of Node.js and npm using these commands in your terminal/command prompt:
     ```bash
     node -v
     npm -v
     ```
   - You should see the versions of Node.js and npm listed.
</div>

### [**#**](#create_a_new_project) Step 2: Create a New Project
<div id='create_a_new_project'>
Now that Node.js and npm are installed, let’s create a new project and use npm to manage dependencies.

1. **Create a project folder**:
   - In your terminal, navigate to the directory where you want to create your project and run:
     ```bash
     mkdir my-first-npm-project
     cd my-first-npm-project
     ```

2. **Initialize npm**:
   - Run the following command inside the folder:
     ```bash
     npm init
     ```
   - You’ll be prompted to answer several questions (name, version, description, etc.). You can press `Enter` to skip the questions and use the default options, or customize them.

   - After this step, a `package.json` file will be created in your project directory. This file is important because it holds metadata about your project and tracks dependencies.
</div>

### [**#**](#installing_packages) Step 3: Installing Packages
<div id='installing_packages'>
npm makes it easy to install third-party libraries (called packages).

1. **Install a package**:
   - To install a package (e.g., `lodash`), use the following command:
     ```bash
     npm install lodash
     ```

   - This will:
     - Install `lodash` and save it in the `node_modules` directory (a folder containing all your project’s dependencies).
     - Add the package as a dependency in the `package.json` file.

2. **Install a package globally**:
   - If you want to install a package globally (so it can be used across all projects on your machine), add the `-g` flag:
     ```bash
     npm install -g nodemon
     ```
</div>

### [**#**](#using_packages_in_your_code) Step 4: Using Packages in Your Code
<div id='using_packages_in_your_code'>
To use a package in your code, simply `require` it. For example, if you installed `lodash`:

1. Create a new JavaScript file (`index.js`):
   ```js
   const lodash = require('lodash');

   const array = [1, 2, 3, 4, 5];
   console.log(lodash.reverse(array));
   ```

2. Run your file:
   ```bash
   node index.js
   ```

This should output the reversed array: `[5, 4, 3, 2, 1]`.
</div>

### [**#**](#managing_dependencies) Step 5: Managing Dependencies
<div id='managing_dependencies'>
#### Check Installed Packages
You can see a list of all installed packages by running:
```bash
npm list
```

#### Remove a Package
To uninstall a package, run:
```bash
npm uninstall <package-name>
```

This will remove the package from the `node_modules` folder and update your `package.json` file to reflect the change.

#### Install Packages from `package.json`
If you clone a project with an existing `package.json` file and need to install its dependencies, run:
```bash
npm install
```

This will install all the dependencies listed in `package.json`.
</div>

### [**#**](#using_npm_scripts) Step 6: Using npm Scripts
<div id='using_npm_scripts'>
You can define custom scripts in the `package.json` file to automate tasks like running tests or starting a server.

1. Open your `package.json` file and add a `scripts` section if it’s not already there:
   ```json
   "scripts": {
     "start": "node index.js",
     "test": "echo \"Error: no test specified\" && exit 1"
   }
   ```

2. To run the `start` script, use:
   ```bash
   npm start
   ```

You can add more scripts to automate different workflows, such as linting, testing, and building.
</div>

### [**#**](#updating_and_upgrading_packages) Step 7: Updating and Upgrading Packages
<div id='updating_and_upgrading_packages'>

1. **Check for outdated packages**:
   ```bash
   npm outdated
   ```

2. **Update a specific package**:
   ```bash
   npm update <package-name>
   ```

3. **Upgrade npm itself**:
   ```bash
   npm install npm@latest -g
   ```
</div>

### [**#**](#conclusion) Conclusion
<div id='conclusion'>
With these basics, you're ready to start using npm in your projects! You can explore npm’s [official documentation](https://docs.npmjs.com/) for more advanced features like managing versions, working with lock files, and publishing your own packages.
</div>