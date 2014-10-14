# Protokollen: Site

Protokollen builds on the [Jekyll](http://jekyllrb.com/) framework. The template was generated using the Yeoman generator [Generator-jekyllrb](https://github.com/robwierzbowski/generator-jekyllrb).

### Set up
Install [Node JS](http://nodejs.org/) and [Grunt](http://gruntjs.com/getting-started).

Run <code>npm install</code> to install Node modules.

Use grunt to serve and build.

## Build

From https://github.com/robwierzbowski/generator-jekyllrb:

#### grunt serve

Compiles all files and opens the site in your default browser. A watch task watches for changes to files, recompiles if necessary, and injects the changes into the browser with LiveReload.

#### grunt check

Checks code quality with Jshint and CSS Lint, and Jekyll health with `jekyll doctor`.

#### grunt build

Builds an optimized site to the dist directory. [Usemin blocks](https://github.com/yeoman/grunt-usemin#the-useminprepare-task) are concatenated, [CSS](https://github.com/gruntjs/grunt-contrib-cssmin), [images](https://github.com/gruntjs/grunt-contrib-imagemin), and [HTML](https://github.com/gruntjs/grunt-contrib-htmlmin) are minified, [JavaScript is uglified](https://github.com/gruntjs/grunt-contrib-uglify), and assets are [revved](https://github.com/yeoman/grunt-filerev) for cache busting.

`grunt serve:dist` will run `grunt build` and open the result in your default browser

#### grunt deploy

During scaffolding the generator gives you the option to configure [grunt-build-control](https://github.com/robwierzbowski/grunt-build-control) to version and deploy your built code to a remote repository. If you configure build-control, `grunt deploy` will run `grunt check`, `grunt test`, `grunt build`, and then commit and deploy your built code to the specified remote repository. 

#### grunt (default)

`grunt` on its own is a special task that runs `grunt check`, any tests you've added, and `grunt build`.

#### Individual tasks and :targets

Every task and target in the Gruntfile can be run individually (e.g., `grunt jshint:all` or `grunt compass:server`). Edit the tasks and [add new ones to fit your needs](http://gruntjs.com/configuring-tasks).

### Bower, components, and Usemin

[Bower](http://bower.io/) is a package manager for front-end components. Use it to download and manage CSS, JavaScript, and [preprocessor tools](https://github.com/Team-Sass) for your site. Everything in the _bower_components directory is available while running `grunt serve`.

To include components in the build, place them inside of a Usemin block or add them to the `copy:dist` task. This workflow will be streamlined with the release of Usemin 2.0.

## Site specifics

- `app/_includes`: The blocks of texts used on the start page etc.
- `app/_layouts`: The main templates (<html></html>).
- `app/_posts`: Place blog posts here.
- `app/_scss`: Set styles in `main.scss`.
- `app/index.html`: The landing page.





