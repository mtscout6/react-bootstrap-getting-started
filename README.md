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

For the solution checkout tag step-1-solution with `git checkout step-1-solution`
