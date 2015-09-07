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

## Step 3 - Add header navigation with inline form

Using the [`Navbar`](http://react-bootstrap.github.io/components.html#navbars),
[`Nav`](http://react-bootstrap.github.io/components.html#navs),
[`Input`](http://react-bootstrap.github.io/components.html#input), and
[`Button`](http://react-bootstrap.github.io/components.html#buttons) components
from React-Bootstrap build the header navigation.

### Solution

One of the tenants of a good React application is the ability to break-up smaller
components from the bigger picture of your web application as a whole. So, for
this exercise we will create a new component call the `HeaderNavigation`
component. Create a new file in the `src` folder called `HeaderNavigation.js`. 

In this file import React, and the React-Bootstrap components you will need:

```
import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import Input from 'react-bootstrap/lib/Input';
import Button from 'react-bootstrap/lib/Button';
```

Next define and export your new component:

```
export default HeaderNavigation extends React.Component {
  render() {
    return (
      // Your components implementation will go here.
      <div>Content</div>
    );
  }
}
```

To make sure you have wired up this component properly let's add it into the
main app now and ensure it's rendering to the screen. In the `App.js` file
import this new component and replace the Button getting rendered with this new
component. That should look in part like `React.render(<HeaderNavigation />,
document.getElementById('app'));`.

Once you are confident that your new component is wired up change that render
function to buld the navigation bar.

```
render() {
  let brand = <a href='#'>Project Name</a>;
  return (
    <Navbar brand={brand} fixedTop inverse>
      {/* Nav content will go here */}
    </Navbar>
  );
}
```

Note that there is a `brand` prop on the `Navbar` component that can take either
a string or another React element. This will allow you to use an image, link, or
whatever your heart desires reside under the brand bootstrap class. The CSS
class `navbar-brand` will get inserted into the top level element that you pass
to the `brand` prop. Take a moment to inspect the HTML that is rendered by this.

Now the inline form elements are aligned to the right of the `Navbar`. Within the
`Navbar` element add a `Nav` element with the prop `right`:

```
<Nav right>
  {/* Inline form elements will go here */}
</Nav>
```

Now for the inline form:

```
  <form className='navbar-form' action="">
    <Input type='text' placeholder='Email' />{' '}
    <Input type='text' placeholder='Password' />{' '}
    <Button bsStyle='success' type='submit'>Sign in</Button>
  </form>
```

Note the odd use of `{' '}` at the end of each line with the `Input` elements.
This is there because of a limitation with JSX. In normal Html browsers recognize
this line break and apply a space between your elements implicitly. Due to the
nature of JavaScript and now minifiers can and will strip out white space JSX
will not impolicity put that space in there for you. So, you have to do it
yourself.

Now for one last finishing touch, in the example from the Bootstrap docs you
will note that this Navigation is responsive. To acheive the same thing with
React-Bootstrap all you need to do is add `toggleNavKey={0}` to the `Navbar` and
`eventKey={0}` to the `Nav`. `0` in this case is the key used to coordinate
those two together. Resize the window to a mobile device size and observe what
this does to the inline form.

## Step 4 - Implement content Body

Using the
[`Jumbotron`](http://react-bootstrap.github.io/components.html#jumbotron),
[`Grid`](http://react-bootstrap.github.io/components.html#grids),
[`Row`](http://react-bootstrap.github.io/components.html#grids),
[`Col`](http://react-bootstrap.github.io/components.html#grids), and
[`Button`](http://react-bootstrap.github.io/components.html#buttons) components
from React-Bootstrap build the content body.

### Solution

Add a new component called `Body` and include it under the `HeaderNavigation`
component within the `App` component. Since `React.render` can only take one
element you'll need to wrap them with a `<div>`.

```
React.render(
  <div>
    <HeaderNavigation />
    <Body />
  </div>
  , document.getElementById('app'));
```

Your `Body` component will also need to wrap it's content in a `<div>` since you
can only return a single element from a React Component's `render` function.

```
export default class Body extends React.Component {
  render() {
    return (
      <div>
        {/* Body content will go here */}
      </div>
    );
  }
}
```

The next element to use is a `Jumbotron`, this is what's providing the grey
background of the document header. In the `HeaderNavigation` when you used the
`Navbar` component it was applying [Bootstrap's
`container`](http://getbootstrap.com/css/#grid) class for you. The `Grid`
component from React-Bootstrap will do the same thing for you. To center the
content of the `Jumbotron` use a `Grid` as it's only child. 

Now you can simple add the `<h1>`, `<p>`, and `<Button>` as presented by the
[Bootstrap Example](http://getbootstrap.com/examples/jumbotron/).

Check your changes in the browser. You will notice that the `Jumbotron` is
sitting higher up in the document than in Bootstrap's Example. This is because
the `Navbar` is fixed to the top of the document and all the other content will
flow beneath it. The Example is using custom CSS to push the `Jumbotron` about
`48px` from the top of the document, essentially putting it below the `Navbar`.
To fix this add a custom CSS file that adds the appropriate `margin-top` above
the `Jumbotron`, then import that custom css into your `App.js` file so Webpack
will include it in the bundle. Check your changes in the browser to ensure that
the `Jumbotron` is correctly positioned.

Next are the three descriptions with each housing a description. Use a new
`Grid` component below the `Jumbotron` with a single `Row` and three `Col`s.
Since [Bootstrap's Grid System](http://getbootstrap.com/css/#grid) has up to 12
columns and we need three blocks, we can infer that each block should span 4
columns. This is achievable by adding the `md={4}` prop to each `Col`. 

```
<Grid>
  <Row>
    <Col md={4}>
      {/* Block content */}
    </Col>
    <Col md={4}>
      {/* Block content */}
    </Col>
    <Col md={4}>
      {/* Block content */}
    </Col>
  </Row>
</Grid>
```

Now simply add the `<h2>`, `<p>`, and `<p><Button /></p>` content to each block.
Note that when viewing this in the browser that this column layout is
responsive, resize the window to a mobile sized view and observe what the
columns do.

## Step 5 - Add Page Footer

Add the page footer from the [Boostrap Example](http://getbootstrap.com/examples/jumbotron/).

### Solution

Add a `Footer` component to your project that uses a `Grid` to center the
content, with an `<hr />` and `<footer>` element with the copyright
information.

```
<Grid>
  <hr />
  <footer>
    <p>© Company 2014</p>
  </footer>
</Grid>
```

## Step 6 - Change inputs to do client side validation

Everything up to this point is now inline with the [Bootstrap
Example](http://getbootstrap.com/examples/jumbotron/), so let's spice it up a
little bit to see more of the power that React-Bootstrap can provide for you.

Let's refactor the Inline Form from the `NavigationHeader` into it's own
component. Then after that is complete add [Bootstrap Input
Validation](http://getbootstrap.com/css/#forms-control-validation) using the
[`Input`](http://react-bootstrap.github.io/components.html#input-validation)
component from React-Bootstrap

### Solution

First create a new `InlineLogin` component and move the inline form elements
from the `HeaderNavigation` to the new `InlineLogin` component. Your
`HeaderNavigation` will now look something like:

```
<Navbar brand={brand} fixedTop inverse toggleNavKey={0}>
  <Nav right eventKey={0}>
    <InlineLogin className='navbar-form' />
  </Nav>
</Navbar>
```

Next add an `onSubmit` function to the `InlineLogin` component. The purpose of
this function is to provide an oportunity to change the behavior of the form
submission. For now we are just going to prevent the form from publishing to a
server.

```
onSubmit(e) {
  e.preventDefault();
}
```

To make the form use this function you'll nee to add an
`onSubmit={this.onSubmit}` prop which will invoke this function whenver the form
is submitted.

Next we will add an `onEmailChange` function which will validate the user's
input as they type.

```
onEmailChange(e) {
  const value = this.refs.email.getValue();

  if (/.+@.+\.com/.test(value)) {
    this.setState({emailValid: 'success'});
  } else {
    this.setState({emailValid: 'error'});
  }
}
```

Note that the `onEmailChange` event here is calling
`this.refs.email.getValue()`. This will utilize the [React
refs](https://facebook.github.io/react/docs/more-about-refs.html) of the
instance of the element to which this function is bound (see follow on
paragraphs about the binding) to get the `Input` component for the email input.
You'll need to add the `ref='email'` prop to that input for this to work.
React-Bootstrap provides a method on `Input` components to get the value entered
by the user into it.

The `/.+@.+\.com/` code is a very basic [Regular
Expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
to ensure that the email address is an email address with an `@` symbol ending
in `.com`. _Note: This is a very basic regex that is not suitable for production
usage. It is mainly used here to convey validation behavior with React-Bootstrap
Inputs._

You will also need to add a `constructor` function to the component that binds
the `onEmailChange` function to each individual instance of `InlineLogin`. This
constructor will also initialize the Component's state to an empty JavaScript
object.

```
constructor() {
  super();

  this.onEmailChange = this.onEmailChange.bind(this);
  this.state = {};
}
```

Now that your `onEmailChange` function can do validation is time to add an
`onChange={this.onEmailChange}` prop to your email input so it will get invoked
as the user types something in. You will want to see the change so use the
`bsStyle={this.state.emailValid}` prop to see the Bootstrap form validation
styling. To see the validation Icon add the `hasFeedback` prop. Your email input
should now look like:

```
<Input
  ref='email'
  type='text'
  bsStyle={this.state.emailValid}
  placeholder='Email'
  onChange={this.onEmailChange}
  hasFeedback
/>
```

Test this in your browser by typing in the email address `test@test.com`,
observe how the `Input` validation is updated as you type.

## Step 7 - Change the "Learn More" Button to show a Modal

The last component from React-Bootstrap that we will work with is the
[`Modal`](http://react-bootstrap.github.io/components.html#modals). In this step
change the "Learn more »" button to display a `Modal`. Use the title "Learn
More" with the body text "This demonstrates how to use the Modal component from
React-Bootstrap"

### Solution

To start off let's move the "Learn more »" button into it's own component called
`LearnMore`. Then add the functions `closeModal` and `openModal` to the
component with a `constructor` that binds the functions to the individual
instances of the `LearnMore` component.

```
constructor() {
  super();

  this.closeModal = this.closeModal.bind(this);
  this.openModal = this.openModal.bind(this);

  this.state = {
    open: false
  }
}

closeModal() {
  this.setState({open: false})
}

openModal() {
  this.setState({open: true})
}
```

Note that all these functions are doing is defining the rules for opening and
closing the modal through the component's state.

Next add an `onClick={this.openModal}` prop to the "Learn more »" button which
will toggle the stage to open.

Then add the `Modal` with the `show` prop fed by the component's `open` state.
The `onHide={this.closeModal}` prop is used to define what happens when the user
clicks on the faded grey background behind the `Modal` or the `Modal`'s X in the top
right corner. Another common occurence with `Modal`'s is a footer bar where
`Button`s are used to convey action to take for the given `Modal`.

```
<Modal show={this.state.open} onHide={this.closeModal}>
  <Modal.Header closeButton>
    <Modal.Title>Learn More</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    This demonstrates how to use the Modal component from React-Bootstrap
  </Modal.Body>
  <Modal.Footer>
    <Button onClick={this.closeModal}>Close</Button>
  </Modal.Footer>
</Modal>
```

## Conclusion

React-Bootstrap is a great library useful for quickly building up a web
application with styling rules well defined by the Bootstrap community. There
are many themes available that work with the Bootstrap naming scheme that also
work with React-Bootstrap. Take some time to try and use different Bootstrap
Themes and see how you can change the look and fill of this application without
changing the core logic of how it works.

Here's some popular sources for pre-built Bootstrap Themes:

- [{wrap}bootstrap](https://wrapbootstrap.com/)
- [Bootswatch](https://bootswatch.com/)
- [Start Bootstrap](http://startbootstrap.com/)
- Plus many more available, you just need to search for them!
