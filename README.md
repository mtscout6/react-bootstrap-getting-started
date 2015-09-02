# React-Bootstrap Example Setup

This repo is a very basic example of how to get started with
[React-Bootstrap](http://react-bootstrap.github.io/). This example assumes you
are using [Webpack](http://webpack.github.io/) to build your front-end assets.
Before you begin let's make sure everything is configured correctly run `npm
install` and `npm run build`, then open the index.html file in your browser. You
should see an H1 tag rendered on the string saying "Hello Bootstrappers".

Now, this example will guide you through building the
[jumbotron](http://getbootstrap.com/examples/jumbotron/) example as outlined in
the Bootstrap Documentation.

## Step 1 - Get Bootstrap CSS loaded onto you page.

React-Bootstrap does not provide the Bootstrap CSS for you. That is on you to
include in your project. The reason for this is that there are many themes
available for Bootstrap, and React-Bootstrap does not make any assumptions about
which theme you plan to use.

### Solution Steps

Run `npm install bootstrap --save-dev` to get the default Bootstrap theme from
npm. Once you have the Boostrap module installed all you need to do is import
the less Bootstrap entry point in `App.js` with the line `import
'bootstrap/less/bootstrap.less'`.

Re-run `npm run build` and reload the index.html in your browser. You should see
that the H1 text is not using the default fonts defined in Bootstrap CSS.

## Step 2 - Get React-Bootstrap wired up

Using npm install React-Bootstrap and replace the `h1` tag with a
large React-Bootstrap Button with the style of sucess.

### Solution

Run `npm install react-bootstrap --save-dev` to install React-Bootstrap. To
ensure everything is working change the `h1` tag in the `App.js` file to `Button`.

You will need to add a new import at the top of your file for the `Button`
component. This is done with the import statement `import Button from
'react-bootstrap/lib/Button';`. You can also use the alternative import `import
{Button} from 'react-bootstrap';` though use extreme caution with this second
approach. Doing this will impose that you are loading the entire React-Bootstrap
project when all you needed was a Button. Doing this will negate a lot of the
benefits from using Webpack to chunk your application into small consumable
pieces. Also, if you never use some of the components Webpack will bundle them
up anyways and force your users to download more JavaScript than necessary.

Re-run `npm run build` and reload the index.html in your browser. You should see
that the old H1 Text is now wrapped in a Bootstap CSS Styled Button. If you
inspect the element you will see that the `btn btn-default` css class have
already been applied for you.

To explore a little bit more of what's available with React-Bootstrap Button's
add the props `bsStyle='success' bsSize='large'`. Re-build and refresh your
changes. You should now see a green button that is slightly larger. Also upon
inspecting the element you will see that the classes on that button are now `btn
btn-success btn-lg`. This is a common pattern throughout the React-Bootstrap
library.

_Pro Tip: Seeing as we will continue to rebuild the source frequently through
this, consider running `npm run watch`. This will run `webpack --watch` which
will watch your files for changes and recompile the resulting bundle
automatically. Then you should only need to refresh your browser to see the
changes. There are other tools out there that will also watch your files for
changes and automatically refresh the browser for you. Those generally require
more setup which is why I only mention that they exist. (See
[LiveReload](http://livereload.com/) and
[Webpack-Dev-Server](http://webpack.github.io/docs/webpack-dev-server.html) with
[React-Hot-Loader](http://gaearon.github.io/react-hot-loader/) for further
details.)_

